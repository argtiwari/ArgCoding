import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 px-4 relative overflow-hidden flex items-center">
      
      {/* Background Subtle Gradients (Professional Vibe) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                extraordinary.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
              Whether you need a modern website, a mobile app, or just want to discuss a project—I am ready to help you turn ideas into reality.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-6">
              <ContactItem 
                icon={<FaEnvelope />} 
                title="Email" 
                text="hello@arg.dev" 
                link="mailto:hello@arg.dev" 
              />
              <ContactItem 
                icon={<FaPhoneAlt />} 
                title="Phone" 
                text="+91 98765 43210" 
                link="tel:+919876543210" 
              />
              <ContactItem 
                icon={<FaMapMarkerAlt />} 
                title="Location" 
                text="Patna, Bihar, India" 
                link="#" 
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Professional Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Your Name" placeholder="John Doe" type="text" />
                <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
              </div>
              
              <InputGroup label="Subject" placeholder="Project Discussion" type="text" />
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder-slate-600"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Reusable Small Components ---

const InputGroup = ({ label, placeholder, type }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-slate-400">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600"
    />
  </div>
);

const ContactItem = ({ icon, title, text, link }) => (
  <a href={link} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all group">
    <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 text-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-slate-500 text-xs uppercase font-bold tracking-wide">{title}</p>
      <p className="text-white font-medium text-lg">{text}</p>
    </div>
  </a>
);

export default Contact;