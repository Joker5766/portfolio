import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

import PageWrapper from "../components/layout/PageWrapper";
import AndroidShowcase from "../components/projects/AndroidShowcase";
import ScreenshotSlider from "../components/projects/ScreenshotSlider";
import { projects } from "../data/projects";
import { fadeUp } from "../utils/animations";

const ProjectDetail = ({ isModal = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!isModal) {
      window.scrollTo(0, 0);
    }
  }, [id, isModal]);

  useEffect(() => {
    if (!project || project?.isUnderDevelopment) {
      navigate("/", { replace: true });
    }
  }, [project, navigate]);

  const handleBack = () => {
    if (isModal || location.state?.background || window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!isModal) return;

    // Lock background page scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Restore background page scroll on modal close
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModal]);

  if (!project || project.isUnderDevelopment) return null;

  if (isModal) {
    const cardRect = location.state?.cardRect;
    let initialX = 0;
    let initialY = 40;
    let initialScale = 0.85;

    if (cardRect) {
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      initialX = cardCenterX - screenCenterX;
      initialY = cardCenterY - screenCenterY;
      initialScale = Math.max(0.2, Math.min(0.45, cardRect.width / (window.innerWidth * 0.9)));
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={handleBack}
          className="absolute inset-0 bg-black/85"
        />

        {/* macOS Genie Zoom Expand & Minimize Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: initialScale, x: initialX, y: initialY }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: initialScale, x: initialX, y: initialY }}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 28,
            mass: 0.8,
          }}
          style={{ willChange: "transform, opacity", transformOrigin: "center center" }}
          className="relative z-10 flex h-[94vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-3xl border border-white/20 bg-[#0d0d0d] shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
        >
          {/* Clean Modal Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/90 px-6 py-4 backdrop-blur-xl select-none">
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
              {project.logo ? (
                <img src={project.logo} alt="" className="h-4 w-4 object-contain rounded-sm" />
              ) : project.icon ? (
                <span className="text-base">{project.icon}</span>
              ) : null}
              <span className="font-semibold text-white tracking-wide">{project.title}</span>
            </div>

            <button
              onClick={handleBack}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-400 hover:border-white/30 hover:text-white transition-colors"
            >
              Minimize (Esc)
            </button>
          </div>

          {/* Scrollable Detail Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
              
              {/* LEFT COLUMN: Title, Badges, Overview & Features */}
              <div className="lg:col-span-7 space-y-8">
                {/* Title & Badge Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                      {project.type}
                    </span>
                    {project.status && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-300">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.logo ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-neutral-800/90 p-1.5 shadow-md backdrop-blur-md overflow-hidden">
                        <img src={project.logo} alt="" className="h-full w-full object-contain rounded-xl" />
                      </div>
                    ) : project.icon ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl shadow-md backdrop-blur-md">
                        {project.icon}
                      </div>
                    ) : null}
                    <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                      {project.title}
                    </h1>
                  </div>

                  <p className="text-base text-gray-400 md:text-lg leading-relaxed font-light">
                    {project.shortTagline || project.role}
                  </p>
                </div>

                {/* Overview */}
                <section className="border-t border-white/10 pt-6">
                  <h3 className="mb-3 text-xs font-mono uppercase tracking-widest text-neutral-400">Overview</h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
                    {project.overview}
                  </p>
                </section>

                {/* Key Features */}
                {project.features && (
                  <section className="border-t border-white/10 pt-6">
                    <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">Key Features</h3>
                    <div className="grid gap-3">
                      {project.features.map((feature, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                            <FiCheckCircle className="text-emerald-400" />
                            {feature.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-gray-400 font-light">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* RIGHT COLUMN: Showcase Media (Top), Tech Stack & Links */}
              <div className="lg:col-span-5 space-y-6">
                {/* 3-Phone Video Showcase Box */}
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-3 flex justify-center shadow-2xl">
                  {project.media?.type === "android" ? (
                    <AndroidShowcase media={project.media} compact />
                  ) : project.media?.screenshots?.length > 0 ? (
                    <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-950 px-3 py-2 text-[10px] font-mono text-neutral-500">
                        <span className="h-2 w-2 rounded-full bg-neutral-600" />
                        <span className="truncate">
                          {project.actions?.find((a) => a.url?.startsWith("http"))?.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || `${project.id}.dev`}
                        </span>
                      </div>
                      <div className="relative flex-1 w-full overflow-hidden bg-neutral-950">
                        <ScreenshotSlider screenshots={project.media.screenshots} />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video w-full flex items-center justify-center bg-white/5 rounded-xl">
                      <span className="text-xs font-mono text-gray-500">Web Showcase</span>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                  <h4 className="mb-3 text-xs font-mono uppercase tracking-widest text-neutral-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {project.actions && (
                  <div className="flex flex-col gap-3">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-95 ${
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
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0a0a] px-6 pt-16 pb-12 md:px-12 md:pt-20 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-[1200px]">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col gap-6 md:mb-20"
          >
            <button
              onClick={() =>
                navigate("/", {
                  state: { restoreScroll: location.state?.scrollY ?? 0 }
                })
              }
              className="group flex w-fit items-center gap-2 text-sm font-medium text-gray-400 hover:text-white"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-400">
                  {project.type}
                </span>
                {project.status && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                {project.logo ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-neutral-800/90 p-1.5 shadow-md backdrop-blur-md overflow-hidden">
                    <img src={project.logo} alt="" className="h-full w-full object-contain rounded-xl" />
                  </div>
                ) : project.icon ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl shadow-md backdrop-blur-md">
                    {project.icon}
                  </div>
                ) : null}
                <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </div>

              <p className="max-w-2xl text-base text-gray-400 md:text-lg">
                {project.shortTagline || project.role}
              </p>
            </div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-16 md:space-y-24">

              {/* Overview */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="mb-4 text-lg font-bold text-white">Overview</h3>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  {project.overview}
                </p>
              </motion.section>

              {/* Mobile Video Preview */}
              <div className="block lg:hidden">
                <motion.div
                  className="overflow-hidden rounded-2xl border border-white/10 bg-black"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {project.media?.type === "android" ? (
                    <div className="flex justify-center py-8 bg-gradient-to-b from-white/5 to-transparent">
                      <AndroidShowcase media={project.media} compact />
                    </div>
                  ) : project.media?.screenshots?.length > 0 ? (
                    <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-950 px-3 py-2 text-[10px] font-mono text-neutral-500">
                        <span className="h-2 w-2 rounded-full bg-neutral-600" />
                        <span className="truncate">
                          {project.actions?.find((a) => a.url?.startsWith("http"))?.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || `${project.id}.dev`}
                        </span>
                      </div>
                      <div className="relative flex-1 w-full overflow-hidden bg-neutral-950">
                        <ScreenshotSlider screenshots={project.media.screenshots} />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-white/5">
                      <p className="text-sm text-gray-500">Preview not available</p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Key Features */}
              {project.features && (
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="mb-6 text-lg font-bold text-white">Key Features</h3>
                  <div className="grid gap-3">
                    {project.features.map((feature, i) => {
                      const isOpen = expandedIndex === i;
                      return (
                        <motion.div
                          key={i}
                          onClick={() => setExpandedIndex(isOpen ? null : i)}
                          className={`cursor-pointer overflow-hidden rounded-xl border transition-all
                            ${isOpen
                              ? "bg-white/10 border-white/20"
                              : "bg-white/5 border-white/5 hover:bg-white/[0.08]"
                            }`}
                        >
                          <div className="flex items-center justify-between p-4">
                            <h4 className="text-sm font-medium text-white">
                              {feature.title}
                            </h4>
                            <span
                              className={`text-xl text-gray-500 transition-transform ${isOpen ? "rotate-45" : ""
                                }`}
                            >
                              +
                            </span>
                          </div>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                              >
                                <p className="px-4 pb-4 text-sm leading-relaxed text-gray-400">
                                  {feature.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {/* Learnings */}
              {project.learnings && (
                <motion.section
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="mb-4 text-lg font-bold text-white">
                    What I Learned
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.learnings.map((learning, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-sm text-gray-300"
                      >
                        <FiCheckCircle className="mt-0.5 shrink-0 text-green-400" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5">
              <div className="sticky top-16 space-y-10">

                {/* Desktop Video Preview */}
                <motion.div
                  className="hidden lg:block overflow-hidden rounded-2xl border border-white/10 bg-black"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                >
                  {project.media?.type === "android" ? (
                    <div className="flex justify-center py-8 bg-gradient-to-b from-white/5 to-transparent">
                      <AndroidShowcase media={project.media} compact />
                    </div>
                  ) : project.media?.screenshots?.length > 0 ? (
                    <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-xl">
                      <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-950 px-3 py-2 text-[10px] font-mono text-neutral-500">
                        <span className="h-2 w-2 rounded-full bg-neutral-600" />
                        <span className="truncate">
                          {project.actions?.find((a) => a.url?.startsWith("http"))?.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || `${project.id}.dev`}
                        </span>
                      </div>
                      <div className="relative flex-1 w-full overflow-hidden bg-neutral-950">
                        <ScreenshotSlider screenshots={project.media.screenshots} />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-white/5">
                      <p className="text-sm text-gray-500">Preview not available</p>
                    </div>
                  )}
                </motion.div>

                {/* Metadata */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
                  <div className="mb-8 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.actions?.map((action) => {
                      let Icon = FiExternalLink;
                      if (action.label.toLowerCase().includes("play")) Icon = FaGooglePlay;
                      if (action.label.toLowerCase().includes("github")) Icon = FiGithub;

                      if (!action.url) {
                        return (
                          <div
                            key={action.label}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-sm font-bold text-gray-500"
                          >
                            <Icon className="text-lg" />
                            {action.label}
                          </div>
                        );
                      }

                      return (
                        <a
                          key={action.label}
                          href={action.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition-all hover:scale-[1.02]
                            ${action.type === "primary"
                              ? "bg-white text-black hover:bg-gray-200"
                              : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                            }`}
                        >
                          <Icon className="text-lg" />
                          {action.label}
                        </a>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetail;
