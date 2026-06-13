import type { Project } from "../types/project";
import "../styles/global.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleGitHubClick = () => {
    if (project.github === "#private") {
      alert("This repository is private. If you'd like to collaborate or see the code, please contact me directly.");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener noreferrer");
    }
  };

  const handleDemoClick = () => {
    if (project.demo === "#") {
      alert("Live demo link coming soon.");
    } else if (project.demo) {
      window.open(project.demo, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>

        {project.role && (
          <span
            style={{
              display: "inline-block",
              background: "#38bdf8",
              color: "#0f172a",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.2rem 0.8rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            {project.role}
          </span>
        )}

        <p style={{ color: "#94a3b8", marginTop: "0.5rem", lineHeight: 1.5 }}>
          {project.longDescription}
        </p>

        {project.contributions && project.contributions.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ color: "#38bdf8", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              My Contributions
            </h3>
            <ul style={{ paddingLeft: "1.2rem", color: "#cbd5e1" }}>
              {project.contributions.map((contrib, idx) => (
                <li key={idx} style={{ marginBottom: "0.4rem" }}>
                  {contrib}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <h3 style={{ color: "#38bdf8", fontSize: "1.25rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>
              Screenshots
            </h3>
            <div className="grid grid-2" style={{ marginTop: 10 }}>
              {project.screenshots.map((img: string, i: number) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              ))}
            </div>
          </>
        )}

        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ color: "#38bdf8", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Technologies
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map((t: string) => (
              <span key={t} className="btn" style={{ marginRight: 0 }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {(project.demo || project.github) && (
          <div style={{ marginTop: "1.5rem", display: "flex", gap: 10, flexWrap: "wrap" }}>
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
        )}

        <button className="btn" style={{ marginTop: "1.5rem" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}