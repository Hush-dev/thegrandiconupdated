'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS } from '@/types';
import { ChevronLeft, ChevronRight, Minimize2, Users, Layers, Award } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

interface StaySectionProps {
  onOpenBooking: (roomName: string) => void;
  standalone?: boolean;
}

export default function StaySection({ onOpenBooking, standalone = false }: StaySectionProps) {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const room = ROOMS[selectedRoomIdx];

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % room.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleRoomSelect = (idx: number) => {
    setSelectedRoomIdx(idx);
    setActiveImageIdx(0);
  };

  return (
    <section
      id="stay-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Structural visual grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <SectionHeader title="The Rooms &amp;" accent="Suites" eyebrow={''} />

        {/* Room Tab Selectors - Simple, Elegant Pill Row */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[#C4A472]/10 pb-6">
          {ROOMS.map((r, idx) => {
            const isSelected = selectedRoomIdx === idx;
            return (
              <button
                id={`room-tab-${r.id}`}
                key={r.id}
                onClick={() => handleRoomSelect(idx)}
                className={`px-6 py-3 text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-500 cursor-pointer focus:outline-none ${
                  isSelected
                    ? 'bg-[#C4A472]/15 border border-[#C4A472] text-[#C4A472]'
                    : 'border border-transparent text-[#7A7068] hover:text-[#F2ECE2] hover:border-[#7A7068]/30'
                }`}
              >
                {r.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric descriptive panel (Takeover space of 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center select-none lg:pr-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-[0.3em] text-[#C4A472] uppercase">
                    {room.tagline}
                  </span>
                  <h3 className="font-serif font-light text-3xl md:text-5xl text-[#F2ECE2]">
                    {room.name}
                  </h3>
                </div>

                <p className="font-sans text-[14.5px] text-[#7A7068] leading-relaxed font-light">
                  {room.description}
                </p>

                {/* Technical details in high contrast minimal grid */}
                <div className="grid grid-cols-3 gap-4 py-8 border-y border-[#C4A472]/10 my-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <Minimize2 className="w-4 h-4" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A7068]">
                        Area
                      </span>
                    </div>
                    <span className="block font-serif text-[#F2ECE2] text-lg">
                      {room.sqft} sq ft
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <Users className="w-4 h-4" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A7068]">
                        Guests
                      </span>
                    </div>
                    <span className="block font-serif text-[#F2ECE2] text-lg">
                      Up to {room.guests}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <Layers className="w-4 h-4" />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A7068]">
                        Floor
                      </span>
                    </div>
                    <span className="block font-serif text-[#F2ECE2] text-base truncate">
                      {room.floor}
                    </span>
                  </div>
                </div>

                {/* Experience CTA */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    id={`stay-reserve-${room.id}`}
                    onClick={() => onOpenBooking(room.name)}
                    className="h-12 px-8 flex items-center justify-center border border-[#C4A472] bg-[#C4A472]/10 hover:bg-[#C4A472] hover:text-[#0A0908] text-[#C4A472] text-[10px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-500 cursor-pointer"
                  >
                    Experience Suite &rarr;
                  </button>

                  {/* <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#7A7068] uppercase">
                    <Award className="w-4 h-4 text-[#C4A472]" />
                    Every detail remembered
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Immersive image cinema slide (Takeover 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] bg-[#0A0908] overflow-hidden group border border-[#C4A472]/15 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${room.id}-${activeImageIdx}`}
                  initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={room.images[activeImageIdx]}
                    alt={`${room.name} visual moment`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms] will-change-transform ease-out brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Local Warm haze overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-[#161412]/30 opacity-40" />
                </motion.div>
              </AnimatePresence>

              {/* Slide Navigation Buttons */}
              <div className="absolute bottom-6 right-6 flex gap-3 z-10">
                <button
                  id={`room-img-prev-${room.id}`}
                  onClick={handlePrevImage}
                  className="w-10 h-10 flex items-center justify-center border border-[#C4A472]/40 bg-[#161412]/80 hover:bg-[#C4A472] hover:text-[#161412] transition-colors duration-500 focus:outline-none cursor-pointer"
                  aria-label="Previous view"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id={`room-img-next-${room.id}`}
                  onClick={handleNextImage}
                  className="w-10 h-10 flex items-center justify-center border border-[#C4A472]/40 bg-[#161412]/80 hover:bg-[#C4A472] hover:text-[#161412] transition-colors duration-500 focus:outline-none cursor-pointer"
                  aria-label="Next view"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress dots inside the carousel */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 z-10 bg-[#161412]/70 backdrop-blur-md px-4 py-2 border border-[#C4A472]/10">
                {room.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-1.5 rounded-full transition-colors duration-500 cursor-pointer ${
                      activeImageIdx === idx ? 'w-8 bg-[#C4A472]' : 'w-2 bg-[#7A7068]/50 hover:bg-[#C4A472]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Soft backdrop golden accent glow */}
            <div className="absolute -inset-4 bg-[#C4A472]/2 blur-3xl pointer-events-none z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}