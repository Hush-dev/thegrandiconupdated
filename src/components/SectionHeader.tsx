'use client';

import { motion } from 'motion/react';
import { useScrollReveal } from '@/lib/useScrollReveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent: string;
}

export default function SectionHeader({ eyebrow, title, accent }: SectionHeaderProps) {
  const { ref, isInView } = useScrollReveal(0.2);

  return (
    <div ref={ref} className="mb-12 md:mb-16 select-none overflow-hidden">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3"
      >
        {eyebrow}
      </motion.span>

      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: '100%' }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2]"
        >
          {title} <span className="italic text-[#C4A472]">{accent}</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="h-px w-24 bg-[#C4A472]/40 mt-6 origin-left"
      />
    </div>
  );
}