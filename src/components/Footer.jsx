export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">

        <div className="footer-top">
          <span className="section-number">
            05 / LET'S CONNECT
          </span>

          <span className="footer-availability">
            <span className="availability-dot"></span>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="footer-main">
          <p className="footer-eyebrow">
            HAVE SOMETHING INTERESTING IN MIND?
          </p>

          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>

          <p className="footer-description">
            A marketing challenge, a growth opportunity,
            or something that needs a little figuring out?
            I'd love to hear about it.
          </p>

          <a
            href="mailto:macrinejangu@gmail.com"
            className="footer-email"
          >
            macrinejangu@gmail.com
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/jangumacrine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href="#work">
            Selected Work ↗
          </a>

          <a href="#about">
            About Me ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Macrine Jangu</span>

          <span>
            BUILT WITH CURIOSITY & A LITTLE CAFFEINE
          </span>

          <a href="#top">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}