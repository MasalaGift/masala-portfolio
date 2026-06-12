import Hero from "../components/hero/Hero";
import ProjectCarousel from "../components/projects/ProjectCarousel";
import CertificationGrid from "../components/certifications/CertificationGrid";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectCarousel />
      <Skills />
      <CertificationGrid />
    </>
  );
}