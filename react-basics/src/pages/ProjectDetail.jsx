import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

import PageWrapper from "../components/layout/PageWrapper";
import AndroidShowcase from "../components/projects/AndroidShowcase";
import { projects } from "../data/projects";
import { fadeUp } from "../utils/animations";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0a0a0a] px-6 pt-16 pb-12 md:px-12 md:pt-20 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-7xl">

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

              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

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
