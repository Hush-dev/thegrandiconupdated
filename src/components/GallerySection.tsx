'use client';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_MOMENTS } from '@/types';
import { Camera, Compass, Eye, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = ['All', 'Celebration', 'Structure', 'Dining', 'Excursion', 'Stay'];

  const filteredMoments = filter === 'All'
    ? GALLERY_MOMENTS
    : GALLERY_MOMENTS.filter((m) => m.category === filter);

  return (
    <section
      id="gallery-section"
      className="relative min-h-screen bg-[#0A0908] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Film grain */}
      <div className="absolute inset-0 z-0 cinematic-grain pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 select-none flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2]">
              The Visual <span className="italic text-[#C4A472]">Journey</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#7A7068] uppercase">
            <Camera className="w-4 h-4 text-[#C4A472]" />
            A glimpse into unhurried moments
          </div>
        </div>

        {/* Filter category row */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[#C4A472]/10 pb-6">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat}`}
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-500 cursor-pointer focus:outline-none ${
                filter === cat
                  ? 'bg-[#C4A472]/15 border border-[#C4A472] text-[#C4A472]'
                  : 'border border-transparent text-[#7A7068] hover:text-[#F2ECE2] hover:border-[#7A7068]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Grid of moments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMoments.map((moment, idx) => (
              <motion.div
                key={moment.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.08, ease: [0.76, 0, 0.24, 1] }}
                className="relative group cursor-pointer aspect-square bg-[#161412] overflow-hidden border border-[#C4A472]/10"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img
                  src={moment.image}
                  alt={moment.caption}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-transform duration-[8000ms] group-hover:scale-105 filter saturate-75 contrast-105 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient dynamic vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/20 opacity-70" />

                {/* Detail Tag */}
                <div className="absolute top-6 left-6 px-3 py-1.5 border border-[#C4A472]/30 bg-[#0A0908]/90 rounded-none text-[8px] font-mono tracking-widest text-[#C4A472] uppercase">
                  {moment.category}
                </div>

                {/* Capsule caption always bottom left, reveals text nicely */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="block text-[11px] font-sans font-light text-[#7A7068] uppercase tracking-widest mb-1.5 block">
                    JOURNAL MOMENT 0{idx + 1}
                  </span>
                  <span className="block font-serif text-[17px] md:text-lg text-[#F2ECE2] leading-tight font-light group-hover:text-[#C4A472] transition-colors duration-500">
                    {moment.caption}
                  </span>
                </div>

                {/* Magnetic Hover eye icon reveal */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0A0908]/40 backdrop-blur-[3px] pointer-events-none">
                  <div className="w-12 h-12 rounded-full border border-[#C4A472] flex items-center justify-center text-[#C4A472] bg-[#161412]/80">
                    <Eye className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tadoba National Park Wildlife spotlight banner */}
        <div className="mt-16 bg-[#161412] border border-[#C4A472]/15 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C4A472]/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-left space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C4A472]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                Local Excursion Gateway
              </span>
            </div>
            <h3 className="font-serif font-light text-2xl md:text-3xl text-[#F2ECE2]">
              Gateway to <span className="italic text-[#C4A472]">Tadoba-Andhari Tiger Reserve</span>
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#7A7068] leading-relaxed font-light">
              Nestled just minutes from Tadoba limits, The Grand Icon stands as the definitive starting luxury encampment for elite wildlife enthusiasts scanning the rare Bengal tiger corridors. Settle into modern chambers after a majestic wilderness sunset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}