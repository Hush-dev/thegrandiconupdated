export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bedConfig: string;
  floor: string;
  roomNos: string;
  pricing: {
    single: number;
    double: number;
    triple: number;
  };
  images: string[];
}

export interface BanquetHall {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  amenities: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  occasion: string;
  date: string;
}

export interface GalleryMoment {
  id: string;
  image: string;
  caption: string;
  category: string;
}

export const ROOMS: Room[] = [
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'The pinnacle of bespoke high-living.',
    description: 'Our grandest offering — a sprawling suite with king bed, sofa bed, and dedicated butler service. Designed as an expansive private estate with hand-carved accents and an exquisite en-suite sanctuary.',
    bedConfig: 'King Bed + Sofa Bed + Extra Mattress',
    floor: 'Floors 3 & 4',
    roomNos: '316, 416',
    pricing: { single: 6000, double: 8800, triple: 11800 },
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'business-suite',
    name: 'Business Suite',
    tagline: 'Command your world in quiet luxury.',
    description: 'Designed for the discerning executive — two king beds, dual sofa beds, and a dedicated workspace. The perfect base for high-stakes corporate retreats and extended luxury stays.',
    bedConfig: 'King Bed + 2 Sofa Beds',
    floor: 'Floors 3 & 4',
    roomNos: '306, 406',
    pricing: { single: 7000, double: 9800, triple: 13000 },
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'club-king',
    name: 'Club King Room',
    tagline: 'Double the grandeur, twice the comfort.',
    description: 'An expansive twin-king configuration for families or distinguished guests seeking unreserved space. Rich textiles, ambient backlighting, and curated local teak-wood accents throughout.',
    bedConfig: '2 King Beds + Extra Mattress',
    floor: 'Floors 3 & 4',
    roomNos: '317, 417',
    pricing: { single: 5000, double: 7000, triple: 9800 },
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'superior-suite',
    name: 'Superior Suite',
    tagline: 'Timeless elegance, elevated comfort.',
    description: 'A refined suite with a king bed and small sofa, designed for guests who demand space and serenity in equal measure. Marble fixtures and sweeping floor views complete the experience.',
    bedConfig: 'King Bed + Small Sofa',
    floor: 'Floors 3 & 4',
    roomNos: '303, 403',
    pricing: { single: 4800, double: 5800, triple: 6800 },
    images: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'superior-deluxe',
    name: 'Superior Deluxe Room',
    tagline: 'Refined workspace, absolute serenity.',
    description: 'A curated sanctuary available in king or triple configurations. Balancing productivity and deep relaxation with high-contrast design textiles, sofa seating, and state-of-the-art connectivity.',
    bedConfig: 'King Bed + Sofa Bed  /  3 Single Beds + Sofa Bed',
    floor: 'Floors 3 & 4',
    roomNos: '304, 305, 311, 312, 404, 405, 411, 412',
    pricing: { single: 4500, double: 5200, triple: 6800 },
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'executive',
    name: 'Executive Room',
    tagline: 'Quiet elegance for the focused mind.',
    description: 'Two single-double beds with extra mattress — ideal for colleagues or companions travelling together. Impeccably styled with soft backlighting and acoustic insulation throughout.',
    bedConfig: '2 Single-Double Beds + Extra Mattress',
    floor: 'Floors 3 & 4',
    roomNos: '307, 309, 310, 314, 315, 407, 409, 410, 414, 415',
    pricing: { single: 3800, double: 4500, triple: 5800 },
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1200',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'Classic comfort, quietly grand.',
    description: 'A king bed with sofa bed and extra mattress — the perfect introduction to The Grand Icon experience. Rich woven fabrics and warm backlighting wrap guests in visual and acoustic peace.',
    bedConfig: 'King Bed + Sofa Bed + Extra Mattress',
    floor: 'Floors 3 & 4',
    roomNos: '301, 302, 308, 401, 402, 408',
    pricing: { single: 3800, double: 4500, triple: 5800 },
    images: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
    ],
  },
];

