import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { a, link } from "framer-motion/client";
import { BsInstagram } from "react-icons/bs";

// Hero component ke andar, return() se pehle ye paste karo:

const socialLinks = [
  { 
    icon: <FaGithub />, 
    url: "https://github.com/argtiwari" 
  },
  { 
    icon: <FaLinkedin />, 
    url: "https://www.linkedin.com/in/anurag-tiwari-9a3185392/" 
  },
  { 
    icon: <BsInstagram />, 
    url: "https://www.instagram.com/argtiwari/#" 
  }
];

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] pt-40">

      {/* --- VIBRANT BACKGROUND (High Performance) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">

        {/* Blob 1: Bright Purple/Pink (Top Left) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"
        />

        {/* Blob 2: Bright Cyan/Blue (Bottom Right) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]"
        />

        {/* Blob 3: Center Glow (Pink) - Ye "Chamak" layega */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[30%] left-[30%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-30"
        />
      </div>

      <div className="absolute top-[88%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full flex justify-center pointer-events-none select-none">
        <h1
          className="text-[18vw] font-black uppercase tracking-widest whitespace-nowrap"
          style={{
            // Ye hai magic line: Text transparent hoga, bas outline dikhegi
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
            color: "transparent"
          }}
        >
          Portfolio
        </h1>
      </div>

      {/* Grid Texture for Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm"
        >
          <span className="text-indigo-300 font-semibold tracking-wider text-sm uppercase">
            Full Stack Developer & Creator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
            Digital Magic
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          I combine <span className="text-cyan-400 font-medium">Creativity</span> with <span className="text-purple-400 font-medium">Code</span> to build websites that people love to use.
        </motion.p>

        {/* Buttons - High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-bold text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all border border-white/10"
          >
            Explore My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-slate-500 rounded-full text-lg font-semibold text-slate-300 hover:text-white hover:border-white transition-colors backdrop-blur-sm"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex gap-8 justify-center items-center"
>
  {/* Ab hum 'socialLinks' array use kar rahe hain */}
  {socialLinks.map((social, index) => (
    <motion.a
      key={index}
      href={social.url}          // Ab ye kaam karega!
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, color: "#60a5fa" }}
      className="text-3xl text-slate-400 cursor-pointer transition-colors"
    >
      {social.icon}              {/* Icon yahan se aayega */}
    </motion.a>
  ))}
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-slate-500 text-3xl"
      >
        <FaArrowDown />
      </motion.div>
    </div>
  );
};

export default Hero;