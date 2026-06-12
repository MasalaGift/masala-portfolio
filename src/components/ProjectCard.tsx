import type { Project } from "../types/project";
import "../styles/projectCard.css";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  // Fallback image if screenshot array is empty or first entry missing
  const imageSrc = project.screenshots?.[0] || "/images/placeholder.png";

  return (
    <div className="project-card">
      <img src={imageSrc} alt={project.title} />

      <div className="project-card-content">
        <h3>{project.title}</h3>

        {/* Role badge (if available) */}
        {project.role && (
          <span className="project-role-badge">{project.role}</span>
        )}

        <p className="project-type">{project.type}</p>

        <p style={{ fontSize: "13px", marginTop: 5 }}>
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {/* LINKS */}
        <div style={{ marginTop: 10, display: "flex", gap: "10px" }}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
              Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
          )}
        </div>

        <button className="btn" style={{ marginTop: 10, width: "100%" }} onClick={onClick}>
          View Details
        </button>
      </div>
    </div>
  );
}