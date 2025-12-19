import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "School Mgmt. System",
    desc: "Reduced administrative workload by 40% using a centralized dashboard for students, fees, and exams.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    title: "Hospital Queue App",
    desc: "Real-time tracking system serving 500+ patients daily, minimizing waiting time by 30 minutes.",
    tags: ["Next.js", "Firebase", "Tailwind"],
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack store with WhatsApp API integration, increasing local sales conversion by 25%.",
    tags: ["React", "Redux", "Stripe"],
    gradient: "from-purple-400 to-pink-600",
  },
  {
    title: "Crypto Dashboard",
    desc: "High-performance financial tracker with live API data fetching and interactive charts.",
    tags: ["React", "Chart.js", "API"],
    gradient: "from-orange-400 to-red-600",
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative pb-20">
      
      {/* Section Header */}
      <div id="portfolio" className="pt-20 pb-8 text-center sticky top-0 backdrop-blur-md bg-black/20 z-10 mb-10">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Works.</span>
        </motion.h2>
        <p className="text-slate-400 text-lg">Scroll to explore</p>
      </div>

      {/* Stack Container */}
      <div className="max-w-5xl mx-auto px-4">
        {projects.map((project, index) => {
          // Dynamic calculation for stacking
          const targetScale = 1 - ( (projects.length - index) * 0.05 ); 
          return (
            <Card 
              key={index} 
              i={index} 
              {...project} 
              progress={scrollYProgress} 
              range={[index * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};

// --- INDIVIDUAL CARD COMPONENT ---
const Card = ({ i, title, desc, tags, gradient, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale animation: Jaise scroll hoga, card thoda chota hota jayega taaki depth dikhe
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} // Stacking logic
        className="relative flex flex-col md:flex-row gap-8 bg-[#161b22] border border-white/10 rounded-3xl p-8 md:p-12 w-full max-w-4xl h-[60vh] shadow-2xl origin-top"
      >
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">{desc}</p>
            
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-indigo-300 border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-indigo-400 transition-colors">
              <FaExternalLinkAlt /> Live Demo
            </button>
            <button className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors">
              <FaGithub size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Visual (Gradient or Image) */}
        <div className={`w-full md:w-1/2 h-full rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden group`}>
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <h4 className="text-white/20 text-6xl font-black uppercase rotate-[-45deg] select-none">
              Project {i + 1}
            </h4>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default Portfolio;