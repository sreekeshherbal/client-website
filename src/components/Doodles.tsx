import React from 'react';
import { motion } from 'framer-motion';

// Doodle shapes as React components
export const LeafDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={`w-12 h-12 fill-green-500/30 ${className}`}
    initial={{ rotate: 0, scale: 0.9 }}
    animate={{ 
      rotate: [0, 5, -5, 0],
      scale: [0.9, 1, 0.95, 0.9]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    <path d="M50,10 C70,30 90,40 90,60 C90,80 70,90 50,90 C30,90 10,80 10,60 C10,40 30,30 50,10 Z" strokeWidth="2" stroke="#16a34a" strokeLinecap="round" fill="none" />
  </motion.svg>
);

export const FlowerDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={`w-16 h-16 ${className}`}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear" 
    }}
  >
    <g fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round">
      <path d="M50,50 C60,40 70,40 75,50 C80,60 70,70 60,70 C50,70 40,60 45,50 C50,40 60,40 50,50" />
      <path d="M50,50 C40,40 30,40 25,50 C20,60 30,70 40,70 C50,70 60,60 55,50 C50,40 40,40 50,50" />
      <path d="M50,50 C40,60 40,70 50,75 C60,80 70,70 70,60 C70,50 60,40 50,45 C40,50 40,60 50,50" />
      <path d="M50,50 C60,60 60,70 50,75 C40,80 30,70 30,60 C30,50 40,40 50,45 C60,50 60,60 50,50" />
      <circle cx="50" cy="50" r="5" fill="#f472b6" />
    </g>
  </motion.svg>
);

export const WavyLineDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg 
    viewBox="0 0 200 30" 
    className={`w-32 h-8 ${className}`}
    initial={{ pathLength: 0, opacity: 0.2 }}
    animate={{ 
      pathLength: 1, 
      opacity: 0.8,
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut" 
    }}
  >
    <path 
      d="M0,15 Q20,5 40,15 Q60,25 80,15 Q100,5 120,15 Q140,25 160,15 Q180,5 200,15" 
      stroke="#16a34a" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
    />
  </motion.svg>
);

export const CircleDoodle: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={`w-20 h-20 ${className}`}
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{ 
      scale: [0.8, 1, 0.8],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    <circle 
      cx="50" 
      cy="50" 
      r="40" 
      fill="none" 
      stroke="#f59e0b" 
      strokeWidth="2" 
      strokeDasharray="3,3" 
    />
  </motion.svg>
);

export const DotsPatternDoodle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const dots = Array.from({ length: 25 }).map((_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    return (
      <motion.circle 
        key={i} 
        cx={10 + col * 20} 
        cy={10 + row * 20} 
        r="2"
        fill="#34d399"
        initial={{ opacity: 0.1 }}
        animate={{ 
          opacity: Math.random() > 0.5 ? [0.1, 0.8, 0.1] : [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    );
  });

  return (
    <svg viewBox="0 0 100 100" className={`w-32 h-32 ${className}`}>
      {dots}
    </svg>
  );
};

interface DoodleContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const DoodleContainer: React.FC<DoodleContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background doodles */}
      <div className="absolute w-full h-full -z-10 overflow-hidden pointer-events-none">
        <LeafDoodle className="absolute top-10 left-[10%] opacity-40" />
        <FlowerDoodle className="absolute top-[15%] right-[8%] opacity-30" />
        <CircleDoodle className="absolute bottom-[20%] left-[15%] opacity-40" />
        <DotsPatternDoodle className="absolute bottom-[10%] right-[12%] opacity-30" />
        <WavyLineDoodle className="absolute top-[80%] left-[30%] opacity-40" />
      </div>
      {children}
    </div>
  );
};