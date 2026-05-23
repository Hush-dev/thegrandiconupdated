'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Wine, Utensils, Heart, Award } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface DiningSectionProps {
  onOpenBooking: () => void;
}

const MENU_CATEGORIES = [
  {
    id: 'experience',
    title: 'The Experience',
    description: 'A multi-sensory culinary journey celebrating indigenous terroir paired with international finesse.',
    items: [
      { name: 'Chandrapur Teak-Smoked Venison Cutlets (Alternative)', spec: 'Rich slow-cooked local spice blend wrapped in crisp hand-crafted gold-flaked crust.' },
      { name: 'Maharashtrian Truffle Varhadi Pithla', spec: 'Creamy high-plateau chickpea reduction with sliced black winter truffles & slow-churned farm butter.' },
      { name: 'Saffron-Infused Indrayani Risotto', spec: 'Local hand-milled fragrant rice, slow-drizzled with parmasean consommé and organic saffron threads.' }
    ]
  },
  {
    id: 'curated',
    title: 'Curated Platters',
    description: 'Masterfully engineered platters meant for communal gatherings and high-conviviality banquets.',
    items: [
      { name: 'The Royal Deccan Kabab Assortment', spec: 'Tender tandoor-kissed morsels marinated with green cardamom, hand-pressed cashew cream, and local wildflowers.' },
      { name: 'Heritage Malvani Spiced Seafood Broth', spec: 'Fresh visual catch of the day, simmered in coconut milk, Solkadhi-reduction, and roasted red spices.' },
      { name: 'Chandrapuri Teakwood Wood-fired Naans', spec: 'Acoustically micro-baked artisan breads topped with cold-pressed garlic oil and sea salt gems.' }
    ]
  },
  {
    id: 'concoctions',
    title: 'Sacred Concoctions',
    description: 'Artisanal cocktails and cold-pressed elixirs crafted with pure local forest honey and fine botanicals.',
    items: [
      { name: 'Tadoba Royal Mist', spec: 'Wild berry shrub, smoked organic rosemary, local Mahua-inspired nectar, and high-altitude tonic.' },
      { name: 'The Gold Leaf Elixir', spec: 'Single-estate organic Darjeeling tea reduction, hand-pressed lemons, and sparkles of real silver & gold.' },
      { name: 'Muted Spice Espresso Martini', spec: 'Dark roasted local chicory blend, pure espresso press, and Maharashtra nutmeg dusting.' }
    ]
  }
];

export default function DiningSection({ onOpenBooking }: DiningSectionProps) {
  const [activeTab, setActiveTab] = useState('experience');

  const selectedCategory = MENU_CATEGORIES.find((c) => c.id === activeTab) || MENU_CATEGORIES[0];

  return (
    <section
      id="dining-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      {/* Decorative Warm Backglowing Candlelight Filters */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#C4A472]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#9A7A4A]/5 blur-[120px] pointer-events-none z-0" />

      {/* Grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <SectionHeader title="Elite Intimate" accent="Dining" eyebrow={''} />

        {/* Core Split Body layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Immersive Candle-warm Dark Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#0A0908] overflow-hidden border border-[#C4A472]/10 group">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200"
                alt="Intimate candle-lit luxury dinner table setting"
                className="w-full h-full object-cover opacity-60 filter contrast-125 saturate-50 brightness-[0.65] transition-transform duration-[8000ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-[#C4A472]/5 mix-blend-color-burn pointer-events-none" />

              {/* Quiet overlays */}
              <div className="absolute bottom-12 left-12 right-12 text-left space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                  The Sanctuary Motto
                </span>
                <p className="font-serif text-3xl md:text-4xl text-[#F2ECE2] tracking-tight leading-snug">
                  “The table is set. <br />
                  The rest is <span className="italic font-light text-[#C4A472]">memory.</span>”
                </p>
                <div className="h-[1px] w-12 bg-[#0A0908]" />
              </div>
            </div>
          </div>

          {/* Right panel: Intimate Dark Matte Menu categories listing */}
          <div className="lg:col-span-6 space-y-8 bg-[#0A0908]/40 border border-[#C4A472]/10 p-8 md:p-12 backdrop-blur-3xl">
            {/* Category tabs list */}
            <div className="flex gap-6 border-b border-[#C4A472]/10 pb-6 overflow-x-auto">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    id={`dining-tab-${cat.id}`}
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-500 pb-2 relative cursor-pointer focus:outline-none whitespace-nowrap ${
                      isActive ? 'text-[#C4A472]' : 'text-[#7A7068] hover:text-[#F2ECE2]'
                    }`}
                  >
                    {cat.title}
                    {isActive && (
                      <motion.span
                        layoutId="activeDiningIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C4A472]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected category panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="font-serif italic text-sm text-[#7A7068]">
                  {selectedCategory.description}
                </p>

                {/* Items grid */}
                <div className="space-y-6 pt-4">
                  {selectedCategory.items.map((item, index) => (
                    <div key={index} className="space-y-1.5 group">
                      <div className="flex justify-between items-baseline gap-4">
                        <span className="font-serif text-sm md:text-base text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-550">
                          {item.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4A472]/30" />
                        <span className="text-[9px] font-mono tracking-widest text-[#C4A472]/50 uppercase">
                          Elite Selection
                        </span>
                      </div>
                      <p className="font-sans text-[12.5px] text-[#7A7068] leading-relaxed font-light">
                        {item.spec}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive reservation link */}
            <div className="pt-6 border-t border-[#C4A472]/10 flex flex-col sm:flex-row justify-between items-baseline gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#7A7068] uppercase tracking-wider block">
                  Catering Enquiries
                </span>
                <span className="text-xs text-[#7A7068] block mt-1 font-light">
                  Tailored chef-tasting events for up to 150 guests.
                </span>
              </div>
              <button
                id="dining-reserve-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-[#C4A472] hover:text-[#F2ECE2] text-[10px] tracking-[0.25em] font-sans font-medium uppercase border-b border-[#C4A472] hover:border-[#F2ECE2] pb-1 transition-colors duration-500 cursor-pointer focus:outline-none"
              >
                Reserve Table &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}