'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS } from '@/types';
import { ChevronLeft, ChevronRight, Users, Layers, Award, BedDouble } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import RoomTabs from '@/components/RoomTabs';

interface StaySectionProps {
  onOpenBooking: (roomName: string) => void;
  standalone?: boolean;
}

const fmt = (n: number) =>
  '₹' + n.toLocaleString('en-IN');

export default function StaySection({ onOpenBooking, standalone = false }: StaySectionProps) {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx]   = useState(0);

  const room = ROOMS[selectedRoomIdx];

  const handleNextImage = () => setActiveImageIdx((p) => (p + 1) % room.images.length);
  const handlePrevImage = () => setActiveImageIdx((p) => (p - 1 + room.images.length) % room.images.length);

  const handleRoomSelect = (idx: number) => {
    setSelectedRoomIdx(idx);
    setActiveImageIdx(0);
  };

  return (
    <section
      id="stay-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-px h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-px h-full bg-[#C4A472]/5" />
        <div className="w-px h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <SectionHeader title="The Rooms &" accent="Suites" eyebrow={''} />

        <RoomTabs
          tabs={ROOMS.map((r) => ({ id: r.id, name: r.name }))}
          selectedIdx={selectedRoomIdx}
          onSelect={handleRoomSelect}
        />

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: details */}
          <div className="lg:col-span-5 flex flex-col justify-center select-none lg:pr-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
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

                <p className="font-sans text-[14px] text-[#7A7068] leading-relaxed font-light">
                  {room.description}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#C4A472]/10">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <BedDouble className="w-4 h-4" />
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#7A7068]">Bed Config</span>
                    </div>
                    <span className="block font-sans text-[#F2ECE2] text-xs leading-snug">{room.bedConfig}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <Layers className="w-4 h-4" />
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#7A7068]">Floor</span>
                    </div>
                    <span className="block font-sans text-[#F2ECE2] text-xs">{room.floor}</span>
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-[#C4A472]">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#7A7068]">Room Numbers</span>
                    </div>
                    <span className="block font-mono text-[#7A7068] text-[10px] tracking-wider">{room.roomNos}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                    Tariff per Night
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Single', value: room.pricing.single },
                      { label: 'Double', value: room.pricing.double },
                      { label: 'Triple', value: room.pricing.triple },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-[#0A0908]/60 border border-[#C4A472]/10 px-3 py-3 text-center">
                        <span className="block text-[8px] font-mono tracking-widest uppercase text-[#5A524A] mb-1">
                          {label}
                        </span>
                        <span className="block font-serif text-[#C4A472] text-base">
                          {fmt(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] font-mono text-[#5A524A] tracking-wider">
                    * Prices exclusive of taxes. Subject to availability.
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start">
                  <button
                    onClick={() => onOpenBooking(room.name)}
                    className="h-12 px-8 flex items-center justify-center border border-[#C4A472] bg-[#C4A472]/10 hover:bg-[#C4A472] hover:text-[#0A0908] text-[#C4A472] text-[10px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-500 cursor-pointer"
                  >
                    Book This Room &rarr;
                  </button>
                  {/* <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#7A7068] uppercase self-center">
                    <Award className="w-4 h-4 text-[#C4A472]" />
                    Every detail remembered
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: image carousel */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] bg-[#0A0908] overflow-hidden group border border-[#C4A472]/15 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${room.id}-${activeImageIdx}`}
                  initial={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full"
                >
                  <img
                    src={room.images[activeImageIdx]}
                    alt={`${room.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms] ease-out brightness-[0.85] will-change-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-[#161412]/20 opacity-40" />
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <div className="absolute bottom-5 right-5 flex gap-2 z-10">
                <button onClick={handlePrevImage}
                  className="w-9 h-9 flex items-center justify-center border border-[#C4A472]/40 bg-[#161412]/80 hover:bg-[#C4A472] hover:text-[#161412] transition-colors duration-300 focus:outline-none cursor-pointer">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={handleNextImage}
                  className="w-9 h-9 flex items-center justify-center border border-[#C4A472]/40 bg-[#161412]/80 hover:bg-[#C4A472] hover:text-[#161412] transition-colors duration-300 focus:outline-none cursor-pointer">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 z-10 bg-[#161412]/70 backdrop-blur-md px-3 py-2 border border-[#C4A472]/10">
                {room.images.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveImageIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImageIdx === idx ? 'w-7 bg-[#C4A472]' : 'w-2 bg-[#7A7068]/50 hover:bg-[#C4A472]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}