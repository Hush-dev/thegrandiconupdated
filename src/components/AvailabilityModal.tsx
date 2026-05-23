'use client';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bed, Landmark, UtensilsCrossed, Sparkles, MessageSquareHeart, Check, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'room' | 'hall' | 'dining' | 'event';
}

export default function AvailabilityModal({ isOpen, onClose, initialType = 'room' }: AvailabilityModalProps) {
  const [selectedType, setSelectedType] = useState<'room' | 'hall' | 'dining' | 'event'>(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');

  // Specific Type Fields
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [roomType, setRoomType] = useState('Presidential Suite');

  const [eventType, setEventType] = useState('Wedding Celebration');
  const [hallPreference, setHallPreference] = useState('The Imperial Hall');

  const [time, setTime] = useState('20:00');

  const [occasion, setOccasion] = useState('Corporate Summit');
  const [requirements, setRequirements] = useState('');

  // Always sync to whatever type was requested when modal opens
  useEffect(() => {
    setSelectedType(initialType);
  }, [initialType]);

  const generateWhatsAppLink = (type: 'room' | 'hall' | 'dining' | 'event') => {
    const phoneNo = "919604938657"; // Royal Liaison Coordinator Whatsapp Gateway
    
    let text = "";
    if (type === 'hall') {
      text = `Hello The Grand Icon 🙏\n\nI'd like to enquire about *Hall Availability*:\n\n📋 *Event Type:* ${eventType}\n📅 *Date:* ${date}\n👥 *Guests:* ${guests}\n🏛️ *Hall Preference:* ${hallPreference}\n\n*Name:* ${name}\n📞 *Phone:* ${phone}\n\nKindly confirm availability. Thank you.`;
    } else if (type === 'room') {
      text = `Hello The Grand Icon 🙏\n\nI'd like to book a *Luxury Room*:\n\n📅 *Check-in:* ${checkin || date}\n📅 *Check-out:* ${checkout || date}\n👥 *Guests:* ${guests}\n🛏️ *Room Type:* ${roomType}\n\n*Name:* ${name}\n📞 *Phone:* ${phone}\n\nPlease confirm availability. Thank you.`;
    } else if (type === 'dining') {
      text = `Hello The Grand Icon 🙏\n\nDining Reservation Request:\n\n📅 *Date:* ${date}\n🕐 *Time:* ${time}\n👥 *Guests:* ${guests}\n\n*Name:* ${name}\n📞 *Phone:* ${phone}\n\nLooking forward to dining with you.`;
    } else {
      text = `Hello The Grand Icon 🙏\n\nEvent Enquiry:\n\n🎉 *Occasion:* ${occasion}\n📅 *Date:* ${date}\n👥 *Guests:* ${guests}\n📝 *Requirements:* ${requirements || 'High-end catering, VIP parking'}\n\n*Name:* ${name}\n📞 *Phone:* ${phone}`;
    }

    return `https://wa.me/${phoneNo}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Kindly fill in your Name and Contact Phone to proceed.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      const link = generateWhatsAppLink(selectedType);
      window.open(link, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 1200);
  };

  const typeConfig = [
    { id: 'room', label: 'Suite Room', icon: Bed, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=300' },
    { id: 'hall', label: 'Banquet Hall', icon: Landmark, image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=300' },
    { id: 'dining', label: 'Fine Dining', icon: UtensilsCrossed, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=300' },
    { id: 'event', label: 'VIP Celebration', icon: Sparkles, image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=300' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (tap to close) */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-[6px] cursor-pointer"
          />

          {/* Bottom Rising Panel */}
          <motion.div
            id="modal-panel"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-[51] bg-[#161412]/98 backdrop-blur-3xl border-t border-[#C4A472]/40 rounded-t-[20px] shadow-[0_-15px_60px_rgba(0,0,0,0.9)] max-h-[92dvh] overflow-y-auto selection:bg-[#C4A472]/20 selection:text-[#C4A472]"
          >
            {/* Center Drag indicator */}
            <div className="flex justify-center py-3">
              <span className="block w-10 h-[3.5px] rounded-full bg-[#C4A472]/20" />
            </div>

            {/* Inner Content Area */}
            <div className="max-w-4xl mx-auto px-6 pb-12 pt-2">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#C4A472]/10 pb-4 mb-8">
                <div>
                  <h3 className="font-serif text-[22px] font-light text-[#F2ECE2]">
                    Reserve <span className="italic text-[#C4A472]">An Experience</span>
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7A7068] mt-1">
                    Direct Secure Concierge Connection
                  </p>
                </div>
                <button
                  id="close-modal-x-btn"
                  onClick={onClose}
                  className="w-10 h-10 border border-[#C4A472]/20 hover:border-[#C4A472] rounded-none flex items-center justify-center text-[#7A7068] hover:text-[#F2ECE2] transition-colors duration-500 cursor-pointer focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 1. Category Type Selector Grid */}
              <div className="mb-8">
                <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-[#7A7068] mb-4">
                  Step 01 — Choose Sanctuary Format
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {typeConfig.map((item) => {
                    const isSelected = selectedType === item.id;
                    const IconComp = item.icon;
                    return (
                      <button
                        id={`category-card-${item.id}`}
                        type="button"
                        key={item.id}
                        onClick={() => setSelectedType(item.id as any)}
                        className={`group relative h-28 flex flex-col justify-end items-start p-4 bg-[#0A0908] overflow-hidden border transition-all duration-500 text-left focus:outline-none cursor-pointer ${
                          isSelected
                            ? 'border-[#C4A472] scale-[1.02] shadow-[0_10px_30px_rgba(196,164,114,0.15)]'
                            : 'border-[#C4A472]/10 hover:border-[#C4A472]/30'
                        }`}
                      >
                        {/* Selected Indicator Checkbox */}
                        {isSelected && (
                          <div className="absolute top-3 right-3 h-5 w-5 bg-[#C4A472] flex items-center justify-center text-[#0A0908] rounded-full">
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                          </div>
                        )}

                        <img
                          src={item.image}
                          alt={item.label}
                          className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500 filter saturate-50"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/50 to-transparent z-0" />

                        <div className="relative z-10 space-y-1">
                          <IconComp className={`w-5 h-5 transition-colors duration-500 ${isSelected ? 'text-[#C4A472]' : 'text-[#7A7068]'}`} />
                          <span className={`block font-serif text-[15px] transition-colors duration-500 ${isSelected ? 'text-[#F2ECE2]' : 'text-[#7A7068]'}`}>
                            {item.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Responsive Custom Submission Form */}
              <form id="booking-whatsapp-form" onSubmit={handleSubmit} className="space-y-6">
                <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-[#7A7068] pb-1 border-b border-[#C4A472]/10">
                  Step 02 — Enquiry Specifications
                </span>

                {/* Shared Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                      YOUR FULL NAME *
                    </label>
                    <input
                      id="form-input-name"
                      type="text"
                      required
                      placeholder="e.g. Maharani Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-all duration-500"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                      CONTACT PHONE NUMBER *
                    </label>
                    <input
                      id="form-input-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 96049 38657"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Sub-fields depending on format selection */}
                <AnimatePresence mode="wait">
                  {selectedType === 'room' && (
                    <motion.div
                      key="room-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          CHECK-IN DATE
                        </label>
                        <input
                          id="form-room-checkin"
                          type="date"
                          value={checkin}
                          onChange={(e) => setCheckin(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          CHECK-OUT DATE
                        </label>
                        <input
                          id="form-room-checkout"
                          type="date"
                          value={checkout}
                          onChange={(e) => setCheckout(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          SELECT CHAMBER PREFERENCE
                        </label>
                        <select
                          id="form-room-type"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        >
                          <option className="bg-[#161412]" value="Presidential Suite">Presidential Suite (Penthouse)</option>
                          <option className="bg-[#161412]" value="Grand Deluxe Suite">Grand Deluxe Suite</option>
                          <option className="bg-[#161412]" value="Executive Room">Executive Suite Room</option>
                          <option className="bg-[#161412]" value="Classic Room">Classic Suite Room</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {selectedType === 'hall' && (
                    <motion.div
                      key="hall-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          EVENT OCCASION DATE
                        </label>
                        <input
                          id="form-hall-date"
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          EVENT FORMAT
                        </label>
                        <select
                          id="form-hall-event-type"
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        >
                          <option className="bg-[#161412]" value="Wedding Assembly">Royal Wedding Ceremony</option>
                          <option className="bg-[#161412]" value="Sangeet / Mehendi Night">Sangeet Event</option>
                          <option className="bg-[#161412]" value="Corporate Conference">Executive Summit Retreat</option>
                          <option className="bg-[#161412]" value="Private Banquet Gala">Private Premium Celebration</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          HALL SELECTION PREFERENCE
                        </label>
                        <select
                          id="form-hall-preference"
                          value={hallPreference}
                          onChange={(e) => setHallPreference(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        >
                          <option className="bg-[#161412]" value="The Imperial Hall">The Imperial Hall (Pillarless)</option>
                          <option className="bg-[#161412]" value="The Sapphire Suite">The Sapphire Suite (Indoor Art)</option>
                          <option className="bg-[#161412]" value="The Garden Pavilion">The Garden Pavilion (Outdoor)</option>
                          <option className="bg-[#161412]" value="The Pearl Lounge">The Pearl Lounge (Intimate)</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {selectedType === 'dining' && (
                    <motion.div
                      key="dining-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          RESERVATION DATE
                        </label>
                        <input
                          id="form-dining-date"
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          CHEF TABLE SIT-DOWN TIME
                        </label>
                        <input
                          id="form-dining-time"
                          type="time"
                          required
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          NUMBER OF DELEGATES
                        </label>
                        <select
                          id="form-dining-guests"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        >
                          <option className="bg-[#161412]" value="2">2 Guests (Couple)</option>
                          <option className="bg-[#161412]" value="4">4 Guests</option>
                          <option className="bg-[#161412]" value="8">8 Guests (VIP Platter)</option>
                          <option className="bg-[#161412]" value="15">Up to 15 Guests (Executive Board Dinner)</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {selectedType === 'event' && (
                    <motion.div
                      key="event-fields"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          OCCASION TARGET DATE
                        </label>
                        <input
                          id="form-event-date"
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          OCCASION EVENT TYPE
                        </label>
                        <select
                          id="form-event-occasion"
                          value={occasion}
                          onChange={(e) => setOccasion(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        >
                          <option className="bg-[#161412]" value="Royal High Wedding">Royal High Wedding Assembly</option>
                          <option className="bg-[#161412]" value="Anniversary Jubilee">Anniversary Jubilee</option>
                          <option className="bg-[#161412]" value="VIP Celebrity Cocktail">VIP Celebrity Assembly</option>
                          <option className="bg-[#161412]" value="Corporate Retreat Summit">Tadoba Corridors Corporate Summit</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                          GUEST HEADCOUNT
                        </label>
                        <input
                          id="form-event-guests"
                          type="number"
                          placeholder="e.g. 350"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans transition-all duration-500"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Event specific detailed text instructions comments */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/85 uppercase">
                    SPECIAL DIETARY OR ARCHITECTURAL CONSTRAINTS (OPTIONAL)
                  </label>
                  <textarea
                    id="form-input-requirements"
                    rows={2}
                    placeholder="e.g. Traditional VIP Valet service, organic Deccan food curation, airport transfer coordination..."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans py-2.5 resize-none transition-all duration-500"
                  />
                </div>

                {/* Bottom submission action */}
                <div className="pt-6 border-t border-[#C4A472]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-2.5 text-[#7A7068] text-xs">
                    <MessageSquareHeart className="w-5 h-5 text-[#C4A472]" />
                    <span className="font-light text-left">
                      Our elite sanctuary concierge responds on average in 4 minutes.
                    </span>
                  </div>

                  <button
                    id="submit-whatsapp-btn"
                    type="submit"
                    className="w-full sm:w-auto px-8 h-12 flex items-center justify-center gap-3 border border-[#C4A472] bg-[#C4A472]/15 text-[#C4A472] text-[10px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472] hover:text-[#0A0908] transition-colors duration-500 focus:outline-none cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <span>Send via WhatsApp Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}