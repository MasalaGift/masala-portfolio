import { Project } from "../../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition">
      <img
        src={project.screenshots[0]}
        className="rounded"
      />

      <h3 className="mt-2 font-bold">{project.title}</h3>
      <p className="text-sm text-gray-400">{project.type}</p>

      <div className="flex flex-wrap gap-1 mt-2">
        {project.tech.map((t) => (
          <span className="text-xs bg-slate-700 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}