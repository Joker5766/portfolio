// src/components/ui/CustomCursor.jsx

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default"); // 'default' | 'snap' | 'text' | 'view'
  const [activeElement, setActiveElement] = useState(null);
  const [snappedRect, setSnappedRect] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position coordinates tracking mouse directly
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for cursor components
  const innerTargetX = useMotionValue(-100);
  const innerTargetY = useMotionValue(-100);
  const outerTargetX = useMotionValue(-100);
  const outerTargetY = useMotionValue(-100);

  const innerSpringConfig = { stiffness: 450, damping: 28, mass: 0.3 };
  const outerSpringConfig = { stiffness: 200, damping: 24, mass: 0.5 };

  const innerX = useSpring(innerTargetX, innerSpringConfig);
  const innerY = useSpring(innerTargetY, innerSpringConfig);
  const outerX = useSpring(outerTargetX, outerSpringConfig);
  const outerY = useSpring(outerTargetY, outerSpringConfig);

  useEffect(() => {
    // 1. Touch device detection
    const checkTouch = () => {
      const mediaQuery = window.matchMedia("(pointer: coarse)");
      setIsTouchDevice(mediaQuery.matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    // 2. Mouse move handler with coordinate distribution
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mouseX.set(x);
      mouseY.set(y);

      if (!isVisible) setIsVisible(true);

      if (!activeElement) {
        innerTargetX.set(x);
        innerTargetY.set(y);
        outerTargetX.set(x);
        outerTargetY.set(y);
      } else if (snappedRect) {
        // Magnetic parallax effect inside snapped elements
        const centerX = snappedRect.x;
        const centerY = snappedRect.y;
        const pullX = centerX + (x - centerX) * 0.22;
        const pullY = centerY + (y - centerY) * 0.22;
        innerTargetX.set(pullX);
        innerTargetY.set(pullY);
      }
    };

    // 3. Document boundaries
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setActiveElement(null);
    };

    // 4. Click animation
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // 5. Global hover listener for context-aware cursor states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Text input fields -> Reticle / Text Mode
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true"
      ) {
        setCursorType("text");
        setActiveElement(null);
        return;
      }

      // Check for interactive links and buttons
      const interactiveEl = target.closest("a, button, [role='button'], .cursor-pointer, select");

      if (interactiveEl) {
        // Special case: Hovering over project cards (or items with custom view triggers) -> circular scope
        const projectCard = interactiveEl.closest("article") || interactiveEl.closest('[data-cursor="view"]');

        // If we are hovering the primary card frame or a major card link: circular targeting view scope
        if (projectCard && (interactiveEl === projectCard || interactiveEl.tagName === "A" || interactiveEl.classList.contains("group"))) {
          const rect = interactiveEl.getBoundingClientRect();
          if (rect.width > 160) {
            setCursorType("view");
            setActiveElement(null);
            return;
          }
        }

        // Default: Lock-on HUD snap behavior
        setCursorType("snap");
        setActiveElement(interactiveEl);
      }
    };

    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget) {
        setCursorType("default");
        setActiveElement(null);
        return;
      }

      const isStillInteractive = relatedTarget.closest("a, button, [role='button'], .cursor-pointer, select, input, textarea");
      if (!isStillInteractive) {
        setCursorType("default");
        setActiveElement(null);
      }
    };

    // Attach listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible, activeElement, snappedRect]);

  // RequestAnimationFrame loop for dynamically updating active elements bounding rects (handles scroll, resize, layout shift)
  useEffect(() => {
    if (!activeElement) {
      setSnappedRect(null);
      return;
    }

    let rAF;
    const updateSnappedRect = () => {
      if (!activeElement) return;
      const rect = activeElement.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      outerTargetX.set(x);
      outerTargetY.set(y);

      setSnappedRect({
        x,
        y,
        width: rect.width,
        height: rect.height,
        borderRadius: window.getComputedStyle(activeElement).borderRadius || "8px"
      });

      // Update magnetic inner dot position relative to active dynamic bounds
      const rawMouseX = mouseX.get();
      const rawMouseY = mouseY.get();
      const pullX = x + (rawMouseX - x) * 0.22;
      const pullY = y + (rawMouseY - y) * 0.22;
      innerTargetX.set(pullX);
      innerTargetY.set(pullY);

      rAF = requestAnimationFrame(updateSnappedRect);
    };

    rAF = requestAnimationFrame(updateSnappedRect);
    return () => {
      if (rAF) cancelAnimationFrame(rAF);
    };
  }, [activeElement]);

  // Don't render cursor on mobile/touch screens or if not visible yet
  if (isTouchDevice || !isVisible) return null;

  const isSnapped = cursorType === "snap" && activeElement && snappedRect;

  return (
    <>
      {/* 1. Outer Morphing/Snapping HUD Frame */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: outerX,
          y: outerY,
        }}
        animate={{
          width: isSnapped ? snappedRect.width + 12 : 36,
          height: isSnapped ? snappedRect.height + 12 : 36,
          borderRadius: isSnapped ? snappedRect.borderRadius : "6px",
          borderColor: isSnapped ? "rgba(52, 211, 153, 0.85)" : "rgba(52, 211, 153, 0)",
          backgroundColor: isSnapped ? "rgba(52, 211, 153, 0.04)" : "rgba(52, 211, 153, 0)",
          scale: cursorType === "view" ? 2.6 : (isClicked ? 0.92 : 1),
          opacity: cursorType === "text" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: isSnapped ? 260 : 160,
          damping: isSnapped ? 24 : 20,
          mass: 0.5
        }}
      >
        {/* Futuristic Corner Brackets - only visible in default & snap states */}
        {cursorType !== "view" && (
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Top-Left Bracket */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-emerald-400 transition-all duration-300" />
            {/* Top-Right Bracket */}
            <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-emerald-400 transition-all duration-300" />
            {/* Bottom-Left Bracket */}
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-emerald-400 transition-all duration-300" />
            {/* Bottom-Right Bracket */}
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-emerald-400 transition-all duration-300" />
          </div>
        )}

        {/* Rotating cybernetic dashed circle inside Unsnapped HUD */}
        {!isSnapped && cursorType === "default" && (
          <div className="w-5.5 h-5.5 border border-dashed border-emerald-500/25 rounded-full animate-[spin_8s_linear_infinite]" />
        )}

        {/* Dynamic Glowing View Scope Bubble */}
        {cursorType === "view" && (
          <div className="absolute inset-0 w-full h-full rounded-full border border-emerald-400 bg-[#0a0a0a]/90 backdrop-blur-md shadow-[0_8px_32px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center overflow-hidden">
            {/* Internal spinning ticks */}
            <div className="absolute w-[90%] h-[90%] border border-dashed border-emerald-400/20 rounded-full animate-[spin_6s_linear_infinite]" />

            <span className="text-[9px] font-black tracking-[0.25em] text-emerald-400 uppercase select-none z-10 leading-none">
              VIEW
            </span>
            <span className="text-[6px] font-bold tracking-[0.15em] text-emerald-500/65 uppercase select-none z-10 mt-1 leading-none">
              CASE
            </span>
          </div>
        )}
      </motion.div>

      {/* 2. Inner Pinpoint Core Reticle / Blinking Caret */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: innerX,
          y: innerY,
        }}
        animate={{
          scale: isClicked ? 0.75 : 1,
          opacity: cursorType === "view" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28
        }}
      >
        {cursorType === "text" ? (
          // Cybernetic vertical typing target
          <div className="w-[2px] h-[14px] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
        ) : (
          // Tactical target pinpoint core
          <div className="relative w-2 h-2">
            {/* Sharp Core Dot */}
            <div className="absolute inset-0.5 bg-emerald-400 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.85)]" />

            {/* Minor tactical crosshair sub-ticks */}
            <div className="absolute top-1/2 left-[-3.5px] w-[1.5px] h-[1.5px] bg-emerald-300 rounded-full transform -translate-y-1/2" />
            <div className="absolute top-1/2 right-[-3.5px] w-[1.5px] h-[1.5px] bg-emerald-300 rounded-full transform -translate-y-1/2" />
            <div className="absolute top-[-3.5px] left-1/2 w-[1.5px] h-[1.5px] bg-emerald-300 rounded-full transform -translate-x-1/2" />
            <div className="absolute bottom-[-3.5px] left-1/2 w-[1.5px] h-[1.5px] bg-emerald-300 rounded-full transform -translate-x-1/2" />
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
