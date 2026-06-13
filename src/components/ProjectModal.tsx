import type { Project } from "../types/project";
import "../styles/global.css"; // ensure grid styles are available

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>

        {/* Role badge (if present) */}
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

        {/* Contributions (new) */}
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

        {/* SCREENSHOTS GRID */}
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

        {/* TECH STACK */}
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

        {/* LINKS */}
        {(project.demo || project.github) && (
          <div style={{ marginTop: "1.5rem", display: "flex", gap: 10, flexWrap: "wrap" }}>
            {project.demo && (
              <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.github && (
              <a className="btn" href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
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