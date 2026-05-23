'use client';
import { motion, AnimatePresence } from 'motion/react';
import { HALLS } from '@/types';
import { Circle, Info, Layers, ShieldCheck, UsersRound } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface HallsSectionProps {
  onOpenBooking: (hallName: string) => void;
  standalone?: boolean;
}

export default function HallsSection({ onOpenBooking, standalone = false }: HallsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const hall = HALLS[activeIdx];

  return (
    <section
      id="halls-section"
      className="relative min-h-screen bg-[#0A0908] text-[#F2ECE2] flex flex-col justify-center py-20 border-t border-[#C4A472]/15"
    >
      {/* Film Grain */}
      <div className="absolute inset-0 z-1 cinematic-grain pointer-events-none" />

      {/* Grid line dividers */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader title="Celebration" accent="Halls" eyebrow={''} />

        {/* Cinematic Backdrop + Detail split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[500px]">
          {/* Left panel: Custom navigation and technical data specification */}
          <div className="lg:col-span-4 flex flex-col justify-center select-none space-y-8 lg:pr-6">
            <span className="text-[9px] tracking-[0.3em] font-mono text-[#7A7068] uppercase">
              Select A Destination
            </span>

            {/* Selector list */}
            <div className="flex flex-col gap-4">
              {HALLS.map((h, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    id={`hall-select-btn-${h.id}`}
                    key={h.id}
                    onClick={() => setActiveIdx(idx)}
                    className="group flex items-center justify-between text-left py-4 px-6 border border-[#C4A472]/10 hover:border-[#C4A472]/30 transition-colors duration-500 cursor-pointer focus:outline-none bg-[#161412]/35 relative"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeHallBorder"
                        className="absolute inset-0 border-l-[3px] border-[#C4A472] pointer-events-none"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div>
                      <span className={`block text-xs font-mono tracking-widest uppercase mb-1 ${isActive ? 'text-[#C4A472]' : 'text-[#7A7068]'}`}>
                        Destination 0{idx + 1}
                      </span>
                      <span className={`font-serif text-[18px] md:text-[21px] transition-colors duration-500 ${isActive ? 'text-[#F2ECE2]' : 'text-[#7A7068] group-hover:text-[#F2ECE2]'}`}>
                        {h.name}
                      </span>
                    </div>
                    <Circle className={`w-2.5 h-2.5 transition-colors duration-500 ${isActive ? 'fill-[#C4A472] text-[#C4A472]' : 'text-[#7A7068] group-hover:text-[#C4A472]'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Grand interactive full screen card */}
          <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden border border-[#C4A472]/15 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-[#100E0C]">
            {/* Visual background sequence */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hall.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={hall.image}
                    alt={hall.name}
                    className="w-full h-full object-cover opacity-35 filter saturate-75 brightness-[0.6]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark layout vignettes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-transparent to-[#0A0908]/95" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Inside Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 min-h-[450px]">
              {/* Dynamic Capacity Badge & Info */}
              <div className="flex justify-between items-start gap-4">
                <div className="px-4 py-2 border border-[#C4A472]/30 bg-[#0A0908]/85 backdrop-blur-md rounded-none flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#C4A472] uppercase">
                    CAPACITY: {hall.capacity}
                  </span>
                </div>

                {/* <div className="text-[10px] font-mono tracking-widest uppercase text-[#7A7068] flex items-center gap-1">
                  <Info className="w-4 h-4 text-[#C4A472]" />
                  Aman-standard acoustics
                </div> */}
              </div>

              {/* Dynamic details inside name wipe */}
              <div className="space-y-6 pt-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hall.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    <span className="text-[11px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                      {hall.tagline}
                    </span>
                    <h3 className="font-serif font-light text-3xl md:text-[56px] leading-[1] text-[#F2ECE2] tracking-tight">
                      {hall.name}
                    </h3>
                    <p className="font-sans text-sm md:text-[15px] text-[#7A7068] leading-relaxed max-w-xl font-light">
                      {hall.description}
                    </p>

                    {/* Technical details checkboxes */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                      {hall.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rotate-45 bg-[#C4A472]" />
                          <span className="text-[10px] md:text-xs font-mono text-[#7A7068] uppercase tracking-wider">
                            {amenity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Reservation Action Button */}
                <div className="pt-6 border-t border-[#C4A472]/10 flex items-center justify-between flex-wrap gap-4">
                  <button
                    id={`hall-reserve-${hall.id}`}
                    onClick={() => onOpenBooking(hall.name)}
                    className="h-11 px-8 border border-[#C4A472]/50 hover:border-[#C4A472] bg-[#0A0908]/80 hover:bg-[#C4A472]/5 text-[#C4A472] text-[10px] tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-500 cursor-pointer"
                  >
                    Enquire Assembly &rarr;
                  </button>

                  <div className="flex items-center gap-2 text-[9px] font-mono tracking-wider text-[#7A7068] uppercase">
                    <ShieldCheck className="w-4 h-4 text-[#C4A472]" />
                    Safe-guards, valet parking & security included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}