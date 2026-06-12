import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "Track job applications, interviews and progress.",
    type: "fullstack",
    tech: ["React", "Node.js", "PostgreSQL"],
    screenshots: ["/screenshots/jobs/1.png"],
    category: "mlab",
  },
  {
    id: "shopping-list",
    title: "Shopping List App",
    description: "Full-stack shopping list with authentication.",
    type: "fullstack",
    tech: ["React", "Redux", "Express"],
    screenshots: ["/screenshots/shopping/1.png"],
    category: "mlab",
  },
  {
    id: "weather",
    title: "Weather App",
    description: "Real-time weather using API integration.",
    type: "web",
    tech: ["React", "TypeScript", "API"],
    screenshots: ["/screenshots/weather/1.png"],
    category: "mlab",
  },
  {
    id: "wealthtrack",
    title: "WealthTrack Backend",
    description: "Finance API with authentication.",
    type: "backend",
    tech: ["Spring Boot", "Java", "JWT"],
    screenshots: ["/screenshots/wealth/1.png"],
    category: "personal",
  }
];