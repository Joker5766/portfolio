// src/components/layout/Footer.jsx

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-32 border-t border-white/10 bg-black/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-gray-400">
          Designed & Built by <span className="text-white">Pranav Chavan</span>
        </p>

        <p className="text-xs text-gray-500">
          Android Developer • CSE Undergraduate
        </p>

        <div className="flex gap-6 text-xs text-gray-400">
          <a
            href="https://github.com/Joker5766"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranavchavan5766/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pranavchavan5766@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        <p className="text-[11px] text-gray-600 mt-4">
          © {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
