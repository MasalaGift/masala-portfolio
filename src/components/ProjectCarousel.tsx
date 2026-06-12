import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export default function ProjectCarousel() {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Featured Projects</h2>

      <Swiper spaceBetween={20} slidesPerView={3}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div onClick={() => navigate(`/project/${project.id}`)}>
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}