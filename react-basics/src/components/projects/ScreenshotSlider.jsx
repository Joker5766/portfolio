import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScreenshotSlider = ({ screenshots = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [screenshots]);

  if (!screenshots.length) return null;

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={screenshots[index]}
          alt="App screenshot"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ScreenshotSlider;
