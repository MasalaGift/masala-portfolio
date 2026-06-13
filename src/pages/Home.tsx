import Hero from "../components/hero/Hero";
import About from "../components/about/About";             
import Experience from "../components/experience/Experience"; 
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/skills/Skills";
import CertificationGrid from "../components/CertificationGrid";

export default function Home() {
  return (
    <>
      <div id="hero-section">
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="experience-section">
        <Experience />
      </div>
      <div id="projects-section">
        <ProjectCarousel />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
      <div id="certifications-section">
        <CertificationGrid />
      </div>
    </>
  );
}