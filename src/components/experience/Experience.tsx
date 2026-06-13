import "../../styles/global.css";

export default function Experience() {
  return (
    <section className="container section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-card">
        <h3>Software Development Intern</h3>
        <p className="company">mLab Southern Africa | April 2025 – March 2026</p>
        <ul>
          <li>Developed full-stack applications with React, TypeScript, Node.js, Spring Boot</li>
          <li>Built RESTful APIs and integrated PostgreSQL/MySQL databases</li>
          <li>Implemented UI components from <strong>Figma</strong> designs, ensuring pixel-perfect responsive layouts</li>
          <li>Managed tasks and sprints using <strong>Trello</strong>, participated in daily standups and retrospectives</li>
          <li>Deployed applications on <strong>Vercel, Render, and GitHub Pages</strong></li>
          <li>Used Git/GitHub for version control and collaborated via code reviews</li>
          <li>Assisted in JWT authentication, testing, debugging, and performance optimization</li>
          <li>Exposed to <strong>Python</strong> basics through IBM certification and scripting tasks</li>
        </ul>
        <p className="tech-stack">
          <strong>Environment:</strong> React, TypeScript, Node.js, Spring Boot, PostgreSQL, Vercel, Render, Figma, Trello, Git
        </p>
      </div>
    </section>
  );
}