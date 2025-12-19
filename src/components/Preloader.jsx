import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["DESIGN", "DEVELOP", "CREATE", "INSPIRE"];

const Preloader = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Word changing logic
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 180);

    // Counter logic (0 to 100)
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          clearInterval(wordInterval);
          setTimeout(finishLoading, 500); // Wait a bit before closing
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Speed of counting

    return () => {
      clearInterval(wordInterval);
      clearInterval(countInterval);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // Parda upar jayega
      className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Flashing Words */}
        <motion.p 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-4xl md:text-6xl font-black text-white tracking-widest mb-4"
        >
          {words[index]}
        </motion.p>
        
        {/* Percentage Counter */}
        <p className="text-indigo-500 font-mono text-xl">{count}%</p>
      </div>
      
      {/* Background Line Animation */}
      <motion.div 
         initial={{ width: 0 }}
         animate={{ width: `${count}%` }}
         className="absolute bottom-0 left-0 h-2 bg-indigo-600"
      />
    </motion.div>
  );
};

export default Preloader;