// src/data/skills.js

export const mobileEcosystem = [
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { name: "Jetpack Compose", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
];

export const architectureSkills = [
  { name: "MVVM Pattern", iconType: "mvvm" },
  { name: "Coroutines & Flow", iconType: "coroutines" },
  { name: "Room & SQLite", iconType: "room" },
  { name: "WorkManager", iconType: "workmanager" },
];

export const backendDataSkills = [
  { name: "REST APIs", iconType: "rest" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
];

export const webPlatformSkills = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

// High-level categorical overview of all skills
export const skills = {
  languages: ["Kotlin", "Java", "JavaScript", "Python"],
  mobile: ["Android", "Jetpack Compose", "React Native", "Android Studio"],
  architecture: ["MVVM Pattern", "Coroutines & Flow", "Room & SQLite", "WorkManager"],
  backend: ["REST APIs", "Firebase", "Supabase", "PostgreSQL", "MongoDB"],
  web: ["React", "Tailwind CSS", "JavaScript"],
  tools: ["Android Studio", "Git & GitHub", "VS Code", "Figma"],
};
