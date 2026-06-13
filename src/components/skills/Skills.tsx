import "../../styles/global.css";

const skills = {
  "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express", "Spring Boot", "Java", "Python"],
  "Mobile": ["React Native"],
  "Databases": ["PostgreSQL", "MySQL"],
  "Deployment & Tools": ["Vercel", "Render", "GitHub Pages", "Git", "GitHub", "Postman"],
  "UI/UX & Agile Tools": ["Figma", "Trello", "Jira"],
  "Core Concepts": ["REST APIs", "JWT Authentication", "SDLC", "Agile Methodologies"]
};

export default function Skills() {
  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h2 className="section-title">Skills & Tools</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: 24 }}>
          <h3 style={{ color: "#38bdf8", textTransform: "capitalize", marginBottom: 12 }}>
            {category}
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {items.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#1e293b",
                  padding: "6px 12px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#e2e8f0"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}