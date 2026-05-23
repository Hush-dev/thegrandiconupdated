'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenBooking: () => void;
}

export default function Hero({ onExplore, onOpenBooking }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Scroll progress of the hero section itself
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // As you scroll: content fades + slides up
  const contentY    = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Image: subtle scale-down as next section overlaps (parallax feel)
  const videoScale     = useTransform(scrollYProgress, [0, 1],    [1, 1.06]);
  const videoOpacity   = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);


  // Ensure video plays on mobile (requires muted + playsinline)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      // Autoplay blocked — video stays on first frame, still looks good
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cinematic-hero"
      className="relative w-full h-[100dvh] flex items-center bg-[#0A0908]"
      style={{ zIndex: 0 }}
    >
      {/* ── Fixed video background ──────────────────────────── */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
 
        {/* Fallback poster shown until video is ready */}
        <motion.div
          className="absolute inset-0 bg-[#0A0908]"
          animate={{ opacity: videoReady ? 0 : 1 }}
          transition={{ duration: 1 }}
        />
 
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onCanPlayThrough={() => setVideoReady(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            filter: 'saturate(0.7) brightness(0.6)',
            willChange: 'transform, opacity',
          }}
        >
          {/* webm first — smaller, better quality in Chrome/Firefox */}
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4"  type="video/mp4" />
        </motion.video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_15%,rgba(10,9,8,0.85)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent" style={{ opacity: 0.7 }} />
      </div>

      {/* Scrolling hero content — moves up and fades as you scroll */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-12 mt-12"
        style={{ y: contentY, opacity: contentOpacity, zIndex: 2 }}
      >
        <div className="max-w-2xl text-left select-none">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            {/* <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="block w-8 h-px bg-[#C4A472] origin-left"
            /> */}
            {/* <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase">
              CHANDRAPUR · EST. 2024
            </span> */}
          </motion.div>

          {/* Headline — words stagger in from below */}
          <div className="overflow-hidden mb-7 flex justify-center text-center">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif font-light text-[50px] sm:text-[75px] md:text-[100px] lg:text-[115px] leading-[0.93] text-[#F2ECE2] tracking-tight"
            >
              The{' '}
              <motion.span
                className="italic text-[#C4A472] font-normal inline-block"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              >
                Grand
              </motion.span>
              {' '}Icon.
            </motion.h1>
          </div>

          {/* Subtext */}
          {/* <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className="font-sans text-[14px] md:text-[16px] text-[#7A7068] leading-relaxed max-w-[460px] mb-10 font-light"
          >
            Where sanctuary meets celebration. Step into high-contrast spaces woven with quiet stories and unhurried luxury.
          </motion.p> */}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center gap-6"
          >
            {/* <button
              id="hero-reserve-btn"
              onClick={onOpenBooking}
              className="group relative h-12 px-8 flex items-center justify-center border border-[#C4A472] bg-[#C4A472]/10 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#C4A472] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10 text-[10px] sm:text-xs tracking-[0.3em] font-sans font-medium uppercase text-[#C4A472] group-hover:text-[#0A0908] transition-colors duration-500">
                Begin Enquiry
              </span>
            </button> */}

            {/* <button
              id="hero-discover-btn"
              onClick={onExplore}
              className="text-[10px] sm:text-xs tracking-[0.3em] font-sans font-medium uppercase text-[#7A7068] hover:text-[#F2ECE2] transition-colors duration-300 py-3 border-b border-transparent hover:border-[#F2ECE2] cursor-pointer"
            >
              Explore Atmosphere
            </button> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        style={{ opacity: contentOpacity }}
        onClick={onExplore}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
          className="text-[#C4A472]/70"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <div className="w-px h-10 bg-gradient-to-b from-[#C4A472]/40 to-transparent" />
      </motion.div>
    </section>
  );
}