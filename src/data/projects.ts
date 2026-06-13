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
    demo: "https://react-job-ap.netlify.app/",
    github: "#private",
    screenshots: ["/screenshots/jobs/1.png", "/screenshots/jobs/2.png", "/screenshots/jobs/3.png", "/screenshots/jobs/4.png", "/screenshots/jobs/5.png", "/screenshots/jobs/6.png", "/screenshots/jobs/7.png", "/screenshots/jobs/8.png"],
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
    demo: "https://react-shopping-list-frontend-fnfvtt1t5-gifts-projects-d91eda63.vercel.app",
    github: "#private",
    screenshots: ["/screenshots/shopping/1.png", "/screenshots/shopping/2.png", "/screenshots/shopping/3.png", "/screenshots/shopping/4.png", "/screenshots/shopping/5.png", "/screenshots/shopping/6.png", "/screenshots/shopping/7.png", "/screenshots/shopping/8.png", "/screenshots/shopping/9.png", "/screenshots/shopping/10.png", "/screenshots/shopping/11.png", "/screenshots/shopping/12.png", "/screenshots/shopping/13.png", "/screenshots/shopping/14.png"],
    category: "mlab",
    featured: true,
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
    demo: "https://react-weathe.netlify.app/",
    github: "#private",
    screenshots: ["/screenshots/weather/1.png", "/screenshots/weather/2.png", "/screenshots/weather/3.png", "/screenshots/weather/4.png", "/screenshots/weather/5.png", "/screenshots/weather/6.png", "/screenshots/weather/7.png", "/screenshots/weather/8.png", "/screenshots/weather/9.png"],
    category: "mlab",
    featured: true,
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
    github: "#private",
    screenshots: ["/screenshots/code/1.png", "/screenshots/code/2.png"],
    category: "mlab",
    featured: false,
    role: "Backend Developer",
    contributions: [
      "Collaborated with QA to define acceptance criteria",
      "Built REST endpoints for code review workflows",
      "Used Postman for endpoint testing and Git feature branches"
    ]
  },
  {
    id: "note-app",
    title: "React Native Note Taker",
    description: "Mobile note-taking app with categories and offline support.",
    longDescription: "React Native app with SQLite, Figma design, and Trello task management.",
    type: "mobile",
    tech: ["React Native", "SQLite", "Figma", "Trello"],
    github: "#private",
    screenshots: ["/screenshots/note/1.jpg", "/screenshots/note/2.jpg", "/screenshots/note/3.jpg", "/screenshots/note/4.jpg", "/screenshots/note/5.jpg", "/screenshots/note/6.jpg", "/screenshots/note/7.jpg", "/screenshots/note/8.jpg", "/screenshots/note/9.jpg"],
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
    id: "restaurant-app",
    title: "React Native Restaurant App",
    description: "Feature-rich restaurant app with menu browsing, order customization, and admin dashboard.",
    longDescription: "A modern, full-featured restaurant application built with React Native and Expo. Includes user authentication, shopping cart, secure checkout, order tracking, and an admin dashboard for menu and order management. Integrated with Firebase for backend services.",
    type: "mobile",
    tech: ["React Native", "TypeScript", "Firebase", "Expo", "Redux Toolkit", "Stripe"],
    github: "https://github.com/MasalaGift/react-native-restaurant-application",
    screenshots: ["/screenshots/restaurant/1.jpg", "/screenshots/restaurant/2.jpg", "/screenshots/restaurant/3.jpg", "/screenshots/restaurant/4.jpg", "/screenshots/restaurant/5.jpg", "/screenshots/restaurant/6.jpg", "/screenshots/restaurant/7.jpg", "/screenshots/restaurant/8.jpg", "/screenshots/restaurant/9.jpg", "/screenshots/restaurant/10.jpg", "/screenshots/restaurant/11.jpg", "/screenshots/restaurant/12.jpg", "/screenshots/restaurant/13.jpg", "/screenshots/restaurant/14.jpg", "/screenshots/restaurant/15.jpg", "/screenshots/restaurant/16.jpg", "/screenshots/restaurant/17.jpg", "/screenshots/restaurant/18.jpg", "/screenshots/restaurant/19.jpg"],
    category: "personal",
    featured: true,    // or false if you prefer
    role: "Full-stack Mobile Developer",
    contributions: [
      "Built complete React Native app with Expo and TypeScript",
      "Integrated Firebase authentication, Firestore, and storage",
      "Implemented shopping cart, order customization, and secure checkout",
      "Created admin dashboard with analytics, menu management, and order processing",
      "Deployed Android APK using Expo Application Services (EAS)",
      "Added dark/light mode theme and responsive design"
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
    screenshots: ["/screenshots/links/1.png", "/screenshots/links/2.png", "/screenshots/links/3.png", "/screenshots/links/4.png", "/screenshots/links/5.png", "/screenshots/links/6.png", "/screenshots/links/7.png", "/screenshots/links/8.png"],
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
    screenshots: ["/screenshots/hotel/1.png", "/screenshots/hotel/2.png", "/screenshots/hotel/3.png", "/screenshots/hotel/4.png", "/screenshots/hotel/5.png", "/screenshots/hotel/6.png", "/screenshots/hotel/7.png", "/screenshots/hotel/8.png", "/screenshots/hotel/9.png", "/screenshots/hotel/10.png", "/screenshots/hotel/11.png", "/screenshots/hotel/12.png", "/screenshots/hotel/13.png", "/screenshots/hotel/14.png", "/screenshots/hotel/15.png"],
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