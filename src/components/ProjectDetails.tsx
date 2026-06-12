import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl">{project.title}</h1>

      <div className="grid grid-cols-2 gap-4 mt-5">
        {project.screenshots.map((img, i) => (
          <img key={i} src={img} className="rounded" />
        ))}
      </div>

      <p className="mt-4">{project.description}</p>

      <div className="mt-4 flex gap-2">
        {project.tech.map((t) => (
          <span className="bg-slate-700 px-2 py-1 rounded text-xs">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}