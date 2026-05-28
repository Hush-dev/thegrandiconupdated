import PageBanner from '@/components/PageBanner';
import GallerySection from '@/components/GallerySection';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <PageBanner
        eyebrow="VISUAL CHRONOLOGY"
        title="The Visual"
        titleAccent="Journey"
        image="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920"
        alt="Gallery"
      />
      <GallerySection />
    </div>
  );
}