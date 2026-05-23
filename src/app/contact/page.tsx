'use client';
import PageBanner from '@/components/PageBanner';
import ContactSection from '@/components/ContactSection';
import { useBooking } from '@/components/ClientShell';

export default function ContactPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner eyebrow="SECURE DIALOGUES" title="Direct" titleAccent="Concierge"
        image="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1920" alt="Contact Banner" />
      <ContactSection onOpenBooking={() => handleOpenBooking('room')} />
    </div>
  );
}