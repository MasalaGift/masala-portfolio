import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Project } from "../types/project";
import { useNavigate } from "react-router-dom";

export default function ProjectCarousel() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const featuredProjects = projects.filter(p => p.featured === true);
  
  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  if (featuredProjects.length === 0) return null;

  return (
    <div className="container section">
      <h2 className="section-title">Featured Projects</h2>
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {featuredProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} onClick={() => openModal(project)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="btn" onClick={() => navigate("/projects")}>
          View All Projects
        </button>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
}