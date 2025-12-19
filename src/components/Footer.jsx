import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  // (Stars और Background का कोड यहाँ से हटा दिया गया है)

  return (
    // bg-[#050511] हटा दिया, अब यह पारदर्शी है
    <footer className="relative pt-32 pb-10 overflow-hidden backdrop-blur-sm border-t border-white/5">


      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Big Text Animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-10 tracking-tighter"
        >
          LET'S CREATE <br /> SOMETHING COOL
        </motion.h2>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-indigo-600 rounded-full text-white font-bold text-lg mb-16 shadow-lg shadow-indigo-500/25"
        >
          Start a Project
        </motion.button></div>
      
      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Floating Logo */}
        <div className="flex flex-col items-start space-y-6">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* TEXT LOGO */}
            <div className="flex items-center cursor-default group">
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                ARG
                </span>
                <span className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                .DEV
                </span>
            </div>
            {/* Shadow */}
            <div className="absolute -bottom-4 left-10 right-10 h-4 bg-black/40 blur-xl rounded-full"></div>
          </motion.div>

          <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
            Exploring the digital universe to build experiences that are out of this world.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            {[<FaGithub />, <FaLinkedin />, <FaTwitter />, <FaInstagram />].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -5, color: "#a855f7" }}
                className="text-2xl text-slate-400 transition-colors bg-white/5 p-3 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/10"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Holographic Planet */}
        <div className="flex flex-col items-center md:items-end justify-center relative">
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 blur-sm opacity-20"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full border border-white/10 rounded-full border-t-indigo-500 border-r-purple-500"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-white/5 rounded-full border-b-cyan-500 border-l-blue-500"
            />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="z-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.3)] cursor-pointer group hover:bg-white/10 transition-all"
            >
              <span className="text-white font-bold text-lg group-hover:text-indigo-400 transition-colors">
                Let's Talk
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="relative z-10 mt-20 border-t border-white/5 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2025 ARG.DEV. All systems operational.</p>
          <div className="flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;