// src/components/home/About.jsx

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { FiCode, FiLayers, FiUser } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-32 py-20 lg:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            More than just code.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            I approach Android development from three distinct perspectives.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1: The Developer */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-colors hover:bg-white/[0.08]"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
              <FiCode size={24} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">The Engineer</h3>
            <p className="leading-relaxed text-gray-400">
              I specialize in <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>.
              My code is strictly typed, heavily modularized, and built to be read by humans.
              I don't just "make it work"—I make it robust, efficiently utilizing Android's
              lifecycle and background processing capabilities.
            </p>
          </motion.div>

          {/* Card 2: The Person */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-colors hover:bg-white/[0.08]"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
              <FiUser size={24} />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">The Person</h3>
            <p className="leading-relaxed text-gray-400 text-sm">
              Computer Science student. Design enthusiast. I bridge the gap between
              complex backend limitations and fluid user experiences.
            </p>
          </motion.div>

          {/* Card 3: The Architect */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-colors hover:bg-white/[0.08]"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
              <FiLayers size={24} />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-white">The Architect</h3>
                <p className="leading-relaxed text-gray-400">
                  Scalability isn't an afterthought. I design systems using <strong>Clean Architecture</strong> and <strong>MVVM/MVI</strong> patterns.
                  This ensures that as features grow, the codebase remains stable, testable, and easy to navigate for any team size.
                </p>
              </div>
              <div className="rounded-xl bg-black/30 border border-white/5 p-6 font-mono text-xs text-green-400/80">
                <p>data/</p>
                <p className="pl-4">├── repository/</p>
                <p className="pl-4">└── remote/</p>
                <p>domain/</p>
                <p className="pl-4">├── use_case/</p>
                <p className="pl-4">└── model/</p>
                <p>ui/</p>
                <p className="pl-4">└── components/</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
