import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const FloatingDoc = () => {
  // Apne Web Resume ka link yahan daalo
  const resumeLink = "https://your-resume-link.com"; 

  return (
    <motion.a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full shadow-lg cursor-pointer group hover:bg-white/20 transition-all"
    >
      <div className="bg-indigo-600 p-2 rounded-full text-white">
        <FaFileAlt />
      </div>
      <span className="text-white font-bold text-sm pr-1">View CV</span>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
};

export default FloatingDoc;