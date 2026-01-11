

import type { Product, Industry, Project, TeamMember, Certification, Resource, HeroSlide, PortfolioItem } from '@/lib/types';
import { Wrench, Zap, Building, HardHat, Car, Factory, Shield, Wifi, Wind, Briefcase } from 'lucide-react';

export const industries: Industry[] = [
    { id: '1', name: 'Power Distribution & Utilities', description: 'Solutions for power distribution networks and utility infrastructure.', icon: Zap, image_id: 'industry-energy' },
    { id: '2', name: 'Infrastructure & Public Works', description: 'Products for transport, water, and public-sector projects.', icon: Building, image_id: 'industry-public-works' },
    { id: '3', name: 'Telecom & Digital Networks', description: 'Infrastructure for communication networks and data centers.', icon: Wifi, image_id: 'industry-telecom' },
    { id: '4', name: 'Energy & Process Facilities', description: 'Enclosures for oil & gas, and other process industries.', icon: Factory, image_id: 'industry-factory' },
    { id: '5', name: 'Renewable Energy & EV Infrastructure', description: 'Support for solar, wind, and electric vehicle charging projects.', icon: Wind, image_id: 'industry-renewable' },
    { id: '6', name: 'Industrial & Manufacturing Units', description: 'Durable solutions for various manufacturing environments.', icon: HardHat, image_id: 'industry-construction' },
];

