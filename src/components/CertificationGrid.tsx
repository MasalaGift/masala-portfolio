import { certifications } from "../data/certifications";
import "../styles/global.css";

export default function CertificationGrid() {
  return (
    <div className="container section">
      <h2 className="section-title">Certifications</h2>

      <div className="grid grid-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
            <p className="cert-meta">{cert.issuer} • {cert.date}</p>
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