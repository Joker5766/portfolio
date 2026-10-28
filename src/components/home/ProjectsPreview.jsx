// src/components/home/ProjectsPreview.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectsPreview = () => {
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Works" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Platforms" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "mobile") return project.media?.type === "android";
    if (filter === "web") return project.media?.type === "web";
    return true;
  });

  return (
    <section id="projects" className="relative scroll-mt-32 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              Selected Portfolio Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Featured Projects
            </h2>
          </div>

          {/* Filter Links */}
          <div className="flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative py-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                  filter === cat.id
                    ? "text-white font-medium"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {cat.label}
                {filter === cat.id && (
                  <motion.div
                    layoutId="activeFilterRow"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const isMobile = project.media?.type === "android";
            const firstScreenshot = project.media?.screenshots?.[0];
            const formattedNum = String(idx + 1).padStart(2, "0");
            const isDev = project.underDevelopment || project.isUnderDevelopment;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                  isDev
                    ? "border-white/[0.08] bg-neutral-900/30 hover:border-amber-500/30"
                    : "border-white/[0.08] bg-neutral-900/40 hover:border-white/30 hover:bg-neutral-900/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                }`}
              >
                <div
                  onClick={(e) => {
                    if (isDev) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    navigate(`/projects/${project.id}`, {
                      state: {
                        background: location,
                        cardRect: {
                          left: rect.left,
                          top: rect.top,
                          width: rect.width,
                          height: rect.height,
                        },
                      },
                    });
                  }}
                  className={`flex flex-col justify-between h-full w-full ${isDev ? "select-none" : "cursor-pointer"}`}
                >
                  {/* Top Info Header */}
                  <div>
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      {/* Left: Prominent Number Badge + Title */}
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-8 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-200 transition-colors shadow-sm">
                          {formattedNum}
                        </span>
                        <h3 className={`text-xl font-bold tracking-tight truncate transition-colors ${
                          isDev ? "text-neutral-200" : "text-white group-hover:text-emerald-400"
                        }`}>
                          {project.title}
                        </h3>
                      </div>

                      {/* Right: Silent & Graceful Badge */}
                      {isDev ? (
                        <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11px] font-mono text-amber-400 uppercase tracking-wider font-medium shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                          Under Development
                        </span>
                      ) : (
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-300 transition-colors uppercase tracking-wider">
                          {isMobile ? "Mobile App" : "Web Platform"}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 mb-6 line-clamp-2 font-light">
                      {project.shortTagline || project.overview}
                    </p>
                  </div>

                  {/* Media Viewport */}
                  <div className="relative mb-6 flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-4 transition-colors group-hover:border-white/30">
                    {isMobile ? (
                      /* 3-Phone Showcase Display */
                      <div className="relative flex h-full w-full items-center justify-center">
                        {/* Left Background Screen: Screenshot 1 */}
                        <div className="absolute left-1/2 -translate-x-[115%] scale-[0.8] -rotate-[12deg] opacity-60 transition-all duration-500 group-hover:-translate-x-[125%] group-hover:-rotate-[16deg] group-hover:opacity-90 z-0 pointer-events-none">
                          <div className="relative flex h-48 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-1 shadow-lg">
                            <div className="mb-1 h-1 w-6 rounded-full bg-neutral-700" />
                            <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center">
                              {project.media?.screenshots?.[0] ? (
                                <img
                                  src={project.media.screenshots[0]}
                                  alt=""
                                  className="h-full w-full object-cover object-top"
                                />
                              ) : project.media?.screenshots?.[1] ? (
                                <img
                                  src={project.media.screenshots[1]}
                                  alt=""
                                  className="h-full w-full object-cover object-top"
                                />
                              ) : (
                                <div className="h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center text-[10px] font-mono text-neutral-600 p-2 text-center">
                                  Screen 01
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Right Background Screen: Screenshot 2 */}
                        <div className="absolute left-1/2 translate-x-[15%] scale-[0.8] rotate-[12deg] opacity-60 transition-all duration-500 group-hover:translate-x-[25%] group-hover:rotate-[16deg] group-hover:opacity-90 z-0 pointer-events-none">
                          <div className="relative flex h-48 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-1 shadow-lg">
                            <div className="mb-1 h-1 w-6 rounded-full bg-neutral-700" />
                            <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center">
                              {project.media?.screenshots?.[1] ? (
                                <img
                                  src={project.media.screenshots[1]}
                                  alt=""
                                  className="h-full w-full object-cover object-top"
                                />
                              ) : project.media?.screenshots?.[0] ? (
                                <img
                                  src={project.media.screenshots[0]}
                                  alt=""
                                  className="h-full w-full object-cover object-top"
                                />
                              ) : (
                                <div className="h-full w-full bg-gradient-to-b from-neutral-900 to-neutral-950 flex items-center justify-center text-[10px] font-mono text-neutral-600 p-2 text-center">
                                  Screen 02
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Center Foreground Screen: Dedicated Logo & Title Cover */}
                        <div className="relative z-10 flex h-full max-h-52 w-32 flex-col items-center justify-center rounded-2xl border border-white/25 bg-neutral-900 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105">
                          <div className="mb-1.5 h-1 w-8 rounded-full bg-neutral-700" />
                          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-3 text-center border border-white/10 shadow-inner">
                            {/* Ambient Glow behind Logo */}
                            <div className="absolute h-20 w-20 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />

                            {/* Logo / App Icon */}
                            {project.logo ? (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-neutral-800/90 shadow-md backdrop-blur-md transition-transform group-hover:scale-110 overflow-hidden p-1.5">
                                <img
                                  src={project.logo}
                                  alt={`${project.title} logo`}
                                  className="h-full w-full object-contain rounded-xl"
                                />
                              </div>
                            ) : project.icon ? (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-neutral-800/90 text-2xl shadow-md backdrop-blur-md transition-transform group-hover:scale-110">
                                {project.icon}
                              </div>
                            ) : (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-lg font-bold shadow-md">
                                {project.title.charAt(0)}
                              </div>
                            )}

                            {/* Project Title */}
                            <span className="relative font-mono text-xs font-bold text-white leading-tight mb-1">
                              {project.title}
                            </span>

                            {/* Subtitle / Type Tag */}
                            <span className={`relative font-mono text-[9px] uppercase tracking-wider font-semibold ${
                              isDev ? "text-amber-400/90" : "text-emerald-400/80"
                            }`}>
                              {isDev ? "Under Development" : (project.type || "Mobile App")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Web Desktop Browser Frame with Backdrop Screenshot & Centered Logo */
                      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:scale-[1.02]">
                        {/* Browser Window Title Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-neutral-900/90 px-3.5 py-2 text-[10px] font-mono text-neutral-400 backdrop-blur-md z-20">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-red-500/80" />
                            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                            <span className="h-2 w-2 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950/80 px-3 py-0.5 text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="truncate text-[10px]">
                              {project.actions?.find((a) => a.url?.startsWith("http"))?.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || `${project.id}.dev`}
                            </span>
                          </div>
                          <div className="w-6" />
                        </div>

                        {/* Browser Viewport with Backdrop Screenshot and Middle Logo */}
                        <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-neutral-950">
                          {/* Real Website Screenshot Backdrop */}
                          {firstScreenshot && (
                            <img
                              src={firstScreenshot}
                              alt={project.title}
                              className="absolute inset-0 h-full w-full object-cover object-top opacity-30 filter brightness-90 transition-all duration-500 group-hover:opacity-45 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/30 pointer-events-none" />

                          {/* Center Middle Screen: Dedicated Logo & Title Cover */}
                          <div className="relative z-10 flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-neutral-900/85 px-6 py-4 text-center backdrop-blur-xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                            {/* Ambient Glow */}
                            <div className="absolute h-16 w-16 rounded-full bg-emerald-500/15 blur-xl pointer-events-none" />

                            {/* Logo */}
                            {project.logo ? (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-neutral-800/90 shadow-md backdrop-blur-md transition-transform group-hover:scale-110 overflow-hidden p-1.5">
                                <img
                                  src={project.logo}
                                  alt={`${project.title} logo`}
                                  className="h-full w-full object-contain rounded-xl"
                                />
                              </div>
                            ) : project.icon ? (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-neutral-800/90 text-2xl shadow-md backdrop-blur-md transition-transform group-hover:scale-110">
                                {project.icon}
                              </div>
                            ) : (
                              <div className="relative mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-lg font-bold shadow-md">
                                {project.title.charAt(0)}
                              </div>
                            )}

                            {/* Project Title */}
                            <span className="relative font-mono text-xs font-bold text-white leading-tight mb-1">
                              {project.title}
                            </span>

                            {/* Subtitle / Type Tag */}
                            <span className={`relative font-mono text-[9px] uppercase tracking-wider font-semibold ${
                              isDev ? "text-amber-400/90" : "text-emerald-400/90"
                            }`}>
                              {isDev ? "Under Development" : (project.type || "Web Platform")}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Pills & Actions */}
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                      {project.techStack?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
                      <span className="text-xs font-mono text-neutral-500">
                        {project.status || project.role}
                      </span>

                      {isDev ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400/80 select-none">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          <span>In Development</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition-transform group-hover:translate-x-1.5">
                          <span>Explore Case Study</span>
                          <span>→</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;