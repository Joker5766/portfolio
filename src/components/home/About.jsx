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
            I enjoy building Android apps that balance functionality, clean design, and maintainable architecture.
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
            <h3 className="mb-3 text-2xl font-bold text-white">The Developer</h3>
            <p className="leading-relaxed text-gray-400">
              I primarily build Android apps using <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>.
              I enjoy creating clean, responsive interfaces and organizing projects in a way that keeps them easy to maintain and scale as features grow.
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
              Outside of development, I enjoy exploring UI design, modern app interactions, and learning through hands-on projects. I like building apps that feel simple, smooth, and practical to use.
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
                  I prefer structuring apps using patterns like <strong>MVVM</strong> and principles from <strong>Clean Architecture</strong>. Keeping code organized helps me build features more confidently and makes projects easier to extend over time.
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
