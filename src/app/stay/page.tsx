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
        title="Suites &"
        titleAccent="Sanctuaries"
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920"
        alt="Suites Banner"
      />
      <StaySection onOpenBooking={() => handleOpenBooking('room')} standalone />
    </div>
  );
}