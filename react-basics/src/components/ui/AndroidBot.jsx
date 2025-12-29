import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AndroidBot = () => {
  const containerRef = useRef(null);

  const [eye, setEye] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [track, setTrack] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  /* ---------------- EYE TRACKING ---------------- */
  useEffect(() => {
    const move = (e) => {
      if (!track || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + 140;
      const cy = rect.top + 160;

      setEye({
        x: Math.max(-9, Math.min(9, (e.clientX - cx) / 60)),
        y: Math.max(-6, Math.min(6, (e.clientY - cy) / 60)),

      });

    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [track]);

  /* ---------------- ATTENTION SWITCH ---------------- */
  useEffect(() => {
    const i = setInterval(() => {
      setTrack((t) => {
        if (t) setEye({ x: 0, y: 0 });
        return !t;
      });
    }, 3500);

    return () => clearInterval(i);
  }, []);

  /* ---------------- BLINK ---------------- */
  useEffect(() => {
    const i = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 2600);

    return () => clearInterval(i);
  }, []);

  /* ---------------- ANTENNA IDLE WIGGLE ---------------- */
  useEffect(() => {
    const i = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
    }, 5200);

    return () => clearInterval(i);
  }, []);

  return (
    <div ref={containerRef} className="relative select-none">
      <div className="relative w-56">
        {/* ANTENNAS */}
        <motion.div
          animate={wiggle ? { rotate: [-10, 14, -6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-10 -top-6 h-14 w-3 origin-bottom rounded-full bg-[#3ddc84] -rotate-20 z-0"
        />
        <motion.div
          animate={wiggle ? { rotate: [10, -14, 6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute right-10 -top-6 h-14 w-3 origin-bottom rounded-full bg-[#3ddc84] rotate-20 z-0"
        />

        {/* HEAD */}
        <div className="relative mt-8 h-28 w-56 overflow-hidden z-10">
          <div className="absolute top-0 h-56 w-56 rounded-full bg-[#3ddc84]">
            {/* EYES */}
            {["l", "r"].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: eye.x,
                  y: eye.y,
                  scaleY: blink ? 0.15 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
                className={`absolute top-16 h-4 w-4 rounded-full bg-black ${i === 0 ? "left-17" : "right-17"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidBot;
