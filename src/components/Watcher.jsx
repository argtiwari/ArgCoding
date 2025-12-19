import React, { useEffect, useState, useRef } from "react";

const Watcher = () => {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      // Aankhon ki position calculate karna
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      // Mouse aur Aankh ke beech ka angle aur distance
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(
        3, // Limit: Putli aankh se bahar na nikle (Max movement pixels)
        Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10
      );

      // Nayi position (Polar to Cartesian coordinates)
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Fixed at Bottom-Right (Bilkul kone mein)
    <div className="fixed bottom-0 right-10 z-50 hidden md:block">
      
      {/* Cat SVG Container */}
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform translate-y-2 hover:-translate-y-0 transition-transform duration-300" // Hover pe thoda upar aayegi
      >
        {/* --- BODY (Black Cat) --- */}
        {/* Main Body Shape */}
        <path
          d="M60 100C30 100 20 80 20 60C20 40 30 20 50 10C55 5 65 5 70 10C90 20 100 40 100 60C100 80 90 100 60 100Z"
          fill="#1e293b" // Slate-800 Color (Professional Dark Blue/Grey)
        />
        
        {/* Ears */}
        <path d="M30 30L20 5L45 25" fill="#1e293b" /> {/* Left Ear */}
        <path d="M90 30L100 5L75 25" fill="#1e293b" /> {/* Right Ear */}
        
        {/* Inner Ears (Pink) */}
        <path d="M32 28L24 10L42 24" fill="#fb7185" opacity="0.6" />
        <path d="M88 28L96 10L78 24" fill="#fb7185" opacity="0.6" />

        {/* --- EYES (The Watching Part) --- */}
        <g ref={eyeRef}>
          {/* Left Eye Sclera (White) */}
          <ellipse cx="45" cy="50" rx="12" ry="12" fill="white" />
          {/* Right Eye Sclera (White) */}
          <ellipse cx="75" cy="50" rx="12" ry="12" fill="white" />

          {/* Pupils (Black Dot - Ye move karega) */}
          <g transform={`translate(${pupilPos.x}, ${pupilPos.y})`}>
            <circle cx="45" cy="50" r="4" fill="black" /> {/* Left Pupil */}
            <circle cx="75" cy="50" r="4" fill="black" /> {/* Right Pupil */}
            
            {/* Eye Shine (Chamak - Cute look ke liye) */}
            <circle cx="47" cy="48" r="1.5" fill="white" />
            <circle cx="77" cy="48" r="1.5" fill="white" />
          </g>
        </g>

        {/* Nose */}
        <path d="M58 65L62 65L60 68L58 65Z" fill="#fb7185" />

        {/* Whiskers (Moochein) */}
        <path d="M30 65L10 60" stroke="white" strokeWidth="1" opacity="0.3" />
        <path d="M30 68L10 70" stroke="white" strokeWidth="1" opacity="0.3" />
        <path d="M90 65L110 60" stroke="white" strokeWidth="1" opacity="0.3" />
        <path d="M90 68L110 70" stroke="white" strokeWidth="1" opacity="0.3" />

        {/* Paws (Haath - Table pe rakhe hue) */}
        <ellipse cx="40" cy="95" rx="10" ry="6" fill="#334155" />
        <ellipse cx="80" cy="95" rx="10" ry="6" fill="#334155" />
      </svg>
      
      {/* Speech Bubble (Optional - Hover pe dikhega) */}
      <div className="absolute -top-8 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-md opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Meow! I code too. 🐱
      </div>
    </div>
  );
};

export default Watcher;