// src/components/projects/ProjectModal.jsx

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import AndroidShowcase from "./AndroidShowcase";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Expanded macOS Window Frame */}
        <motion.div
          layoutId={`project-card-${project.id}`}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-10 flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#0d0d0d] shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
        >
          {/* macOS Top Window Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-4 backdrop-blur-md select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500/80 transition-transform hover:scale-110"
                title="Close (Esc)"
              >
                <FiX className="text-[8px] text-black opacity-0 group-hover:opacity-100" />
              </button>
              <span className="h-3.5 w-3.5 rounded-full bg-yellow-500/80" />
              <span className="h-3.5 w-3.5 rounded-full bg-green-500/80" />
            </div>

            {/* Window Title */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              {project.logo ? (
                <img src={project.logo} alt="" className="h-4 w-4 object-contain rounded-sm" />
              ) : project.icon ? (
                <span>{project.icon}</span>
              ) : null}
              <span className="font-semibold text-white">{project.title}</span>
              <span>— Case Study</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/5 p-1.5 text-neutral-400 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FiX className="text-sm" />
            </button>
          </div>

          {/* Scrollable Window Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
            {/* Title & Tagline Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono text-emerald-400">
                  {project.type}
                </span>
                {project.status && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-mono text-neutral-300">
                    {project.status}
                  </span>
                )}
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {project.title}
              </h2>

              <p className="max-w-2xl text-base text-neutral-300 md:text-lg">
                {project.shortTagline || project.overview}
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Left Column: Overview & Features */}
              <div className="lg:col-span-7 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="mb-3 text-sm font-mono uppercase tracking-widest text-neutral-400">
                    Overview
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                    {project.overview}
                  </p>
                </div>

                {/* Key Features */}
                {project.features && (
                  <div>
                    <h3 className="mb-4 text-sm font-mono uppercase tracking-widest text-neutral-400">
                      Key Highlights
                    </h3>
                    <div className="space-y-3">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-colors hover:border-white/15"
                        >
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                            <FiCheckCircle className="text-emerald-400" />
                            {feature.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Media Preview & Actions */}
              <div className="lg:col-span-5 space-y-6">
                {/* Media Showcase */}
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 p-4 flex justify-center">
                  {project.media?.type === "android" ? (
                    <AndroidShowcase media={project.media} compact />
                  ) : (
                    <div className="w-full space-y-3">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2 text-[10px] font-mono text-neutral-500">
                        <span className="h-2 w-2 rounded-full bg-neutral-600" />
                        <span className="truncate">
                          {project.actions?.find((a) => a.url?.startsWith("http"))?.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || `${project.id}.dev`}
                        </span>
                      </div>
                      <div className="aspect-video w-full rounded-lg bg-neutral-900 flex items-center justify-center">
                        {project.media?.screenshots?.[0] ? (
                          <img
                            src={project.media.screenshots[0]}
                            alt={project.title}
                            className="h-full w-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-xs font-mono text-neutral-500">
                            Web Platform Showcase
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                {project.actions && (
                  <div className="pt-4 flex flex-col gap-3">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold transition-transform active:scale-95 ${
                          action.type === "primary"
                            ? "bg-white text-black hover:bg-neutral-200"
                            : "border border-white/20 bg-white/5 text-white hover:border-white/40"
                        }`}
                      >
                        {action.label.includes("Play Store") && <FaGooglePlay />}
                        {action.label.includes("GitHub") && <FiGithub />}
                        {!action.label.includes("Play Store") && !action.label.includes("GitHub") && (
                          <FiExternalLink />
                        )}
                        <span>{action.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
