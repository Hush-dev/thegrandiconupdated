'use client';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/types';
import { MessageSquare, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials-section"
      className="relative min-h-[500px] h-[70vh] bg-[#0A0908] text-[#F2ECE2] flex flex-col justify-center items-center py-20 px-6 overflow-hidden border-t border-[#C4A472]/15"
    >
      {/* Background Graphic: Giant quotation mark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-5 select-none pointer-events-none z-0">
        <Quote className="w-80 h-80 text-[#C4A472]" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">
        {/* Category Indicator */}
        <div className="flex flex-col items-center gap-2 select-none">
          <MessageSquare className="w-5 h-5 text-[#C4A472]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-[#C4A472]">
            GUEST TESTIMONIALS
          </span>
        </div>

        {/* Carousel Content AnimatePresence layout */}
        <div className="min-h-[220px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-6"
            >
              <p className="font-serif italic font-light text-2xl sm:text-3xl md:text-4xl text-[#F2ECE2] leading-relaxed max-w-2xl mx-auto">
                “{t.quote}”
              </p>

              {/* Gold border divider */}
              <div className="w-16 h-[1.5px] bg-[#C4A472]/45 mx-auto my-4" />

              <div className="space-y-1">
                <h4 className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-[#F2ECE2]">
                  {t.author}
                </h4>
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest text-[#7A7068] uppercase">
                  <span>{t.occasion}</span>
                  <span>•</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Simple pill-dot indicators */}
        <div className="flex justify-center items-center gap-3 pt-6 z-20">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1 px-4 rounded-none transition-all duration-500 cursor-pointer ${
                activeIdx === idx ? 'bg-[#C4A472]' : 'bg-[#7A7068]/30 hover:bg-[#C4A472]/40'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}