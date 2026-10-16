import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function CaseStudies() {
  return (
    <section className="case-studies-section" id="work">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <div>
            <span className="section-number">
              02 / SELECTED WORK
            </span>

            <h2>
              A few things I've
              <br />
              <em>worked on.</em>
            </h2>
          </div>

          <p>
            From paid campaigns to organic growth and marketing
            systems, here's a look at the work behind the numbers.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="case-studies-footer">
          <p>
            Different challenges. Same approach: figure out what
            matters, get to work, and measure what happens.
          </p>
        </div>
      </div>
    </section>
  );
}