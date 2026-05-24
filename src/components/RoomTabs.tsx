'use client';

import { motion } from 'motion/react';
import { span } from 'motion/react-client';

interface Tab {
  id: string;
  name: string;
}

interface RoomTabsProps {
  tabs: Tab[];
  selectedIdx: number;
  onSelect: (idx: number) => void;
}

export default function RoomTabs({ tabs, selectedIdx, onSelect }: RoomTabsProps) {
  return (
    <div className="mb-12 border-b border-[#C4A472]/10 pb-6">

      {/* Mobile — styled select dropdown */}
      <div className="relative md:hidden">
        <select
          value={selectedIdx}
          onChange={(e) => onSelect(Number(e.target.value))}
          className="w-full appearance-none bg-[#0A0908] border border-[#C4A472]/30 text-[#F2ECE2] font-sans text-xs tracking-[0.2em] uppercase px-4 pr-10 h-11 focus:outline-none focus:border-[#C4A472] cursor-pointer transition-colors duration-300"
        >
          {tabs.map((tab, idx) => (
            <option key={tab.id} value={idx} className="bg-[#0A0908] text-[#F2ECE2]">
              {tab.name}
            </option>
          ))}
        </select>
        {/* Custom chevron */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#C4A472" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Selected indicator label */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[8px] font-mono tracking-[0.3em] text-[#5A524A] uppercase">
            {selectedIdx + 1} of {tabs.length}
          </span>
          <span className="text-[8px] font-mono tracking-[0.3em] text-[#C4A472] uppercase">
            {tabs[selectedIdx]?.name}
          </span>
        </div>
      </div>

      {/* Desktop — pill buttons */}
      <div className="hidden md:flex flex-wrap gap-3">
        {tabs.map((tab, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={tab.id}
              onClick={() => onSelect(idx)}
              className={`relative px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase font-sans font-medium transition-colors duration-300 cursor-pointer focus:outline-none ${
                isSelected
                  ? 'text-[#C4A472]'
                  : 'text-[#7A7068] hover:text-[#F2ECE2]'
              }`}
            >
              {/* Animated border */}
              {isSelected && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 border border-[#C4A472] bg-[#C4A472]/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.name}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}