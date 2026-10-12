// src/components/home/Skills.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

const mobileEcosystem = [
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
  { name: "Jetpack Compose", icon: "https://cdn.simpleicons.org/android/3DDC84" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
];

const architectureSkills = [
  {
    name: "MVVM Pattern",
    customIcon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Coroutines & Flow",
    customIcon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Room & SQLite",
    customIcon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
        <path d="M4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
        <path d="M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" />
      </svg>
    ),
  },
  {
    name: "WorkManager",
    customIcon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const backendDataSkills = [
  {
    name: "REST APIs",
    customIcon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-4V6a2 2 0 0 4 0v4H6a2 2 0 0 0 0 4h4v4a2 2 0 0 0 4 0v-4h4a2 2 0 0 0 0-4z" />
      </svg>
    ),
  },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
];

const webPlatformSkills = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];

const Skills = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <section
      id="skills"
      className="relative scroll-mt-32 py-24 md:py-36 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[250px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-[1200px] px-6"
      >
        {/* Section Header */}
        <div className="relative mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <motion.div variants={fadeUp}>
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              Technical Expertise
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              My Stack
            </h2>
            <p className="mt-3 text-base md:text-lg text-neutral-400 font-light max-w-2xl">
              Technologies I use to build Android apps, backend services, and web applications.
            </p>
          </motion.div>

          {/* Top Right Handwritten Annotation */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:flex flex-col items-end pointer-events-none pr-4 pb-2"
          >
            <p className="font-serif italic text-neutral-400 text-sm tracking-wide max-w-[200px] text-right transform -rotate-2 leading-tight">
              Different tools.
              <br />
              Same goal.
              <br />
              Build something
              <br />
              meaningful.
            </p>
            <svg
              width="45"
              height="35"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-500 mt-1 stroke-current mr-6 transform rotate-12"
            >
              <path
                d="M10 5 C 25 15, 38 20, 32 35 M 32 35 L 24 30 M 32 35 L 36 26"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* SYSTEM DIAGRAM STACK MATRIX WITH VISIBLE CONNECTING LINES */}
        <div className="relative">

          {/* ROW 1: MOBILE ECOSYSTEM (LEFT) | CORE HUB (CENTER) | ARCHITECTURE (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">

            {/* Container 1: Mobile Ecosystem */}
            <motion.div
              variants={fadeUp}
              onMouseEnter={() => setHoveredBox("mobile")}
              onMouseLeave={() => setHoveredBox(null)}
              className={`lg:col-span-4 relative rounded-2xl border border-dashed bg-neutral-950/70 p-6 md:p-8 pt-9 md:pt-10 backdrop-blur-xl shadow-lg transition-all duration-300 group flex flex-col justify-center ${
                hoveredBox === "mobile" || hoveredBox === "core"
                  ? "border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  : "border-white/20"
              }`}
            >
              {/* Category Pill Badge sitting directly ON the top border */}
              <div className="absolute -top-3.5 left-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#0a0a0a] px-3.5 py-0.5 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold z-20 shadow-md">
                MOBILE ECOSYSTEM
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {mobileEcosystem.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-neutral-900/90 hover:border-emerald-500/40 hover:bg-neutral-900 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 transition-transform">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow" />
                    </div>
                    <h4 className="text-xs font-semibold text-white group-hover/item:text-emerald-400 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Connector to Core */}
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 z-20 overflow-hidden">
                {(hoveredBox === "mobile" || hoveredBox === "core") && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full bg-emerald-400 shadow-[0_0_10px_#10b981] origin-right relative"
                  >
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      className="w-4 h-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
                    />
                  </motion.div>
                )}
              </div>

              <div className="hidden lg:block absolute -right-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] z-30" />
            </motion.div>

            {/* CENTRAL CORE HUB: MOBILE & SOFTWARE DEVELOPMENT */}
            <motion.div
              variants={fadeUp}
              onMouseEnter={() => setHoveredBox("core")}
              onMouseLeave={() => setHoveredBox(null)}
              className="lg:col-span-4 relative rounded-2xl border-2 border-emerald-500/60 bg-neutral-950 p-8 md:p-10 text-center shadow-[0_0_40px_rgba(16,185,129,0.22)] backdrop-blur-2xl flex flex-col items-center justify-center z-20 group min-h-[260px] cursor-pointer"
            >
              {/* TOP BADGE SITTING ON TOP BORDER */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-emerald-500/80 bg-[#0a0a0a] px-4 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-400 shadow-md z-30">
                CORE FOCUS
              </div>

              {/* Mobile Device Icon */}
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
                  <path d="M12 18h.01" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Mobile & Software
                <br />
                Development
              </h3>
            </motion.div>

            {/* Container 2: Architecture */}
            <motion.div
              variants={fadeUp}
              onMouseEnter={() => setHoveredBox("arch")}
              onMouseLeave={() => setHoveredBox(null)}
              className={`lg:col-span-4 relative rounded-2xl border border-dashed bg-neutral-950/70 p-6 md:p-8 pt-9 md:pt-10 backdrop-blur-xl shadow-lg transition-all duration-300 group flex flex-col justify-center ${
                hoveredBox === "arch" || hoveredBox === "core"
                  ? "border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  : "border-white/20"
              }`}
            >
              {/* Category Pill Badge sitting directly ON the top border */}
              <div className="absolute -top-3.5 left-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#0a0a0a] px-3.5 py-0.5 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold z-20 shadow-md">
                ARCHITECTURE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {architectureSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-neutral-900/90 hover:border-emerald-500/40 hover:bg-neutral-900 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 transition-transform">
                      {skill.customIcon}
                    </div>
                    <h4 className="text-xs font-semibold text-white group-hover/item:text-emerald-400 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Connector to Core */}
              <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 z-20 overflow-hidden">
                {(hoveredBox === "arch" || hoveredBox === "core") && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full bg-emerald-400 shadow-[0_0_10px_#10b981] origin-left relative"
                  >
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      className="w-4 h-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
                    />
                  </motion.div>
                )}
              </div>

              <div className="hidden lg:block absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] z-30" />
            </motion.div>
          </div>

          {/* Connections from Core to Bottom Cards */}
          <div className="hidden lg:block relative h-16 w-full pointer-events-none z-20">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="0 0 1000 64"
              preserveAspectRatio="none"
            >
              {/* Core → Backend & Data Base Path (White) */}
              <path
                d="M 416 0 V 18 Q 416 32 400 32 H 250 Q 234 32 234 48 V 66"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Core → Backend & Data Progressive Green Charging Path */}
              {(hoveredBox === "backend" || hoveredBox === "core") && (
                <>
                  <motion.path
                    d="M 416 0 V 18 Q 416 32 400 32 H 250 Q 234 32 234 48 V 66"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="1000"
                    initial={{ strokeDashoffset: 1000, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 1 }}
                    exit={{ strokeDashoffset: 1000, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0px 0px 8px #10b981)" }}
                  />
                  <motion.path
                    d="M 416 0 V 18 Q 416 32 400 32 H 250 Q 234 32 234 48 V 66"
                    fill="none"
                    stroke="#a7f3d0"
                    strokeWidth="2.5"
                    strokeOpacity="0.9"
                    strokeDasharray="16 48"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -64 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    style={{ filter: "drop-shadow(0px 0px 8px #a7f3d0)" }}
                  />
                </>
              )}

              {/* Core → Web / Exploration Base Path (White) */}
              <path
                d="M 584 0 V 18 Q 584 32 600 32 H 750 Q 766 32 766 48 V 66"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Core → Web Progressive Green Charging Path */}
              {(hoveredBox === "web" || hoveredBox === "core") && (
                <>
                  <motion.path
                    d="M 584 0 V 18 Q 584 32 600 32 H 750 Q 766 32 766 48 V 66"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeOpacity="1"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="1000"
                    initial={{ strokeDashoffset: 1000, opacity: 0 }}
                    animate={{ strokeDashoffset: 0, opacity: 1 }}
                    exit={{ strokeDashoffset: 1000, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0px 0px 8px #10b981)" }}
                  />
                  <motion.path
                    d="M 584 0 V 18 Q 584 32 600 32 H 750 Q 766 32 766 48 V 66"
                    fill="none"
                    stroke="#a7f3d0"
                    strokeWidth="2.5"
                    strokeDasharray="16 48"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -64 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    style={{ filter: "drop-shadow(0px 0px 8px #a7f3d0)" }}
                  />
                </>
              )}

              {/* Connector Nodes (Always Emerald Green) */}
              <circle
                cx="234"
                cy="64"
                r="4"
                fill="#10b981"
                style={{ filter: "drop-shadow(0px 0px 6px #10b981)" }}
              />

              <circle
                cx="766"
                cy="64"
                r="4"
                fill="#10b981"
                style={{ filter: "drop-shadow(0px 0px 6px #10b981)" }}
              />
            </svg>
          </div>

          {/* ROW 2: BACKEND & DATA (LEFT) | WEB PLATFORMS (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

            {/* Container 3: Backend & Data */}
            <motion.div
              variants={fadeUp}
              onMouseEnter={() => setHoveredBox("backend")}
              onMouseLeave={() => setHoveredBox(null)}
              className={`relative rounded-2xl border border-dashed bg-neutral-950/70 p-6 md:p-8 pt-9 md:pt-10 backdrop-blur-xl shadow-lg transition-all duration-300 group ${
                hoveredBox === "backend" || hoveredBox === "core"
                  ? "border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  : "border-white/20"
              }`}
            >
              {/* Category Pill Badge sitting directly ON the top border */}
              <div className="absolute -top-3.5 left-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#0a0a0a] px-3.5 py-0.5 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold z-20 shadow-md">
                BACKEND & DATA
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {backendDataSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-neutral-900/90 hover:border-emerald-500/40 hover:bg-neutral-900 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 transition-transform">
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow" />
                      ) : (
                        skill.customIcon
                      )}
                    </div>
                    <h4 className="text-xs font-semibold text-white group-hover/item:text-emerald-400 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Container 4: Web Platforms */}
            <motion.div
              variants={fadeUp}
              onMouseEnter={() => setHoveredBox("web")}
              onMouseLeave={() => setHoveredBox(null)}
              className={`relative rounded-2xl border border-dashed bg-neutral-950/70 p-6 md:p-8 pt-9 md:pt-10 backdrop-blur-xl shadow-lg transition-all duration-300 group ${
                hoveredBox === "web" || hoveredBox === "core"
                  ? "border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                  : "border-white/20"
              }`}
            >
              {/* Category Pill Badge sitting directly ON the top border */}
              <div className="absolute -top-3.5 left-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#0a0a0a] px-3.5 py-0.5 text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold z-20 shadow-md">
                WEB PLATFORMS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {webPlatformSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.08] bg-neutral-900/90 hover:border-emerald-500/40 hover:bg-neutral-900 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-800/80 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 transition-transform">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow" />
                    </div>
                    <h4 className="text-xs font-semibold text-white group-hover/item:text-emerald-400 transition-colors leading-snug">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;