export const HALLS: BanquetHall[] = [
  {
    id: 'imperial',
    name: 'The Imperial Hall',
    tagline: 'Grand scale for legendary celebrations.',
    description: 'Chandrapur\'s premier pillarless ballroom featuring grand double-height ceilings, majestic customizable crystal chandeliers, and an opulent main stage.',
    capacity: '500 – 1200 Guests',
    amenities: ['Pillarless Structure', 'VIP Greenrooms', 'Dedicated Pre-function Promenade', 'State-of-the-Art Line Array Sound'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'sapphire',
    name: 'The Sapphire Suite',
    tagline: 'Intimate elegance, royal indigo hues.',
    description: 'Perfect for upscale banquets, dynamic corporate conferences, and high-fashion galas, finished with sophisticated gold trim.',
    capacity: '200 – 500 Guests',
    amenities: ['Acoustic Partitioning', 'Premium Ambient Luminescence', 'Bespoke Catering Stations', 'Immersive Projection'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'garden',
    name: 'The Garden Pavilion',
    tagline: 'Open-air romance underneath the stars.',
    description: 'Stretching under soft canopy lights, our manicured visual lawn brings majestic botanical design and absolute open liberty to mega ceremonies.',
    capacity: '800 – 2000 Guests',
    amenities: ['Majestic Manicured Lawns', 'Premium Outdoor Cabanas', 'Live Amphitheater Acoustics', 'Groomed Botanical Arcades'],
    image: 'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'pearl',
    name: 'The Pearl Lounge',
    tagline: 'A modern state for elite inner gatherings.',
    description: 'Adorned with intricate gold leaf and rich ivory walls, the Pearl Lounge hosts prestigious product reveals, private dining, or executive ceremonies.',
    capacity: '50 – 150 Guests',
    amenities: ['Fine Teak Wine Bar', 'Bespoke Lounge Furnishings', 'Private Concierge Team', 'Exquisite Ambient Warming'],
    image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1200',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The sheer scale of hospitality felt like stepping into an ancient Indian dynasty. Every detail is quiet, perfect, and immensely grand.',
    author: 'Aishwarya Deshmukh',
    occasion: 'Royal Wedding Celebration',
    date: 'December 2025',
  },
  {
    id: '2',
    quote: 'The Grand Icon is Maharashtra\'s best-kept secret. Truly world-class dining, incredible structure, and an effortless calm that lets you think clearly.',
    author: 'Vikramjit Roy',
    occasion: 'Executive Board Retreat',
    date: 'February 2026',
  },
  {
    id: '3',
    quote: 'Our wedding at the Garden Pavilion was nothing short of poetry. Our guests are still whispering about the legendary hand-styled table settings.',
    author: 'Meera & Raghav',
    occasion: 'Grand Marriage Assembly',
    date: 'April 2026',
  },
];

export const GALLERY_MOMENTS: GalleryMoment[] = [
  {
    id: 'wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    caption: 'Mandap Elegance / The Garden Pavilion',
    category: 'Celebration',
  },
  {
    id: 'chandelier',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000',
    caption: 'Golden Symphony / Hand-Cut Crystals',
    category: 'Structure',
  },
  {
    id: 'table',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?auto=format&fit=crop&q=80&w=1000',
    caption: 'The Table Setting / Imperial Banquet Fine Ware',
    category: 'Dining',
  },
  {
    id: 'safari',
    image: 'https://images.unsplash.com/photo-1615959189197-48400dc26c16?auto=format&fit=crop&q=80&w=1000',
    caption: 'Wild Symphony / Majestic Bengal Tiger in Tadoba Forest',
    category: 'Excursion',
  },
  {
    id: 'suite',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000',
    caption: 'Quiet Morning Settee / Presidential Balcony Shadow',
    category: 'Stay',
  },
  {
    id: 'ceremony',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1000',
    caption: 'Imperial Atrium Dusk / Curated Flora Cascade',
    category: 'Celebration',
  },
];