import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import GalaxyBackground from './components/GalaxyBackground';
import Preloader from './components/Preloader'; // <--- Import
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDoc from './components/FloatingDoc';
import Watcher from './components/Watcher';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading State

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

 return (
    // नोट: यहाँ से 'bg-[#0a0a0a]' हटा दिया है क्योंकि अब GalaxyBackground रंग संभालेगा
    <div className="antialiased min-h-screen text-white cursor-auto md:cursor-none selection:bg-indigo-500 selection:text-white font-sans">
      
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      
      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
           {/* --- NEW GALAXY BACKGROUND ADDED HERE --- */}
           <GalaxyBackground />

           <Navbar />
           
           {/* Hero का अपना बैकग्राउंड है, वह इसके ऊपर दिखेगा */}
           <Hero />
           
           <About />
           <Services />
           <Portfolio />
           <Contact />
           
           {/* Footer अब पारदर्शी होगा */}
           <Footer />

           <FloatingDoc />
           <Watcher />
           <ChatWidget />
        </motion.div>
      )}
    </div>
  )
}