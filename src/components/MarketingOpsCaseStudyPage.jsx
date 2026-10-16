import { useEffect } from "react";

const deliverables = [
  {
    value: "2",
    label: "Ideal customer profiles developed",
  },
  {
    value: "17-day",
    label: "Outbound follow-up cadence",
  },
  {
    value: "CRM",
    label: "Pipeline architecture",
  },
  {
    value: "n8n",
    label: "Workflow automation",
  },
];

const workstreams = [
  {
    number: "01",
    title: "Defining the right audience",
    description:
      "Developing ideal customer profiles and prospect segmentation frameworks to support more focused outbound campaigns.",
  },
  {
    number: "02",
    title: "Structuring outreach",
    description:
      "Creating multi-touch outreach sequences and follow-up processes to make prospect engagement more consistent.",
  },
  {
    number: "03",
    title: "Organizing the CRM",
    description:
      "Working on Close CRM pipeline architecture, lead stages, and qualification workflows to improve operational clarity.",
  },
  {
    number: "04",
    title: "Connecting the tools",
    description:
      "Working with n8n and outbound tools to support automation and reduce repetitive manual tasks.",
  },
  {
    number: "05",
    title: "Making performance visible",
    description:
      "Developing reporting processes for outreach activity, replies, positive leads, and pipeline progress.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Prospect research",
    detail: "ICP definition and segmentation",
  },
  {
    number: "02",
    title: "Outbound campaigns",
    detail: "Targeted messaging and follow-ups",
  },
  {
    number: "03",
    title: "Lead engagement",
    detail: "Replies and qualification",
  },
  {
    number: "04",
    title: "CRM management",
    detail: "Pipeline stages and ownership",
  },
  {
    number: "05",
    title: "Reporting",
    detail: "Activity and pipeline visibility",
  },
];

export default function MarketingOpsCaseStudyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study-page" id="top">
      <div className="case-study-container">

        <a href="/#work" className="case-study-back">
          ← Back to portfolio
        </a>

        {/* HERO */}

        <header className="case-study-hero">
          <span className="case-study-eyebrow">
            CASE STUDY 03 / MARKETING OPERATIONS
          </span>

          <h1>
            Building a smarter
            <br />
            <em>outbound growth engine.</em>
          </h1>

          <p className="case-study-intro">
            Prospecting, outreach, CRM workflows,
            follow-ups, and reporting. Lots of moving
            parts. My role was to help turn them into
            a more structured growth operation.
          </p>

          <div className="case-study-meta">
            <div>
              <span>COMPANY</span>
              <strong>Ascend Growth Partners</strong>
            </div>

            <div>
              <span>MY ROLE</span>
              <strong>Growth & Technical Operations</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>CRM, Outbound & Automation</strong>
            </div>
          </div>
        </header>

        {/* DELIVERABLES */}

        <section className="case-study-results">
          <div className="case-study-section-heading">
            <span>01 / THE DELIVERABLES</span>
            <h2>Building the foundations for growth.</h2>
          </div>

          <div className="case-study-metrics">
            {deliverables.map((item) => (
              <div
                className="case-study-metric"
                key={item.label}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <p className="case-study-data-note">
            These figures describe project deliverables
            and systems work, not measured revenue or
            conversion improvements.
          </p>
        </section>

        {/* CHALLENGE */}

        <section className="case-study-story">
          <div className="case-study-section-heading">
            <span>02 / THE CHALLENGE</span>
            <h2>Growth needs a system behind it.</h2>
          </div>

          <div className="case-study-story-content">
            <p>
              Outbound growth involves more than finding
              prospects and sending messages.
            </p>

            <p>
              Teams also need clear targeting, consistent
              follow-ups, reliable CRM records, and
              visibility into what's happening across
              the pipeline.
            </p>

            <p>
              At Ascend Growth Partners, my work focused
              on developing the processes and systems
              supporting those activities.
            </p>
          </div>
        </section>

        {/* WORKSTREAMS */}

        <section className="case-study-strategy">
          <div className="case-study-section-heading">
            <span>03 / THE WORK</span>
            <h2>Connecting the moving parts.</h2>
          </div>

          <div className="case-study-strategy-grid">
            {workstreams.map((item) => (
              <article
                className="case-study-strategy-card"
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WORKFLOW */}

        <section className="marketing-ops-workflow-section">
          <div className="case-study-section-heading">
            <span>04 / PROCESS OVERVIEW</span>
            <h2>From prospect to pipeline.</h2>
          </div>

          <p className="marketing-ops-workflow-intro">
            A simplified illustration of the outbound
            process areas I worked on. This is not a
            reproduction of an internal company workflow.
          </p>

          <div className="marketing-ops-workflow">
            {workflow.map((step, index) => (
              <div
                className="marketing-ops-workflow-item"
                key={step.number}
              >
                <div className="marketing-ops-workflow-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>

                {index < workflow.length - 1 && (
                  <span
                    className="marketing-ops-workflow-arrow"
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TAKEAWAY */}

        <section className="case-study-takeaway">
          <span>05 / THE TAKEAWAY</span>

          <h2>
            Better systems make
            <em> better growth possible.</em>
          </h2>

          <p>
            This work brought together my marketing
            background and technical interests:
            understanding the commercial goal, mapping
            the process, and helping build the systems
            that support execution.
          </p>
        </section>

        <div className="case-study-end">
          <a href="/#work">← Explore more work</a>

          <a href="mailto:macrinejangu@gmail.com">
            Let's work together ↗
          </a>
        </div>

      </div>
    </main>
  );
}
