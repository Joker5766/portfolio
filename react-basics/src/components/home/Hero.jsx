// src/components/home/Hero.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, staggerContainer, textReveal } from "../../utils/animations";
import me from "../../assets/me.webp";

const Hero = () => {
  const { scrollY } = useScroll();
  // Smoother transition: extended range from 500 to 700px
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const scale = useTransform(scrollY, [0, 700], [1, 0.95]);
  const y = useTransform(scrollY, [0, 700], [0, 100]);

  return (
    <section className="sticky top-0 h-screen z-0 flex items-center justify-center overflow-hidden bg-[#050505]">

      {/* ===== DYNAMIC MESH BACKGROUND ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] animate-pulse delay-1000" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, y }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full"
      >
        {/* ================= TEXT ================= */}
        <div className="relative z-10 max-w-2xl">
          <motion.p
            variants={fadeUp}
            className="
              mb-4 sm:mb-6
              inline-flex flex-wrap items-center gap-3
              text-xs sm:text-sm
              uppercase
              tracking-[0.2em] sm:tracking-[0.3em]
              text-green-400/80 font-medium
            "
          >
            <span>Pranav Chavan</span>
            <span aria-hidden className="h-0.5 w-6 bg-green-500/50"></span>
            <span className="text-gray-400">Android Developer</span>
          </motion.p>

          <motion.h1
            variants={textReveal}
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl mb-6"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Reliable Systems
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-gray-400 font-light"
          >
            I build Android applications that prioritize clean architecture,
            predictable state management, and long-term maintainability.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* ================= PORTRAIT / VISUAL ================= */}
        <motion.div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 mr-[-50px] sm:mr-[-100px] lg:mr-[-100px]"
          style={{ opacity: 0.8 }}
        >
          {/* Abstract circular representation of 'System' instead of just a photo */}
          <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
            <div className="absolute inset-0 border border-green-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

            <motion.img
              src={me}
              alt="Pranav Chavan"
              className="absolute inset-0 m-auto w-[200px] sm:w-[320px] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;