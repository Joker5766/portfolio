import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../utils/animations";
import AndroidBot from "../ui/AndroidBot";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-32 py-20 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mb-10 md:mb-14 text-3xl font-semibold text-white md:text-5xl"
        >
          Let’s talk
        </motion.h2>

        {/* GRID */}
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-6 md:gap-8"
          >
            <AndroidBot />

            {/* CONTACT LINKS */}
            <div className="pl-2">
              <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                Reach me directly
              </p>

              <div className="flex flex-row flex-wrap gap-6">
                <a
                  href="https://www.linkedin.com/in/pranavchavan5766/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Joker5766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href="mailto:pranavchavan5766@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                >
                  <FaEnvelope size={18} />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE – FORM */}
          <motion.form
            variants={fadeUp}
            className="grid w-full max-w-xl gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <input
              type="email"
              placeholder="Your email"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <textarea
              rows={4}
              placeholder="Your message"
              className="resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <button
              type="submit"
              className="mt-2 w-fit rounded-xl border border-white/20 px-6 py-3 text-sm text-white transition hover:border-white/40"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
