import "../../styles/global.css";

export default function About() {
  return (
    <section className="container section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I'm a <strong>Full-Stack Software Developer</strong> with hands‑on industry experience
          building web and mobile applications using the <strong>PERN stack</strong> 
          (PostgreSQL, Express, React, Node.js) during my internship. 
          I also independently develop REST APIs with <strong>Spring Boot</strong> (Java) 
          to strengthen my backend expertise.
        </p>
        <p>
          During my internship at <strong>mLab Southern Africa</strong>, I worked in a professional <strong>Agile environment</strong>,
          collaborating with developers, designers, and project managers. I used <strong>Trello</strong> for task tracking,
          implemented UI from <strong>Figma</strong> designs, and contributed to the full SDLC – from sprint planning to deployment.
        </p>
        <p>
          I've deployed applications on <strong>Vercel, Render, and GitHub Pages</strong>, built REST APIs (Node.js/Express and Spring Boot), 
          and I'm continuously learning (IBM certifications, Python basics). I'm passionate about clean code, responsive design,
          and delivering real value.
        </p>
      </div>
    </section>
  );
}