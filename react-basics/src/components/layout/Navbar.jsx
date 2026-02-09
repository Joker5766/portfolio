// src/components/layout/Navbar.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  const logoRef = useRef(null);
  const [ctaWidth, setCtaWidth] = useState(null);

  /* Match CTA width with logo width */
  useEffect(() => {
    if (logoRef.current) {
      setCtaWidth(logoRef.current.offsetWidth);
    }
  }, []);

  /* Active section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="/"
            ref={logoRef}
            className="text-lg font-semibold tracking-wide text-white whitespace-nowrap"
          >
            Pranav Chavan
          </a>

          {/* Desktop Links (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="relative">
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`transition ${active === id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {label}
                </motion.span>

                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-green-500"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            ))}
          </div>



<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{ width: ctaWidth }}
  className="
    group
    hidden md:inline-flex items-center justify-center gap-2
    rounded-xl
    border border-white/15
    px-5 py-2.5
    text-sm font-medium text-gray-200
    transition-all duration-300
    hover:border-green-500/50
    hover:text-white
    hover:bg-white/[0.04]
    active:scale-[0.97]
    whitespace-nowrap
  "
>
  <span>Resume</span>

  <FiArrowUpRight
    className="
      text-base
      opacity-70
      transition-colors duration-300
      group-hover:text-green-400
      group-hover:animate-[arrow-diagonal_1.2s_ease-in-out_infinite]
    "
  />
</a>



          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-6 w-6"
            aria-label="Toggle menu"
          >
            {/* Top line */}
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 0 : -6,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />

            {/* Middle line */}
            <motion.span
              animate={{
                opacity: open ? 0 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />

            {/* Bottom line */}
            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? 0 : 6,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />
          </button>


        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-4"
            >
              <div className="flex flex-col gap-4 text-sm">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`${active === id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {label}
                  </a>
                ))}

              
<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="
    mt-2 flex items-center justify-center gap-2
    rounded-xl
    border border-white/20
    bg-white/[0.04]
    px-4 py-3
    text-sm font-medium text-white
    transition-all duration-200
    active:scale-[0.97]
  "
>
  <span>Resume</span>

  <FiArrowUpRight className="text-base opacity-80" />
</a>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
