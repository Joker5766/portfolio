// src/pages/ProjectDetail.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";

import PageWrapper from "../components/layout/PageWrapper";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectNavigation from "../components/projects/ProjectNavigation";
import { projects } from "../data/projects";
import { fadeUp, staggerContainer } from "../utils/animations";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) return null;

  return (
    <PageWrapper>
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden bg-black">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${project.img || ""})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute left-6 top-6 z-50">
          <button
            onClick={() =>
              navigate("/", {
                replace: true,
                state: { restoreScroll: location.state?.scrollY ?? 0 },
              })
            }
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-black/60 hover:pr-6"
          >
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end p-6 pb-12">
          <div className="mx-auto max-w-5xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-400 backdrop-blur-md">
                  {project.type}
                </span>
                {project.badges?.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium uppercase tracking-widest text-gray-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-base text-gray-300 md:text-lg">
                {project.role}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-5xl space-y-20 px-6">

          {/* 1. VISUAL EXPERIENCE */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-white/5 bg-white/5 p-2 md:p-4 backdrop-blur-sm">
              <ProjectGallery media={project.media} />
            </div>
          </motion.section>

          {/* 2. ACTIONS & TECH STACK */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
          >
            {/* Tech Stack */}
            <div className="flex-1 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 md:w-auto md:min-w-[200px]">
              {project.actions?.map((action) => {
                let Icon = FiExternalLink;
                if (action.label.toLowerCase().includes("play")) Icon = FaGooglePlay;
                if (action.label.toLowerCase().includes("github")) Icon = FiGithub;

                const isPrimary = action.type === "primary";

                if (!action.url) {
                  return (
                    <div key={action.label} className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/5 px-6 py-3 text-sm font-medium text-gray-500 cursor-not-allowed">
                      <Icon /> {action.label}
                    </div>
                  )
                }

                return (
                  <a
                    key={action.label}
                    href={action.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex w-full items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] ${isPrimary
                        ? "bg-white text-black hover:bg-gray-200"
                        : "border border-white/20 bg-transparent text-white hover:bg-white/10"
                      }`}
                  >
                    <Icon /> {action.label}
                  </a>
                );
              })}
            </div>
          </motion.section>

          {/* 3. THE CHALLENGE */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              The Challenge
            </h2>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              {project.overview}
            </p>
          </motion.section>

          {/* 4. KEY HIGHLIGHTS (Accordion) */}
          {project.features && (
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
                Key Highlights
              </h2>
              <div className="grid gap-4">
                {project.features.map((feature, i) => {
                  const isOpen = expandedIndex === i;
                  return (
                    <motion.div
                      key={i}
                      onClick={() => setExpandedIndex(isOpen ? null : i)}
                      className={`cursor-pointer rounded-xl border transition-all duration-300 
                        ${isOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 hover:bg-white/[0.08]'}
                      `}
                    >
                      <div className="flex items-center justify-between p-4 md:p-5">
                        <h4 className="font-medium text-white">{feature.title}</h4>
                        <span className={`text-xl text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-4 md:px-5 md:pb-5 text-gray-400 text-sm leading-relaxed">
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

        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <ProjectNavigation nextProject={nextProject} />

    </PageWrapper>
  );
};

export default ProjectDetail;

