// src/data/projects.js

import lazy1 from "../assets/lazynotes/1.jpg";
import lazy2 from "../assets/lazynotes/2.jpg";
import lazy3 from "../assets/lazynotes/3.jpg";
import lazy4 from "../assets/lazynotes/4.jpg";

import go1 from "../assets/goconverter/1.jpeg";
import go2 from "../assets/goconverter/2.jpeg";
import go3 from "../assets/goconverter/3.jpeg";


export const projects = [
  {
    id: "lazynotes",
    title: "LazyNotes",
    shortTagline: "Notes & tasks, without friction.",
    type: "Android Application",
    role: "Solo Android Developer",
    status: "Play Store – Closed Testing",

    overview:
      "LazyNotes is a productivity-focused Android application designed to manage notes and tasks efficiently with rich text formatting and exact-time reminders.",

    features: [
      {
        title: "Notes & Tasks Management",
        description:
          "Create, update, and organize notes and tasks with a unified data model, reducing context switching and improving productivity.",
      },
      {
        title: "Rich Text Editor",
        description:
          "Supports formatting options like bold, alignment, colors, and font sizes to create visually structured and readable notes.",
      },
      {
        title: "Exact-Time Reminders",
        description:
          "Uses system-level scheduling to trigger precise reminders, ensuring reliability even under background restrictions.",
      },
      {
        title: "Smart Task Sections",
        description:
          "Automatically categorizes tasks into Today, Upcoming, Overdue, and Completed for better task prioritization.",
      },
      {
        title: "Light & Dark Themes",
        description:
          "Provides system-aware theming with smooth transitions for better accessibility and visual comfort.",
      },
    ],

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Room Database",
      "Coroutines",
      "ViewModel",
    ],

    media: {
      type: "android",
      screenshots: [lazy1, lazy2, lazy3, lazy4],
      video: "/videos/lazynotes-demoo.webm",
    },

    badges: ["Android App", "Play Store"],

    actions: [
      {
        label: "Get it on Play Store",
        type: "primary",
        url: "https://play.google.com/store/apps/details?id=com.jokerdev.lazynotes",
      },
    ],

    learnings: [
      "Handling exact alarms",
      "Scalable Compose UI",
      "Background work management",
    ],
  },

  {
    id: "goconvert",
    title: "GoConvert",
    shortTagline: "Fast currency conversion, even offline.",
    type: "Android Application",
    role: "Solo Developer",
    status: "Completed",

    overview:
      "GoConvert is a lightweight currency converter that supports 130+ countries and works offline after initial data fetch.",

    features: [
      {
        title: "Live Exchange Rates",
        description:
          "Fetches real-time currency rates from a REST API and updates values instantly on user input.",
      },
      {
        title: "Offline Mode",
        description:
          "Caches the latest fetched rates locally, allowing conversions even without an internet connection.",
      },
      {
        title: "Wide Currency Support",
        description:
          "Supports over 130 global currencies with fast and accurate conversions.",
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

    badges: ["Android App", "Open Source"],

    actions: [
      {
        label: "View GitHub Repository",
        type: "secondary",
        url: "https://github.com/Joker5766/GoConvert.git",
      },
    ],

    learnings: [
      "API integration",
      "Offline-first flows",
    ],
  },

  {
    id: "istylear",
    title: "IStyleAR",
    shortTagline: "Virtual clothes try-on using AR.",
    type: "Web-based AR Application",
    role: "AR Developer (Group PBL Project)",
    status: "Functional Prototype",

    overview:
      "IStyleAR is a web-based AR application that allows users to virtually try on clothes using their webcam.",

    features: [
      {
        title: "Live Webcam Try-On",
        description:
          "Streams real-time webcam input to overlay virtual clothing directly onto the user.",
      },
      {
        title: "Pose Detection",
        description:
          "Uses computer vision models to detect body landmarks and track user movement accurately.",
      },
      {
        title: "Outfit Overlay",
        description:
          "Dynamically aligns clothing assets with detected body posture for realistic visualization.",
      },
      {
        title: "Responsive UI",
        description:
          "Optimized layout and animations for smooth interaction across devices and screen sizes.",
      },
    ],

    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "React",
      "Flask",
      "Firebase",
    ],

    media: {
      type: "web",
      screenshots: [],
      video: null,
    },

    badges: ["Web Project", "Group Project"],

    actions: [
      {
        label: "Coming soon...",
        type: "primary",
        url: null,
      },
    ],

    learnings: [
      "Real-time AR pipelines",
      "Computer vision integration",
      "Team collaboration",
    ],
  },
];
