export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-header">
          <span className="section-number">
            04 / THE PERSON BEHIND THE WORK
          </span>
        </div>

        <div className="about-grid">

          {/* LEFT COLUMN */}
          <div className="about-visual">

            <div className="about-photo-frame">
              <img
                src="/images/macrine-profile.jpg"
                alt="Macrine Jangu"
                className="about-photo"
              />
            </div>

            <div className="about-photo-caption">
              <span>MACRINE JANGU</span>
              <span>NAIROBI, KENYA ↗</span>
            </div>

            <div className="about-visual-note">
              <span className="about-note-symbol">✳</span>
              <p>
                Part strategist.
                <br />
                Part problem-solver.
                <br />
                Always curious.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="about-content">

            <span className="about-eyebrow">
              A LITTLE INTRODUCTION
            </span>

            <h2>
              Hi, I'm Macrine.
              <br />
              <em>I like figuring things out.</em>
            </h2>

            <div className="about-story">

              <p className="about-lead">
                I'm a marketing and growth professional who
                gets equally excited about a great campaign
                and a well-built system behind it.
              </p>

              <p>
                My background started in communications and
                digital marketing, where I learned how to
                understand audiences, tell better stories,
                and connect businesses with the people
                they're trying to reach.
              </p>

              <p>
                Over time, I became just as interested in
                what happens behind the scenes: the data,
                the workflows, the automation, and the
                technology that make good marketing scalable.
              </p>

              <p>
                That curiosity led me into technical
                operations and software engineering.
                Today, I bring both perspectives to my
                work, combining marketing strategy with
                the technical skills to help execute it.
              </p>

              <p>
                I enjoy projects where I can ask the
                right questions, untangle complicated
                problems, and build something that
                makes people's work a little easier.
              </p>

            </div>

            <div className="about-details">

              <div className="about-detail">
                <span>BASED IN</span>
                <strong>Nairobi, Kenya</strong>
              </div>

              <div className="about-detail">
                <span>BACKGROUND</span>
                <strong>Marketing, Growth & Tech</strong>
              </div>

              <div className="about-detail">
                <span>WORKING STYLE</span>
                <strong>Curious, Collaborative, Hands-on</strong>
              </div>

            </div>

            <div className="about-actions">
              <a
                href="mailto:macrinejangu@gmail.com"
                className="about-primary-btn"
              >
                Let's work together ↗
              </a>

              <a
                href="https://www.linkedin.com/in/jangumacrine/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-secondary-link"
              >
                Find me on LinkedIn ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}