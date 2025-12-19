import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaRobot } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-36 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white text-black w-72 rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                <FaRobot />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">ARG Assistant</h4>
                <p className="text-indigo-200 text-xs">Replies instantly</p>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-slate-50 space-y-4">
              <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm text-sm text-slate-600">
                Hi there! 👋 How can I help you build your dream website?
              </div>
            </div>

            {/* Footer Button */}
            <div className="p-3 bg-white border-t border-slate-100">
              <a 
                href="https://wa.me/919876543210?text=Hi,%20I%20want%20to%20discuss%20a%20project" // Apna number yahan daalo
                target="_blank"
                className="block w-full bg-green-500 text-white text-center py-2 rounded-full font-bold text-sm hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform"
      >
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </button>
    </div>
  );
};

export default ChatWidget;