import type { Project } from "../types/project";

export const projects: Project[] = [
  // ========== mLab Internship Projects (private repos) ==========
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "Track job applications, interviews, and progress.",
    longDescription: "Full-stack job tracking system built during mLab internship. Agile team using Trello, Figma, and deployed on Render.",
    type: "fullstack",
    tech: ["React", "Node.js", "PostgreSQL", "Render", "Figma", "Trello"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/jobs/1.png", "/screenshots/jobs/2.png", "/screenshots/jobs/3.png"],
    category: "mlab",
    featured: true,
    role: "Full-stack Developer Intern",
    contributions: [
      "Collaborated in Agile sprints using Trello for task tracking",
      "Implemented responsive UI from Figma designs",
      "Built REST API with Node.js and PostgreSQL",
      "Deployed on Render using GitHub integration",
      "Participated in daily standups and code reviews"
    ]
  },
  {
    id: "shopping-list",
    title: "Shopping List App",
    description: "Full-stack shopping list with authentication.",
    longDescription: "CRUD-based shopping list with JWT auth, Redux Toolkit, and persistent storage. mLab internship project.",
    type: "fullstack",
    tech: ["React", "Redux Toolkit", "Express", "PostgreSQL", "Vercel", "Trello"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/shopping/1.png", "/screenshots/shopping/2.png", "/screenshots/shopping/3.png"],
    category: "mlab",
    featured: false,
    role: "Frontend & API Developer",
    contributions: [
      "Managed feature tickets on Trello",
      "Implemented Redux Toolkit for state management",
      "Created Express API endpoints with JWT",
      "Deployed frontend on Vercel, backend on Render"
    ]
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather using OpenWeatherMap API.",
    longDescription: "React + TypeScript weather app with glassmorphism UI. Used Figma for design, deployed on Vercel.",
    type: "web",
    tech: ["React", "TypeScript", "REST API", "Vercel", "Figma"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/weather/1.png", "/screenshots/weather/2.png"],
    category: "mlab",
    featured: false,
    role: "Frontend Developer",
    contributions: [
      "Translated Figma designs into responsive components",
      "Integrated OpenWeatherMap API with error handling",
      "Used Git feature branches and pull requests",
      "Presented demo in sprint review"
    ]
  },
  {
    id: "code-review",
    title: "Code Review Platform",
    description: "Collaborative real-time code review system.",
    longDescription: "Backend system for code reviews using Node.js, TypeScript, and Confluence/Bitbucket integration.",
    type: "backend",
    tech: ["Node.js", "TypeScript", "Express", "Bitbucket", "Confluence"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/code/1.png", "/screenshots/code/2.png"],
    category: "mlab",
    featured: false,
    role: "Backend Developer",
    contributions: [
      "Collaborated with QA to define acceptance criteria",
      "Built REST endpoints for code review workflows",
      "Used Jira for issue tracking and Git feature branches"
    ]
  },
  {
    id: "note-app",
    title: "React Native Note Taker",
    description: "Mobile note-taking app with categories and offline support.",
    longDescription: "React Native app with SQLite, Figma design, and Trello task management.",
    type: "mobile",
    tech: ["React Native", "SQLite", "Figma", "Trello"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/note/1.png", "/screenshots/note/2.png"],
    category: "mlab",
    featured: false,
    role: "Mobile Developer Intern",
    contributions: [
      "Designed UI following Figma prototypes",
      "Implemented local database storage using SQLite",
      "Tested on multiple devices and fixed responsive bugs",
      "Tracked progress on Trello daily"
    ]
  },
  {
    id: "audio-recorder",
    title: "React Native Audio Recorder",
    description: "Mobile audio recording app.",
    longDescription: "React Native app that records and manages audio notes using device microphone.",
    type: "mobile",
    tech: ["React Native", "Expo AV", "Trello"],
    demo: "#",
    github: "#private",
    screenshots: ["/screenshots/audio/1.png"],
    category: "mlab",
    featured: false,
    role: "Mobile Developer",
    contributions: [
      "Integrated react-native-audio-recorder-player",
      "Created intuitive UI for recording and playback",
      "Managed backlog items on Trello",
      "Demonstrated working app in sprint retrospective"
    ]
  },

  // ========== Personal Projects ==========
  {
    id: "wealthtrack",
    title: "WealthTrack Backend",
    description: "Finance REST API with JWT authentication.",
    longDescription: "Spring Boot backend for personal finance management. Public repo on GitHub, deployed on Render.",
    type: "backend",
    tech: ["Java", "Spring Boot", "JWT", "PostgreSQL", "Render"],
    github: "https://github.com/MasalaGift/wealthtrack-backend",
    screenshots: ["/screenshots/wealth/1.png"],
    category: "personal",
    featured: true,
    role: "Solo Backend Developer",
    contributions: [
      "Designed database schema for users, accounts, transactions",
      "Implemented JWT-based authentication and role-based access",
      "Wrote integration tests and documented API with Swagger",
      "Deployed on Render with CI/CD from GitHub"
    ]
  },
  {
    id: "links-vault",
    title: "Links Vault",
    description: "Bookmark management web app.",
    longDescription: "React bookmark manager with drag‑and‑drop categories and LocalStorage persistence. Deployed on Vercel.",
    type: "web",
    tech: ["React", "CSS Modules", "LocalStorage", "Vercel"],
    github: "#private",
    screenshots: ["/screenshots/links/1.png"],
    category: "personal",
    featured: false,
    role: "Solo Developer",
    contributions: [
      "Designed and implemented all frontend components",
      "Added drag‑and‑drop category organisation",
      "Deployed on Vercel for live demo"
    ]
  },
  {
    id: "hotel-tango",
    title: "Hotel Tango App",
    description: "Hotel booking platform.",
    longDescription: "Full‑stack hotel booking system with OAuth, listings, and reservations. Public repo under JanKokobane.",
    type: "fullstack",
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma", "Render", "Vercel"],
    github: "https://github.com/JanKokobane/hotel-tango-app",
    screenshots: ["/screenshots/hotel/1.png"],
    category: "personal",
    featured: true,
    role: "Full-stack Contributor",
    contributions: [
      "Collaborated on frontend and backend integration",
      "Implemented OAuth authentication",
      "Designed database schema and REST API with Prisma",
      "Deployed backend on Render and frontend on Vercel"
    ]
  }
];