import { useEffect } from "react";

const metrics = [
  {
    value: "+55%",
    label: "Website visits",
  },
  {
    value: "+81%",
    label: "New visitors",
  },
  {
    value: "−40%",
    label: "Bounce rate",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Understanding website performance",
    description:
      "Reviewing traffic and engagement data to identify opportunities for improving website growth.",
  },
  {
    number: "02",
    title: "Improving traffic acquisition",
    description:
      "Focusing on attracting relevant visitors through digital marketing and website visibility initiatives.",
  },
  {
    number: "03",
    title: "Strengthening the visitor experience",
    description:
      "Considering how content relevance, navigation, and the overall website experience influence visitor engagement.",
  },
  {
    number: "04",
    title: "Measuring meaningful growth",
    description:
      "Looking beyond total visits to understand how new visitor acquisition and engagement changed over time.",
  },
];

export default function WebsiteGrowthCaseStudyPage() {
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
            CASE STUDY 05 / WEBSITE GROWTH
          </span>

          <h1>
            Turning website traffic
            <br />
            <em>into growth.</em>
          </h1>

          <p className="case-study-intro">
            More visitors are great. More relevant visitors who
            actually engage with your website? Even better.
            Here's a look at the website growth work I
            contributed to at Ideas Come To Life.
          </p>

          <div className="case-study-meta">
            <div>
              <span>COMPANY</span>
              <strong>Ideas Come To Life</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Digital Growth &amp; Website Performance</strong>
            </div>

            <div>
              <span>DISCIPLINES</span>
              <strong>Acquisition, Analytics &amp; Engagement</strong>
            </div>
          </div>
        </header>

        {/* RESULTS */}
        <section className="case-study-results">
          <div className="case-study-section-heading">
            <span>01 / THE RESULTS</span>
            <h2>More traffic. More new visitors. Better engagement.</h2>
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
            Figures reflect results reported in my professional
            experience. The underlying analytics reports are
            not included in this public portfolio.
          </p>
        </section>

        {/* CHALLENGE */}
        <section className="case-study-story">
          <div className="case-study-section-heading">
            <span>02 / THE CHALLENGE</span>
            <h2>Traffic is only half the story.</h2>
          </div>

          <div className="case-study-story-content">
            <p>
              Website growth isn't just about increasing the
              number of people who land on a page. It's also
              about attracting the right audience and creating
              an experience that encourages them to explore.
            </p>

            <p>
              At Ideas Come To Life, my work focused on
              website acquisition and engagement, with the
              goal of improving both traffic volume and
              visitor quality.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="case-study-strategy">
          <div className="case-study-section-heading">
            <span>03 / THE APPROACH</span>
            <h2>Growth that goes beyond pageviews.</h2>
          </div>

          <p className="case-study-data-note">
            These areas describe the digital growth framework
            relevant to this project. They are not a verified
            record of individual experiments or changes.
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
            Getting attention matters.
            <em> Keeping it matters more.</em>
          </h2>

          <p>
            This project reflects how I think about growth:
            attracting new audiences is important, but
            understanding what happens after they arrive
            is equally valuable.
          </p>
        </section>

        {/* NAVIGATION */}
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