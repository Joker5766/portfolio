// src/components/home/Philosophy.jsx

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const principles = [
  { title: "Invisible UX", desc: "Great software doesn't demand attention." },
  { title: "Trust", desc: "Reliability wins over flashy features." },
  { title: "Essentialism", desc: "Less noise, more intent." },
];

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="relative scroll-mt-32 py-20 md:py-32 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Col */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="mb-8 text-3xl font-bold text-white md:text-5xl"
            >
              Philosophy.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 leading-relaxed mb-6"
            >
              I believe that software should be <strong>calm</strong>. It should feel robust,
              predictable, and respectful of the user's time.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 leading-relaxed"
            >
              In a world of noisy notifications and cluttered interfaces, I aim to build
              tools that quietly empower users to get things done, then get out of the way.
            </motion.p>
          </div>


          {/* Right Col - List */}
          <div className="space-y-8">
            {principles.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="group pl-6 border-l-2 border-white/10 hover:border-green-500/50 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;

