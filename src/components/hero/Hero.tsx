import "../../styles/global.css";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "42px" }}>Masala Gift Ratshili</h1>

      <h2 style={{ color: "#38bdf8", marginTop: 10 }}>Full-Stack Software Developer</h2>

      <p
        style={{
          marginTop: 15,
          color: "#94a3b8",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        I build modern web, mobile, and backend systems using React, TypeScript,
        React Native, and Node.js (PERN stack). I also develop REST APIs with Spring Boot 
        as personal projects to deepen my Java backend skills. 
        Experienced in <strong>Agile teams</strong>, <strong>Vercel/Render</strong>, 
        <strong> Figma</strong>, and <strong>Trello</strong>.
        Passionate about scalable software and clean user experiences.
      </p>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button onClick={scrollToProjects} className="btn">View Projects</button>
        //<a href="/resume/masala-ratshili-cv.pdf" className="btn" download>Download CV</a>
        <a href="https://github.com/MasalaGift" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/giftratshili" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
