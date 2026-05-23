interface PageBannerProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  image: string;
  alt: string;
}

export default function PageBanner({ eyebrow, title, titleAccent, image, alt }: PageBannerProps) {
  return (
    <div className="relative h-[45dvh] bg-[#0A0908] flex items-center border-b border-[#C4A472]/15 overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-35 filter saturate-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-90" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-[#C4A472] uppercase block mb-3">
          {eyebrow}
        </span>
        <h1 className="font-serif font-light text-4xl sm:text-6xl text-[#F2ECE2]">
          {title} <span className="italic text-[#C4A472]">{titleAccent}</span>
        </h1>
      </div>
    </div>
  );
}