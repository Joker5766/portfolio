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
    title: "Architecture & Background",
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
      className="relative scroll-mt-32 py-20 md:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[200px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            My Toolbox.
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            The technologies I use to bring ideas to life.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid gap-6 md:gap-8">
          {stacks.map((stack, i) => {
            const [powered, setPowered] = useState(false);

            return (
              <motion.div
                key={stack.title}
                custom={i}
                variants={cardVariants}
                onHoverStart={() => setPowered(true)}
                onHoverEnd={() => setPowered(false)}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all hover:bg-white/[0.08]"
              >
                <div className="grid gap-8 md:grid-cols-[60px_260px_1fr] items-center">
                  {/* Device + Charger */}
                  <div className="relative flex justify-center">
                    <div className="relative h-16 w-8 rounded-lg bg-neutral-900 border border-white/10 flex items-end justify-center">
                      <div className="mb-1 h-[2px] w-4 rounded-full bg-black/60" />

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
                        {/* Lightning Icon */}
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.5 0L0 10.5H5.5V18L12 7.5H6.5V0Z" fill="#34D399" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {stack.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {stack.description}
                    </p>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-3">
                    {stack.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white hover:border-white/20"
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-4 w-4 opacity-75 grayscale group-hover:grayscale-0 transition-all"
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
