import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Menu Items
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* --- DESKTOP FLOATING NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} // Hero ke baad aayega
        className="fixed top-6 left-0 right-0 z-50 mx-auto w-[90%] max-w-5xl"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 shadow-lg shadow-black/20 rounded-full px-6 py-3 flex justify-between items-center">
          
          {/* 1. Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter text-white cursor-pointer"
          >
            ARG<span className="text-indigo-500">.DEV</span>
          </motion.div>

          {/* 2. Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-300 font-medium text-sm transition-colors relative group"
              >
                {link.name}
                {/* Hover Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* 3. Hire Me Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full border border-indigo-500/50 text-indigo-300 text-sm font-semibold transition-all"
            >
              <a href="#lets">Let's Talk</a>
            </motion.button>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden text-white text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU (Smooth Overlay) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} // Staggered Effect
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;