// Central animation system for the entire portfolio
// Uses Framer Motion variants

/* ---------------------------------------------
   PAGE TRANSITIONS
---------------------------------------------- */

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // smooth cinematic ease
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

/* ---------------------------------------------
   SCROLL REVEAL (FADE UP)
---------------------------------------------- */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------------------------------------
   STAGGER CONTAINER
---------------------------------------------- */

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ---------------------------------------------
   TEXT REVEAL (HEADINGS)
---------------------------------------------- */

export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/* ---------------------------------------------
   CARD HOVER (PROJECT CARDS)
---------------------------------------------- */

export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.35)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
   IMAGE / DEVICE FLOATING EFFECT
---------------------------------------------- */

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ---------------------------------------------
   BUTTON TAP FEEDBACK
---------------------------------------------- */

export const tap = {
  scale: 0.96,
};
