
import type { Product, Industry, Project, TeamMember, Certification, Resource, HeroSlide, PortfolioItem, ProductCategory, CaseStudy } from '@/lib/types';
import { Wrench, Zap, Building, HardHat, Car, Factory, Shield, Wifi, Wind, Briefcase, Boxes, Construction, Lamp, Cable } from 'lucide-react';

export const industries: Industry[] = [
    { id: '1', name: 'Power Distribution & Utilities', description: 'Solutions for power distribution networks and utility infrastructure.', icon: Zap, image_id: 'industry-energy' },
    { id: '2', name: 'Infrastructure & Public Works', description: 'Products for transport, water, and public-sector projects.', icon: Building, image_id: 'industry-public-works' },
    { id: '3', name: 'Telecom & Digital Networks', description: 'Infrastructure for communication networks and data centers.', icon: Wifi, image_id: 'industry-telecom' },
    { id: '4', name: 'Energy & Process Facilities', description: 'Enclosures for oil & gas, and other process industries.', icon: Factory, image_id: 'industry-factory' },
    { id: '5', name: 'Renewable Energy & EV Infrastructure', description: 'Support for solar, wind, and electric vehicle charging projects.', icon: Wind, image_id: 'industry-renewable' },
    { id: '6', name: 'Industrial & Manufacturing Units', description: 'Durable solutions for various manufacturing environments.', icon: HardHat, image_id: 'industry-construction' },
];

export const productCategories: ProductCategory[] = [
    {
      id: '1', name: "GRP Electrical Enclosures", 
      description: "Safe housing for electrical, control, and metering equipment.", 
      icon: Boxes, 
      slug: "/products/grp-electrical-enclosures", 
      image_id: "product-enclosure-1",
      subline: "Engineered enclosures for control, metering, and distribution systems operating in harsh outdoor environments.",
      useCases: [
        { applicationType: 'public', scenario: 'Street-side distribution', description: 'Housing for local power distribution nodes.', environment: 'Urban, high traffic', reason: 'High impact resistance and electrical safety.' },
        { applicationType: 'public', scenario: 'Public utility metering', description: 'Secure enclosures for utility meters.', environment: 'Residential, commercial', reason: 'Tamper-resistant and weatherproof.' },
        { applicationType: 'energy', scenario: 'Substations', description: 'Control and relay panels for substations.', environment: 'High voltage, outdoor', reason: 'Excellent electrical insulation and durability.' },
        { applicationType: 'energy', scenario: 'Renewable parks', description: 'Combiner boxes and monitoring units for solar/wind farms.', environment: 'Exposed, remote', reason: 'UV and corrosion resistance for long life.' },
        { applicationType: 'industrial', scenario: 'Plant control panels', description: 'Housing for motor control centers and PLC panels.', environment: 'Factory floor, high dust', reason: 'Sealed against dust and moisture ingress.' },
        { applicationType: 'industrial', scenario: 'Hazardous zones', description: 'ATEX-certified enclosures for explosive atmospheres.', environment: 'Oil & Gas, chemical plants', reason: 'Certified safety for critical applications.' },
      ],
      engineeringParameters: [
        { parameter: 'Material Grade', description: 'UV-stabilized, high-strength GRP composite.' },
        { parameter: 'Thickness Options', description: 'Standard 3mm, with options up to 10mm for heavy-duty applications.' },
        { parameter: 'Structural Reinforcement', description: 'Integrated ribbing and corner reinforcements for rigidity.' },
      ],
      safetyParameters: [
        { parameter: 'IP Ratings', description: 'Standard IP65, with options for IP67/IP68 for full submersion.' },
        { parameter: 'Fire Retardancy', description: 'Class 1 fire retardancy as per BS 476 Part 7.' },
        { parameter: 'Electrical Safety', description: 'High dielectric strength, providing safety for operators.' },
      ],
      complianceMatrix: [
        { standard: 'IP66', scope: 'Outdoor ingress protection', availability: 'Standard' },
        { standard: 'UL 94-V0', scope: 'Flame retardancy', availability: 'On request' },
        { standard: 'BIS', scope: 'Utility compliance', availability: 'Available' },
      ],
      systemIntegrations: [
        { name: 'GRP Kiosks', slug: 'grp-kiosks-equipment-shelters' },
        { name: 'Equipment Shelters', slug: 'grp-kiosks-equipment-shelters' },
      ]
    },
    {
      id: '2', name: "GRP Kiosks & Shelters", 
      description: "Factory-built modular units for electrical and equipment housing.", 
      icon: Construction, 
      slug: "/products/grp-kiosks-equipment-shelters", 
      image_id: "product-kiosk-1",
      subline: "Modular, factory-assembled structures for housing critical systems and protecting personnel.",
      useCases: [],
      engineeringParameters: [],
      safetyParameters: [],
      complianceMatrix: [],
      systemIntegrations: []
    },
    {
      id: '3', name: "Portable GRP Toilets", 
      description: "Hygienic and durable sanitation units for public and industrial use.", 
      icon: Lamp, 
      slug: "/products/portable-grp-toilets", 
      image_id: "product-toilet-1",
      subline: "Durable, hygienic, and low-maintenance sanitation solutions for sites and public areas.",
      useCases: [],
      engineeringParameters: [],
      safetyParameters: [],
      complianceMatrix: [],
      systemIntegrations: []
    },
    {
      id: '4', name: "Custom GRP Manufacturing", 
      description: "Custom-manufactured GRP structures built as per project requirements.", 
      icon: Cable, 
      slug: "/products/custom-grp-manufacturing", 
      image_id: "project-neom",
      subline: "Bespoke GRP components and structures engineered to your exact drawings and specifications.",
      useCases: [],
      engineeringParameters: [],
      safetyParameters: [],
      complianceMatrix: [],
      systemIntegrations: []
    },
];

