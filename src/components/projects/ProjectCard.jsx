// src/components/projects/ProjectCard.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const isMobile = project.media?.type === "android";
  const firstScreenshot = project.media?.screenshots?.[0];
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-neutral-900/40 p-7 transition-all duration-300 hover:border-white/25 hover:bg-neutral-900/70"
    >
      <div>
        {/* Top Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-8 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-200 transition-colors shadow-sm">
              {formattedIndex}
            </span>
            {project.icon && (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-base shadow-sm backdrop-blur-md transition-transform group-hover:scale-105">
                {project.icon}
              </div>
            )}
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors truncate">
              {project.title}
            </h3>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-300 transition-colors uppercase tracking-wider">
            {isMobile ? "Mobile App" : "Web Platform"}
          </span>
        </div>

        {/* Distinct Visual Preview Area */}
        <div className="mb-6 flex items-center justify-center rounded-xl border border-white/[0.06] bg-neutral-950/60 p-4 transition-colors group-hover:border-white/15">
          {isMobile ? (
            /* 3-Phone Showcase Display */
            <div className="relative flex h-56 w-full items-center justify-center">
              {/* Left Background Phone */}
              <div className="absolute left-1/2 -translate-x-[115%] scale-[0.8] -rotate-[12deg] opacity-50 transition-all duration-500 group-hover:-translate-x-[125%] group-hover:-rotate-[16deg] group-hover:opacity-80 z-0 pointer-events-none">
                <div className="relative flex h-48 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-1 shadow-lg">
                  <div className="mb-1 h-1 w-6 rounded-full bg-neutral-700" />
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center">
                    {project.media?.screenshots?.[1] || project.media?.screenshots?.[0] ? (
                      <img
                        src={project.media?.screenshots?.[1] || project.media?.screenshots?.[0]}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full w-full bg-emerald-950/30 flex items-center justify-center text-[10px] font-mono text-emerald-400/60 p-2 text-center">
                        {project.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Background Phone */}
              <div className="absolute left-1/2 translate-x-[15%] scale-[0.8] rotate-[12deg] opacity-50 transition-all duration-500 group-hover:translate-x-[25%] group-hover:rotate-[16deg] group-hover:opacity-80 z-0 pointer-events-none">
                <div className="relative flex h-48 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-1 shadow-lg">
                  <div className="mb-1 h-1 w-6 rounded-full bg-neutral-700" />
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center">
                    {project.media?.screenshots?.[2] || project.media?.screenshots?.[0] ? (
                      <img
                        src={project.media?.screenshots?.[2] || project.media?.screenshots?.[0]}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full w-full bg-emerald-950/30 flex items-center justify-center text-[10px] font-mono text-emerald-400/60 p-2 text-center">
                        {project.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Center Foreground Phone */}
              <div className="relative z-10 flex h-full max-h-52 w-32 flex-col items-center justify-center rounded-2xl border border-white/25 bg-neutral-900 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105">
                <div className="mb-1.5 h-1 w-8 rounded-full bg-neutral-700" />
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center">
                  {firstScreenshot ? (
                    <img
                      src={firstScreenshot}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="p-3 text-center">
                      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                        {project.title.charAt(0)}
                      </div>
                      <span className="block font-mono text-xs text-neutral-300 font-semibold">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* WEB PLATFORM: Clean Landscape Desktop Aspect Preview */
            <div className="relative flex h-36 w-full flex-col overflow-hidden rounded-lg border border-white/15 bg-neutral-900 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Minimal Web Address Bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-950 px-3 py-1.5 text-[9px] font-mono text-neutral-500">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                <span className="truncate">https://{project.id}.dev</span>
              </div>

              {/* Web Screen Area */}
              <div className="relative flex h-full w-full items-center justify-center bg-neutral-950">
                {firstScreenshot ? (
                  <img
                    src={firstScreenshot}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="p-3 text-center">
                    <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 font-mono text-xs font-bold">
                      {project.title.charAt(0)}
                    </div>
                    <span className="block font-mono text-xs text-neutral-300 font-semibold">
                      {project.title}
                    </span>
                    <span className="block text-[9px] text-neutral-500">Full-Stack Web</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <p className="mb-6 text-xs leading-relaxed text-neutral-400 line-clamp-2">
          {project.shortTagline || project.overview}
        </p>
      </div>

      {/* Bottom Area: Tech list & Link */}
      <div>
        {/* Tech Stack List */}
        <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-500 font-mono">
          {project.techStack?.slice(0, 4).map((tech, i) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="hover:text-neutral-300 transition-colors">{tech}</span>
              {i < Math.min(project.techStack.length, 4) - 1 && (
                <span className="text-neutral-700">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-[11px] font-mono text-neutral-500">
            {project.status || project.role}
          </span>

          <Link
            to={`/projects/${project.id}`}
            state={{ scrollY: window.scrollY }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white transition-all group-hover:translate-x-1"
          >
            <span>Explore</span>
            <span className="text-neutral-400 group-hover:text-white">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
