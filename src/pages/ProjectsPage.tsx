import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import type { Project } from "../types/project";
import "../styles/global.css";

type Category = "all" | "mlab" | "personal";

export default function ProjectsPage() {
  const [category, setCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => {
    if (category === "all") return true;
    return p.category === category;
  });

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="container section">
      <h1 className="section-title">All Projects</h1>
      
      {/* Category tabs */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <button onClick={() => setCategory("all")} className={category === "all" ? "btn" : "btn-outline"} style={category !== "all" ? { background: "#334155" } : {}}>All</button>
        <button onClick={() => setCategory("mlab")} className={category === "mlab" ? "btn" : "btn-outline"} style={category !== "mlab" ? { background: "#334155" } : {}}>mLab Internship</button>
        <button onClick={() => setCategory("personal")} className={category === "personal" ? "btn" : "btn-outline"} style={category !== "personal" ? { background: "#334155" } : {}}>Personal Projects</button>
      </div>

      {/* Projects grid */}
      <div className="grid grid-3">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
        ))}
      </div>

      {filteredProjects.length === 0 && <p style={{ textAlign: "center" }}>No projects in this category.</p>}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
}