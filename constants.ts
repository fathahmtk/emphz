
import { ProductDef, RoutePath } from './types';

export const COMPANY_INFO = {
  name: "EMPHZ",
  tagline: "Industrial GRP Manufacturing & Engineering",
  locations: {
    factory: "Plot No. 42-A, KIADB Industrial Area, Mysuru, Karnataka 570016",
    corporate: "Tech Tower, Kinfra Park, Kochi, Kerala 682042"
  },
  contact: {
    phone: "+91 800 123 4567",
    email: "procurement@emphz.com"
  }
};

export const PRODUCTS: ProductDef[] = [
  {
    id: "electrical-enclosures",
    name: "GRP Electrical Enclosures (LT / HT / Metering)",
    shortDescription: "Weatherproof IP65/66 enclosures for power distribution and telecom infrastructure.",
    fullDescription: "Engineered for high-voltage and low-voltage electrical distribution, EMPHZ GRP enclosures provide superior dielectric strength and corrosion resistance compared to galvanized steel. Designed for roadside, industrial, and coastal installation environments in compliance with IEC 62208.",
    applications: ["Power Distribution", "Telecom & Data"],
    specs: [
      { label: "Material Composition", value: "Hot Pressed SMC (Sheet Moulding Compound)" },
      { label: "IP Protection", value: "IP65 / IP66 (IEC 60529)" },
      { label: "Impact Strength", value: "IK10 (>20 Joules)" },
      { label: "Flammability", value: "UL94 V0 (Self-extinguishing)" },
      { label: "Standard Color", value: "RAL 7035 (Light Grey)" }
    ],
    features: ["Electrically non-conductive", "Radio-transparent for telemetry", "UV Stabilized (Grade 5)", "Anti-vandal hidden hinges"],
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "horizon-pod",
    name: "Horizon Pod (Civic Nest System)",
    shortDescription: "Landscape-integrated urban infrastructure for social interaction and informal learning.",
    fullDescription: "CIVIC NEST is a landscape-integrated urban infrastructure platform designed to enhance waiting and informal learning experiences in public spaces for people of all ages. The system integrates functional pods seamlessly to serve resting, digital, and learning needs.",
    applications: ["Urban Infrastructure", "Mass Transit"],
    specs: [
      { label: "Module Type", value: "Civic Nest Platform" },
      { label: "Functions", value: "Social Learning / Resting / Digital Access" },
      { label: "Dimensions", value: "3400mm x 2800mm (Base)" },
      { label: "Seating", value: "8-12 Pax Ergonomic Contour" },
      { label: "Tech Integration", value: "Transit Digital Access / Ambient Info" }
    ],
    features: [
      "Social Learning: Low-stress environments for interaction", 
      "Resting Pod: Ergonomic support for waiting and rest", 
      "Programmatic Elements: Seamless functional integration", 
      "Passive Learning: Digital and ambient information interfaces"
    ],
    imageUrl: "https://images.unsplash.com/photo-1599368306059-4b355819385d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "modular-kiosks",
    name: "Modular GRP Kiosks & Shelters",
    shortDescription: "Prefabricated shelters for checkpoints, ticketing, and control rooms.",
    fullDescription: "Factory-assembled modular GRP structures designed for rapid deployment. Featuring double-wall PUF sandwich construction for thermal insulation and structural rigidity. Suitable for continuous outdoor exposure in tropical, saline, and industrial environments.",
    applications: ["Urban Infrastructure"],
    specs: [
      { label: "Wall Construction", value: "Double-skin GRP with 40mm PUF core" },
      { label: "Thermal Conductivity", value: "0.022 W/mK (Insulation)" },
      { label: "Wind Load Rating", value: "Up to 120 km/h" },
      { label: "Flooring", value: "Anti-skid chequered GRP / Vinyl" }
    ],
    features: ["Modular knock-down assembly", "Concealed electrical wiring", "EPDM Weather seals", "Zero maintenance exterior"],
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "portable-toilets",
    name: "Portable GRP Toilets",
    shortDescription: "Hygienic, chemical-resistant sanitation units for public and industrial use.",
    fullDescription: "Single-mould composite sanitation units designed for public infrastructure, construction sites, and industrial plants. Seamless gel-coated interior surfaces ensure easy pressure-washing and prevent bacterial harbouring. Available with bio-digester integration.",
    applications: ["Industrial Plants", "Urban Infrastructure", "Water & Utilities"],
    specs: [
      { label: "Waste Tank", value: "200L - 500L (Bio-digester optional)" },
      { label: "Resin System", value: "Chemical Resistant Isophthalic" },
      { label: "Ventilation", value: "Louvered high-level vents" },
      { label: "Dimensions", value: "Std: 1.2m x 1.2m x 2.4m" }
    ],
    features: ["Rot-proof construction", "Urine/Chemical resistant", "Integrated water tank", "Plug-and-play plumbing"],
    imageUrl: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "security-cabins",
    name: "Security Cabins & Guard Rooms",
    shortDescription: "Ergonomic guard rooms for industrial gates and defense installations.",
    fullDescription: "Heavy-duty security cabins manufactured for 24/7 occupancy. Designed with 360-degree visibility, thermal comfort, and integrated furniture options. Built to withstand impact, heavy rain, and environmental weathering without degradation.",
    applications: ["Industrial Plants", "Urban Infrastructure"],
    specs: [
      { label: "Structure Type", value: "Monolithic GRP / Sandwich Panel" },
      { label: "Glazing", value: "Toughened Safety Glass (Tinted)" },
      { label: "Roof System", value: "Insulated Sloped GRP with Overhang" },
      { label: "Electrical", value: "Pre-wired with MCB protection" }
    ],
    features: ["High thermal insulation", "360-degree visibility", "Furniture integration", "Crane lifting hooks"],
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "generator-rooms",
    name: "Generator Rooms & Power Houses",
    shortDescription: "Acoustic GRP housings for DG sets, compressors, and pumps.",
    fullDescription: "Engineered acoustic enclosures designed to reduce noise pollution from diesel generators and heavy machinery. Lined with high-density acoustic foam and fire-retardant materials. Custom airflow design ensures equipment cooling while maintaining IP ratings.",
    applications: ["Industrial Plants", "Power Distribution"],
    specs: [
      { label: "Noise Reduction", value: "25-30 dBA attenuation" },
      { label: "Acoustic Lining", value: "Fire-retardant Acoustic Foam / Rockwool" },
      { label: "Airflow", value: "Attenuated Louvers / Forced Draft" },
      { label: "Access", value: "Removable Panels / Service Doors" }
    ],
    features: ["Soundproofing", "Fire retardant properties", "Vibration damping", "Custom footprint"],
    imageUrl: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "grp-canopies",
    name: "GRP Canopies & Bus Waiting Sheds",
    shortDescription: "Structural roofing for transit, walkways, and parking infrastructure.",
    fullDescription: "Structural GRP roofing systems offering high strength-to-weight ratios. Ideal for cantilevered designs such as bus shelters and walkways where corrosion of steel structures is a concern due to vehicular emissions or coastal air.",
    applications: ["Mass Transit", "Urban Infrastructure"],
    specs: [
      { label: "Profile", value: "Corrugated / Trapezoidal / Flat" },
      { label: "Light Transmission", value: "Opaque or Translucent" },
      { label: "Unsupported Span", value: "Up to 6m (profile dependent)" },
      { label: "Surface Finish", value: "UV-stabilized Gel Coat" }
    ],
    features: ["Lightweight structural load", "No rusting/painting req.", "High impact resistance", "Color matching to RAL"],
    imageUrl: "https://images.unsplash.com/photo-1517153192978-b67364173873?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "custom-fabrication",
    name: "Custom GRP Fabrication",
    shortDescription: "Bespoke composite engineering for unique project requirements.",
    fullDescription: "Complete design-to-part service for custom GRP components. Utilizing hand lay-up, spray-up, and RTM processes to deliver complex geometries based on client drawings and specifications. Includes FEA analysis and mould generation.",
    applications: ["Industrial Plants"],
    specs: [
      { label: "Processes", value: "Hand Lay-up, RTM, SMC, Pultrusion" },
      { label: "Resin Types", value: "Isophthalic, Orthophthalic, Vinyl Ester" },
      { label: "Reinforcement", value: "CSM, Woven Roving, Unidirectional" },
      { label: "Tooling", value: "In-house Pattern & Mould making" }
    ],
    features: ["Rapid prototyping", "Scalable production", "Complex geometries", "Structural Analysis Support"],
    imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb077766361?q=80&w=1200&auto=format&fit=crop"
  }
];

export const NAV_LINKS = [
  { name: 'Products', path: RoutePath.PRODUCTS },
  { name: 'Engineering', path: RoutePath.ENGINEERING },
  { name: 'Manufacturing', path: RoutePath.MANUFACTURING },
  { name: 'Horizon Pod', path: RoutePath.HORIZON }, // Featured Project
  { name: 'Solutions', path: RoutePath.SOLUTIONS },
  { name: 'About', path: RoutePath.ABOUT },
  { name: 'Contact', path: RoutePath.CONTACT },
];