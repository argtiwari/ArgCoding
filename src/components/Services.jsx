import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaLayerGroup } from "react-icons/fa";

const services = [
  {
    title: "Web Engineering",
    icon: <FaLaptopCode />,
    desc: "I build high-performance websites that load in under 1 second.",
    color: "text-blue-400",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    desc: "Turning ideas into functional apps for iOS and Android.",
    color: "text-purple-400",
  },
  {
    title: "Brand Strategy",
    icon: <FaRocket />,
    desc: "Helping schools and startups position themselves digitally.",
    color: "text-pink-400",
  },
  {
    title: "UI/UX Design",
    icon: <FaLayerGroup />,
    desc: "Designing interfaces that users fall in love with instantly.",
    color: "text-cyan-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-24 px-4 flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-20 text-center"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Expertise.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <SpotlightCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SPOTLIGHT LOGIC (Mouse Follower) ---
const SpotlightCard = ({ service }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl border border-white/10 bg-slate-900/50 p-10 overflow-hidden group magnetic" // 'magnetic' class cursor ko bada karegi
    >
      {/* SPOTLIGHT GLOW EFFECT */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      
      {/* BORDER GLOW */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.4), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        <div className={`text-5xl mb-6 ${service.color} transform group-hover:scale-110 transition-transform duration-500`}>
          {service.icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
};

export default Services;