export const products: Product[] = [
  {
    id: '1',
    sku: 'EE-001',
    name: 'GRP Electrical Enclosure - Standard',
    slug: 'grp-electrical-enclosure-standard',
    category: 'Electrical Enclosures',
    short_description: 'Durable GRP enclosures for metering, control, and distribution applications.',
    long_description: 'Our standard GRP Electrical Enclosure offers superior protection in a lightweight, cost-effective package. Designed for versatility, it is suitable for a wide range of applications, providing excellent resistance to impact and harsh weather conditions.',
    features: [
      { name: 'Corrosion Resistant', icon: 'ShieldCheck' },
      { name: 'UV Stable', icon: 'Sun' },
      { name: 'Self-Extinguishing', icon: 'Flame' }
    ],
    ip_rating: 66,
    dimensions: { height: 600, width: 400, depth: 230 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['BIS', 'CPRI'],
    material_standard: 'IS 13947',
    fire_retardancy_class: 'BS 476, Part 7, Class 2',
    download_url: '/resources/EE-001-datasheet.pdf',
    cad_download_url: '/resources/EE-001-cad.zip',
    image_id: 'product-enclosure-1',
    gallery: [
        { image_id: 'product-enclosure-1', description: 'Front view of the enclosure' },
        { image_id: 'product-enclosure-2', description: 'Side view of the enclosure' },
        { image_id: 'product-enclosure-3', description: 'Interior of the enclosure' }
    ],
    industry_ids: ['1', '2', '3', '4', '5', '6'],
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
    short_description: 'Factory-built modular shelters for electrical, telecom, and control equipment.',
    long_description: 'Our modular GRP kiosks are the perfect solution for a variety of outdoor and industrial applications, including security posts, information booths, and equipment housing. They are fully customizable to meet specific size and feature requirements.',
    features: [
      { name: 'Corrosion Resistant', icon: 'ShieldCheck' },
      { name: 'UV Stable', icon: 'Sun' },
      { name: 'Self-Extinguishing', icon: 'Flame' }
    ],
    ip_rating: 65,
    dimensions: { height: 2500, width: 2000, depth: 2000 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['Indian Standards'],
    material_standard: 'IS 14772',
    fire_retardancy_class: 'BS 476, Part 7, Class 1',
    download_url: '/resources/Kiosk-001-datasheet.pdf',
    cad_download_url: '/resources/Kiosk-001-cad.zip',
    image_id: 'product-kiosk-1',
    gallery: [
        { image_id: 'product-kiosk-1', description: 'Front view of the kiosk' },
        { image_id: 'product-kiosk-2', description: 'Kiosk in a field' }
    ],
    industry_ids: ['1', '2', '3', '5'],
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
    short_description: 'Hygienic and durable sanitation units for public, construction, and industrial use.',
    long_description: 'EMPHZ GRP portable toilets are designed for durability and ease of maintenance. Ideal for construction sites, public events, and remote locations, they offer a hygienic and robust solution. Available with various plumbing and accessory options.',
    features: [
      { name: 'Corrosion Resistant', icon: 'ShieldCheck' },
      { name: 'UV Stable', icon: 'Sun' },
      { name: 'Hygienic Surface', icon: 'ShieldCheck' }
    ],
    ip_rating: 0,
    dimensions: { height: 2300, width: 1200, depth: 1200 },
    material_specs: 'Glass Reinforced Polyester (GRP)',
    authority_approval: ['Municipal Approval'],
    material_standard: 'N/A',
    fire_retardancy_class: 'BS 476, Part 7, Class 2',
    download_url: '/resources/PT-001-datasheet.pdf',
    cad_download_url: '/resources/PT-001-cad.zip',
    image_id: 'product-toilet-1',
    gallery: [
        { image_id: 'product-toilet-1', description: 'Front view of the toilet' },
        { image_id: 'product-toilet-2', description: 'Interior of the toilet' }
    ],
    industry_ids: ['2', '6'],
     standard_models: [
      { height: 2300, width: 1200, depth: 1200, ip_rating: 0 },
    ]
  },
];

export const projects: Project[] = [
  { id: '1', title: 'Mumbai High Offshore Platform', location: 'Mumbai, India', tags: ['Energy', 'GRP Enclosures'], imageId: 'project-power-station' },
  { id: '2', title: 'Delhi Metro Expansion', location: 'Delhi, India', tags: ['Public Works', 'GRP Kiosks'], imageId: 'project-dubai' },
  { id: '3', title: 'GIFT City Infrastructure', location: 'Gujarat, India', tags: ['Construction', 'Smart City'], imageId: 'project-neom' },
  { id: '4', title: 'Jamnagar Refinery Complex', location: 'Gujarat, India', tags: ['Oil & Gas', 'Fire-Retardant Cabinets'], imageId: 'project-qatar-gas' },
];

export const team: TeamMember[] = [
  { id: '1', name: 'John Doe', role: 'CEO & Founder', bio: 'With over 30 years in the engineering industry, John leads EMPHZ with a vision for innovation and quality.', image_id: 'team-john' },
  { id: '2', name: 'Jane Smith', role: 'Head of Engineering', bio: 'Jane is a certified professional engineer responsible for product design and R&D.', image_id: 'team-jane' },
  { id: '3', name: 'Peter Jones', role: 'Director of Sales', bio: 'Peter manages our global sales network and partnerships, ensuring customer satisfaction.', image_id: 'team-peter' },
];

export const certifications: Certification[] = [
  { id: '1', name: 'ISO 9001', description: 'Quality Management', image_id: 'cert-iso-9001' },
  { id: '2', name: 'ISO 14001', description: 'Environmental Management', image_id: 'cert-iso-14001' },
  { id: '3', name: 'BIS', description: 'Bureau of Indian Standards', image_id: 'cert-nema' },
  { id: '4', name: 'IP66', description: 'Ingress Protection', image_id: 'cert-ip66' },
  { id: '5', name: 'UL Listed', description: 'Safety Certification', image_id: 'cert-ul' },
  { id: '6', name: 'CE Marking', description: 'European Conformity', image_id: 'cert-ce' },
];

export const resources: Resource[] = [
  { id: '1', title: 'EE-001 Datasheet', description: 'Technical specifications for our Standard GRP Electrical Enclosure.', category: 'Electrical Enclosures', url: '/resources/EE-001-datasheet.pdf', isProtected: true },
  { id: '2', title: 'Kiosk-001 Brochure', description: 'Features and options for our Modular GRP Kiosks.', category: 'Kiosks', url: '/resources/Kiosk-001-datasheet.pdf', isProtected: false },
  { id: '3', title: 'PT-001 Installation Guide', description: 'Step-by-step guide for setting up GRP Portable Toilets.', category: 'Portable Toilets', url: '/resources/PT-001-datasheet.pdf', isProtected: false },
  { id: '4', title: 'GRP Material Guide', description: 'Comprehensive guide to the benefits of Glass Reinforced Polyester.', category: 'General', url: '/resources/GRP-material-guide.pdf', isProtected: false },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    imageId: "hero-background",
    title: "ENGINEERED FOR REAL-WORLD INFRASTRUCTURE",
    subtitle:
      "GRP Enclosures, Kiosks, Shelters & Utility Structures. Designed for continuous outdoor operation, critical services, and public infrastructure.",
    primaryText: "Request a Quote",
    primaryLink: "/contact",
    secondaryText: "Explore Products",
    secondaryLink: "/products",
  },
  {
    id: "hero-2",
    imageId: "hero-solar",
    title: "ADVANCED SOLUTIONS FOR RENEWABLE ENERGY",
    subtitle:
      "Future-proof your solar and wind energy projects with our durable, weather-resistant GRP infrastructure.",
    primaryText: "Renewable Solutions",
    primaryLink: "/products",
    secondaryText: "Our Industries",
    secondaryLink: "/#industries",
  },
  {
    id: "hero-3",
    imageId: "hero-industrial",
    title: "ROBUST INFRASTRUCTURE FOR HEAVY INDUSTRY",
    subtitle:
      "From power plants to manufacturing facilities, our GRP solutions provide unmatched protection and longevity.",
    primaryText: "Industrial Applications",
    primaryLink: "/products",
    secondaryText: "Request a Quote",
    secondaryLink: "/contact",
  },
];


export const portfolioItems: PortfolioItem[] = [
    {
        id: "1",
        title: "GRP Electrical Enclosures",
        description: "GRP electrical enclosures designed for housing electrical, control, metering, and automation equipment. Manufactured using high-quality GRP suitable for continuous outdoor and industrial use.",
        applications: ["LT / HT metering", "Control panels", "Distribution boards", "Automation and PLC panels", "Utility junction boxes"],
        features: ["Corrosion resistant GRP construction", "Fire-retardant material options", "UV and weather resistant", "Dust and moisture protection", "Indoor and outdoor models available"],
        customisation: ["Size as per drawing", "Single / double door", "Mounting plates", "Louvers, vents, cable entry", "Colour and finish"],
    },
    {
        id: "2",
        title: "GRP Kiosks & Equipment Shelters",
        description: "Factory-built modular GRP kiosks for housing electrical and equipment systems. Supplied as ready-to-install units.",
        applications: ["Distribution substations", "Control and relay rooms", "Equipment housing", "Utility installations"],
        features: ["Modular GRP panel construction", "Thermal insulation", "Weatherproof design", "Long service life", "Quick on-site installation"],
        customisation: ["Floor size and height", "Door and ventilation layout", "Cable trenches and base frames", "Internal partitions"],
    },
    {
        id: "3",
        title: "Portable GRP Toilets",
        description: "Durable, hygienic GRP toilet units suitable for public, industrial, and project-based usage.",
        applications: ["Construction sites", "Public locations", "Industrial facilities", "Temporary installations"],
        features: ["Smooth, easy-to-clean GRP interiors", "Lightweight and relocatable", "Strong structural design", "Low maintenance"],
        customisation: ["Indian / Western layout", "Wash basin integration", "Ventilation systems", "Colour and branding"],
    },
    {
        id: "4",
        title: "GRP Security Cabins",
        description: "Compact GRP cabins designed for security personnel and access control points.",
        applications: ["Factory and site entrances", "Residential complexes", "Commercial premises", "Infrastructure projects"],
        features: ["Weather resistant construction", "Clear visibility design", "Long service life", "Minimal maintenance"],
        customisation: ["Size and layout", "Sliding or hinged windows", "Electrical fittings", "Internal furniture"],
    },
    {
        id: "5",
        title: "GRP Generator & Power Rooms",
        description: "Protective GRP enclosures designed to house generator sets and power equipment.",
        applications: ["DG set housing", "Backup power systems", "Utility power installations"],
        features: ["Fire-retardant GRP panels", "Acoustic treatment options", "Proper ventilation design", "Durable outdoor construction"],
        customisation: ["Acoustic lining", "Louvers and exhaust openings", "Cable entry design", "Equipment-specific sizing"],
    },
    {
        id: "6",
        title: "GRP Food Kiosks",
        description: "Modular GRP kiosks designed for organised food service operations.",
        applications: ["Street food outlets", "Commercial food counters", "Events and exhibitions", "Institutional campuses"],
        features: ["Compact modular design", "Easy installation", "Durable food-grade interiors", "Easy cleaning and maintenance"],
        customisation: ["Counter layout", "Storage and sink integration", "Branding and colours", "Electrical and plumbing fit-outs"],
    },
    {
        id: "7",
        title: "Bus Waiting Sheds",
        description: "GRP and structural shelters designed for public transport waiting areas.",
        applications: ["Urban transport systems", "Highway bus stops", "Public infrastructure projects"],
        features: ["Weather-resistant roofing", "Strong structural framework", "Low maintenance design", "Long operational life"],
        customisation: ["Size and seating layout", "Branding panels", "Lighting provisions"],
    },
    {
        id: "8",
        title: "EV Charging Shelters",
        description: "Protective GRP shelters designed to house electric vehicle charging equipment.",
        applications: ["Public charging stations", "Commercial parking areas", "Transport hubs"],
        features: ["Protection from sun and rain", "Cable-friendly design", "Modular and expandable", "Outdoor-ready construction"],
        customisation: ["Charger-specific layout", "Branding and signage", "Electrical routing"],
    },
    {
        id: "9",
        title: "GRP Canopies",
        description: "GRP canopies designed for shading and protection of equipment and people.",
        applications: ["Industrial areas", "Utility equipment protection", "Parking and walkways"],
        features: ["Lightweight GRP construction", "Weather and UV resistant", "Low maintenance"],
        customisation: ["Size and shape", "Structural supports", "Colour and finish"],
    },
    {
        id: "10",
        title: "Custom GRP Manufacturing",
        description: "EMPHZ specialises in custom-built GRP products, manufactured based on drawings, samples, or site requirements.",
        applications: ["Special electrical enclosures", "Equipment covers", "Utility boxes", "Architectural GRP elements", "Industrial housings", "Non-standard kiosks and shelters"],
        features: ["Design-to-manufacture support", "Mould-based fabrication", "Hand lay-up GRP manufacturing", "Small batch and bulk production"],
        customisation: ["Any size", "Any shape", "Any application suitable for GRP"],
    },
];

