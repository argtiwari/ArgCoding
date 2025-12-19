import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // 1. Motion Values (Direct GPU Access - No React Render Lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Spring Physics for the "Ring" (Thoda smooth piche chalega)
  const springConfig = { damping: 25, stiffness: 700 }; // High stiffness = Less Lag
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Update values directly (Super Fast)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check hover state efficiently
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") || // Agar icon ke upar ho
        target.closest("a") ||
        target.closest(".magnetic") // Special class for spotlight cards
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* 1. Main Dot (INSTANT RESPONSE - No Spring) */}
      <motion.div
        style={{
          translateX: mouseX,
          translateY: mouseY,
          x: -4, // Center align (half of width)
          y: -4, // Center align
        }}
        animate={{
          scale: isHovering ? 0 : 1, // Link pe aate hi gayab ho jayega taaki ring dikhe
        }}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* 2. Outer Ring (Smooth Follower) */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
          x: -16, // Center align (half of width 32px)
          y: -16,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1, // Hover pe bada hoga
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovering ? "transparent" : "white",
        }}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-colors duration-200"
      />
    </>
  );
};

export default Cursor;