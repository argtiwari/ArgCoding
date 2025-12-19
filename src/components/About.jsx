import React from "react";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion", "Three.js", "TypeScript"];

const About = () => {
  return (
    <section id="about" className="py-24 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Your Image (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Neon Border Box */}
          <div className="absolute inset-0 border-2 border-indigo-500 rounded-2xl translate-x-4 translate-y-4"></div>
          <div className="relative object-contain w-full h-[500px]  rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 z-10">
             <img className=" object-cover" src="image.png" alt="image"/>
          </div>
        </motion.div>

        {/* Right: Text Content with Reveal Animation */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Code.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-8"
          >
            I am a creative developer who loves to craft digital experiences. 
            Unlike traditional coders, I focus on 
            <span className="text-white font-bold"> Motion, Design,</span> and 
            <span className="text-white font-bold"> Performance</span>. 
            My goal is to build websites that leave a lasting impression.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-indigo-400">20+</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-400">100%</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- INFINITE MARQUEE (Chalti hui Skills) --- */}
      <div className="mt-24 w-full py-8 bg-white/5 border-y border-white/5 relative flex overflow-hidden">
        {/* Gradients to hide edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

        {/* Moving Text */}
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-4xl font-bold text-slate-700 uppercase hover:text-indigo-500 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;