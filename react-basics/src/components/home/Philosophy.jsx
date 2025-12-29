// src/components/home/Philosophy.jsx

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const principles = [
  "Invisible UX",
  "User Trust",
  "Essentialism",
  "Structural Integrity",
  "Calm Software",
];

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="relative scroll-mt-32 py-28 overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute right-[-200px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-white/5 blur-[220px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400"
        >
          Philosophy
        </motion.p>

        <motion.h2
  variants={fadeUp}
  className="mb-16 text-3xl font-semibold text-white md:text-5xl"
>
  How I think about building software
</motion.h2>


        {/* MAIN GRID */}
        <div className="relative grid md:grid-cols-2">
          {/* LEFT — TEXT */}
          <div className="max-w-xl">
            <motion.div
              variants={fadeUp}
              className="mb-8 h-px w-20 bg-white/10"
            />

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-gray-400 leading-relaxed"
            >
              I believe good software should feel calm to use. The best apps don’t demand attention or explain themselves - they feel smooth, predictable, and quietly support the user without adding noise.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.25 }}
              className="mt-6 text-gray-400 leading-relaxed"
            >
              I focus on simplicity built on strong foundations. When interfaces stay minimal and systems remain stable, software earns trust, scales with intent, and becomes something people naturally return to.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.45 }}
              className="mt-10 text-sm tracking-wide text-gray-500"
            >
              Less noise. More intent.
            </motion.p>
          </div>

          {/* RIGHT — FULL-WIDTH VISUAL FIELD */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 right-[-40vw]">
              {/* Vertical guide line */}
              <div className="absolute left-24 top-0 h-full w-px bg-white/10" />

              {/* Principles */}
              <div className="absolute left-32 top-1/2 -translate-y-1/2 space-y-8">
                {principles.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                    className="text-sm uppercase tracking-widest text-gray-500"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;

