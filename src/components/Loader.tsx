'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // Progress counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return Math.min(prev + Math.floor(Math.random() * 6) + 3, 100);
      });
    }, 110);
    return () => clearInterval(interval);
  }, []);

  // Trigger exit after 100%
  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => setReady(true), 600);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (ready) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [ready, onComplete]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-[#0A0908] flex flex-col items-center justify-center overflow-hidden select-none"
          exit={{ y: '-100%' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Corner frames */}
          {[
            'top-6 left-6 border-t border-l',
            'top-6 right-6 border-t border-r',
            'bottom-6 left-6 border-b border-l',
            'bottom-6 right-6 border-b border-r',
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${cls} border-[#C4A472]/20`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
            />
          ))}

          {/* Center content */}
          <div className="flex flex-col items-center gap-8 px-6">

            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-dashed border-[#C4A472]/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute -inset-1 rounded-full border border-[#C4A472]/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              />

              {/* Logo image — already circular */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-[0_0_60px_rgba(196,164,114,0.15)]">
                <img
                  src="/thegrandicon_logo.webp"
                  alt="The Grand Icon"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Brand name */}
            <div className="text-center space-y-1 overflow-hidden">
              <div className="overflow-hidden">
                <motion.h1
                  className="font-serif font-light text-2xl sm:text-3xl tracking-[0.3em] uppercase text-[#F2ECE2]"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                  The Grand <span className="italic text-[#C4A472]">Icon</span>
                </motion.h1>
              </div>
              <motion.p
                className="text-[9px] sm:text-[10px] font-mono tracking-[0.45em] text-[#7A7068] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.8 }}
              >
                Chandrapur · Maharashtra
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              className="w-48 sm:w-64 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="h-px w-full bg-[#C4A472]/12 relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-[#C4A472] to-[#C4A472]/60"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.15 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-mono tracking-[0.3em] text-[#5A524A] uppercase">
                  Loading
                </span>
                <span className="text-[9px] font-mono text-[#C4A472] tabular-nums">
                  {String(progress).padStart(3, '0')}%
                </span>
              </div>
            </motion.div>

          </div>

          {/* Bottom location tag */}
          <motion.div
            className="absolute bottom-8 text-[8px] font-mono tracking-[0.3em] text-[#5A524A] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            VIP Circle · Civil Lines · Chandrapur
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}