export const products: Product[] = [
  {
    id: '1',
    categoryId: '1',
    slug: 'grp-electrical-enclosures',
    name: 'GRP Electrical Enclosures',
    tagline: 'Factory-Manufactured | Custom-Built | Long-Life GRP Solutions',
    short_description: 'Versatile, weatherproof enclosures for electrical and automation systems.',
    overview: 'GRP Electrical Enclosures manufactured by EMPHZ are designed to safely house electrical, control, metering, and automation equipment in outdoor and industrial environments. These enclosures are produced using high-quality Glass Reinforced Plastic (GRP) and are suitable for long-term exposure to heat, rain, humidity, dust, and corrosive conditions.',
    overviewContext: 'EMPHZ supplies both standard enclosure models and fully customised enclosures manufactured strictly as per drawings, specifications, or site requirements.',
    applications: [
      'Electrical metering panels',
      'LT & HT distribution systems',
      'Control and relay panels',
      'Automation and PLC panels',
      'Utility junction and termination boxes',
      'Industrial electrical installations'
    ],
    applicationsContext: 'This product is commonly used in utility, infrastructure, EPC, and industrial projects where durability and safety are critical.',
    constructionDetails: [
      'Manufactured using mould-based GRP fabrication',
      'Panels designed for structural rigidity',
      'Reinforced corners and mounting zones',
      'Weather-sealed doors and joints',
      'Hardware selected for outdoor use'
    ],
    constructionContext: 'All enclosures are manufactured in-house under controlled fabrication conditions to ensure consistent quality.',
    technicalHighlights: [
      'Excellent corrosion resistance',
      'Fire-retardant material options',
      'Suitable for continuous outdoor installation',
      'Resistant to dust, moisture, and UV exposure',
      'Electrically non-conductive material',
      'Low maintenance over long service life'
    ],
    technicalContext: 'This makes GRP enclosures superior to conventional metallic enclosures in harsh environments.',
    standardConfigurations: [
        { parameter: 'Mounting Type', options: 'Wall-mounted / Floor-mounted' },
        { parameter: 'Door Type', options: 'Single door / Double door' },
        { parameter: 'Orientation', options: 'Front access / Rear access' },
        { parameter: 'Usage', options: 'Indoor / Outdoor' },
        { parameter: 'Finish', options: 'Smooth / Textured' },
        { parameter: 'Colour', options: 'As specified' }
    ],
    standardConfigurationsContext: 'Standard configurations allow faster project execution, while custom models are available when required.',
    dimensions: [
      'Standard sizes available',
      'Custom dimensions manufactured as per drawing'
    ],

    dimensionsNote: 'Final dimensions are confirmed only after drawing approval to ensure correct fit for electrical equipment.',
    customisationOptions: [
      'Enclosure size and internal layout',
      'Mounting plates and DIN rail systems',
      'Cable entry locations and sizes',
      'Ventilation louvers and cut-outs',
      'Door locks and access control',
      'Colour and surface finish'
    ],
    customisationContext: 'If the requirement is not standard, EMPHZ manufactures it as custom.',
    supplyScope: [
        'GRP enclosure body',
        'Doors with hinges and locking system',
        'Accessories as per approved order'
    ],
    supplyScopeContext: 'Optional items are supplied only when specified.',
    qualityAssurance: [
        'Dimensional checks during fabrication',
        'Visual and structural inspection',
        'Hardware and fitment verification',
        'Final inspection before dispatch'
    ],
    qualityAssuranceContext: 'This ensures reliability for critical electrical installations.',
    downloads: [
      { title: 'Product Catalogue', url: '/resources/EE-001-datasheet.pdf' },
      { title: 'Technical Datasheet', url: '/resources/EE-001-datasheet.pdf' },
      { title: 'GA Drawings (on request)', url: '/contact' }
    ],
    relatedProducts: [
        { name: 'GRP Kiosks & Equipment Shelters', slug: 'grp-kiosks-equipment-shelters' },
        { name: 'Generator & Power Rooms', slug: 'grp-generator-power-rooms' },
        { name: 'Custom GRP Enclosures', slug: 'custom-grp-manufacturing' },
    ],
    image_id: 'product-enclosure-1',
    gallery_image_ids: ['product-enclosure-1', 'product-enclosure-2', 'product-enclosure-3']
  },
  {
    id: '2',
    categoryId: '2',
    slug: 'grp-kiosks-equipment-shelters',
    name: 'GRP Kiosks & Equipment Shelters',
    tagline: 'Factory-Built Modular Units for Electrical and Equipment Housing',
    short_description: 'Modular, factory-built kiosks for housing critical equipment systems.',
    overview: 'Factory-built modular GRP kiosks for housing electrical and equipment systems. Supplied as ready-to-install units.',
    applications: [
        'Distribution substations',
        'Control and relay rooms',
        'Equipment housing',
        'Utility installations',
    ],
    constructionDetails: [],
    technicalHighlights: [
        'Modular GRP panel construction',
        'Thermal insulation',
        'Weatherproof design',
        'Long service life',
        'Quick on-site installation',
    ],
    standardConfigurations: [
       { parameter: 'Layout', options: 'Single and multi-room layouts' },
       { parameter: 'Panels', options: 'Insulated and non-insulated panels' },
       { parameter: 'Flooring', options: 'Integrated flooring systems' },
    ],
    dimensions: [],
    customisationOptions: [
        'Floor size and height',
        'Door and ventilation layout',
        'Cable trenches and base frames',
        'Internal partitions',
    ],
    supplyScope: [],
    qualityAssurance: [],
    downloads: [
      { title: 'Product Catalogue', url: '#' },
      { title: 'Technical Datasheet', url: '#' }
    ],
    relatedProducts: [],
    image_id: 'product-kiosk-1',
    gallery_image_ids: ['product-kiosk-1', 'product-kiosk-2', 'project-power-station']
  },
   {
    id: '3',
    categoryId: '3',
    slug: 'portable-grp-toilets',
    name: 'Portable GRP Toilets',
    tagline: 'Durable and Hygienic Sanitation Units',
    short_description: 'Hygienic, low-maintenance toilets for sites and public areas.',
    overview: 'Durable, hygienic GRP toilet units suitable for public, industrial, and project-based usage.',
    applications: [
        'Construction sites',
        'Public locations',
        'Industrial facilities',
        'Temporary installations',
    ],
    constructionDetails: [],
    technicalHighlights: [
        'Smooth, easy-to-clean GRP interiors',
        'Lightweight and relocatable',
        'Strong structural design',
        'Low maintenance',
    ],
    standardConfigurations: [
        { parameter: 'Commode', options: 'Indian or Western style' },
        { parameter: 'Wash Basin', options: 'Integrated or separate' },
    ],
    dimensions: [],
    customisationOptions: [
        'Layout configuration',
        'Ventilation systems',
        'Colour and branding',
    ],
    supplyScope: [],
    qualityAssurance: [],
    downloads: [
      { title: 'Product Catalogue', url: '#' },
      { title: 'Technical Datasheet', url: '#' }
    ],
    relatedProducts: [],
    image_id: 'product-toilet-1',
    gallery_image_ids: ['product-toilet-1', 'product-toilet-2']
  },
  {
    id: '4',
    categoryId: '4',
    slug: 'custom-grp-manufacturing',
    name: 'Custom GRP Manufacturing',
    tagline: 'If it can be made in GRP, EMPHZ can manufacture it.',
    short_description: 'Bespoke GRP structures and components built to your exact specifications.',
    overview: 'EMPHZ specialises in custom-built GRP products, manufactured based on drawings, samples, or site requirements.',
    applications: [
      'Special electrical enclosures', 'Equipment covers', 'Utility boxes', 'Architectural GRP elements', 'Industrial housings', 'Non-standard kiosks and shelters'
    ],
    constructionDetails: [
        'Design-to-manufacture support', 'Mould-based fabrication', 'Hand lay-up GRP manufacturing', 'Small batch and bulk production'
    ],
    technicalHighlights: [],
    standardConfigurations: [],
    dimensions: [],
    customisationOptions: [
      'Any size', 'Any shape', 'Any application suitable for GRP'
    ],
    supplyScope: [],
    qualityAssurance: [],
    downloads: [
       { title: 'Manufacturing Capabilities', url: '#' },
    ],
    relatedProducts: [],
    image_id: 'hero-industrial',
    gallery_image_ids: ['hero-industrial', 'industry-factory', 'project-neom']
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
    primaryText: "Explore Products",
    primaryLink: "/products",
  },
  {
    id: "hero-2",
    imageId: "hero-solar",
    title: "ADVANCED SOLUTIONS FOR RENEWABLE ENERGY",
    subtitle:
      "Future-proof your solar and wind energy projects with our durable, weather-resistant GRP infrastructure.",
    primaryText: "Renewable Solutions",
    primaryLink: "/products",
  },
  {
    id: "hero-3",
    imageId: "hero-industrial",
    title: "ROBUST INFRASTRUCTURE FOR HEAVY INDUSTRY",
    subtitle:
      "From power plants to manufacturing facilities, our GRP solutions provide unmatched protection and longevity.",
    primaryText: "Industrial Applications",
    primaryLink: "/products",
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

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'saudi-aramco-substation',
    title: 'Substation Control Rooms for Saudi Aramco',
    client: 'Saudi Aramco',
    summary: 'EMPHZ provided blast-resistant GRP control rooms to ensure operational safety in a critical energy facility.',
    imageId: 'project-neom', // Placeholder image
    challenge: 'The client required control rooms that could withstand potential blast events and harsh environmental conditions, while ensuring the safety of personnel and sensitive equipment.',
    solution: 'We designed, manufactured, and supplied custom-built, blast-resistant GRP enclosures. The structures were engineered with reinforced composite panels and integrated safety features to meet stringent client specifications.',
    results: [
      'Successfully met all blast-resistance and safety requirements.',
      'Ensured uninterrupted operation of critical control systems.',
      'Delivered a durable, low-maintenance solution suitable for the harsh desert environment.',
      'Completed the project ahead of schedule and within budget.'
    ],
    products: ['GRP Kiosks & Equipment Shelters', 'Custom GRP Manufacturing']
  },
  {
    id: '2',
    slug: 'dubai-metro-expansion',
    title: 'Signaling Equipment Shelters for Dubai Metro',
    client: 'Dubai RTA',
    summary: 'We supplied fire-retardant GRP shelters to protect vital signaling and communication equipment for the Dubai Metro expansion project.',
    imageId: 'project-dubai', // Placeholder image
    challenge: 'The project demanded equipment shelters with high fire-retardancy, excellent weather resistance, and long-term durability to ensure the reliability of the metro\'s signaling network.',
    solution: 'EMPHZ delivered pre-fabricated GRP shelters using Class 1 fire-retardant materials. The modular design allowed for rapid installation, and the shelters were equipped with thermal insulation and custom cable entry points.',
    results: [
      'Provided certified fire-retardant enclosures, enhancing system safety.',
      'Reduced on-site installation time by 40% compared to conventional construction.',
      'Guaranteed protection of sensitive electronics from extreme heat and dust.',
      'Supplied a cost-effective solution with a 25+ year design life.'
    ],
    products: ['GRP Kiosks & Equipment Shelters']
  },
    {
    id: '3',
    slug: 'qatar-gas-instrumentation-cabinets',
    title: 'Instrumentation Cabinets for Qatar Gas LNG Plant',
    client: 'Qatar Gas',
    summary: 'Custom IP65-rated GRP cabinets to protect sensitive instrumentation in a highly corrosive LNG plant environment.',
    imageId: 'project-qatar-gas', // Placeholder image
    challenge: 'The LNG facility had a highly corrosive seaside environment, requiring instrument enclosures with superior protection against moisture, salt spray, and chemical exposure.',
    solution: 'We manufactured custom-sized GRP cabinets with an IP65 rating. The cabinets featured stainless steel hardware, neoprene gaskets, and a UV-resistant gelcoat finish to provide maximum environmental protection.',
    results: [
      'Delivered over 500 IP65-rated cabinets that exceeded client specifications.',
      'Eliminated corrosion-related equipment failures, improving plant reliability.',
      'Provided a lightweight, easy-to-install alternative to heavy, corrosion-prone metallic cabinets.',
      'Achieved a 100% on-time delivery record for all project phases.'
    ],
    products: ['GRP Electrical Enclosures', 'Custom GRP Manufacturing']
  },
];
