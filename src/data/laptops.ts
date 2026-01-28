export interface Laptop {
  id: string;
  name: string;
  shortName: string;
  cpu: string;
  graphics: string;
  ram: string;
  storage: string;
  display: string;
  gamingCapability: string;
  bestFor: string;
  price: number;
  priceFormatted: string;
  link: string;
  tier: 'budget' | 'mid' | 'gaming' | 'premium';
}

export interface GameBenchmark {
  game: string;
  laptops: {
    [laptopId: string]: {
      fps: string;
      min: number;
      max: number;
    };
  };
}

export const laptops: Laptop[] = [
  {
    id: 'loq-rtx2050',
    name: 'Lenovo LOQ 15IAX9 15.6in i5 RTX 2050',
    shortName: 'LOQ RTX 2050',
    cpu: 'Intel Core i5-12450HX (12th gen)',
    graphics: 'GeForce RTX 2050 (dedicated)',
    ram: '8 GB',
    storage: '512 GB SSD',
    display: '15.6" FHD 144 Hz',
    gamingCapability: 'Good for gaming (modern titles)',
    bestFor: 'Affordable gaming + productivity',
    price: 11999,
    priceFormatted: 'R11,999.00',
    link: 'https://www.evetech.co.za/ideapad-gaming-3-15-ach-6-ryzen-5-rtx-2050-8-gb-512-gb-entry-gaming-laptop/laptops-for-sale/35712',
    tier: 'gaming',
  },
  {
    id: 'loq-rtx3050',
    name: 'Lenovo LOQ 15IAX9 Core i5 8GB 512GB SSD RTX 3050',
    shortName: 'LOQ RTX 3050',
    cpu: 'Intel Core i5 (similar class)',
    graphics: 'GeForce RTX 3050 (dedicated)',
    ram: '8 GB',
    storage: '512 GB SSD',
    display: '15.6" FHD',
    gamingCapability: 'Very good gaming performance',
    bestFor: 'Better gaming + future-proof',
    price: 13499,
    priceFormatted: 'R13,499.00',
    link: 'https://www.evetech.co.za/lenovo-loq-15-iax-9-8-gb-512-gb-rtx-3050-gaming-laptop/laptops-for-sale/40957',
    tier: 'premium',
  },
  {
    id: 'ideapad-1',
    name: 'IdeaPad 1 15AMN7',
    shortName: 'IdeaPad 1',
    cpu: 'AMD Ryzen 5 7520U',
    graphics: 'Integrated Radeon 610M',
    ram: '8 GB',
    storage: '512 GB SSD',
    display: '15.6" FHD',
    gamingCapability: 'Low',
    bestFor: 'Everyday use',
    price: 11499,
    priceFormatted: 'R11,499.00',
    link: 'https://www.evetech.co.za/lenovo-ideapad-1-15-amn-7-ryzen-5-8-gb-1-tb-reliable-everyday-laptop/laptops-for-sale/40821',
    tier: 'budget',
  },
  {
    id: 'ideapad-slim3',
    name: 'IdeaPad Slim 3 Core 512GB Notebook',
    shortName: 'IdeaPad Slim 3',
    cpu: 'low-mid CPU',
    graphics: 'Integrated graphics',
    ram: 'Not specified',
    storage: '512 GB SSD',
    display: '~15" FHD',
    gamingCapability: 'Very low',
    bestFor: 'Budget everyday',
    price: 12999,
    priceFormatted: 'R12,999.00',
    link: 'https://www.evetech.co.za/lenovo-ideapad-slim-3-16-gb-512-gb-productivity-power/laptops-for-sale/38520',
    tier: 'budget',
  },
];

export const gameBenchmarks: GameBenchmark[] = [
  {
    game: 'CS2 / Valorant',
    laptops: {
      'loq-rtx2050': { fps: '120-180 FPS', min: 120, max: 180 },
      'loq-rtx3050': { fps: '180+ FPS', min: 180, max: 220 },
      'ideapad-1': { fps: '40-80 FPS', min: 40, max: 80 },
      'ideapad-slim3': { fps: '40-80 FPS', min: 40, max: 80 },
    },
  },
  {
    game: 'Fortnite (Med)',
    laptops: {
      'loq-rtx2050': { fps: '70-110 FPS', min: 70, max: 110 },
      'loq-rtx3050': { fps: '90-140 FPS', min: 90, max: 140 },
      'ideapad-1': { fps: '25-50 FPS', min: 25, max: 50 },
      'ideapad-slim3': { fps: '25-50 FPS', min: 25, max: 50 },
    },
  },
  {
    game: 'GTA V Very High',
    laptops: {
      'loq-rtx2050': { fps: '50-70 FPS', min: 50, max: 70 },
      'loq-rtx3050': { fps: '70-90 FPS', min: 70, max: 90 },
      'ideapad-1': { fps: '15-30 FPS', min: 15, max: 30 },
      'ideapad-slim3': { fps: '15-30 FPS', min: 15, max: 30 },
    },
  },
  {
    game: 'Apex Legends',
    laptops: {
      'loq-rtx2050': { fps: '60-85 FPS', min: 60, max: 85 },
      'loq-rtx3050': { fps: '80-110 FPS', min: 80, max: 110 },
      'ideapad-1': { fps: '20-40 FPS', min: 20, max: 40 },
      'ideapad-slim3': { fps: '20-40 FPS', min: 20, max: 40 },
    },
  },
  {
    game: 'RDR2 High',
    laptops: {
      'loq-rtx2050': { fps: '35-55 FPS', min: 35, max: 55 },
      'loq-rtx3050': { fps: '45-65 FPS', min: 45, max: 65 },
      'ideapad-1': { fps: '<20 FPS', min: 10, max: 20 },
      'ideapad-slim3': { fps: '<20 FPS', min: 10, max: 20 },
    },
  },
  {
    game: 'Cyberpunk 2077 M',
    laptops: {
      'loq-rtx2050': { fps: '35-55 FPS', min: 35, max: 55 },
      'loq-rtx3050': { fps: '50-70 FPS', min: 50, max: 70 },
      'ideapad-1': { fps: '<15 FPS', min: 5, max: 15 },
      'ideapad-slim3': { fps: '<15 FPS', min: 5, max: 15 },
    },
  },
];

export const getTierColor = (tier: Laptop['tier']) => {
  switch (tier) {
    case 'premium':
      return 'neon-cyan';
    case 'gaming':
      return 'neon-purple';
    case 'mid':
      return 'neon-orange';
    case 'budget':
      return 'neon-green';
    default:
      return 'muted-foreground';
  }
};

export const getTierLabel = (tier: Laptop['tier']) => {
  switch (tier) {
    case 'premium':
      return 'Best Gaming';
    case 'gaming':
      return 'Gaming Ready';
    case 'mid':
      return 'Mid-Range';
    case 'budget':
      return 'Everyday Use';
    default:
      return tier;
  }
};
