import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/global.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>Project not found</div>;
  }

  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h1 className="section-title">{project.title}</h1>

      {/* Role badge */}
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

      {/* Long description */}
      <p style={{ color: "#94a3b8", lineHeight: 1.6, marginBottom: "1.5rem" }}>
        {project.longDescription || project.description}
      </p>

      {/* Contributions */}
      {project.contributions && project.contributions.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#38bdf8", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            My Contributions
          </h2>
          <ul style={{ paddingLeft: "1.2rem", color: "#cbd5e1" }}>
            {project.contributions.map((contrib, idx) => (
              <li key={idx} style={{ marginBottom: "0.4rem" }}>{contrib}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Screenshots grid */}
      {project.screenshots && project.screenshots.length > 0 && (
        <>
          <h2 style={{ color: "#38bdf8", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Screenshots
          </h2>
          <div className="grid grid-2" style={{ marginBottom: "1.5rem", gap: "1rem" }}>
            {project.screenshots.map((img, i) => (
              <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} style={{ width: "100%", borderRadius: "8px" }} />
            ))}
          </div>
        </>
      )}

      {/* Technologies */}
      <h2 style={{ color: "#38bdf8", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        Technologies
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {project.tech.map((t) => (
          <span key={t} className="btn" style={{ background: "#1e293b", color: "#e2e8f0", padding: "0.3rem 0.8rem" }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.demo || project.github) && (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
      )}
    </div>
  );
}