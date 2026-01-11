import type { Product, Industry, Project, TeamMember, Certification, Resource } from '@/lib/types';
import { Wrench, Zap, Building, HardHat, ShieldCheck, Sun, Flame } from 'lucide-react';

export const industries: Industry[] = [
  { id: '1', name: 'Construction', description: 'Durable solutions for harsh construction environments.', icon: HardHat, image_id: 'industry-construction' },
  { id: '2', name: 'Energy', description: 'Reliable infrastructure for the energy sector, from oil & gas to renewables.', icon: Zap, image_id: 'industry-energy' },
  { id: '3', name: 'Public Works', description: 'Customizable products for municipal and public infrastructure projects.', icon: Building, image_id: 'industry-public-works' },
  { id: '4', name: 'Industry Verticals', description: 'Versatile applications across a wide range of industrial verticals.', icon: Wrench, image_id: 'industry-verticals' },
];

export const products: Product[] = [
  {
    id: '1',
    sku: 'EE-001',
    name: 'GRP Electrical Enclosure - Standard',
    slug: 'grp-electrical-enclosure-standard',
    category: 'Electrical Enclosures',
    short_description: 'Robust GRP enclosure for electrical components.',
    long_description: 'Our standard GRP Electrical Enclosure offers superior protection in a lightweight, cost-effective package. Designed for versatility, it is suitable for a wide range of applications, providing excellent resistance to impact and harsh weather conditions.',
    features: [
      { name: 'Corrosion Resistant', icon: ShieldCheck },
      { name: 'UV Stable', icon: Sun },
      { name: 'Self-Extinguishing', icon: Flame }
    ],
    ip_rating: 66,
    dimensions: { height: 600, width: 400, depth: 230 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['DEWA', 'ADDC'],
    material_standard: 'BS EN 60529',
    fire_retardancy_class: 'BS 476, Part 7, Class 2',
    download_url: '/resources/EE-001-datasheet.pdf',
    image_id: 'product-enclosure-1',
    standard_models: [
      { height: 400, width: 300, depth: 200, ip_rating: 66 },
      { height: 600, width: 400, depth: 230, ip_rating: 66 },
      { height: 800, width: 600, depth: 250, ip_rating: 65 },
    ]
  },
  {
    id: '2',
    sku: 'Kiosk-001',
    name: 'Modular GRP Kiosk',
    slug: 'modular-grp-kiosk',
    category: 'Kiosks',
    short_description: 'Versatile and customizable GRP kiosks.',
    long_description: 'Our modular GRP kiosks are the perfect solution for a variety of outdoor and industrial applications, including security posts, information booths, and equipment housing. They are fully customizable to meet specific size and feature requirements.',
    features: [
      { name: 'Corrosion Resistant', icon: ShieldCheck },
      { name: 'UV Stable', icon: Sun },
      { name: 'Self-Extinguishing', icon: Flame }
    ],
    ip_rating: 65,
    dimensions: { height: 2500, width: 2000, depth: 2000 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['KAHRAMAA', 'FEWA'],
    material_standard: 'BS EN 60529',
    fire_retardancy_class: 'BS 476, Part 7, Class 1',
    download_url: '/resources/Kiosk-001-datasheet.pdf',
    image_id: 'product-kiosk-1',
     standard_models: [
      { height: 2200, width: 1500, depth: 1500, ip_rating: 65 },
      { height: 2500, width: 2000, depth: 2000, ip_rating: 65 },
      { height: 2500, width: 3000, depth: 2500, ip_rating: 65 },
    ]
  },
  {
    id: '3',
    sku: 'PT-001',
    name: 'GRP Portable Toilet',
    slug: 'grp-portable-toilet',
    category: 'Portable Toilets',
    short_description: 'Durable and hygienic GRP portable toilets.',
    long_description: 'EMPHZ GRP portable toilets are designed for durability and ease of maintenance. Ideal for construction sites, public events, and remote locations, they offer a hygienic and robust solution. Available with various plumbing and accessory options.',
    features: [
      { name: 'Corrosion Resistant', icon: ShieldCheck },
      { name: 'UV Stable', icon: Sun },
      { name: 'Hygienic Surface', icon: ShieldCheck }
    ],
    ip_rating: 0,
    dimensions: { height: 2300, width: 1200, depth: 1200 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['Municipal Approval'],
    material_standard: 'N/A',
    fire_retardancy_class: 'BS 476, Part 7, Class 2',
    download_url: '/resources/PT-001-datasheet.pdf',
    image_id: 'product-toilet-1',
     standard_models: [
      { height: 2300, width: 1200, depth: 1200, ip_rating: 0 },
    ]
  },
];

export const projects: Project[] = [
  { id: '1', name: 'Jebel Ali Power Station', industry: 'Energy', description: 'Supply of custom GRP enclosures for critical power distribution units.', image_id: 'project-power-station' },
  { id: '2', name: 'Downtown Dubai Public Works', industry: 'Public Works', description: 'Installation of modular GRP kiosks for information and ticketing.', image_id: 'project-dubai' },
  { id: '3', name: 'NEOM Construction Site', industry: 'Construction', description: 'Deployment of over 500 GRP portable toilets for a large-scale construction project.', image_id: 'project-neom' },
  { id: '4', name: 'Qatar Gas Refinery', industry: 'Energy', description: 'Provided specialized, fire-retardant GRP cabinets for sensitive equipment.', image_id: 'project-qatar-gas' },
];

export const team: TeamMember[] = [
  { id: '1', name: 'John Doe', role: 'CEO & Founder', bio: 'With over 30 years in the engineering industry, John leads EMPHZ with a vision for innovation and quality.', image_id: 'team-john' },
  { id: '2', name: 'Jane Smith', role: 'Head of Engineering', bio: 'Jane is a certified professional engineer responsible for product design and R&D.', image_id: 'team-jane' },
  { id: '3', name: 'Peter Jones', role: 'Director of Sales', bio: 'Peter manages our global sales network and partnerships, ensuring customer satisfaction.', image_id: 'team-peter' },
];

export const certifications: Certification[] = [
  { id: '1', name: 'ISO 9001', description: 'Quality Management System', image_id: 'cert-iso-9001' },
  { id: '2', name: 'ISO 14001', description: 'Environmental Management', image_id: 'cert-iso-14001' },
  { id: '3', name: 'NEMA', description: 'Electrical Equipment Standards', image_id: 'cert-nema' },
  { id: '4', name: 'IP66', description: 'Ingress Protection Rating', image_id: 'cert-ip66' },
  { id: '5', name: 'UL Listed', description: 'Safety Certification', image_id: 'cert-ul' },
  { id: '6', name: 'CE Marking', description: 'European Conformity', image_id: 'cert-ce' },
];

export const resources: Resource[] = [
  { id: '1', title: 'EE-001 Datasheet', description: 'Technical specifications for our Standard GRP Electrical Enclosure.', category: 'Electrical Enclosures', url: '/resources/EE-001-datasheet.pdf' },
  { id: '2', title: 'Kiosk-001 Brochure', description: 'Features and options for our Modular GRP Kiosks.', category: 'Kiosks', url: '/resources/Kiosk-001-datasheet.pdf' },
  { id: '3', title: 'PT-001 Installation Guide', description: 'Step-by-step guide for setting up GRP Portable Toilets.', category: 'Portable Toilets', url: '/resources/PT-001-datasheet.pdf' },
  { id: '4', title: 'GRP Material Guide', description: 'Comprehensive guide to the benefits of Glass Reinforced Polyester.', category: 'General', url: '#' },
];
