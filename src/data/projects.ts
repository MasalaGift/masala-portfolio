import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "Track job applications, interviews, and progress.",
    longDescription:
      "A full-stack job tracking system developed during my mLab internship. Built in an Agile team using Trello for sprint planning, Figma for UI mockups, and deployed on AWS. Features include application status dashboard, interview scheduling, and analytics.",
    type: "fullstack",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Figma", "Trello"],
    demo: "https://demo-link.com",
    github: "#private",
    screenshots: ["/screenshots/jobs/1.png", "/screenshots/jobs/2.png", "/screenshots/jobs/3.png"],
    category: "mlab",
    role: "Full-stack Developer Intern",
    contributions: [
      "Collaborated with team to define user stories and tasks in Trello",
      "Implemented responsive UI from Figma designs using React",
      "Built REST API with Node.js and integrated PostgreSQL",
      "Assisted in deploying the app on AWS EC2",
      "Participated in daily standups and sprint reviews"
    ]
  },

  {
    id: "shopping-list",
    title: "Shopping List App",
    description: "Full-stack shopping list with authentication.",
    longDescription:
      "A CRUD-based shopping list application with JWT authentication, Redux Toolkit state management, and persistent backend storage. Built as part of mLab internship to demonstrate full-stack Agile development.",
    type: "web",
    tech: ["React", "Redux Toolkit", "Express", "PostgreSQL", "Trello"],
    demo: "https://demo-link.com",
    github: "#private",
    screenshots: ["/screenshots/shopping/1.png", "/screenshots/shopping/2.png", "/screenshots/shopping/3.png"],
    category: "mlab",
    role: "Frontend & API Developer",
    contributions: [
      "Managed feature tickets using Trello board",
      "Implemented Redux Toolkit for state management",
      "Created Express API endpoints with authentication",
      "Wrote unit tests and participated in code reviews"
    ]
  },

  {
    id: "weather",
    title: "Weather App",
    description: "Real-time weather using API integration.",
    longDescription:
      "A responsive weather forecasting application consuming external APIs with dynamic UI updates and location-based weather data. Designed in Figma and iterated based on sprint feedback.",
    type: "web",
    tech: ["React", "TypeScript", "REST API", "Figma"],
    demo: "https://demo-link.com",
    github: "#private",
    screenshots: ["/screenshots/weather/1.png", "/screenshots/weather/2.png"],
    category: "mlab",
    role: "Frontend Developer",
    contributions: [
      "Translated Figma designs into pixel-perfect React components",
      "Integrated OpenWeatherMap API with error handling",
      "Used Git feature branches and pull requests",
      "Presented demo in sprint review"
    ]
  },

  {
    id: "wealthtrack",
    title: "WealthTrack Backend",
    description: "Finance API with JWT authentication.",
    longDescription:
      "A secure Spring Boot REST API for personal finance tracking with authentication, transaction management, and reporting. Built independently to deepen backend skills.",
    type: "backend",
    tech: ["Java", "Spring Boot", "JWT", "PostgreSQL", "GitHub Actions"],
    github: "#private",
    screenshots: ["/screenshots/wealth/1.png"],
    category: "personal",
    role: "Solo Backend Developer",
    contributions: [
      "Designed database schema for users, accounts, transactions",
      "Implemented JWT-based authentication and role-based access",
      "Wrote integration tests and documented API with Swagger",
      "Containerized with Docker (optional deployment on AWS)"
    ]
  },

  {
    id: "code-review",
    title: "Code Review Platform",
    description: "Collaborative real-time code review system.",
    longDescription:
      "A backend system enabling developers to collaborate on code reviews in real time using structured workflows and REST APIs. Developed in an Agile team with Confluence documentation and Bitbucket version control.",
    type: "backend",
    tech: ["Node.js", "TypeScript", "Express", "Bitbucket", "Confluence"],
    github: "#private",
    screenshots: ["/screenshots/code/1.png", "/screenshots/code/2.png"],
    category: "mlab",
    role: "Backend Developer",
    contributions: [
      "Collaborated with QA to define acceptance criteria",
      "Built endpoints for creating/assigning code reviews",
      "Integrated with company SSO (simulated)",
      "Used Bitbucket for version control and Jira for issue tracking"
    ]
  },

  {
    id: "note-app",
    title: "React Native Note Taker",
    description: "Mobile note-taking application.",
    longDescription:
      "A React Native mobile application for managing notes with categories, search, and offline support. Worked with product owner to refine features in Agile sprints.",
    type: "mobile",
    tech: ["React Native", "SQLite", "Figma"],
    github: "#private",
    screenshots: ["/screenshots/note/1.png", "/screenshots/note/2.png"],
    category: "mlab",
    role: "Mobile Developer Intern",
    contributions: [
      "Designed UI following Figma prototypes",
      "Implemented local database storage using SQLite",
      "Tested on multiple devices and fixed responsiveness bugs",
      "Tracked progress on Trello and reported daily standups"
    ]
  },

  {
    id: "audio-recorder",
    title: "React Native Audio Recorder",
    description: "Mobile audio recording app.",
    longDescription:
      "A mobile application that records and manages audio notes using device microphone APIs. Built in two-week sprint, with continuous integration and feedback from mentors.",
    type: "mobile",
    tech: ["React Native", "Expo AV", "Trello"],
    github: "#private",
    screenshots: ["/screenshots/audio/1.png"],
    category: "mlab",
    role: "Mobile Developer",
    contributions: [
      "Researched and integrated react-native-audio-recorder-player",
      "Created intuitive UI for recording, playback, and renaming",
      "Managed backlog items and moved cards across Trello columns",
      "Demonstrated working app in sprint retrospective"
    ]
  },

  {
    id: "links-vault",
    title: "Links Vault",
    description: "Bookmark management web app.",
    longDescription:
      "A personal link organizer that allows users to save, categorize, and manage bookmarks efficiently. Used as a side project to explore advanced React patterns.",
    type: "web",
    tech: ["React", "LocalStorage", "CSS Modules"],
    github: "#private",
    screenshots: ["/screenshots/links/1.png"],
    category: "personal",
    role: "Solo Developer",
    contributions: [
      "Designed and implemented all frontend components",
      "Used LocalStorage for persistence without backend",
      "Implemented drag-and-drop categories for better UX",
      "Deployed on Vercel for live demo"
    ]
  },

  {
    id: "hotel-tango",
    title: "Hotel Tango App",
    description: "Hotel booking platform.",
    longDescription:
      "A hotel booking system with listings, authentication, and reservation management. Developed as a capstone-like project to simulate real-world full-stack development.",
    type: "web",
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma", "Render"],
    github: "#private",
    screenshots: ["/screenshots/hotel/1.png"],
    category: "personal",
    role: "Full-stack Developer",
    contributions: [
      "Designed database schema and REST API with Prisma",
      "Implemented user authentication and session management",
      "Built responsive hotel listing and booking UI",
      "Deployed backend on Render and frontend on Vercel"
    ]
  }
];