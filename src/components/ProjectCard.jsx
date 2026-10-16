import { useState } from "react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const caseStudyRoutes = {
  1: "#/case-studies/ecommerce-growth",
  2: "#/case-studies/paid-media-optimization",
  3: "#/case-studies/seo-growth",
  4: "#/case-studies/marketing-operations",
  5: "#/case-studies/website-growth",
};

const caseStudyUrl = caseStudyRoutes[project.id];

const hasFullCaseStudy = Boolean(caseStudyUrl);

  const detailsId = `project-details-${project.id}`;

  return (
    <article className={`project-card ${isExpanded ? "expanded" : ""}`}>

      {/* Project Header */}
      <div className="project-card-header">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-category">
          {project.category}
        </span>
      </div>

      {/* Project Content */}
      <div className="project-card-content">

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* Project Result */}
        <div className="project-result">
          <span className="project-result-value">
            {project.result}
          </span>

          <span className="project-result-label">
            {project.resultLabel}
          </span>
        </div>

        {/* Skills and Tools */}
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Expand / Collapse Button */}
      <button
        type="button"
        className="project-expand-button"
        onClick={() => setIsExpanded((previous) => !previous)}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        <span>
          {isExpanded ? "Show less" : "Explore project"}
        </span>

        <span aria-hidden="true">
          {isExpanded ? "−" : "+"}
        </span>
      </button>

      {/* Expandable Project Details */}
      <div
        id={detailsId}
        className={`project-details ${isExpanded ? "open" : ""}`}
        hidden={!isExpanded}
      >
        <div className="project-detail-block">
          <h4>The Challenge</h4>
          <p>{project.challenge}</p>
        </div>

        <div className="project-detail-block">
          <h4>The Approach</h4>
          <p>{project.approach}</p>
        </div>

        <div className="project-detail-block">
          <h4>The Outcome</h4>
          <p>{project.outcome}</p>
        </div>

        {project.note && (
          <div className="project-detail-note">
            <p>“{project.note}”</p>
          </div>
        )}
      </div>

      {/* Full Case Study Link */}
      {hasFullCaseStudy && (
        <div className="project-full-case-study">
          <a
            href={caseStudyUrl}
            className="case-study-read-link"
          >
            Read full case study
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      )}

    </article>
  );
}