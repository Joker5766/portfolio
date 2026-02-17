// src/components/home/Hero.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, staggerContainer, textReveal } from "../../utils/animations";
import me from "../../assets/me.webp";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 700], [1, 0]);
  const scale = useTransform(scrollY, [0, 700], [1, 0.95]);
  const y = useTransform(scrollY, [0, 700], [0, 100]);

  return (
    <section className="sticky top-0 h-screen z-0 overflow-hidden bg-[#050505] pt-24 lg:pt-0">


      {/* ===== BACKGROUND ===== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, y }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 h-full flex flex-col justify-center"
      >

        {/* ================= MOBILE PHOTO (TOP) ================= */}
        <motion.div
          variants={fadeUp}
          className="lg:hidden mb-10 flex justify-center"
        >
          <div className="relative w-[220px] h-[220px]">
            <div className="absolute inset-0 border border-green-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-6 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

            <motion.img
              src={me}
              alt="Pranav Chavan"
              className="absolute inset-0 m-auto w-[140px] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 65%, rgba(0,0,0,0.6) 80%, transparent 100%)"

              }}
            />

          </div>
        </motion.div>

        {/* ================= TEXT ================= */}
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
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
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Reliable Systems
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-gray-400 font-light"
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
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* ================= DESKTOP PHOTO (RIGHT) ================= */}
        <motion.div
          className="hidden lg:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 mr-[-100px]"
          style={{ opacity: 0.8 }}
        >
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 border border-green-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />

            <motion.img
              src={me}
              alt="Pranav Chavan"
              className="absolute inset-0 m-auto w-[320px] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
              }}
            />

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
