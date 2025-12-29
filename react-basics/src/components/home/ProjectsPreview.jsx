// src/components/home/ProjectsPreview.jsx

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../utils/animations";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

const ProjectsPreview = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-32 py-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400"
        >
          Projects
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-12 text-3xl font-semibold text-white md:text-5xl"
        >
          Selected work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;
