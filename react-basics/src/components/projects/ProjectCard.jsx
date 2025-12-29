// src/components/projects/ProjectCard.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 22,
    },
  },
};

const arrowVariants = {
  rest: {
    x: 0,
    opacity: 0.6,
  },
  hover: {
    x: [0, 6, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      whileInView="rest"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 md:p-6 backdrop-blur-xl transition-colors hover:border-white/25"
    >
      {/* Subtle surface highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative flex h-full flex-col">
        <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
          {project.type}
        </p>

        <h3 className="mb-3 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-6 md:mb-8 text-sm leading-relaxed text-gray-400">
          {project.shortTagline || project.overview}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {project.role}
          </span>

          <Link
            to={`/projects/${project.id}`}
            state={{ scrollY: window.scrollY }}
            className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <span>View case study</span>

            <motion.span
              className="inline-block"
              variants={arrowVariants}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
