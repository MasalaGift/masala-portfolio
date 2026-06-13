import { certifications } from "../data/certifications";
import "../styles/global.css";

export default function CertificationGrid() {
  const handleCardClick = (link?: string) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="container section">
      <h2 className="section-title">Certifications</h2>

      <div className="grid grid-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cert-card"
            onClick={() => handleCardClick(cert.link)}
            style={{ cursor: cert.link && cert.link !== "#" ? "pointer" : "default" }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/placeholder-cert.png";
              }}
            />
            <h3>{cert.title}</h3>
            <p className="cert-meta">{cert.issuer} • {cert.date}</p>
            
            {/* Credential ID (if exists) */}
            {cert.credentialId && (
              <p className="credential-id" style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.25rem" }}>
                ID: {cert.credentialId}
              </p>
            )}
            
            <div className="skill-tags">
              {cert.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}