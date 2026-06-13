import Hero from "../components/hero/Hero";
import About from "../components/about/About";             
import Experience from "../components/experience/Experience"; 
import ProjectCarousel from "../components/ProjectCarousel";
import Skills from "../components/skills/Skills";
import CertificationGrid from "../components/CertificationGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <div id="projects-section">
        <ProjectCarousel />
      </div>
      <Skills />
      <CertificationGrid />
    </>
  );
}