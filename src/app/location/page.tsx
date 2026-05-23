import PageBanner from '@/components/PageBanner';
import LocationSection from '@/components/LocationSection';

export default function LocationPage() {
  return (
    <div className="pt-20">
      <PageBanner eyebrow="GEOGRAPHY & PILOTAGE" title="To Step" titleAccent="Inside"
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1920" alt="Coordinates Banner" />
      <LocationSection />
    </div>
  );
}