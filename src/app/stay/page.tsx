'use client';

import PageBanner from '@/components/PageBanner';
import StaySection from '@/components/StaySection';
import { useBooking } from '@/components/ClientShell';

export default function StayPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner
        eyebrow="CHAMBERS OF SOLITUDE"
        title="Rooms &"
        titleAccent="Suites"
        image="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1920"
        alt="Rooms & Suites"
      />
      <StaySection onOpenBooking={(roomName) => handleOpenBooking('room', roomName)} standalone />
    </div>
  );
}