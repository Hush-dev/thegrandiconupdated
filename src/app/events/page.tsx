'use client';

import PageBanner from '@/components/PageBanner';
import EventsSection from '@/components/EventsSection';
import { useBooking } from '@/components/ClientShell';

export default function EventsPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner
        eyebrow="EXTRAORDINARY COMMITTALS"
        title="Events &"
        titleAccent="Celebrations"
        image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1920"
        alt="Events"
      />
      <EventsSection onOpenBooking={() => handleOpenBooking('event')} />
    </div>
  );
}