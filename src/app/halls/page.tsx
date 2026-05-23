'use client';
import PageBanner from '@/components/PageBanner';
import HallsSection from '@/components/HallsSection';
import { useBooking } from '@/components/ClientShell';

export default function HallsPage() {
  const { handleOpenBooking } = useBooking();
  return (
    <div className="pt-20">
      <PageBanner eyebrow="ROYAL ASSEMBLY GROUNDS" title="Exquisite" titleAccent="Celebration Halls"
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920" alt="Banquets Banner" />
      <HallsSection onOpenBooking={() => handleOpenBooking('hall')} standalone />
    </div>
  );
}