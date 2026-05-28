'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, ChevronRight, BedDouble, Landmark, UtensilsCrossed,
  Wifi, Coffee, Newspaper, Tv2, ShieldCheck, Shirt, Clock, Droplets,
  Wind, Apple, Check, Users, LayoutGrid, Mic2, MonitorPlay, ChefHat,
} from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onOpenBooking: (type?: 'room' | 'hall' | 'dining' | 'event') => void;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ROOMS = [
  {
    id: 'presidential',
    name: 'Presidential Suite',
    tagline: 'THE PINNACLE',
    description:
      'Experience unmatched luxury in our Presidential Suite featuring a spacious bedroom, elegant living room, luxury bathroom, smart entertainment system, premium furnishings, and personalised guest services designed for the ultimate stay experience.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1400',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1400',
    ],
    hasFruitBasket: true,
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    tagline: 'REFINED COMMAND',
    description:
      'A harmonious blend of executive comfort and contemporary elegance. The Executive Suite offers a private living space, high-speed connectivity, and curated amenities for the discerning business traveller.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1400',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1400',
    ],
    hasFruitBasket: true,
  },
  {
    id: 'premium',
    name: 'Premium Room',
    tagline: 'CURATED COMFORT',
    description:
      'Thoughtfully appointed with plush furnishings and modern conveniences, the Premium Room delivers an elevated stay that balances style, space, and serenity for every guest.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1400',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1400',
    ],
    hasFruitBasket: false,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'QUIET ELEGANCE',
    description:
      'The Deluxe Room is a retreat of quiet comfort — warm interiors, crisp linens, and attentive service converge to create a relaxing haven after a long day of travel or celebration.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1400',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=1400',
    ],
    hasFruitBasket: false,
  },
  {
    id: 'superior',
    name: 'Superior Room',
    tagline: 'WARM SANCTUARY',
    description:
      'Ideal for travellers seeking a cosy, well-equipped sanctuary. The Superior Room offers all essential comforts in a tastefully designed space, ensuring a restful and memorable stay.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1400',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=80&w=1400',
      'https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=1400',
    ],
    hasFruitBasket: false,
  },
];

const BASE_AMENITIES = [
  { icon: Wifi,       label: 'Free High-Speed Wi-Fi' },
  { icon: Coffee,     label: 'Complimentary Breakfast' },
  { icon: Newspaper,  label: 'Daily Newspaper' },
  { icon: Coffee,     label: 'Tea / Coffee Maker' },
  { icon: Tv2,        label: 'Smart LED Television' },
  { icon: ShieldCheck,label: 'Electronic Safe Locker' },
  { icon: Droplets,   label: 'Premium Toiletries' },
  { icon: Shirt,      label: 'Laundry Service' },
  { icon: Clock,      label: '24-Hour Room Service' },
  { icon: Droplets,   label: 'Mineral Water' },
  { icon: Wind,       label: 'Air Conditioning' },
];

const HALLS = [
  {
    id: 'sparsh',
    name: 'Sparsh',
    tagline: 'INTIMATE GRANDEUR',
    description: 'An intimate celebration space finished in warm tones, perfect for weddings, private gatherings, and corporate retreats where every detail feels personal.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1400',
    capacity: 'Up to 300',
    setups: ['Theatre Style', 'Cluster Setup', 'Round Table'],
    features: ['LED Wall', 'Stage Setup', 'Catering Services', 'AV Facilities'],
  },
  {
    id: 'majesty',
    name: 'Majesty',
    tagline: 'REGAL SPLENDOUR',
    description: 'Our flagship hall commands attention with its soaring ceilings, crystal chandeliers, and adaptable floor plan — the ideal canvas for landmark weddings and galas.',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1400',
    capacity: 'Up to 700',
    setups: ['Theatre Style', 'Cluster Setup', 'Round Table', 'Wedding Setup'],
    features: ['LED Wall', 'Line Array Sound', 'Stage Setup', 'Catering Services'],
  },
  {
    id: 'harmony',
    name: 'Harmony',
    tagline: 'BALANCED GRACE',
    description: 'Harmony lives up to its name — a balanced, versatile space offering seamless transitions between conference and celebration modes.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1400',
    capacity: 'Up to 450',
    setups: ['Theatre Style', 'Cluster Setup', 'Round Table'],
    features: ['AV Facilities', 'Stage Setup', 'Catering Services', 'Valet Parking'],
  },
  {
    id: 'suraahi',
    name: 'Suraahi',
    tagline: 'CULTURAL ELEGANCE',
    description: 'Inspired by Chandrapur\'s heritage, Suraahi brings cultural richness and architectural grace to every event from Sangeet nights to royal receptions.',
    image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1400',
    capacity: 'Up to 550',
    setups: ['Theatre Style', 'Cluster Setup', 'Round Table', 'Wedding Setup'],
    features: ['LED Wall', 'Stage Setup', 'Wedding Packages', 'Catering Services'],
  },
];

