import { useEffect } from "react";

const seoMetrics = [
  { value: "+40%", label: "Organic traffic growth" },
  { value: "3 months", label: "Reporting period" },
  { value: "20+", label: "High-authority backlinks" },
  { value: "+20%", label: "Average session duration" },
  { value: "−25%", label: "Bounce rate" },
];

const seoWork = [
  {
    number: "01",
    title: "Understanding search intent",
    description:
      "Keyword research and search intent analysis helped guide content planning around what prospective visitors were looking for.",
  },
  {
    number: "02",
    title: "Building a content structure",
    description:
      "Content planning and on-page optimization supported a more organized approach to search visibility.",
  },
  {
    number: "03",
    title: "Strengthening internal linking",
    description:
      "Connecting related pages helped create clearer paths between relevant content and improve website navigation.",
  },
  {
    number: "04",
    title: "Developing backlink opportunities",
    description:
      "Link-building work contributed more than 20 high-authority backlinks.",
  },
  {
    number: "05",
    title: "Reviewing engagement",
    description:
      "Traffic and engagement metrics provided a way to assess progress beyond search visibility alone.",
  },
];

export default function SEOCaseStudyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study-page" id="top">
      <div className="case-study-container">

        <a href="/#work" className="case-study-back">
          ← Back to portfolio
        </a>

        <header className="case-study-hero">
          <span className="case-study-eyebrow">
            CASE STUDY 02 / SEO & CONTENT STRATEGY
          </span>

          <h1>
            Growing organic
            <br />
            traffic by <em>40%.</em>
          </h1>

          <p className="case-study-intro">
            Better search visibility starts with understanding
            what people need. Here's how I approached organic
            growth through content, optimization, and
            link-building at xFusion.
          </p>

          <div className="case-study-meta">
            <div>
              <span>COMPANY</span>
              <strong>xFusion</strong>
            </div>

            <div>
              <span>MY FOCUS</span>
              <strong>SEO & Content Strategy</strong>
            </div>

            <div>
              <span>RESULTS PERIOD</span>
              <strong>Three months</strong>
            </div>
          </div>
        </header>

        <section className="case-study-results">
          <div className="case-study-section-heading">
            <span>01 / THE RESULTS</span>
            <h2>More visibility. Better engagement.</h2>
          </div>

          <div className="case-study-metrics">
            {seoMetrics.map((metric) => (
              <div className="case-study-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>

          <p className="case-study-data-note">
            Performance figures are based on results reported
            in my professional experience.
          </p>
        </section>

        <section className="case-study-story">
          <div className="case-study-section-heading">
            <span>02 / THE CHALLENGE</span>
            <h2>Getting found is only the beginning.</h2>
          </div>

          <div className="case-study-story-content">
            <p>
              At xFusion, my work focused on improving
              organic search visibility and attracting
              relevant visitors through a more structured
              approach to SEO and content.
            </p>

            <p>
              But traffic wasn't the only consideration.
              Website engagement mattered too: visitors
              needed to find content that answered their
              questions and gave them a reason to stay.
            </p>
          </div>
        </section>

        <section className="case-study-strategy">
          <div className="case-study-section-heading">
            <span>03 / THE WORK</span>
            <h2>Making search work harder.</h2>
          </div>

          <div className="case-study-strategy-grid">
            {seoWork.map((item) => (
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

        <section className="case-study-takeaway">
          <span>04 / THE TAKEAWAY</span>

          <h2>
            Good SEO starts with
            <em> understanding people.</em>
          </h2>

          <p>
            The work reinforced something I believe about
            organic growth: strong results come from
            combining useful content, clear website
            structure, and consistent optimization.
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