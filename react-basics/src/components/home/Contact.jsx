// src/components/home/Contact.jsx

import { staggerContainer, fadeUp } from "../../utils/animations";
import AndroidBot from "../ui/AndroidBot";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    <section id="contact" className="scroll-mt-32 py-20 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl px-6"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left Column: Context */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="mb-8 text-3xl font-bold text-white md:text-5xl"
            >
              Let's Connect.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 leading-relaxed mb-8"
            >
              I'm currently looking for new opportunities to build high-quality Android applications.
              Whether you have a question or just want to say hi, my inbox is open.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 text-sm text-gray-400"
            >
              <a href="mailto:pranavchavan5766@gmail.com" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                <FaEnvelope size={18} />
                pranavchavan5766@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/pranavchavan5766/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                <FaLinkedin size={18} />
                LinkedIn Profile
              </a>
              <a href="https://github.com/Joker5766" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                <FaGithub size={18} />
                GitHub Profile
              </a>
            </motion.div>

            <div className="mt-12">
              <AndroidBot />
            </div>
          </div>


          {/* Right Column: Form */}
          <div>
            <motion.form
              ref={formRef}
              variants={fadeUp}
              className="flex flex-col gap-6"
              onSubmit={sendEmail}
            >
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-500 mb-2">NAME</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-green-500 transition-colors placeholder:text-gray-700"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-500 mb-2">EMAIL</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-green-500 transition-colors placeholder:text-gray-700"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-green-500 transition-colors resize-none placeholder:text-gray-700"
                  placeholder="Hello..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 self-start rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-green-400 mt-2"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400 mt-2"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>

            </motion.form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
