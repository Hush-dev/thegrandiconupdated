'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');

      // Reset back to idle after 5s
      setTimeout(() => setStatus('idle'), 5000);

    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-screen bg-[#161412] text-[#F2ECE2] px-6 md:px-12 py-24 flex flex-col justify-center border-t border-[#C4A472]/15"
    >
      <div className="absolute inset-0 z-0 cinematic-grain pointer-events-none" />
      <div className="absolute inset-y-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
        <div className="hidden md:block w-[1px] h-full bg-[#C4A472]/5" />
        <div className="w-[1px] h-full bg-[#C4A472]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16 select-none">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
            07 — INQUIRY
          </span>
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight text-[#F2ECE2] heading-depth">
            Concierge & <span className="italic gold-shimmer">Contact</span>
          </h2>
          <div className="h-px w-24 bg-[#C4A472]/40 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-5 space-y-8 select-none">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C4A472] uppercase block">
                The Sanctum Front Desk
              </span>
              <h3 className="font-serif font-light text-2xl md:text-3xl text-[#F2ECE2]">
                Our concierge team is at your complete disposal.
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#7A7068] leading-relaxed max-w-md font-light">
                For room bookings, wedding coordination, or Tadoba safari packages — connect directly or submit your requirements below.
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+919604938657"
                className="group flex items-center gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10 hover:border-[#C4A472]/30 transition-colors duration-500">
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472] shrink-0">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">Direct Voice Hotline</span>
                  <span className="block font-serif text-lg text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-500">+91 96049 38657</span>
                </div>
              </a>

              <a href="mailto:concierge@thegrandicon.com"
                className="group flex items-center gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10 hover:border-[#C4A472]/30 transition-colors duration-500">
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472] shrink-0">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">Secure Concierge Email</span>
                  <span className="block font-mono text-sm text-[#F2ECE2] group-hover:text-[#C4A472] transition-colors duration-500">concierge@thegrandicon.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-[#0A0908]/50 border border-[#C4A472]/10">
                <div className="h-10 w-10 border border-[#C4A472]/20 bg-[#161412] flex items-center justify-center text-[#C4A472] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-[#7A7068] uppercase tracking-wider">The Geography</span>
                  <span className="block font-serif text-base text-[#F2ECE2] leading-snug">
                    VIP Circle, Civil Lines, Chandrapur, Maharashtra — 442401
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 bg-[#0A0908]/40 border border-[#C4A472]/15 p-8 md:p-12 backdrop-blur-3xl shadow-xl">
            <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-[#7A7068] mb-6">
              Direct Inquiry Form
            </span>

            {/* Success state */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                <div className="w-12 h-12 border border-[#C4A472]/40 flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#C4A472]" />
                </div>
                <h4 className="font-serif text-xl font-light text-[#F2ECE2]">
                  Message <span className="italic text-[#C4A472]">Transmitted</span>
                </h4>
                <p className="font-sans text-xs text-[#7A7068] max-w-xs font-light">
                  Our concierge team will respond within 4 minutes. Thank you, {name || 'dear guest'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajvardhan Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-colors duration-300 placeholder:text-[#5A524A]"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. raj@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm tracking-wider font-sans transition-colors duration-300 placeholder:text-[#5A524A]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-[9px] font-mono tracking-widest text-[#C4A472]/80 uppercase">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your stay dates, event requirements, or any special requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-b border-[#C4A472]/20 focus:border-[#C4A472] outline-none text-[#F2ECE2] text-sm font-sans py-2.5 resize-none transition-colors duration-300 placeholder:text-[#5A524A]"
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <p className="text-[11px] font-mono text-red-400/80 tracking-wider">
                    ✕ {errorMsg}
                  </p>
                )}

                <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#7A7068] uppercase">
                    <ShieldAlert className="w-4 h-4 text-[#C4A472] shrink-0" />
                    Encrypted secure transmission
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-3 border border-[#C4A472] bg-[#C4A472]/15 text-[#C4A472] text-[10px] tracking-[0.25em] font-sans font-semibold uppercase hover:bg-[#C4A472] hover:text-[#0A0908] transition-colors duration-500 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="animate-pulse">Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}