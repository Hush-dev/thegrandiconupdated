'use client';

import {
  Plane,
  Trees,
  Route,
  Compass,
  Navigation as NavIcon,
  MapPin,
  Clock3,
  Car,
} from 'lucide-react';

const ROUTES = [
  {
    title: 'Nagpur Airport',
    time: '2.5 Hour Drive',
    desc: 'Direct highway connectivity from Dr. Babasaheb Ambedkar International Airport.',
    icon: Plane,
    position: 'top-[12%] right-[10%]',
  },
  {
    title: 'Tadoba Reserve',
    time: '35 Minutes Away',
    desc: 'Quick access to Tadoba safari gates and wildlife experiences.',
    icon: Trees,
    position: 'top-[28%] left-[12%]',
  },
  {
    title: 'City Center',
    time: '5 Minutes Away',
    desc: 'Close to premium business districts and city conveniences.',
    icon: Route,
    position: 'bottom-[22%] left-[18%]',
  },
];

export default function LocationSection() {
  return (
    <section
      id="location-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Visual background details */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#C4A472]/3 blur-[120px] pointer-events-none" />

      {/* Grid line dividers */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 select-none">
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2]">
            Find <span className="italic text-[#C4A472]">The Icon</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#C4A472]/40 mt-6" />
        </div>

        {/* Location Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Address & Transport specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                The Sanctum Coordinates
              </span>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-[#F2ECE2]">
                VIP Circle, Civil Lines, Chandrapur, Maharashtra
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#7A7068] leading-relaxed max-w-xl font-light">
                Positioned inside Chandrapur’s high-prestige green civil enclave, the hotel provides immediate security safeguards, quiet leaf-shadowed drives, and absolute quietude, isolated completely from standard city traffic.
              </p>
            </div>

            {/* Transport pathways grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#C4A472]/10">
              {/* Nagpur Route */}
              <div className="space-y-4 bg-[#0A0908]/50 border border-[#C4A472]/10 p-6">
                <div className="h-10 w-10 border border-[#C4A472]/30 bg-[#161412] flex items-center justify-center text-[#C4A472]">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-[#F2ECE2]">
                    From Nagpur (NAG)
                  </h4>
                  <span className="block text-[11px] font-mono text-[#C4A472] mt-1">
                    ~2.5 Hour Highway Drive
                  </span>
                </div>
                <p className="font-sans text-[11.5px] text-[#7A7068] leading-relaxed font-light">
                  Enjoy an elegant private concierge sedan transport along the smooth Nagpur-Chandrapur Express corridor directly from Babasaheb Ambedkar International Airport.
                </p>
              </div>

              {/* Tadoba Route */}
              <div className="space-y-4 bg-[#0A0908]/50 border border-[#C4A472]/10 p-6">
                <div className="h-10 w-10 border border-[#C4A472]/30 bg-[#161412] flex items-center justify-center text-[#C4A472]">
                  <Car className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-[#F2ECE2]">
                    From Tadoba Tigers
                  </h4>
                  <span className="block text-[11px] font-mono text-[#C4A472] mt-1">
                    ~35 Minutes Drive
                  </span>
                </div>
                <p className="font-sans text-[11.5px] text-[#7A7068] leading-relaxed font-light">
                  Positioned with pristine proximity to the main reserve gates (Moharli and Khutwanda), allowing elite guests to return safely into royal room service after wilderness expeditions.
                </p>
              </div>

              {/* City Limits Route */}
              <div className="space-y-4 bg-[#0A0908]/50 border border-[#C4A472]/10 p-6">
                <div className="h-10 w-10 border border-[#C4A472]/30 bg-[#161412] flex items-center justify-center text-[#C4A472]">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-[#F2ECE2]">
                    Within City Limits
                  </h4>
                  <span className="block text-[11px] font-mono text-[#C4A472] mt-1">
                    ~5 Minutes Flight
                  </span>
                </div>
                <p className="font-sans text-[11.5px] text-[#7A7068] leading-relaxed font-light">
                  Instant strategic connectivity to central courts, high offices, ancient Gond King forts, and VIP government departments, preserving client discretion.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
<div className="lg:col-span-5">
  <div className="relative overflow-hidden border border-[#C4A472]/15 bg-[#0A0908] h-[620px] lg:h-[680px]">

    {/* MAP */}
    <iframe
      src="https://www.google.com/maps?q=VIP+Circle+Civil+Lines+Chandrapur+Maharashtra&output=embed"
      className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-[0.72]"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/40 via-[#0A0908]/20 to-[#0A0908]/90 z-10" />

    {/* GRID OVERLAY */}
    <div className="absolute inset-0 z-10 opacity-[0.05]">
      <div className="w-full h-full bg-[linear-gradient(to_right,#C4A472_1px,transparent_1px),linear-gradient(to_bottom,#C4A472_1px,transparent_1px)] bg-[size:52px_52px]" />
    </div>

    {/* TOP INFO */}
    <div className="absolute top-5 left-5 right-5 z-30 flex items-start justify-between">
      <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412]/90 backdrop-blur-md flex items-center justify-center text-[#C4A472]">
        <Compass className="w-4 h-4" />
      </div>

      <div className="bg-[#161412]/85 backdrop-blur-md border border-[#C4A472]/15 px-3 py-2 text-right">
        <span className="block text-[9px] font-mono tracking-[0.22em] text-[#C4A472]">
          LAT 19.9515° N
        </span>

        <span className="block text-[9px] font-mono tracking-[0.22em] text-[#C4A472] mt-1">
          LON 79.2961° E
        </span>
      </div>
    </div>

    {/* ROUTE LINES */}
    <svg
      className="absolute inset-0 z-20 w-full h-full hidden md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Nagpur */}
      <path
        d="M82 18 Q72 28 58 44"
        stroke="#C4A472"
        strokeWidth="0.35"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.65"
      />

      {/* Tadoba */}
      <path
        d="M16 34 Q30 38 46 48"
        stroke="#C4A472"
        strokeWidth="0.35"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.65"
      />

      {/* City */}
      <path
        d="M18 74 Q30 64 46 54"
        stroke="#C4A472"
        strokeWidth="0.35"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.65"
      />
    </svg>

    {/* ROUTE CARDS */}
    <div className="absolute inset-0 z-30 hidden md:block">

      {/* NAGPUR */}
      <div className="absolute top-[14%] right-[7%]">
        <div className="bg-[#161412]/92 backdrop-blur-xl border border-[#C4A472]/25 px-3 py-2 min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">

          <div className="flex items-center gap-2">
            <div className="h-6 w-6 border border-[#C4A472]/20 flex items-center justify-center text-[#C4A472]">
              <Plane className="w-3 h-3" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#C4A472]">
              Nagpur
            </span>
          </div>

          <span className="block text-[11px] text-[#F2ECE2] mt-2">
            2.5 Hour Drive
          </span>
        </div>
      </div>

      {/* TADOBA */}
      <div className="absolute top-[32%] left-[6%]">
        <div className="bg-[#161412]/92 backdrop-blur-xl border border-[#C4A472]/25 px-3 py-2 min-w-[145px] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">

          <div className="flex items-center gap-2">
            <div className="h-6 w-6 border border-[#C4A472]/20 flex items-center justify-center text-[#C4A472]">
              <Trees className="w-3 h-3" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#C4A472]">
              Tadoba
            </span>
          </div>

          <span className="block text-[11px] text-[#F2ECE2] mt-2">
            35 Minutes
          </span>
        </div>
      </div>

      {/* CITY */}
      <div className="absolute bottom-[18%] left-[12%]">
        <div className="bg-[#161412]/92 backdrop-blur-xl border border-[#C4A472]/25 px-3 py-2 min-w-[145px] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">

          <div className="flex items-center gap-2">
            <div className="h-6 w-6 border border-[#C4A472]/20 flex items-center justify-center text-[#C4A472]">
              <Route className="w-3 h-3" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#C4A472]">
              City Center
            </span>
          </div>

          <span className="block text-[11px] text-[#F2ECE2] mt-2">
            5 Minutes
          </span>
        </div>
      </div>
    </div>

    {/* CENTER HOTEL PIN */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">

      {/* GLOW */}
      <div className="absolute inset-0 bg-[#C4A472]/30 blur-3xl scale-[2.4] rounded-full animate-pulse" />

      {/* PIN */}
      <div className="relative h-[68px] w-[68px] rounded-full border border-[#C4A472]/30 bg-[#161412]/95 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.65)]">
        <MapPin className="w-7 h-7 text-[#C4A472]" />
      </div>

      {/* LABEL */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap bg-[#161412]/92 backdrop-blur-md border border-[#C4A472]/20 px-4 py-2">
        <span className="block text-[9px] uppercase tracking-[0.25em] text-[#C4A472] font-mono text-center">
          THE GRAND ICON
        </span>
      </div>
    </div>

    {/* MOBILE ROUTE INFO */}
    <div className="absolute bottom-[90px] left-4 right-4 z-40 md:hidden">
      <div className="grid grid-cols-3 gap-2">

        <div className="bg-[#161412]/90 border border-[#C4A472]/15 p-2 text-center backdrop-blur-md">
          <Plane className="w-3 h-3 text-[#C4A472] mx-auto mb-1" />
          <span className="block text-[9px] text-[#F2ECE2]">
            Nagpur
          </span>
          <span className="block text-[8px] text-[#7A7068] mt-0.5">
            2.5 hrs
          </span>
        </div>

        <div className="bg-[#161412]/90 border border-[#C4A472]/15 p-2 text-center backdrop-blur-md">
          <Trees className="w-3 h-3 text-[#C4A472] mx-auto mb-1" />
          <span className="block text-[9px] text-[#F2ECE2]">
            Tadoba
          </span>
          <span className="block text-[8px] text-[#7A7068] mt-0.5">
            35 mins
          </span>
        </div>

        <div className="bg-[#161412]/90 border border-[#C4A472]/15 p-2 text-center backdrop-blur-md">
          <Route className="w-3 h-3 text-[#C4A472] mx-auto mb-1" />
          <span className="block text-[9px] text-[#F2ECE2]">
            City
          </span>
          <span className="block text-[8px] text-[#7A7068] mt-0.5">
            5 mins
          </span>
        </div>

      </div>
    </div>

    {/* BOTTOM CTA */}
    <div className="absolute bottom-0 left-0 right-0 z-40 p-5">
      <a
        href="https://maps.google.com/?q=VIP+Circle+Civil+Lines+Chandrapur+Maharashtra"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between border border-[#C4A472]/20 bg-[#161412]/92 backdrop-blur-xl px-5 py-4 hover:border-[#C4A472]/50 transition-all duration-500"
      >
        <div>
          <span className="block text-[9px] tracking-[0.25em] uppercase text-[#C4A472] font-mono">
            Open Navigation
          </span>

          <span className="block text-sm text-[#F2ECE2] mt-1">
            Navigate To The Grand Icon
          </span>
        </div>

        <NavIcon className="w-4 h-4 text-[#C4A472] group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}