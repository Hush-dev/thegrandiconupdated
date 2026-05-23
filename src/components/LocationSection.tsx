'use client';

import { MapPin, Compass, Navigation as NavIcon, Plane, Car, Route } from 'lucide-react';

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
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
            05 — PILOTAGE
          </span>
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

          {/* Right panel: Scenic abstract stylized Dark Map Graphic (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0A0908] border border-[#C4A472]/15 flex flex-col justify-between p-8 overflow-hidden">
              {/* High contrast visual representation block */}
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-color-dodge select-none">
                {/* Visual rendering of coordinate graphs */}
                <svg className="w-full h-full stroke-[#C4A472]/15 fill-none" viewBox="0 0 100 100">
                  <path d="M 10,10 L 90,90" strokeDasharray="1 1" />
                  <path d="M 90,10 L 10,90" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="30" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="2" fill="#C4A472" stroke="#C4A472" strokeWidth="2" />
                  <path d="M 50,20 L 50,80" strokeWidth="0.5" />
                  <path d="M 20,50 L 80,50" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Top details */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="h-8 w-8 rounded-full border border-[#C4A472]/30 flex items-center justify-center text-[#C4A472]">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-mono text-[#C4A472] uppercase tracking-[0.2em]">
                    LAT: 19.9515° N
                  </span>
                  <span className="block text-[10px] font-mono text-[#C4A472] uppercase tracking-[0.2em]">
                    LON: 79.2961° E
                  </span>
                </div>
              </div>

              {/* Bottom Details card overlay */}
              <div className="relative z-10 bg-[#161412]/92 backdrop-blur-md p-6 border border-[#C4A472]/20 shadow-2xl space-y-3">
                <span className="text-[10px] font-mono text-[#C4A472] tracking-widest uppercase block border-b border-[#C4A472]/10 pb-2">
                  DISCREET CONCIERGE PICKUP
                </span>
                <p className="font-sans text-xs text-[#7A7068] leading-normal font-light">
                  Our operations encompass premium Mercedes-Benz and Audi sedan airport transfers. Share your flight coordinates with our concierge team to schedule your discrete, hassle-free transition.
                </p>
                <div className="pt-2">
                  <a
                    id="location-google-map-btn"
                    href="https://maps.google.com/?q=VIP+Circle+Civil+Lines+Chandrapur+Maharashtra"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[9px] font-sans font-medium uppercase tracking-wider text-[#C4A472] hover:text-[#F2ECE2] transition-colors duration-500"
                  >
                    <NavIcon className="w-3.5 h-3.5" />
                    Open GPS Coordinates &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}