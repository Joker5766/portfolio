// src/components/home/Skills.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

const stacks = [
  {
    title: "Android Core",
    description: "Primary tools I use daily for building Android applications.",
    items: [
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "Jetpack Compose", icon: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
    ],
  },
  {
    title: "Architecture & Background Work",
    description: "How apps stay reliable beyond the UI and foreground.",
    items: [
      { name: "ViewModel", icon: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "Room Database", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
      { name: "Coroutines", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "WorkManager", icon: "https://cdn.simpleicons.org/android/3DDC84" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Systems that feed data into the app and support offline use.",
    items: [
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    title: "Exploration",
    description: "Areas I experiment with beyond standard Android development.",
    items: [
      { name: "Augmented Reality", icon: "https://cdn.simpleicons.org/unity/FFFFFF" },
      { name: "Computer Vision", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative scroll-mt-32 py-20 md:py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Header */}
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400"
        >
          Skills
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-12 md:mb-16 text-3xl font-semibold text-white md:text-5xl"
        >
          Tools & systems I work with
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-10 md:gap-12">
          {stacks.map((stack, i) => {
            const [powered, setPowered] = useState(false);

            return (
              <motion.div
                key={stack.title}
                custom={i}
                variants={cardVariants}
                onHoverStart={() => setPowered(true)}
                onHoverEnd={() => setPowered(false)}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-400/30"
              >
                {powered && (
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-emerald-400/12 blur-lg" />
                )}

                <div className="grid gap-8 md:grid-cols-[80px_260px_1fr] items-center">
                  {/* Device + Charger */}
                  <div className="relative flex justify-center">
                    <div className="relative h-20 w-10 rounded-lg bg-neutral-900 border border-white/10 flex items-end justify-center">
                      <div className="mb-1 h-[3px] w-5 rounded-full bg-black/60" />

                      {powered && (
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-emerald-400/10 blur-sm"
                          animate={{ opacity: 1 }}
                        />
                      )}

                      <motion.div
                        animate={
                          powered
                            ? { scale: [1, 1.15, 1], opacity: 1 }
                            : { scale: 0.8, opacity: 0 }
                        }
                        transition={{
                          repeat: powered ? Infinity : 0,
                          duration: 1.4,
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div
                          className="h-3 w-2 bg-emerald-400"
                          style={{
                            clipPath:
                              "polygon(40% 0, 100% 0, 60% 45%, 90% 45%, 20% 100%, 45% 55%, 10% 55%)",
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      animate={
                        powered
                          ? { y: 0, opacity: 1 }
                          : { y: 24, opacity: 0 }
                      }
                      transition={{ type: "spring", stiffness: 120 }}
                      className="absolute -bottom-6 flex flex-col items-center"
                    >
                      <div className="h-3 w-5 rounded-sm bg-neutral-300" />
                      <div className="h-5 w-[3px] bg-emerald-400/80" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {stack.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {stack.description}
                    </p>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-4">
                    {stack.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -6, scale: 1.05 }}
                        animate={
                          powered
                            ? { boxShadow: "0 0 16px rgba(52,211,153,0.18)" }
                            : {}
                        }
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-md"
                      >
                        <motion.img
                          src={item.icon}
                          alt={item.name}
                          className="h-5 w-5 opacity-70"
                          whileHover={{ rotate: 12 }}
                        />
                        <span>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
