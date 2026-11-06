import { useEffect, useState } from 'react';
import './AutomationDemo.css';

const scenarios = {
  interested: { label: 'Interested reply', reply: 'Please send pricing for our district.', category: 'Interested', exists: false },
  existing: { label: 'Existing lead', reply: 'Let’s arrange a call next week.', category: 'Interested', exists: true },
  negative: { label: 'Not interested', reply: 'We are not looking for devices.', category: 'Not Interested', exists: false },
  test: { label: 'Test event', reply: 'Test webhook payload', category: 'Interested', exists: false, test: true },
};
function getSteps(s) {
  const steps = [
    { name: 'Receive reply', tool: 'Instantly webhook', detail: 'A reply event starts the n8n workflow.', value: 'Capture the response without moving data by hand.', output: { event_type: 'reply_received', lead_email: 'alex@example.org', reply_text: s.reply } },
    { name: 'Normalise fields', tool: 'JavaScript in n8n', detail: 'Map names, email, campaign and reply category into consistent fields. Category labels come from the source event.', value: 'Give the CRM a consistent record format.', output: { first_name: 'Alex', company: 'Example District', reply_type: s.category, is_test: !!s.test } },
    { name: s.test ? 'Stop test event' : 'Filter test events', tool: 'Conditional branch', detail: s.test ? 'This test event ends before any CRM action.' : 'The event is not marked as a test, so processing continues.', value: 'Keep test events out of the sales pipeline.', output: { action: s.test ? 'stop' : 'continue', simulated: true } },
  ];
  if (s.test) return steps;
  return [...steps,
    { name: 'Find lead', tool: 'Close CRM API', detail: 'Search by email, falling back to name when email is absent.', value: 'Look for an existing record before creating another.', output: { query: 'email:alex@example.org', match_found: s.exists } },
    { name: s.exists ? 'Update existing lead' : 'Create new lead', tool: 'Close CRM API', detail: s.exists ? 'Update the matched lead with source and reply information.' : 'Build a contact payload and create a lead record.', value: s.exists ? 'Keep follow-up context with the existing lead.' : 'Make the responder visible to the sales team.', output: { action: s.exists ? 'update' : 'create', lead_id: 'demo_lead_001', source: 'Instantly', reply_type: s.category } },
    { name: 'Log reply context', tool: 'Close CRM note', detail: 'Attach a note with reply and campaign context to the lead.', value: 'Give sales the conversation context for follow-up.', output: { lead_id: 'demo_lead_001', note: s.reply, campaign: 'Example education outreach' } },
    { name: s.category === 'Interested' ? 'Notify sales' : 'Skip sales notification', tool: 'Interest filter and chat webhook', detail: s.category === 'Interested' ? 'The mapped reply category is Interested, so route a notification to sales.' : 'The reply is logged, but the interest filter skips the sales alert.', value: s.category === 'Interested' ? 'Put the response in front of the team handling next steps.' : 'Avoid sending a sales alert for an uninterested reply.', output: { notification: s.category === 'Interested' ? 'sent (simulated)' : 'skipped', reason: s.category } },
  ];
}
export default function AutomationDemo() {
  const [scenario, setScenario] = useState('interested');
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const steps = getSteps(scenarios[scenario]);
  const complete = step === steps.length - 1;
  useEffect(() => {
    if (!playing || step >= steps.length - 1) return;
    const timer = setTimeout(() => setStep(s => s + 1), 1500);
    return () => clearTimeout(timer);
  }, [playing, step, steps.length]);
  const current = steps[step];
  function reset(next = scenario) { setScenario(next); setStep(-1); setPlaying(false); }
  function run() { if (complete || step < 0) setStep(0); setPlaying(!playing || complete); }
  return <main className="case-study-page" id="top"><div className="case-study-container automation-page">
    <a href="#work" className="case-study-back">← Back to portfolio</a>
    <header className="case-study-hero"><span className="case-study-eyebrow">INTERACTIVE WORK SAMPLE / MARKETING AUTOMATION</span>
      <h1>A reply comes in.<br /><em>What happens next?</em></h1>
      <p className="case-study-intro">Explore the logic behind an Instantly to Close CRM workflow I built with n8n. Follow a reply from the inbox to a CRM record and sales notification.</p>
      <div className="demo-tags"><span>n8n</span><span>Instantly</span><span>Close CRM</span><span>JavaScript</span><span>Webhooks</span></div>
    </header>
    <section className="demo-lab" aria-labelledby="demo-title">
      <div className="demo-lab-heading"><div><span className="demo-eyebrow">THE WORKFLOW LAB</span><h2 id="demo-title">Choose a reply. Follow the flow.</h2></div><span className="demo-simulation">Simulation · fictional data</span></div>
      <p>This demo runs in your browser. It does not contact Instantly, Close CRM or a sales team.</p>
      <fieldset className="demo-scenarios"><legend>Reply scenario</legend>{Object.entries(scenarios).map(([key,s]) => <button type="button" key={key} aria-pressed={scenario === key} onClick={() => reset(key)}>{s.label}</button>)}</fieldset>
      <div className="demo-controls"><button className="demo-primary" onClick={run}>{playing && !complete ? 'Pause' : complete ? 'Run again' : step < 0 ? 'Run demo' : 'Resume'}</button><button disabled={complete} onClick={() => { setPlaying(false); setStep(s => Math.min(s + 1, steps.length - 1)); }}>Next step</button><button onClick={() => reset()}>Reset</button><span role="status" aria-live="polite">{step < 0 ? 'Ready to run' : complete ? 'Simulation complete' : `Step ${step + 1} of ${steps.length}`}</span></div>
      <div className="demo-workspace"><ol className="demo-flow" aria-label="Workflow steps">{steps.map((s,i) => <li key={s.name} className={i === step ? 'is-current' : i < step ? 'is-done' : ''}><button aria-current={i === step ? 'step' : undefined} onClick={() => { setPlaying(false); setStep(i); }}><span className="demo-node-number">{i < step ? '✓' : String(i+1).padStart(2,'0')}</span><span><strong>{s.name}</strong><small>{s.tool}</small></span><span className="demo-node-state">{i === step ? 'Viewing' : i < step ? 'Done' : ''}</span></button></li>)}</ol>
      <div className="demo-inspector" aria-live="polite" aria-atomic="true">{current ? <><span className="demo-eyebrow">STEP {step+1} / {current.tool}</span><h3>{current.name}</h3><p>{current.detail}</p><h4>Why this matters</h4><p>{current.value}</p><h4>Sample output</h4><pre>{JSON.stringify(current.output,null,2)}</pre>{complete && <p className="demo-finish">{scenarios[scenario].test ? 'Test stopped. No CRM record changed.' : scenarios[scenario].category === 'Interested' ? 'Reply captured. CRM context recorded. Sales notification simulated.' : 'Reply captured and logged. Sales notification skipped.'}</p>}</> : <><span className="demo-eyebrow">BEFORE YOU START</span><h3>From reply to follow-up.</h3><p>Select a scenario, then press Run demo or step through the workflow at your own pace. Select any node to inspect its logic.</p><h4>Example incoming reply</h4><blockquote>“{scenarios[scenario].reply}”</blockquote><p>All names, messages and CRM records here are fictional.</p></>}</div></div>
    </section>
    <section className="demo-context">
      <article>
        <span className="demo-eyebrow">PURPOSE</span>
        <h2>Give sales what they need to follow up.</h2>
        <p>
          A reply is only useful if someone follows up. I built this workflow
          at Ascend Growth Partners to give sales the context and alerts
          needed for the next step.
        </p>
        <p>
          We were building a new outbound process. I wanted replies to reach
          Close CRM without someone copying information by hand, with
          interested-reply alerts helping sales know where to focus.
        </p>
      </article>

      <article>
        <span className="demo-eyebrow">MY TECHNICAL WORK</span>
        <h2>I built the connection from reply to CRM.</h2>
        <p>
          I designed and built the workflow from scratch using n8n,
          Instantly, Close CRM, JavaScript and webhooks.
        </p>
        <p>
          The workflow receives reply events, standardises the data and
          checks for an existing lead. From there, the workflow creates
          or updates the CRM record, adds reply context and notifies
          sales when the reply is categorised as interested. A separate
          filter stops test events before they reach the CRM.
        </p>
      </article>

      <article>
        <span className="demo-eyebrow">EVIDENCE AND RESULTS</span>
        <h2>Working with real replies. Supporting real follow-up.</h2>
        <p>
          I deployed the workflow for live outbound campaigns and checked
          successful runs against the records in Close CRM.
        </p>
        <p>
          Replies reached the CRM without manual copying. Sales used the
          interested-reply alerts to follow up and confirmed the reply
          context helped them prepare for those conversations.
        </p>
        <p>
          The interactive demo above shows the process using fictional data.
        </p>
      </article>
    </section>
    <div className="case-study-end"><a href="#/case-studies/marketing-operations">Read the growth operations case study ↗</a><a href="mailto:macrinejangu@gmail.com">Discuss my work ↗</a></div>
  </div></main>;
}
