export type ProjectType =
  | "web"
  | "mobile"
  | "backend"
  | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  demo?: string;
  github?: string;
  screenshots: string[];
  category: "mlab" | "personal";
}