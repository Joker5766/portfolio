// src/data/projects.js

import lazy1 from "../assets/lazynotes/1.jpg";
import lazy2 from "../assets/lazynotes/2.jpg";
import lazy3 from "../assets/lazynotes/3.jpg";
import lazy4 from "../assets/lazynotes/4.jpg";

import go1 from "../assets/goconverter/1.jpeg";
import go2 from "../assets/goconverter/2.jpeg";
import go3 from "../assets/goconverter/3.jpeg";

export const allProjects = [
  {
    id: "dabbame",
    title: "DabbaMe",
    shortTagline: "Meal Subscription Platform with 500+ Play Store downloads.",
    type: "Mobile Application",
    role: "React Native Developer",
    status: "Play Store (500+ Downloads)",
    featured: true,
    disabled: true, // Temporarily disabled until screenshots/assets are added
    year: "2026",
    icon: "🍱",

    overview:
      "DabbaMe is a mobile meal subscription platform. Took over an existing codebase to execute a complete architectural redesign, optimizing core user workflows, payment/subscription business logic, and UI responsiveness for production scale.",

    features: [
      {
        title: "Complete UI & Architecture Redesign",
        description:
          "Reworked application architecture and navigation flows for high performance, smooth responsiveness, and scalability.",
      },
      {
        title: "Subscription & Meal Management",
        description:
          "Simplified daily meal selection, subscription pauses, address management, and delivery tracking workflows.",
      },
      {
        title: "Production Play Store Release",
        description:
          "Successfully deployed and maintained on the Google Play Store, surpassing 500+ active downloads.",
      },
    ],

    techStack: [
      "React Native",
      "JavaScript",
      "REST APIs",
      "Redux",
      "Mobile Architecture",
    ],

    media: {
      type: "android",
      screenshots: [],
      video: null,
    },

    badges: ["React Native", "Google Play", "500+ Downloads"],

    actions: [
      {
        label: "View on Play Store",
        type: "primary",
        url: "https://play.google.com/store/apps/details?id=com.dabbame.app",
      },
    ],

    learnings: [
      "Legacy Codebase Refactoring",
      "Production React Native Architecture",
      "App Store Deployment & Analytics",
    ],
  },

  {
    id: "axcen",
    title: "Axcen",
    shortTagline: "Developer Project Management Platform with GitHub integration.",
    type: "Full-Stack Web Platform",
    role: "Full Stack Developer",
    status: "Live Web Platform",
    featured: true,
    disabled: true, // Temporarily disabled until screenshots/assets are added
    year: "2026",
    icon: "⚡",

    overview:
      "Axcen is a developer-focused project management platform built with Next.js, React, TypeScript, and PostgreSQL. It features seamless GitHub integration, repository visualization, task tracking, and real-time team collaboration.",

    features: [
      {
        title: "GitHub Repository Analysis",
        description:
          "Connects directly to GitHub repositories to visualize code structures, track commits, and map dependencies.",
      },
      {
        title: "Developer Workflows & Task Management",
        description:
          "Kanban boards and sprint tracking tailored specifically for software development teams.",
      },
      {
        title: "PostgreSQL & Prisma Backend",
        description:
          "Type-safe relational database queries with efficient data fetching and server actions in Next.js.",
      },
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],

    media: {
      type: "web",
      screenshots: [],
      video: null,
    },

    badges: ["Next.js", "TypeScript", "PostgreSQL", "GitHub API"],

    actions: [
      {
        label: "View Live Demo",
        type: "primary",
        url: "https://axcen.vercel.app",
      },
    ],

    learnings: [
      "Next.js App Router & Server Components",
      "Prisma ORM & PostgreSQL Schema Design",
      "OAuth & GitHub API Integration",
    ],
  },

  {
    id: "lazynotes",
    title: "LazyNotes",
    shortTagline: "Notes & tasks management built with Jetpack Compose & Room.",
    type: "Android Application",
    role: "Solo Android Developer",
    status: "Live on Play Store",
    featured: true,
    year: "2025",
    icon: "📝",

    overview:
      "LazyNotes is a productivity-focused Android application designed to manage notes and tasks efficiently with MVVM architecture, rich text formatting, Room database persistence, and exact-time system reminders.",

    features: [
      {
        title: "Notes & Tasks Management",
        description:
          "Create, update, and organize notes and tasks with a unified data model, reducing context switching.",
      },
      {
        title: "Rich Text Editor & Custom Reminders",
        description:
          "Supports formatting options and exact-time system notifications even under background restrictions.",
      },
      {
        title: "Room Database & Modern Compose UI",
        description:
          "Built on MVVM architecture with 100% Jetpack Compose for fluid UI transitions.",
      },
    ],

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room Database",
      "Coroutines",
    ],

    media: {
      type: "android",
      screenshots: [lazy1, lazy2, lazy3, lazy4],
      video: "/videos/lazynotes-demoo.webm",
    },

    badges: ["Android App", "Play Store", "Jetpack Compose"],

    actions: [
      {
        label: "Get it on Play Store",
        type: "primary",
        url: "https://play.google.com/store/apps/details?id=com.jokerdev.lazynotes",
      },
    ],

    learnings: [
      "Exact Alarms & WorkManager",
      "Scalable Compose UI System",
      "MVVM & Room Local Caching",
    ],
  },

  {
    id: "katai",
    title: "Katai",
    shortTagline: "AI-powered PDF document assistant & context chat.",
    type: "Android AI Application",
    role: "Solo Android Developer",
    status: "Completed Prototype",
    featured: false,
    disabled: true, // Temporarily disabled until screenshots/assets are added
    year: "2026",
    icon: "✨",

    overview:
      "Katai is an AI-powered Android application that enables grounded conversations with uploaded PDF documents using PDFBox content extraction, Retrofit AI API integration, StateFlow, and Jetpack Compose.",

    features: [
      {
        title: "AI PDF Document Conversations",
        description:
          "Extracts text from study materials and sends context-grounded queries to AI LLM endpoints.",
      },
      {
        title: "Multi-Chat Session Management",
        description:
          "Supports multiple persistent chat sessions with session renaming, deletion, and local history.",
      },
      {
        title: "Modern Chat Experience",
        description:
          "Polished Jetpack Compose messaging UI with typing animations and smooth state handling.",
      },
    ],

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "PDFBox",
      "Retrofit",
      "MVVM",
      "Coroutines",
    ],

    media: {
      type: "android",
      screenshots: [],
      video: null,
    },

    badges: ["AI Powered", "Kotlin", "PDF Processing"],

    actions: [
      {
        label: "View Architecture",
        type: "primary",
        url: "https://github.com/Joker5766",
      },
    ],

    learnings: [
      "On-device PDF Text Extraction",
      "AI REST Integration with Retrofit",
      "StateFlow Reactive UI Patterns",
    ],
  },

  {
    id: "goconvert",
    title: "GoConvert",
    shortTagline: "Fast currency conversion supporting 130+ currencies offline.",
    type: "Android Application",
    role: "Solo Android Developer",
    status: "Open Source",
    featured: false,
    year: "2025",
    icon: "💱",

    overview:
      "GoConvert is a lightweight currency converter that supports 130+ countries and works offline after initial data fetch.",

    features: [
      {
        title: "Live Exchange Rates",
        description:
          "Fetches real-time currency rates from a REST API and updates values instantly.",
      },
      {
        title: "Offline-First Caching",
        description:
          "Caches rates locally for offline conversions anywhere.",
      },
    ],

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "REST APIs",
    ],

    media: {
      type: "android",
      screenshots: [go1, go2, go3],
      video: "/videos/goconvert-demo.webm",
    },

    badges: ["Android", "Offline First", "Open Source"],

    actions: [
      {
        label: "GitHub Repository",
        type: "secondary",
        url: "https://github.com/Joker5766/GoConvert.git",
      },
    ],

    learnings: [
      "REST API Data Fetching",
      "Offline-First Caching Logic",
    ],
  },

  {
    id: "istylear",
    title: "IStyleAR",
    shortTagline: "Virtual clothing try-on using computer vision & AR.",
    type: "Web AR Prototype",
    role: "AR Developer (Group PBL)",
    status: "Functional Prototype",
    featured: false,
    year: "2025",
    icon: "🥽",

    overview:
      "IStyleAR is a web-based AR application that allows users to virtually try on clothes using real-time webcam pose estimation.",

    features: [
      {
        title: "Live Pose Detection",
        description:
          "Uses MediaPipe and OpenCV computer vision models to detect body landmarks.",
      },
      {
        title: "Real-Time Outfit Alignment",
        description:
          "Dynamically overlays clothing assets onto detected user body posture.",
      },
    ],

    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "React",
      "Flask",
    ],

    media: {
      type: "web",
      screenshots: [],
      video: null,
    },

    badges: ["Computer Vision", "Python", "Web AR"],

    actions: [
      {
        label: "View Details",
        type: "secondary",
        url: "https://github.com/Joker5766",
      },
    ],

    learnings: [
      "Real-Time Vision Pipelines",
      "MediaPipe Pose Tracking",
    ],
  },
];

// Active projects exported across the app (excludes temporarily disabled / incomplete projects)
export const projects = allProjects.filter((project) => !project.disabled);
