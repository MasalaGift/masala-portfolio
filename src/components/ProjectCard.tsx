import type { Project } from "../types/project";
import "../styles/projectCard.css";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const imageSrc = project.screenshots?.[0] || "/images/placeholder.png";

  const handleGitHubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.github === "#private") {
      alert("This repository is private. If you'd like to collaborate or see the code, please contact me directly.");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener noreferrer");
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.demo === "#") {
      alert("Live demo link coming soon.");
    } else if (project.demo) {
      window.open(project.demo, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="project-card">
      <img src={imageSrc} alt={project.title} />

      <div className="project-card-content">
        <h3>{project.title}</h3>

        {project.role && (
          <span className="project-role-badge">{project.role}</span>
        )}

        <p className="project-type">{project.type}</p>
        <p style={{ fontSize: "13px", marginTop: 5 }}>{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div style={{ marginTop: 10, display: "flex", gap: "10px" }}>
          {project.demo && (
            <button onClick={handleDemoClick} className="btn">
              Live Demo
            </button>
          )}
          {project.github && (
            <button onClick={handleGitHubClick} className="btn">
              GitHub
            </button>
          )}
        </div>

        <button className="btn" style={{ marginTop: 10, width: "100%" }} onClick={onClick}>
          View Details
        </button>
      </div>
    </div>
  );
}