export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-intro">
          <span className="intro-line"></span>
          <p>HI, I'M MACRINE. NICE TO MEET YOU.</p>
        </div>

        <h1>
          I make marketing
          <br />
          <span className="italic-text">work.</span>
          <br />
          And when things
          <br />
          break, <span className="accent-text">I fix them.</span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-description">
            <p>
              I'm Macrine. I work across paid media, growth marketing,
              and marketing operations.
            </p>

            <p>
              Some days I'm scaling campaigns. Other days I'm fixing
              tracking issues, connecting tools, or figuring out why
              a perfectly good campaign has suddenly decided to
              misbehave.
            </p>

            <p>
              I like the strategy. I like the technical stuff.
              And I especially like seeing the numbers move in
              the right direction.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                See my work <span aria-hidden="true">↗</span>
              </a>

              <a href="#about" className="text-button">
                A little about me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-decoration" aria-hidden="true">
            <div className="decorative-circle">
              <span>STRATEGY</span>
              <span>MEETS</span>
              <span>EXECUTION</span>
              <span className="decorative-arrow">↗</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <span>BASED IN NAIROBI, WORKING EVERYWHERE.</span>
        <a href="#metrics">
          SCROLL A LITTLE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}