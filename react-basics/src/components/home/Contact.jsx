import { staggerContainer, fadeUp } from "../../utils/animations";
import AndroidBot from "../ui/AndroidBot";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const formRef = useRef(null);
  const timeoutRef = useRef(null);
  const lastSubmitRef = useRef(0);

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const resetStatusAfter = (ms) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setStatus("idle");
    }, ms);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // ⛔ Prevent rapid re-submits (basic rate limit)
    const now = Date.now();
    if (now - lastSubmitRef.current < 3000) {
      return;
    }
    lastSubmitRef.current = now;

    const form = formRef.current;
    if (!form) return;

    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim();

    // ❌ Block empty values
    if (!name || !email || !message) {
      setStatus("error");
      resetStatusAfter(3000);
      return;
    }

    // ❌ Block invalid email format
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      resetStatusAfter(3000);
      return;
    }

    // ⛔ Prevent duplicate sending state
    if (status === "sending") return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_pranav",
        "template_om4ewy3",
        form,
        "Rx7E7T_JwolY4odrd"
      )
      .then(
        () => {
          setStatus("success");
          form.reset();
          resetStatusAfter(3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          resetStatusAfter(4000);
        }
      );
  };

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
          Let’s build something real
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mb-10 -mt-6 max-w-xl text-sm leading-relaxed text-gray-400"
        >
          I’m open to Android internships, collaborations, and meaningful project
          work. If you care about clean architecture and real apps, we’ll get
          along.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-6 md:gap-8"
          >
            <AndroidBot />

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

          <motion.form
            ref={formRef}
            variants={fadeUp}
            className="grid w-full max-w-xl gap-4"
            onSubmit={sendEmail}
            aria-live="polite"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your email"
              required
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your message"
              required
              className="resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className={`mt-2 w-fit rounded-xl px-6 py-3 text-sm transition
                ${
                  status === "sending"
                    ? "cursor-not-allowed border border-white/10 text-gray-500"
                    : "border border-white/20 text-white hover:border-white/40"
                }
              `}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-2 rounded-lg border border-green-400/20 bg-green-400/5 px-4 py-3 text-sm text-green-400"
                >
                  ✓ Message sent. I’ll get back to you shortly.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-2 rounded-lg border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400"
                >
                  ✕ Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
