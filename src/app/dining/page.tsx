'use client';

import PageBanner from '@/components/PageBanner';
import DiningSection from '@/components/DiningSection';
import { useBooking } from '@/components/ClientShell';

export default function DiningPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner
        eyebrow="THE DECCAN GASTRONOMISTS"
        title="Saatvik"
        titleAccent="Restaurant"
        image="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920"
        alt="Saatvik Restaurant"
      />
      <DiningSection onOpenBooking={() => handleOpenBooking('dining')} />
    </div>
  );
}