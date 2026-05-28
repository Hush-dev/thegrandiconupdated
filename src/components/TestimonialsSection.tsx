'use client';

import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/types';
import {
  Quote,
  ArrowLeft,
  ArrowRight,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIdx((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[activeIdx];

  return (
    <section
      id="testimonials-section"
      className="relative overflow-hidden bg-[#0A0908] py-16 sm:py-20 border-t border-[#C4A472]/10"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4A472]/5 blur-3xl" />
      </div>

      {/* Quote Icon */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <Quote className="w-40 h-40 sm:w-56 sm:h-56 text-[#C4A472]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[10px] uppercase tracking-[0.35em] font-mono text-[#C4A472] mb-4">
            Guest Testimonials
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F2ECE2] leading-tight">
            Memories that
            <span className="italic text-[#C4A472]"> stay forever</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative border border-[#C4A472]/15 bg-[#141210]/60 backdrop-blur-xl rounded-[28px] overflow-hidden">

          {/* Top Line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C4A472]/40 to-transparent" />

          <div className="px-6 sm:px-10 py-10 sm:py-12">

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-7">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#C4A472] text-[#C4A472]"
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative min-h-[220px] sm:min-h-[240px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={t.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center"
                >
                  {/* Quote */}
                  <p className="font-serif italic font-light text-xl sm:text-2xl md:text-3xl leading-[1.7] text-[#F2ECE2] max-w-3xl mx-auto">
                    “{t.quote}”
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-px bg-[#C4A472]/40 mx-auto my-7" />

                  {/* Author */}
                  <div className="space-y-2">
                    <h4 className="uppercase tracking-[0.2em] text-sm text-[#F2ECE2]">
                      {t.author}
                    </h4>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] font-mono text-[#7A7068]">
                      <span>{t.occasion}</span>
                      <span>•</span>
                      <span>{t.date}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between gap-5 mt-8 flex-wrap">

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIdx ? 1 : -1);
                      setActiveIdx(idx);
                    }}
                    className={`transition-all duration-500 cursor-pointer ${
                      activeIdx === idx
                        ? 'w-10 h-[2px] bg-[#C4A472]'
                        : 'w-4 h-[2px] bg-[#7A7068]/40 hover:bg-[#C4A472]/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-[#C4A472]/15 hover:border-[#C4A472] hover:bg-[#C4A472] group transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4 text-[#F2ECE2] group-hover:text-[#0A0908]" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-[#C4A472]/15 hover:border-[#C4A472] hover:bg-[#C4A472] group transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-[#F2ECE2] group-hover:text-[#0A0908]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}