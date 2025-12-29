// src/components/home/About.jsx

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-32 py-24 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl px-6"
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400"
        >
          About
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="mb-8 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl"
        >
          Focused on building Android apps
          <span className="text-green-500/90">
            {" "}
            that hold up in the real world
          </span>
        </motion.h2>

        {/* Content grid */}
        <div className="grid gap-10 md:grid-cols-2">
          <motion.p
            variants={fadeUp}
            className="leading-relaxed text-gray-400"
          >
            I’m{" "}
            <span className="font-medium text-white">
              Pranav Chavan
            </span>
            , a Computer Science Engineering student specializing in Android
            development. I enjoy building applications that people actually use
            ,from productivity tools to experimental augmented reality systems.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="leading-relaxed text-gray-400"
          >
            I mostly work solo, handling everything end-to-end, architecture,
            UI/UX, business logic, and deployment. My focus is clean design,
            practical features, and systems that scale without breaking.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
