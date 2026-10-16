const expertise = [
  {
    number: "01",
    title: "Paid Media & Performance",
    description:
      "I work across paid channels to connect campaign strategy with actual business results. From audience targeting to performance optimization, I care about what happens after someone clicks.",
    skills: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Campaign Optimization",
      "Audience Segmentation",
      "Conversion Rate Optimization",
    ],
    symbol: "↗",
  },
  {
    number: "02",
    title: "Growth Marketing & SEO",
    description:
      "Getting people to discover a business is one thing. Giving them a reason to stay is another. I bring together search, content, and growth strategy to do both.",
    skills: [
      "Technical SEO",
      "Content Strategy",
      "Keyword Research",
      "On-Page SEO",
      "Lead Generation",
      "Website Optimization",
    ],
    symbol: "✳",
  },
  {
    number: "03",
    title: "Marketing Operations & Automation",
    description:
      "I'm particularly fond of making complicated processes simpler. Whether it's a CRM workflow, an outreach sequence, or a repetitive task, I like building systems that give people their time back.",
    skills: [
      "Close CRM",
      "HubSpot",
      "n8n",
      "Marketing Automation",
      "Sales Enablement",
      "Workflow Design",
    ],
    symbol: "⌘",
  },
  {
    number: "04",
    title: "Analytics & Marketing Technology",
    description:
      "Good decisions need good data. I work with analytics, reporting, and technical tools to help teams understand what's happening, what needs fixing, and what to do next.",
    skills: [
      "Google Analytics 4",
      "Marketing Reporting",
      "Google Apps Script",
      "JavaScript",
      "Python",
      "APIs & Integrations",
    ],
    symbol: "◈",
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-container">

        <div className="expertise-header">
          <span className="section-number">
            03 / WHAT I BRING TO THE TABLE
          </span>

          <div className="expertise-heading-row">
            <h2>
              A little bit of
              <br />
              <em>everything that works.</em>
            </h2>

            <p>
              Strategy, creativity, data, and the technical
              stuff behind the scenes. I like knowing how
              the pieces fit together.
            </p>
          </div>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>

              <div className="expertise-card-top">
                <span>{item.number} / 04</span>

                <span
                  className="expertise-symbol"
                  aria-hidden="true"
                >
                  {item.symbol}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p className="expertise-description">
                {item.description}
              </p>

              <div className="expertise-skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </article>
          ))}
        </div>

        <div className="expertise-bottom">
          <p>
            The common thread? I like understanding the
            problem, figuring out what matters, and
            building something that actually helps.
          </p>
        </div>

      </div>
    </section>
  );
}