'use client';

import { Award, GlassWater, Heart, Sparkles } from "lucide-react";

interface EventsSectionProps {
  onOpenBooking: () => void;
}

export default function EventsSection({ onOpenBooking }: EventsSectionProps) {
  const events = [
    {
      title: 'Royal Destination Weddings',
      description: 'Exchange sacred vows under the floral arches of the Garden Pavilion or host a majestic reception inside the double-height Imperial Hall. We take care of high-end floral design, luxury catering, and discrete VVIP lodging.',
      tag: 'CELEBRATIONS',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Prestigious Corporate Summits',
      description: 'Host discreet retreats, private board evaluations, and premium product releases inside our high-acoustic Sapphire Suite. Outfitted with state-of-the-art media capabilities, soundproof partitions, and high-conspiratorial seating.',
      tag: 'CONFERENCES',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Artisanal Banquets & Galas',
      description: 'From majestic birth anniversaries to high-society musical assemblies, our culinary execution and candle-warm atmospheric styling deliver memories that return over and over. Tailored precisely to elite spatial parameters.',
      tag: 'INTIMATE GATHERINGS',
      icon: GlassWater,
      image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section
      id="events-section"
      className="relative min-h-screen bg-[#0A0908] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Film grain effect */}
      <div className="absolute inset-0 z-0 cinematic-grain pointer-events-none" />

      {/* Grid line dividers */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 select-none flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
              06 — STAGING
            </span>
            <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2]">
              Events & <span className="italic text-[#C4A472]">Celebrations</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#7A7068] uppercase">
            <Sparkles className="w-4 h-4 text-[#C4A472]" />
            Where celebration resides
          </div>
        </div>

        {/* Dynamic event showcases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((evt, idx) => {
            const IconComp = evt.icon;
            return (
              <div
                key={idx}
                className="bg-[#161412] border border-[#C4A472]/10 p-6 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Visual image banner card */}
                <div className="relative aspect-[16/10] bg-[#0A0908] overflow-hidden mb-6 border border-[#C4A472]/5">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover opacity-50 filter saturate-50 group-hover:scale-105 transition-transform duration-[8000ms]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-[#161412]/92 backdrop-blur-md flex items-center justify-center border border-[#C4A472]/15">
                    <IconComp className="w-4 h-4 text-[#C4A472]" />
                  </div>
                </div>

                {/* Event Core Texts */}
                <div className="space-y-4 mb-8">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-[#C4A472] uppercase block">
                    {evt.tag}
                  </span>
                  <h3 className="font-serif font-light text-xl md:text-2xl text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-500">
                    {evt.title}
                  </h3>
                  <p className="font-sans text-xs md:text-[13.5px] text-[#7A7068] leading-relaxed font-light">
                    {evt.description}
                  </p>
                </div>

                {/* Selection Action Button */}
                <div className="pt-4 border-t border-[#C4A472]/10">
                  <button
                    id={`event-action-btn-${idx}`}
                    onClick={onOpenBooking}
                    className="w-full h-11 border border-[#C4A472]/30 hover:border-[#C4A472] text-[10px] tracking-[0.2em] font-sans font-medium uppercase text-[#C4A472] hover:bg-[#C4A472]/5 transition-colors duration-500 cursor-pointer focus:outline-none"
                  >
                    Discuss Bespoke Plan &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic services list banners */}
        <div className="mt-12 bg-[#161412] border border-[#C4A472]/15 p-8 md:p-12 text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#C4A472] uppercase tracking-[0.25em] block">
              VALET & INGRESS
            </span>
            <p className="font-serif text-lg text-[#F2ECE2] font-light">
              Secure VIP Parking & Carriage
            </p>
            <p className="font-sans text-xs text-[#7A7068] font-light">
              Up to 300 discrete vehicles housed securely in our gated grounds. Dedicated valet concierge.
            </p>
          </div>

          <div className="space-y-2 border-y md:border-y-0 md:border-x border-[#C4A472]/10 py-6 md:py-0 md:px-8">
            <span className="text-[10px] font-mono text-[#C4A472] uppercase tracking-[0.25em] block">
              CULINARY cATERING
            </span>
            <p className="font-serif text-lg text-[#F2ECE2] font-light">
              Indigenous Varhadi/Heritage Menus
            </p>
            <p className="font-sans text-xs text-[#7A7068] font-light">
              From traditional Maharashtrian banquets to global fusion arrays curated by master executive chefs.
            </p>
          </div>

          <div className="space-y-2 md:pl-4">
            <span className="text-[10px] font-mono text-[#C4A472] uppercase tracking-[0.25em] block">
              ACOUSTICS & LUXURY STAGING
            </span>
            <p className="font-serif text-lg text-[#F2ECE2] font-light">
              State-of-the-Art Line Array Systems
            </p>
            <p className="font-sans text-xs text-[#7A7068] font-light">
              Intelligent luminescent light setups and pristine line arrays, matching international concert specs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}