'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  image: string;
  alt: string;
}

export default function PageBanner({ eyebrow, title, titleAccent, image, alt }: PageBannerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: image moves slower than scroll
  const imageY      = useTransform(scrollYProgress, [0, 1], ['0%',  '30%']);
  // Content fades and lifts as you scroll away
  const contentY    = useTransform(scrollYProgress, [0, 1], ['0%',  '-15%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative h-[45dvh] md:h-[52dvh] overflow-hidden bg-[#0A0908]">

      {/* Parallax image layer */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y: imageY, willChange: 'transform' }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.38) saturate(0.6)' }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/50 via-transparent to-transparent" />

      {/* Content with parallax lift */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
          {eyebrow}
        </span>
        <h1 className="font-serif font-light text-4xl sm:text-6xl text-[#F2ECE2] leading-tight">
          {title}{' '}
          <span className="italic text-[#C4A472]">{titleAccent}</span>
        </h1>
      </motion.div>
    </div>
  );
}