import { useEffect } from "react";

const metrics = [
  {
    value: "+34%",
    label: "Reported ROAS improvement",
  },
  {
    value: "−27%",
    label: "Reported CPA reduction",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Performance analysis",
    description:
      "Reviewing campaign performance to understand advertising efficiency and identify areas that needed attention.",
  },
  {
    number: "02",
    title: "Audience relevance",
    description:
      "Considering how audience targeting and message relevance can influence acquisition costs and campaign returns.",
  },
  {
    number: "03",
    title: "Campaign optimization",
    description:
      "Using performance insights to guide decisions about improving paid media efficiency.",
  },
  {
    number: "04",
    title: "Measurement and reporting",
    description:
      "Tracking ROAS and CPA to evaluate how effectively advertising investment supported acquisition goals.",
  },
];

export default function PaidMediaCaseStudyPage() {
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
            CASE STUDY 04 / PAID MEDIA OPTIMIZATION
          </span>

          <h1>
            Making every ad dollar
            <br />
            <em>work harder.</em>
          </h1>

          <p className="case-study-intro">
            Better advertising performance isn't always about
            spending more. For an xFusion client, my work focused
            on improving campaign efficiency and understanding
            what the performance data was telling us.
          </p>

          <div className="case-study-meta">
            <div>
              <span>AGENCY</span>
              <strong>xFusion</strong>
            </div>

            <div>
              <span>CLIENT</span>
              <strong>Confidential</strong>
            </div>

            <div>
              <span>MY ROLE</span>
              <strong>SEO &amp; Paid Ads Manager</strong>
            </div>
          </div>
        </header>

        {/* RESULTS */}
        <section className="case-study-results">
          <div className="case-study-section-heading">
            <span>01 / THE RESULTS</span>
            <h2>More return. Lower acquisition costs.</h2>
          </div>

          <div className="case-study-metrics">
            {metrics.map((metric) => (
              <div className="case-study-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <p className="case-study-data-note">
            Figures reflect reported client campaign outcomes.
            Client-identifying details and campaign-level
            reporting are not publicly disclosed.
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="case-study-story">
          <div className="case-study-section-heading">
            <span>02 / THE CHALLENGE</span>
            <h2>Efficiency matters as much as reach.</h2>
          </div>

          <div className="case-study-story-content">
            <p>
              Paid media can generate traffic and conversions,
              but the real question is whether that activity
              delivers sufficient value relative to its cost.
            </p>

            <p>
              The focus of this engagement was improving
              advertising efficiency for an xFusion client,
              with particular attention to return on ad spend
              and cost per acquisition.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="case-study-strategy">
          <div className="case-study-section-heading">
            <span>03 / THE APPROACH</span>
            <h2>Let the numbers guide the work.</h2>
          </div>

          <p className="case-study-data-note">
            The areas below describe the performance-marketing
            framework relevant to this project. They are not
            a verified record of individual campaign tests.
          </p>

          <div className="case-study-strategy-grid">
            {focusAreas.map((area) => (
              <article
                className="case-study-strategy-card"
                key={area.number}
              >
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TAKEAWAY */}
        <section className="case-study-takeaway">
          <span>04 / THE TAKEAWAY</span>

          <h2>
            The goal isn't more clicks.
            <em> It's better returns.</em>
          </h2>

          <p>
            This engagement reflects how I approach
            performance marketing: connecting campaign
            decisions to measurable business outcomes,
            rather than treating traffic or impressions
            as the finish line.
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