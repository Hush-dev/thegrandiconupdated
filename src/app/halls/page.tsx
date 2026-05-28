'use client';

import PageBanner from '@/components/PageBanner';
import HallsSection from '@/components/HallsSection';
import { useBooking } from '@/components/ClientShell';

export default function HallsPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner
        eyebrow="ROYAL ASSEMBLY GROUNDS"
        title="Banquet"
        titleAccent="Halls"
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920"
        alt="Banquet Halls"
      />
      <HallsSection onOpenBooking={(hallName) => handleOpenBooking('hall', hallName)} standalone />
    </div>
  );
}