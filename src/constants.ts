/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'office' | 'sleeping' | 'toilet' | 'kiosk' | 'research' | 'infrastructure' | 'utility';
  headline: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  useCases: string[];
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'office-workspace-1',
    name: 'EMPHZ WorkSpace Pro',
    category: 'office',
    headline: 'High-Efficiency Corporate Pod',
    description: 'A noise-insulated, climate-controlled modular office pod designed for deep work and high-stakes meetings. Engineered with acoustic integrity and ergonomic precision.',
    features: [
      'Active Noise Cancellation',
      'Smart LED Task Lighting',
      'HEPA Air Filtration System',
      'Integrated Power & Fast-Charge USB Ports',
      'Anti-Microbial Touchpoints'
    ],
    specs: {
      Dimensions: '2.4m x 2.4m x 2.6m',
      Weight: '850kg',
      Structure: 'Galvanized Steel Frame',
      Glass: 'Triple-Glazed Acoustic Glass'
    },
    useCases: ['Corporate Offices', 'Co-working Hubs', 'Airport Lounges', 'Private Estates'],
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMY7U4pLjoqWAm-csUaIIohGKEvAafb-m942e923vdz34e9xTe5RTeyrTfHQBFYuH2FySKs4SwIFw3O716U_gcfXDjDrbrYfuMTCVxPmhY6kMX2VC-2dInfCxF7IF3i2l5-LiAUAUC8zoGO6P2g51mNzQ=w1344-h768-s-no-gm?authuser=0'
  },
  {
    id: 'lab-pod-alpha',
    name: 'EMPHZ LabPod',
    category: 'research',
    headline: 'Precision Controlled Environments',
    description: 'Specialized laboratory modules for sensitive research. Features specialized filtration, chemical-resistant surfaces, and vibration-dampened flooring.',
    features: [
      'ISO 7 Cleanroom Compliance',
      'Chemical-Resistant Wall Panels',
      'Anti-Vibration Floor Assembly',
      'Specialized Exhaust Management',
      'Electronic Access Logistics'
    ],
    specs: {
      Dimensions: '3.6m x 2.4m x 2.8m',
      Weight: '1200kg',
      Air_Exchange: '60 changes/hour',
      Frame: 'SS304 Reinforced'
    },
    useCases: ['Pharmaceutical Research', 'Testing Labs', 'Mobile Clinics', 'Tech Manufacturing'],
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMV5hGEEEdpdnKLgB0DRqObV9cKXP6QKAncSrIbIQnQoJeXZl9eBjhd2sap19P0g52wKE_guoBLXeO69MZIbnjljuao0D0YXi2N3VvoMU1BeXn7d4l-kqoXag1lLPorlKp2DK5ndinicl1qigofgs9AXA=w1545-h869-s-no-gm?authuser=0'
  },
  {
    id: 'aqua-sanitary-unit',
    name: 'EMPHZ SaniMod',
    category: 'toilet',
    headline: 'Ultra-Premium Portable Sanitation',
    description: 'The SaniMod redefined. High-end fixtures meets modular portability. A sanitary module that sets a new industry benchmark for hygiene and industrial design.',
    features: [
      'Touchless Fixture Systems',
      'Self-Generating Power Options',
      'Odor-Neutralizing Internal Ventilation',
      'Ceramic-Finished Interior Panels',
      'Integrated Waste Monitoring'
    ],
    specs: {
      Dimensions: '1.2m x 1.2m x 2.4m',
      Weight: '380kg',
      Plumbing: 'Pre-fitted PEX System',
      Ventilation: 'Forced-Air Extract'
    },
    useCases: ['Construction HQs', 'Public Parks', 'Event Grounds', 'Remote Camps'],
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOQCBCGPhZmf_8ilQ0TED_VfO2Yh2GRgUiIbZ3WB3tbtea5rCI43cIVGHNUo-dy4zyOJV3QYL3YAxSUbZsCHr7EVEWRq4SmPiNCEIlMzxIiE6FRwBb5S9HtFn-08vgOPxWVTNSMLnmdTyuEeIMgtX7iYA=w869-h869-s-no-gm?authuser=0'
  },
  {
    id: 'transit-module-urban',
    name: 'EMPHZ Urban Transit',
    category: 'infrastructure',
    headline: 'Smart Public Infrastructure',
    description: 'The Urban Transit station is a modular bus terminal integrated with digital signage, solar power, and ergonomic seating. Designed for the smart cities of India.',
    features: [
      'Bifacial Solar Roofing',
      'E-Ink Transit Timing Boards',
      'Tempered Blast-Proof Glass',
      'Integrated LED Safety Lighting',
      'Modular Expansion Blocks'
    ],
    specs: {
      Dimensions: '4.8m x 2.0m x 2.8m',
      Structure: 'Heavy-Duty Powder Coated Steel',
      Power: 'Off-grid Solar Hybrid',
      Seating: 'Perforated Stainless Steel'
    },
    useCases: ['Smart Cities', 'Private Townships', 'Corporate Campuses', 'Transit Hubs'],
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOYyrN7zzWAF72LarCKhxba48Z63JkRPQa84TPIyRzuZwyGt-CbVJd4tzh2kNF93HhECGlR7d4lJzH5XFeWiqwiwWJy3yuaqr4v3VJXs3CJHYNEgmroDLxP0U89hb-D5PJ0wB1CNPL56fN7KgdXmzWs7w=w1304-h869-s-no-gm?authuser=0'
  },
  {
    id: 'utility-gen-room',
    name: 'EMPHZ Generator Pod',
    category: 'utility',
    headline: 'Silent Power Housing',
    description: 'A dedicated acoustic housing for high-capacity generators. Minimizes noise pollution while providing a weather-shielded, fire-rated environment for power equipment.',
    features: [
      '80mm Acoustic Rockwool Linings',
      'Automatic Fire Suppression Port',
      'Forced Air Cooling Inlets',
      'Fuel-Spill Containment Channels',
      'Vibration Isolation Mounts'
    ],
    specs: {
      Dimensions: '3.0m x 2.0m x 2.2m',
      Acoustics: '35dB Noise Reduction',
      Fire_Rating: 'A1 Non-Combustible',
      Access: 'Double Swing Tech-Doors'
    },
    useCases: ['IT Parks', 'Hospitality', 'Residential Complexes', 'Industrial Units'],
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMe1mwOA84BIJHtR5Bmlm2Y59AP-X4R0c-xrWMKdq3PTwxcwl3JKGVtTucHulwZC7fvPFGgSG9JOHxRFG7HgNvZksxRPnBM43HKmghY8xFC119g3rlfoQw6keBieXkY0ieeipHFXt8ae0tpNw3ULflq5g=w869-h869-s-no-gm?authuser=0'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Experience', href: '/experience' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
];

export const COMPANY = {
  name: 'EMPHZ',
  siteUrl: 'https://emphz.com',
  phoneDisplay: '+91 86488 81888',
  phoneE164: '+9186488818888',
  whatsappNumber: '9186488818888',
  email: 'procure@emphz.com'
} as const;
