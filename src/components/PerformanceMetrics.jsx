import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  {
    value: 200,
    prefix: "$",
    suffix: "K+",
    label: "Largest monthly advertising budget managed",
    category: "PAID MEDIA",
  },
  {
    value: 34,
    prefix: "+",
    suffix: "%",
    label: "Average client ROAS improvement",
    category: "PERFORMANCE",
  },
  {
    value: 27,
    prefix: "−",
    suffix: "%",
    label: "YoY e-commerce revenue growth",
    category: "OPTIMIZATION",
  },
  {
    value: 78,
    prefix: "+",
    suffix: "%",
    label: "Year-over-year e-commerce revenue growth",
    category: "REVENUE GROWTH",
  },
  {
    value: 40,
    prefix: "+",
    suffix: "%",
    label: "Organic traffic growth in three months",
    category: "SEO",
  },
  {
    value: 55,
    prefix: "+",
    suffix: "%",
    label: "Increase in website visits",
    category: "GROWTH MARKETING",
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="metrics-section" id="metrics">
      <div className="metrics-container">

        <div className="section-intro">
          <span className="section-number">
            01 / THE NUMBERS
          </span>

          <h2>
            Some numbers I'm
            <br />
            <em>particularly fond of.</em>
          </h2>

          <p>
            Because "results-driven" sounds nice,
            but numbers tell a better story.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article
              className="metric-card"
              key={metric.category}
            >
              <span className="metric-category">
                {metric.category}
              </span>

              <div className="metric-number">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>

              <p className="metric-label">
                {metric.label}
              </p>

              <span
                className="metric-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        <p className="metrics-footnote">
          Different projects. Different challenges.
          Same obsession with making things work better.
        </p>

      </div>
    </section>
  );
}