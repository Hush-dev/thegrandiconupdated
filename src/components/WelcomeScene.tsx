'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface WelcomeSceneProps {
  onComplete: () => void;
}

export default function WelcomeScene({ onComplete }: WelcomeSceneProps) {
  const [phase, setPhase] = useState<'enter' | 'hold'>('enter');

  // Auto-advance timeline
  useEffect(() => {
    // Phase 1: content fades in (0 → 0.8s)
    // Phase 2: hold (0.8s → 4.5s)
    // Phase 3: exit transition (4.5s → 5.5s) then call onComplete
    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    const doneTimer = setTimeout(() => onComplete(), 4500);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('hold'); // triggers AnimatePresence exit on the welcome div
    setTimeout(onComplete, 1000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[#0A0908] flex flex-col items-center justify-center overflow-hidden"
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
    >
          {/* Background image — hotel exterior placeholder */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
              alt="The Grand Icon"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.6) brightness(0.35)' }}
            />
            {/* Layered overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/50 to-[#0A0908]/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/60 via-transparent to-[#0A0908]/40" />
          </motion.div>

          {/* Corner frames */}
          {['top-8 left-8 border-t border-l', 'top-8 right-8 border-t border-r',
            'bottom-8 left-8 border-b border-l', 'bottom-8 right-8 border-b border-r'].map((cls, i) => (
            <motion.div key={i}
              className={`absolute w-10 h-10 ${cls} border-[#C4A472]/20`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.6 }}
            />
          ))}

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-8">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#C4A472]/10 blur-xl scale-150" />
              <img src="/thegrandicon_logo.webp" alt="The Grand Icon"
                className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_20px_rgba(196,164,114,0.3)]" />
            </motion.div>

            {/* Welcome text */}
            <div className="space-y-3 overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-[9px] sm:text-[10px] font-mono tracking-[0.5em] text-[#C4A472] uppercase"
              >
                Namaste · Welcome · स्वागत है
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.9, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
                  className="font-serif font-light text-3xl sm:text-5xl md:text-6xl text-[#F2ECE2] tracking-wide"
                >
                  Welcome to{' '}
                  <span className="italic text-[#C4A472]">The Grand Icon</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="font-sans text-sm md:text-base text-[#7A7068] font-light tracking-wide max-w-md mx-auto"
              >
                Luxury, Comfort &amp; Indian Hospitality
              </motion.p>
            </div>

            {/* 3 CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-3 pt-2"
            >
              <WelcomeBtn label="Book A Room"         delay={1.8} onClick={handleSkip} primary />
              <WelcomeBtn label="Banquet Enquiry"     delay={1.9} onClick={handleSkip} />
              <WelcomeBtn label="Reserve a Table"     delay={2.0} onClick={handleSkip} />
            </motion.div>

            {/* Entering experience indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2.8, duration: 1.2, repeat: Infinity, repeatDelay: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[#C4A472]" />
              <span className="text-[8px] font-mono tracking-[0.4em] text-[#5A524A] uppercase">
                Entering Experience
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C4A472]" />
            </motion.div>
          </div>

          {/* Skip — very subtle, bottom right */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-[8px] font-mono tracking-[0.4em] text-[#5A524A] hover:text-[#C4A472] uppercase cursor-pointer focus:outline-none transition-colors duration-300 flex items-center gap-2"
          >
            Skip Intro
            <span className="block w-4 h-px bg-current" />
          </motion.button>

    </motion.div>
  );
}

function WelcomeBtn({ label, delay, onClick, primary = false }: {
  label: string; delay: number; onClick: () => void; primary?: boolean;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className={`h-10 px-6 text-[9px] sm:text-[10px] tracking-[0.25em] font-sans font-medium uppercase cursor-pointer focus:outline-none transition-colors duration-300 ${
        primary
          ? 'bg-[#C4A472] text-[#0A0908] hover:bg-[#E8D4A8]'
          : 'border border-[#C4A472]/40 text-[#C4A472] hover:border-[#C4A472] hover:bg-[#C4A472]/10'
      }`}
    >
      {label}
    </motion.button>
  );
}