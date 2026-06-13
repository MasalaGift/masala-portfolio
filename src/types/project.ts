export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: "web" | "mobile" | "backend" | "fullstack";
  tech: string[];
  demo?: string;
  github?: string;
  screenshots: string[];
  category: "mlab" | "personal";
  role?: string;
  contributions?: string[];
  featured?: boolean;
}