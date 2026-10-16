import { useEffect } from "react";

const metrics = [
  { value: "$240K", label: "Total Advertising spend" },
  { value: "+78%", label: "Reported revenue growth" },
  { value: "5.2x", label: "Return on ad spend" },
  { value: "$32.50", label: "Cost per acquisition" },
  { value: "3.8%", label: "Conversion rate" },
  { value: "7,385", label: "Total conversions" },
];

const disciplines = [
  {
    number: "01",
    title: "Audience strategy",
    description:
      "Understanding customer intent and the different stages of the buying journey.",
  },
  {
    number: "02",
    title: "Channel allocation",
    description:
      "Evaluating advertising channels against acquisition efficiency and revenue contribution.",
  },
  {
    number: "03",
    title: "Creative optimization",
    description:
      "Using campaign performance signals to guide messaging and creative decisions.",
  },
  {
    number: "04",
    title: "Conversion optimization",
    description:
      "Looking beyond clicks to understand what turns interest into customers.",
  },
  {
    number: "05",
    title: "Performance measurement",
    description:
      "Connecting advertising spend with ROAS, acquisition costs, conversions, and revenue.",
  },
];

export default function CaseStudyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study-page" id="top">
      <div className="case-study-container">

        <a href="/" className="case-study-back">
          ← Back to portfolio
        </a>

        <header className="case-study-hero">
          <span className="case-study-eyebrow">
            CASE STUDY 01 / PAID MEDIA & E-COMMERCE
          </span>

          <h1>
            The $240K
            <br />
            <em>E-commerce Growth</em>
            <br />
            Campaign.
          </h1>

          <p className="case-study-intro">
            One startup. One person responsible for marketing
            performance. A campaign reporting $240K in
            quarterly advertising spend and 78% revenue growth.
          </p>

          <div className="case-study-meta">
            <div>
              <span>MY ROLE</span>
              <strong>Marketing & Campaign Performance Owner</strong>
            </div>

            <div>
              <span>BUSINESS</span>
              <strong>E-commerce Startup</strong>
            </div>


          </div>
        </header>

        <section className="case-study-results">
          <div className="case-study-section-heading">
            <span>01 / THE NUMBERS</span>
            <h2>Performance at a glance.</h2>
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
            Figures shown are reported in the
            campaign performance dashboard.
          </p>
        </section>

        <section className="case-study-story">
          <div className="case-study-section-heading">
            <span>02 / THE CHALLENGE</span>
            <h2>Big goals. Lean team.</h2>
          </div>

          <div className="case-study-story-content">
            <p>
              Working at a startup meant taking ownership of
              marketing performance without a large department
              to divide the responsibilities across.
            </p>

            <p>
              The challenge was to connect advertising
              investment with customer acquisition and
              revenue growth while keeping performance
              visible and measurable.
            </p>

            <p>
              My responsibility was the overall marketing
              performance of the business, making this
              an experience in both campaign accountability
              and commercial decision-making.
            </p>
          </div>
        </section>

        <section className="case-study-strategy">
          <div className="case-study-section-heading">
            <span>03 / STRATEGIC FRAMEWORK</span>
            <h2>Looking beyond the click.</h2>
          </div>

          <p className="case-study-strategy-intro">
            These five performance-marketing disciplines
            provide a framework for understanding the
            campaign results. They are not a verified
            record of individual tests or optimizations.
          </p>

          <div className="case-study-strategy-grid">
            {disciplines.map((item) => (
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

        <section className="case-study-dashboard">
          <div className="case-study-section-heading">
            <span>04 / CAMPAIGN DASHBOARD</span>
            <h2>The performance overview.</h2>
          </div>

          <p>
            An overview of reported advertising spend,
            revenue growth, acquisition efficiency,
            conversions, and channel performance for
            October–December 2023.
          </p>

          <a
            href="/images/case-studies/ecommerce-dashboard.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-image-link"
            aria-label="Open the campaign dashboard image at full size"
          >
            <img
              src="/images/case-studies/ecommerce-dashboard.jpeg"
              alt="Q4 2023 campaign dashboard showing $240K in advertising spend, 78% revenue growth, 5.2x ROAS, and other performance metrics"
              className="case-study-image"
              loading="lazy"
            />
          </a>

          <span className="case-study-image-caption">
            Q4 2023 CAMPAIGN PERFORMANCE DASHBOARD · CLICK TO ENLARGE ↗
          </span>
        </section>

        <section className="case-study-takeaway">
          <span>05 / THE TAKEAWAY</span>

          <h2>
            Good marketing isn't just about getting
            attention. It's about making that attention
            <em> count.</em>
          </h2>

          <p>
            Owning marketing performance at a startup
            reinforced the importance of connecting
            advertising activity to measurable business
            outcomes.
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