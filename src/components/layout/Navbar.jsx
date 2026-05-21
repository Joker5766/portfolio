import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logoRef = useRef(null);
  const [ctaWidth, setCtaWidth] = useState(null);

  /* Sync CTA width with logo width (robust) */
  useEffect(() => {
    if (!logoRef.current) return;

    const updateWidth = () =>
      setCtaWidth(logoRef.current.offsetWidth);

    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    ro.observe(logoRef.current);

    return () => ro.disconnect();
  }, []);

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 200) setActive("hero");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section observer (stable) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && window.scrollY > 200) {
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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      <div className="mx-auto max-w-7xl px-6 pointer-events-auto">
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(0,0,0,0.45)"
              : "rgba(0,0,0,0)",
            borderColor: isScrolled
              ? "rgba(255,255,255,0.1)"
              : "rgba(255,255,255,0)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex items-center justify-between rounded-2xl border px-6 py-4"
        >
          {/* Logo */}
          <a
            href="/"
            ref={logoRef}
            className="text-lg font-semibold tracking-wide text-white whitespace-nowrap"
          >
            Pranav Chavan
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="relative">
                <motion.span
                  animate={{
                    color: active === id ? "#ffffff" : "#9CA3AF",
                    opacity: active === id ? 1 : 0.9,
                    scale: active === id ? 1 : 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="inline-block hover:text-white"
                >
                  {label}
                </motion.span>



                {active === id && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-green-500"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: ctaWidth }}
            className="
              group hidden md:inline-flex items-center justify-center gap-2
              rounded-xl border border-white/15 px-5 py-2.5
              text-sm font-medium text-gray-200
              transition-all duration-300
              hover:border-green-500/50 hover:text-white
              hover:bg-white/[0.04]
              active:scale-[0.97]
              whitespace-nowrap
            "
          >
            <span>Resume</span>
            <FiArrowUpRight className="opacity-70 group-hover:text-green-400" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden relative h-6 w-6"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 0 : -6 }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? 0 : 6 }}
              className="absolute top-1/2 left-0 h-[2px] w-6 bg-white"
            />
          </button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-4"
            >
              <div className="flex flex-col gap-4 text-sm">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={
                      active === id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
                >
                  Resume <FiArrowUpRight />
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
