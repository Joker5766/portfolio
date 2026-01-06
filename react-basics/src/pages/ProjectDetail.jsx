// src/pages/ProjectDetail.jsx
import { FiLayers } from "react-icons/fi";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiTool,
  FiTag,
} from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

import PageWrapper from "../components/layout/PageWrapper";
import ProjectGallery from "../components/projects/ProjectGallery";
import { projects } from "../data/projects";
import { fadeUp, staggerContainer } from "../utils/animations";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <PageWrapper>
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() =>
            navigate("/", {
              state: { restoreScroll: location.state?.scrollY ?? 0 },
            })
          }
          className="group flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/40 hover:bg-black/60"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back
        </button>
      </div>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6 py-20 md:py-32"
      >
        {/* Meta */}
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-3 text-sm uppercase tracking-widest text-gray-500"
        >
          <FiTool className="opacity-60" />
          {project.type}
          <span className="opacity-40">•</span>
          {project.role}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          {project.title}
        </motion.h1>

        {/* Overview */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400"
        >
          {project.overview}
        </motion.p>

        {/* Badges */}
        {project.badges && (
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
              >
                <FiTag className="opacity-50" />
                {badge}
              </span>
            ))}
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="my-14 md:my-20 h-px w-24 bg-white/10"
        />

        {/* Gallery */}
        <ProjectGallery media={project.media} />

        {/* Key Features — custom layout */}
        {project.features && (
          <motion.section
            variants={fadeUp}
            className="mt-20 md:mt-32"
          >
            {/* Heading */}
            <h2 className="mb-8 md:mb-10 flex items-center gap-3 text-2xl font-semibold text-white">
              <FiLayers className="opacity-70" />
              Key Capabilities
            </h2>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
              {/* Left column */}
              <div className="flex flex-col gap-6 sm:w-1/2">
                {project.features
                  .filter((_, i) => i % 2 === 0)
                  .map((feature, i) => {
                    const realIndex = i * 2;
                    const isOpen = expandedIndex === realIndex;

                    return (
                      <motion.div
                        key={realIndex}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                          layout: { duration: 0.45 },
                        }}
                        onClick={() =>
                          setExpandedIndex(isOpen ? null : realIndex)
                        }
                        className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20"
                      >
                        <span className="absolute right-5 top-5 text-xs text-white/20">
                          {String(realIndex + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm font-medium text-white">
                          {feature.title}
                        </p>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              layout
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                height: {
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                                opacity: {
                                  duration: 0.25,
                                  ease: "easeOut",
                                },
                              }}
                              style={{
                                transformOrigin: "top",
                              }}
                              className="mt-3 overflow-hidden text-sm leading-relaxed text-gray-300"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-6 sm:w-1/2">
                {project.features
                  .filter((_, i) => i % 2 === 1)
                  .map((feature, i) => {
                    const realIndex = i * 2 + 1;
                    const isOpen = expandedIndex === realIndex;

                    return (
                      <motion.div
                        key={realIndex}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                          layout: { duration: 0.45 },
                        }}
                        onClick={() =>
                          setExpandedIndex(isOpen ? null : realIndex)
                        }
                        className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20"
                      >
                        <span className="absolute right-5 top-5 text-xs text-white/20">
                          {String(realIndex + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm font-medium text-white">
                          {feature.title}
                        </p>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.p
                              layout
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                height: {
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                                opacity: {
                                  duration: 0.25,
                                  ease: "easeOut",
                                },
                              }}
                              style={{
                                transformOrigin: "top",
                              }}
                              className="mt-3 overflow-hidden text-sm leading-relaxed text-gray-300"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>


                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </motion.section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <motion.section variants={fadeUp} className="mt-20 md:mt-32 max-w-4xl">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
              <FiTool className="opacity-70" />
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-gray-300 backdrop-blur"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Actions */}
        {project.actions && (
          <motion.div variants={fadeUp} className="mt-24 md:mt-24 flex flex-wrap gap-6">
            {project.actions.map((action) => {
              let Icon = FiExternalLink;

              if (action.label.toLowerCase().includes("play")) {
                Icon = FaGooglePlay;
              } else if (action.label.toLowerCase().includes("github")) {
                Icon = FiGithub;
              }

              if (!action.url) {
                return (
                  <motion.button
                    key={action.label}
                    type="button"
                    disabled
                    className={`inline-flex cursor-not-allowed items-center gap-3 rounded-xl px-7 py-3 text-sm font-medium
        bg-white/10 text-gray-400`}
                  >
                    <Icon className="text-lg opacity-60" />
                    {action.label}
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className={`group inline-flex items-center gap-3 rounded-xl px-7 py-3 text-sm font-medium transition
      ${action.type === "primary"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.04]"
                    }`}
                >
                  <Icon className="text-lg opacity-90" />
                  {action.label}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              );

            })}
          </motion.div>
        )}
      </motion.section>
    </PageWrapper>
  );
};

export default ProjectDetail;
