'use client';

import { motion } from 'motion/react';
import Hero from '@/components/Hero';
import StaySection from '@/components/StaySection';
import HallsSection from '@/components/HallsSection';
import DiningSection from '@/components/DiningSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useBooking } from '@/components/ClientShell';
import { useScrollReveal } from '@/lib/useScrollReveal';

// Wrapper so every section slides over the fixed hero bg
function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative" style={{ zIndex: 1 }}>
      {children}
    </div>
  );
}

function TeaserQuote() {
  const { ref, isInView } = useScrollReveal(0.3);
  return (
    <section
      id="stay-teaser"
      className="relative bg-[#0D0B09] text-[#F2ECE2] px-6 md:px-12 py-28 flex items-center justify-center border-t border-[#C4A472]/15"
    >
      <div ref={ref} className="max-w-3xl text-center space-y-6 select-none relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="text-[10px] font-mono tracking-[0.35em] text-[#C4A472] uppercase block"
        >
          THE COMMITTAL
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          className="font-serif italic font-light text-xl md:text-3xl text-[#F2ECE2] leading-relaxed"
        >
          "This is not a stay. This is stepping into a memory before it unfolds.
          High-ceiling elegance, wild-corridor proximity, and the absolute discretion of quiet luxury."
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="w-12 h-px bg-[#C4A472]/40 mx-auto origin-center"
        />
      </div>
    </section>
  );
}

export default function HomePage() {
  const { handleOpenBooking } = useBooking();

  const handleExplore = () => {
    document.getElementById('stay-teaser')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero sits at z-index 0 with fixed bg image */}
      <Hero onExplore={handleExplore} onOpenBooking={() => handleOpenBooking('room')} />

      {/* Everything below overlaps the fixed hero image on scroll */}
      <SectionWrapper>
        <TeaserQuote />
        <StaySection onOpenBooking={(_roomName) => handleOpenBooking('room')} />
        <HallsSection onOpenBooking={(_hallName) => handleOpenBooking('hall')} />
        <DiningSection onOpenBooking={() => handleOpenBooking('dining')} />
      </SectionWrapper>
    </div>
  );
}