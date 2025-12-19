import React from "react";
import { motion } from "framer-motion";

const GalaxyBackground = () => {
  // पूरी स्क्रीन के लिए थोड़े ज़्यादा तारे बनाते हैं
  const stars = Array(50).fill(0).map(() => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 2 + 1 + "px", // थोड़े छोटे तारे ताकि कंटेंट डिस्टर्ब न हो
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050511]">
      
      {/* --- NEBULA CLOUDS (Glows spread across the page) --- */}
      <div className="absolute top-[-10%] left-[-20%] w-[700px] h-[700px] bg-purple-900/20 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[10%] right-[-20%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[-20%] left-[10%] w-[600px] h-[600px] bg-fuchsia-900/20 rounded-full blur-[120px] opacity-30"></div>

      {/* --- TWINKLING STARS --- */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{ 
            top: star.top, 
            left: star.left, 
            width: star.size, 
            height: star.size,
            opacity: 0.7
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }} // टिमटिमाना
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default GalaxyBackground;