const DINING_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', label: 'Restaurant Interior' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000', label: 'Buffet Area' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000', label: 'Family Dining Space' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000', label: 'Live Kitchen Counter' },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function SlideCounter({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono text-[#7A7068]">
      <span className="text-[#C4A472]">{String(current + 1).padStart(2, '0')}</span>
      <span className="w-8 h-px bg-[#C4A472]/30" />
      <span>{String(total).padStart(2, '0')}</span>
    </div>
  );
}

function NavDots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  const LABELS = ['Welcome', 'Rooms & Suites', 'Banquet Halls', 'Saatvik Dining'];
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          title={LABELS[i]}
          className="group relative flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span
            className={`block h-[2px] rounded-full transition-all duration-500 ${
              active === i ? 'w-8 bg-[#C4A472]' : 'w-3 bg-[#7A7068]/40 group-hover:bg-[#C4A472]/50'
            }`}
          />
          {active === i && (
            <span className="hidden md:block text-[8px] font-mono tracking-[0.2em] text-[#C4A472] uppercase whitespace-nowrap">
              {LABELS[i]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── SLIDE 1: WELCOME ─────────────────────────────────────────────────────────

function WelcomeSlide({ onOpenBooking }: { onOpenBooking: HeroProps['onOpenBooking'] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* BG Video / Image */}
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 bg-[#0A0908]" animate={{ opacity: videoReady ? 0 : 1 }} transition={{ duration: 1 }} />
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          onCanPlayThrough={() => setVideoReady(true)}
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.6) brightness(0.45)' }}
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if no video */}
        <img
          src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1920"
          alt="The Grand Icon"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.5) brightness(0.4)', opacity: videoReady ? 0 : 1, transition: 'opacity 1s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,9,8,0.7)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left: Namaste welcome block */}
        <div className="text-left max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="block text-[10px] font-mono tracking-[0.45em] text-[#C4A472] uppercase mb-5"
          >
            CHANDRAPUR · EST. 2024 · MAHARASHTRA
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden mb-3"
          >
            <h1 className="font-serif font-light text-[52px] sm:text-[72px] md:text-[88px] leading-[0.92] text-[#F2ECE2] tracking-tight">
              The{' '}
              <span className="italic text-[#C4A472] font-normal">Grand</span>
              {' '}Icon.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
            className="font-serif italic text-base md:text-lg text-[#7A7068] leading-relaxed max-w-lg mb-10 font-light"
          >
            "Welcome to The Grand Icon — Luxury, Comfort &amp; Indian Hospitality."
          </motion.p>

          {/* Namaste badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="inline-flex items-center gap-3 px-5 py-3 border border-[#C4A472]/30 bg-[#161412]/70 backdrop-blur-md mb-10"
          >
            <span className="text-2xl select-none">🙏</span>
            <div>
              <span className="block text-[9px] font-mono tracking-[0.3em] text-[#C4A472] uppercase">General Manager's Welcome</span>
              <span className="block font-serif text-sm text-[#F2ECE2] font-light">Namaste — We are honoured to receive you.</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onOpenBooking('room')}
              className="group relative h-12 px-8 flex items-center justify-center border border-[#C4A472] bg-[#C4A472]/10 overflow-hidden cursor-pointer focus:outline-none"
            >
              <div className="absolute inset-0 bg-[#C4A472] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10 text-[10px] tracking-[0.3em] font-sans font-semibold uppercase text-[#C4A472] group-hover:text-[#0A0908] transition-colors duration-500">
                Book Now
              </span>
            </button>

            <button
              onClick={() => onOpenBooking('hall')}
              className="h-12 px-8 flex items-center justify-center border border-[#C4A472]/35 hover:border-[#C4A472]/70 text-[#C4A472] hover:bg-[#C4A472]/5 text-[10px] tracking-[0.3em] font-sans font-semibold uppercase transition-colors duration-500 cursor-pointer focus:outline-none"
            >
              Banquet Enquiry
            </button>

            <button
              onClick={() => onOpenBooking('dining')}
              className="h-12 px-8 flex items-center justify-center border border-[#C4A472]/20 hover:border-[#C4A472]/50 text-[#7A7068] hover:text-[#C4A472] text-[10px] tracking-[0.3em] font-sans font-semibold uppercase transition-colors duration-500 cursor-pointer focus:outline-none"
            >
              Restaurant Reservation
            </button>
          </motion.div>
        </div>

        {/* Right: Hotel exterior card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="hidden lg:block w-[340px] shrink-0"
        >
          <div className="relative border border-[#C4A472]/20 overflow-hidden aspect-[3/4] bg-[#161412]">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=700"
              alt="The Grand Icon Exterior"
              className="w-full h-full object-cover opacity-60 filter saturate-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="block text-[8px] font-mono tracking-[0.35em] text-[#C4A472] uppercase mb-1">Hotel Exterior</span>
              <span className="font-serif text-lg text-[#F2ECE2] font-light">VIP Circle, Civil Lines</span>
              <span className="block text-xs font-mono text-[#7A7068] mt-0.5">Chandrapur, Maharashtra — 442401</span>
            </div>
            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C4A472]/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C4A472]/40" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── SLIDE 2: ROOMS & SUITES ──────────────────────────────────────────────────

function RoomsSlide({ onOpenBooking }: { onOpenBooking: HeroProps['onOpenBooking'] }) {
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  const room = ROOMS[activeRoom];

  const handleRoomSelect = (idx: number) => {
    setActiveRoom(idx);
    setActiveImg(0);
  };

  return (
    <div className="relative w-full h-full flex items-center">
      {/* BG image blurred */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={room.id + '-bg'}
            src={room.image}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.3) brightness(0.25) blur(2px)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#0A0908]/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-[9px] font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-1">SLIDE 02 — CHAMBERS OF SOLITUDE</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-[#F2ECE2] tracking-tight">
              Rooms &amp; <span className="italic text-[#C4A472]">Suites</span>
            </h2>
          </div>
          <button
            onClick={() => onOpenBooking('room')}
            className="hidden sm:flex h-10 px-6 items-center justify-center border border-[#C4A472]/50 hover:border-[#C4A472] text-[#C4A472] text-[9px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472]/5 transition-colors duration-500 cursor-pointer focus:outline-none"
          >
            Book A Room &rarr;
          </button>
        </div>

        {/* Room selector tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-[#C4A472]/10 pb-4">
          {ROOMS.map((r, idx) => (
            <button
              key={r.id}
              onClick={() => handleRoomSelect(idx)}
              className={`relative px-4 py-2 text-[9px] tracking-[0.22em] uppercase font-sans font-medium transition-all duration-400 cursor-pointer focus:outline-none ${
                activeRoom === idx ? 'text-[#C4A472]' : 'text-[#7A7068] hover:text-[#F2ECE2]'
              }`}
            >
              {activeRoom === idx && (
                <motion.span
                  layoutId="activeRoomTab"
                  className="absolute inset-0 border border-[#C4A472]/60 bg-[#C4A472]/8"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{r.name}</span>
            </button>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Image carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] bg-[#161412] overflow-hidden border border-[#C4A472]/15">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${room.id}-${activeImg}`}
                  src={room.images[activeImg]}
                  alt={room.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full object-cover brightness-[0.85]"
                />
              </AnimatePresence>
              {/* Dots */}
              <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeImg === i ? 'w-6 bg-[#C4A472]' : 'w-2 bg-[#7A7068]/50'
                    }`}
                  />
                ))}
              </div>
              {/* Corner */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C4A472]/50" />
            </div>

            {/* Image labels */}
            <div className="grid grid-cols-3 gap-1.5 mt-1.5">
              {['Bedroom', 'Living Area', 'Washroom'].map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActiveImg(i)}
                  className={`py-1.5 text-[8px] font-mono tracking-widest uppercase text-center transition-colors duration-300 border cursor-pointer ${
                    activeImg === i
                      ? 'border-[#C4A472]/50 text-[#C4A472] bg-[#C4A472]/5'
                      : 'border-[#C4A472]/10 text-[#7A7068] hover:text-[#C4A472]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Room details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block mb-1">{room.tagline}</span>
                  <h3 className="font-serif font-light text-2xl md:text-4xl text-[#F2ECE2]">{room.name}</h3>
                </div>

                <p className="font-sans text-sm text-[#7A7068] leading-relaxed font-light max-w-lg">{room.description}</p>

                {/* Amenities grid */}
                <div>
                  <span className="text-[8px] font-mono tracking-[0.3em] text-[#C4A472]/70 uppercase block mb-2.5">
                    Complimentary Amenities
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                    {BASE_AMENITIES.filter((a) => {
                      if (a.label === 'Fruit Basket on Arrival') return room.hasFruitBasket;
                      return true;
                    }).map((amenity, i) => {
                      const Icon = amenity.icon;
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#C4A472] shrink-0" />
                          <span className="text-[10px] font-sans text-[#7A7068]">{amenity.label}</span>
                        </div>
                      );
                    })}
                    {room.hasFruitBasket && (
                      <div className="flex items-center gap-2">
                        <Apple className="w-3 h-3 text-[#C4A472] shrink-0" />
                        <span className="text-[10px] font-sans text-[#C4A472]">Fruit Basket on Arrival</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('room')}
                  className="sm:hidden h-10 px-6 flex items-center justify-center border border-[#C4A472]/50 hover:border-[#C4A472] text-[#C4A472] text-[9px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472]/5 transition-colors duration-500 cursor-pointer focus:outline-none"
                >
                  Book This Room &rarr;
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 3: BANQUET HALLS ───────────────────────────────────────────────────

function HallsSlide({ onOpenBooking }: { onOpenBooking: HeroProps['onOpenBooking'] }) {
  const [activeHall, setActiveHall] = useState(0);
  const hall = HALLS[activeHall];

  return (
    <div className="relative w-full h-full flex items-center">
      {/* BG */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={hall.id + '-bg'}
            src={hall.image}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.25) brightness(0.2)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908] via-[#0A0908]/85 to-[#0A0908]/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-[9px] font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-1">SLIDE 03 — ROYAL ASSEMBLY GROUNDS</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-[#F2ECE2] tracking-tight">
              Banquet &amp; <span className="italic text-[#C4A472]">Event Spaces</span>
            </h2>
          </div>
          <button
            onClick={() => onOpenBooking('hall')}
            className="hidden sm:flex h-10 px-6 items-center justify-center border border-[#C4A472]/50 hover:border-[#C4A472] text-[#C4A472] text-[9px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472]/5 transition-colors duration-500 cursor-pointer focus:outline-none"
          >
            Request Banquet Proposal &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Hall selector */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2">
            {HALLS.map((h, idx) => (
              <button
                key={h.id}
                onClick={() => setActiveHall(idx)}
                className={`group relative text-left py-3 px-4 border transition-colors duration-400 cursor-pointer focus:outline-none flex-1 lg:flex-none ${
                  activeHall === idx
                    ? 'border-[#C4A472]/50 bg-[#C4A472]/5'
                    : 'border-[#C4A472]/10 hover:border-[#C4A472]/30'
                }`}
              >
                {activeHall === idx && (
                  <motion.div
                    layoutId="activeHallTab"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C4A472]"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={`block text-[8px] font-mono tracking-widest uppercase mb-0.5 ${activeHall === idx ? 'text-[#C4A472]' : 'text-[#5A524A]'}`}>
                  Hall 0{idx + 1}
                </span>
                <span className={`font-serif text-base transition-colors duration-300 ${activeHall === idx ? 'text-[#F2ECE2]' : 'text-[#7A7068] group-hover:text-[#F2ECE2]'}`}>
                  {h.name}
                </span>
              </button>
            ))}
          </div>

          {/* Hall image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] bg-[#161412] overflow-hidden border border-[#C4A472]/15">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hall.id}
                  src={hall.image}
                  alt={hall.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full object-cover brightness-75"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-transparent" />
              {/* Capacity badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0A0908]/85 border border-[#C4A472]/30 backdrop-blur-sm flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#C4A472]" />
                <span className="text-[9px] font-mono tracking-widest text-[#C4A472] uppercase">{hall.capacity} Guests</span>
              </div>
            </div>
          </div>

          {/* Hall details */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={hall.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[8px] font-mono tracking-[0.35em] text-[#C4A472] uppercase block mb-1">{hall.tagline}</span>
                  <h3 className="font-serif font-light text-2xl text-[#F2ECE2]">{hall.name}</h3>
                </div>

                <p className="font-sans text-xs text-[#7A7068] leading-relaxed font-light">{hall.description}</p>

                {/* Setup options */}
                <div>
                  <span className="text-[8px] font-mono tracking-[0.3em] text-[#C4A472]/70 uppercase block mb-2">Available Setups</span>
                  <div className="space-y-1.5">
                    {hall.setups.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <LayoutGrid className="w-3 h-3 text-[#C4A472]" />
                        <span className="text-[10px] font-sans text-[#7A7068]">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <span className="text-[8px] font-mono tracking-[0.3em] text-[#C4A472]/70 uppercase block mb-2">Facilities</span>
                  <div className="flex flex-wrap gap-2">
                    {hall.features.map((f) => (
                      <span key={f} className="px-2.5 py-1 text-[8px] font-mono tracking-wider text-[#7A7068] border border-[#C4A472]/15 uppercase">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('hall')}
                  className="sm:hidden h-10 px-5 flex items-center border border-[#C4A472]/50 text-[#C4A472] text-[9px] tracking-[0.25em] font-sans uppercase cursor-pointer"
                >
                  Request Proposal &rarr;
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom amenities strip */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-[#C4A472]/10 pt-4">
          {[
            { icon: MonitorPlay, label: 'LED Wall & AV' },
            { icon: Mic2,        label: 'Line Array Sound' },
            { icon: ChefHat,     label: 'Catering Services' },
            { icon: Users,       label: 'Valet & Security' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="w-7 h-7 border border-[#C4A472]/20 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#C4A472]" />
              </div>
              <span className="text-[9px] font-sans text-[#7A7068] font-light">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SLIDE 4: DINING ──────────────────────────────────────────────────────────

function DiningSlide({ onOpenBooking }: { onOpenBooking: HeroProps['onOpenBooking'] }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveImg((p) => (p + 1) % DINING_IMAGES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center">
      {/* BG */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg + '-bg'}
            src={DINING_IMAGES[activeImg].src}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(0.3) brightness(0.2)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/95 via-[#0A0908]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[9px] font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-1">SLIDE 04 — THE DECCAN GASTRONOMISTS</span>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#F2ECE2] tracking-tight mb-1">
                Saatvik <span className="italic text-[#C4A472]">Restaurant</span>
              </h2>
              <div className="h-px w-16 bg-[#C4A472]/40 mt-3" />
            </div>

            <p className="font-serif italic text-base md:text-lg text-[#7A7068] leading-relaxed font-light max-w-lg">
              "Saatvik Restaurant offers a delightful culinary journey featuring authentic Indian, Chinese,
              Continental and regional delicacies prepared by our experienced chefs."
            </p>

            {/* Cuisine highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Authentic Indian', sub: 'Varhadi & Heritage' },
                { label: 'Chinese Cuisine', sub: 'Contemporary Wok' },
                { label: 'Continental', sub: 'European Classics' },
                { label: 'Regional Specials', sub: 'Maharashtrian Roots' },
              ].map(({ label, sub }) => (
                <div key={label} className="flex items-start gap-2.5 p-3 border border-[#C4A472]/10 bg-[#161412]/40">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#C4A472] mt-1.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-sans text-[#F2ECE2] font-medium">{label}</span>
                    <span className="block text-[9px] font-mono text-[#7A7068] mt-0.5">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onOpenBooking('dining')}
                className="group relative h-12 px-8 flex items-center justify-center border border-[#C4A472] bg-[#C4A472]/10 overflow-hidden cursor-pointer focus:outline-none"
              >
                <div className="absolute inset-0 bg-[#C4A472] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 text-[10px] tracking-[0.3em] font-sans font-semibold uppercase text-[#C4A472] group-hover:text-[#0A0908] transition-colors duration-500">
                  Reserve Table
                </span>
              </button>
              <button
                onClick={() => onOpenBooking('dining')}
                className="h-12 px-8 flex items-center justify-center border border-[#C4A472]/30 hover:border-[#C4A472]/60 text-[#7A7068] hover:text-[#C4A472] text-[10px] tracking-[0.3em] font-sans font-semibold uppercase transition-colors duration-500 cursor-pointer focus:outline-none"
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Right: Image gallery */}
          <div className="lg:col-span-6 space-y-2">
            {/* Main image */}
            <div className="relative aspect-[16/9] bg-[#161412] overflow-hidden border border-[#C4A472]/15">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={DINING_IMAGES[activeImg].src}
                  alt={DINING_IMAGES[activeImg].label}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full object-cover brightness-80"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-[#0A0908]/80 border border-[#C4A472]/20 backdrop-blur-sm">
                <span className="text-[8px] font-mono tracking-[0.3em] text-[#C4A472] uppercase">
                  {DINING_IMAGES[activeImg].label}
                </span>
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-2">
              {DINING_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square overflow-hidden border transition-all duration-300 cursor-pointer ${
                    activeImg === i ? 'border-[#C4A472]/70' : 'border-[#C4A472]/10 hover:border-[#C4A472]/40'
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover brightness-60" />
                  {activeImg === i && (
                    <div className="absolute inset-0 bg-[#C4A472]/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN HERO COMPONENT ──────────────────────────────────────────────────────

const SLIDE_COUNT = 4;
const AUTO_ADVANCE_MS = 9000;

export default function Hero({ onExplore, onOpenBooking }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrentSlide(((idx % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % SLIDE_COUNT);
    setIsAutoPlaying(false);
    clearTimeout(timerRef.current!);
    // Resume auto-play after user interaction
    timerRef.current = setTimeout(() => setIsAutoPlaying(true), 12000);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((p) => (p - 1 + SLIDE_COUNT) % SLIDE_COUNT);
    setIsAutoPlaying(false);
    clearTimeout(timerRef.current!);
    timerRef.current = setTimeout(() => setIsAutoPlaying(true), 12000);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    const t = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % SLIDE_COUNT);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [isAutoPlaying]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Cleanup timer on unmount
  useEffect(() => () => { clearTimeout(timerRef.current!); }, []);

  const handleDotSelect = (i: number) => {
    goTo(i);
    setIsAutoPlaying(false);
    clearTimeout(timerRef.current!);
    timerRef.current = setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const SLIDES = [
    <WelcomeSlide key="welcome" onOpenBooking={onOpenBooking} />,
    <RoomsSlide   key="rooms"   onOpenBooking={onOpenBooking} />,
    <HallsSlide   key="halls"   onOpenBooking={onOpenBooking} />,
    <DiningSlide  key="dining"  onOpenBooking={onOpenBooking} />,
  ];

  return (
    <section
      id="cinematic-hero"
      className="relative w-full h-[100dvh] bg-[#0A0908] overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Cinematic grain overlay */}
      <div className="cinematic-grain absolute inset-0 pointer-events-none z-[5]" style={{ willChange: 'transform' }} />

      {/* Slide viewport */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            {SLIDES[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom control bar ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Left: nav dots */}
        <NavDots count={SLIDE_COUNT} active={currentSlide} onSelect={handleDotSelect} />

        {/* Center: progress bar */}
        <div className="hidden md:flex flex-1 mx-8 items-center">
          <div className="w-full h-px bg-[#C4A472]/10 relative overflow-hidden">
            {isAutoPlaying && (
              <motion.div
                key={currentSlide + '-progress'}
                className="absolute left-0 top-0 h-full bg-[#C4A472]/50"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
              />
            )}
          </div>
        </div>

        {/* Right: counter + arrows */}
        <div className="flex items-center gap-4">
          <SlideCounter current={currentSlide} total={SLIDE_COUNT} />
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="w-9 h-9 flex items-center justify-center border border-[#C4A472]/25 hover:border-[#C4A472]/60 text-[#7A7068] hover:text-[#C4A472] transition-colors duration-300 cursor-pointer focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="w-9 h-9 flex items-center justify-center border border-[#C4A472]/25 hover:border-[#C4A472]/60 text-[#7A7068] hover:text-[#C4A472] transition-colors duration-300 cursor-pointer focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Corner grid accents ─────────────────────────────────── */}
      <div className="absolute top-24 left-6 md:left-12 w-5 h-5 border-t border-l border-[#C4A472]/20 pointer-events-none z-10" />
      <div className="absolute top-24 right-6 md:right-12 w-5 h-5 border-t border-r border-[#C4A472]/20 pointer-events-none z-10" />
    </section>
  );
}