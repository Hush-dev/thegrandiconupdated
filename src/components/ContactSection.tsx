'use client';
import { Mail, Phone, MapPin, Send, Compass, HelpCircle, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Kindly fill in all fields before transmitting your message.");
      return;
    }
    setSent(true);
    setTimeout(() => {
      // Trigger simple mailto fallback or general prompt
      const text = `Hello The Grand Icon Sanctuary Concierge,\n\nMy name is ${name} (${email}).\n\nI'd like to reach out regarding:\n${message}`;
      const mailto = `mailto:concierge@thegrandicon.com?subject=Sanctum Inquiry&body=${encodeURIComponent(text)}`;
      window.open(mailto, '_blank');
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
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
        <div className="mb-16 select-none">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
            07 — INQUIRY
          </span>
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2]">
            Concierge & <span className="italic text-[#C4A472]">Contact</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#C4A472]/40 mt-6" />
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel: Direct detail cards (5 cols) */}
          <div className="lg:col-span-5 space-y-8 select-none">
            <div className="space-y-4 text-left">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                The Sanctum Front desk
              </span>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-[#F2ECE2]">
                Our concierge team is at your complete disposal.
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#7A7068] leading-relaxed max-w-md font-light">
                For urgent room bookings, wedding banquet coordination, or Tadoba luxury safari packages, connect directly using the credentials below or submit your requirements instantly.
              </p>
            </div>

            {/* Quick Contact list */}
            <div className="space-y-4">
              <a
                id="contact-phone-direct"
                href="tel:+919604938657"
                className="group flex items-center gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10 hover:border-[#C4A472]/30 transition-colors duration-500"
              >
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472]">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">
                    DIRECT VOICE HOTLINE
                  </span>
                  <span className="block font-serif text-lg text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-500">
                    +91 96049 38657
                  </span>
                </div>
              </a>

              <a
                id="contact-email-direct"
                href="mailto:concierge@thegrandicon.com"
                className="group flex items-center gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10 hover:border-[#C4A472]/30 transition-colors duration-500"
              >
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472]">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">
                    SECURE CONCIERGE EMAIL
                  </span>
                  <span className="block font-mono text-sm text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-500">
                    concierge@thegrandicon.com
                  </span>
                </div>
              </a>

              <div className="group flex items-start gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10">
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">
                    THE GEOGRAPHY
                  </span>
                  <span className="block font-serif text-base text-[#F2ECE2] leading-snug">
                    VIP Circle, Civil Lines, Chandrapur, Maharashtra — 442401, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Clean, Transparent Input Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0A0908]/40 border border-[#C4A472]/15 p-8 md:p-12 backdrop-blur-3xl shadow-xl">
            <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-[#7A7068] mb-6">
              TRANS-LOGIC INQUIRY FORM
            </span>

            <form id="direct-concierge-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5 text-left">
                  <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="e.g. Rajvardhan Patil"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-colors duration-500"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                    Your Secure Email *
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    placeholder="e.g. raj@patilhertage.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-colors duration-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 text-left">
                <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                  Describe Your Vision *
                </label>
                <textarea
                  id="contact-form-msg"
                  rows={4}
                  required
                  placeholder="Share details of your ideal stay dates, banquet guest sizes, or dietary guidelines and special requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans py-2.5 resize-none transition-colors duration-500"
                />
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#7A7068] uppercase">
                  <ShieldAlert className="w-4 h-4 text-[#C4A472]" />
                  Encrypted secure direct mail transmission
                </div>

                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-3 border border-[#C4A472] bg-[#C4A472]/15 text-[#C4A472] text-[10px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472] hover:text-[#0A0908] transition-colors duration-500 focus:outline-none cursor-pointer"
                >
                  {sent ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}