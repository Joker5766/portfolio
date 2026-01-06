// src/components/home/Hero.jsx

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, textReveal } from "../../utils/animations";
import me from "../../assets/me.webp";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-56 md:pb-32">

      {/* ===== SUBTLE GREEN BACKGROUND WASH (FADES OUT COMPLETELY) ===== */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(34,197,94,0.08), transparent 60%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-6xl px-4 sm:px-6"
      >
        {/* ================= TEXT ================= */}
        <div className="relative z-10 max-w-xl">
          <motion.p
  variants={fadeUp}
  className="
    mb-3 sm:mb-4
    inline-flex flex-wrap items-center gap-3
    text-[10px] sm:text-sm
    uppercase
    tracking-[0.2em] sm:tracking-[0.3em]
    text-gray-400
  "
>
  <span>Pranav Chavan</span>

  <span
    aria-hidden
    className="h-3 w-px bg-gray-400/40"
  ></span>

  <span className="opacity-90">Android Developer</span>
</motion.p>


          <motion.h1
            variants={textReveal}
            className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            Building reliable
            <br />
            <span className="text-green-500/90">
              Android applications
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-gray-400"
          >
            I focus on clean architecture, predictable behavior, and long-term maintainability.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 text-sm 
              font-medium text-black transition hover:bg-gray-200 text-center"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="rounded-xl border border-white/20 px-6 py-3 
              text-sm font-medium text-white transition hover:bg-white/10 text-center"
            >
              About Me
            </a>
          </motion.div>
        </div>

        {/* ================= PORTRAIT ================= */}
        <motion.div
          className="pointer-events-none relative mt-12 flex justify-center sm:mt-16 
          md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:right-16 md:justify-start"
        >
          {/* ===== ANDROID AURA (FULLY DIES BEFORE HERO END) ===== */}
          <motion.div
            className="absolute inset-[-60%]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.12, 0.18, 0.12],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.22), transparent 65%)",
              filter: "blur(140px)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.25) 65%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.25) 65%, transparent 100%)",
            }}
          />

          {/* ===== VERY SOFT GROUND SHADOW ===== */}
          <div
            className="absolute bottom-[-28px] left-1/2 h-16 w-44 
            -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.4), transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* ===== PORTRAIT ===== */}
          <motion.img
            src={me}
            alt="Pranav Chavan"
            fetchPriority="high"
            loading="eager"
            className="relative w-[240px] sm:w-[280px] md:w-[330px]"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              maskImage:
                "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.18) 38%, black 68%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.18) 38%, black 68%)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;