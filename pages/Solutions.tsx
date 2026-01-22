import React from 'react';
import { Umbrella, BatteryCharging, Droplets, Construction, ChevronRight, Ruler, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { PageMeta } from '../components/PageMeta';
import { useInView } from 'react-intersection-observer';

interface SystemSpec {
    label: string;
    value: string;
}

interface SolutionSystem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    specs: SystemSpec[];
    components: string[];
}

const SYSTEMS: SolutionSystem[] = [
    {
        id: 'power',
        title: 'Power Distribution Systems',
        description: 'Comprehensive insulating housing systems for low and medium voltage electrical networks. Designed to replace conductive steel enclosures in public spaces, eliminating shock hazards and earthing maintenance.',
        icon: <BatteryCharging className="h-6 w-6 text-accent-orange" />,
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1200&auto=format&fit=crop",
        specs: [
            { label: 'Voltage Class', value: 'LV (415V) / MV (11kV)' },
            { label: 'Compliance', value: 'IEC 61439 / IEC 62208' },
            { label: 'IP Protection', value: 'IP 54 / IP 65' },
            { label: 'Impact Rating', value: 'IK 10 (>20 Joules)' },
            { label: 'Fire Rating', value: 'UL94 V0 (Self Extinguishing)' }
        ],
        components: ['Feeder Pillars (DIN)', 'Meter Cabinet Arrays', 'Pole-mounted Boxes', 'Transformer Housings']
    },
    {
        id: 'sanitation',
        title: 'Urban Sanitation Infrastructure',
        description: 'Rapidly deployable sanitation infrastructure for municipalities. Our modular approach allows for the creation of toilet blocks with integrated bio-digesters, ensuring hygiene in high-density public areas.',
        icon: <Droplets className="h-6 w-6 text-accent-orange" />,
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop",
        specs: [
            { label: 'Tank Capacity', value: '500L - 5000L' },
            { label: 'Material Grade', value: 'Chemical Resistant Isophthalic' },
            { label: 'Wall Structure', value: 'Sandwich Panel (PUF Core)' },
            { label: 'Lifespan', value: '20+ Years' },
            { label: 'Maintenance', value: 'Pressure Washable' }
        ],
        components: ['Public Toilet Blocks', 'Mobile Sanitation Units', 'Bio-Digester Tanks', 'Shower Enclosures']
    },
    {
        id: 'transit',
        title: 'Transit & Mobility Shelters',
        description: 'Maintenance-free shelter systems for transport networks. engineered to withstand wind loads and vehicular emissions without corrosion, ensuring long-term aesthetic retention.',
        icon: <Umbrella className="h-6 w-6 text-accent-orange" />,
        image: "https://images.unsplash.com/photo-1513828583688-c2917kk998145?q=80&w=1200&auto=format&fit=crop",
        specs: [
            { label: 'Wind Load', value: 'Up to 180 km/h' },
            { label: 'Roof Profile', value: 'Trapezoidal / Corrugated' },
            { label: 'Structural Span', value: 'Cantilever up to 3m' },
            { label: 'UV Stability', value: 'Grade 5 (Wool Scale)' },
            { label: 'Expansion', value: 'Modular Bay Addition' }
        ],
        components: ['BRT Stations', 'Railway Platform Roofing', 'EV Charging Canopies', 'Walkway Covers']
    },
    {
        id: 'landscape',
        title: 'Urban Landscape Systems',
        description: 'Architectural composite street furniture and landscaping modules. Enabling fluid, organic geometries that are impossible with concrete, while offering absolute resistance to coastal salinity and UV degradation.',
        icon: <Layers className="h-6 w-6 text-accent-orange" />,
        image: "https://images.unsplash.com/photo-1599368306059-4b355819385d?q=80&w=1200&auto=format&fit=crop",
        specs: [
            { label: 'Surface Finish', value: 'High Gloss / Textured Gelcoat' },
            { label: 'UV Resistance', value: 'Grade 8 (Blue Wool Scale)' },
            { label: 'Water Absorption', value: '< 0.2% (24 Hrs)' },
            { label: 'Maintenance', value: 'Graffiti Resistant / Washable' },
            { label: 'Installation', value: 'Concealed Chemical Anchoring' }
        ],
        components: ['Modular Seating', 'Organic Planters', 'Water Features', 'Sculptural Cladding']
    },
    {
        id: 'structural',
        title: 'Structural GRP Components',
        description: 'Load-bearing composite profiles for industrial access. Pultruded and moulded GRP gratings provide a lightweight, corrosion-free alternative to galvanized steel in chemical and marine environments.',
        icon: <Construction className="h-6 w-6 text-accent-orange" />,
        image: "https://images.unsplash.com/photo-1581093588401-fbb077766361?q=80&w=1200&auto=format&fit=crop",
        specs: [
            { label: 'Tensile Modulus', value: '18 - 25 GPa' },
            { label: 'Resin Type', value: 'Vinyl Ester / Isophthalic' },
            { label: 'Surface Finish', value: 'Anti-skid Gritted / Chequered' },
            { label: 'Chemical Resist', value: 'Acid / Alkali / Saline' },
            { label: 'Density', value: '1.8 g/cm³ (vs Steel 7.8)' }
        ],
        components: ['Moulded Gratings', 'Pultruded Profiles', 'Cable Trays', 'Handrail Systems']
    }
];

const SolutionCard: React.FC<{ system: SolutionSystem; index: number }> = ({ system, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div 
            ref={ref}
            className={`bg-white border border-gray-200 shadow-sm overflow-hidden rounded-sm hover:border-accent-orange hover:shadow-xl transition-all duration-300 group ${
                inView ? 'animate-fade-up opacity-100' : 'opacity-0'
            }`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Side */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <img 
                        src={system.image} 
                        alt={system.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply transition-opacity group-hover:opacity-70"></div>
                    <div className="absolute top-0 left-0 bg-navy-900 text-white px-5 py-3 flex items-center gap-3 border-b border-r border-navy-700 rounded-br-sm z-10 shadow-md">
                        {system.icon}
                        <span className="text-xs font-bold uppercase tracking-widest font-display text-gray-300">System 0{index + 1}</span>
                    </div>
                </div>

                {/* Data Side */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 font-display uppercase group-hover:text-accent-orange transition-colors">{system.title}</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                        {system.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Specs Table */}
                        <div>
                            <h4 className="flex items-center text-xs font-bold uppercase tracking-widest text-navy-900 mb-4 border-b border-gray-200 pb-2 font-display">
                                <Ruler className="h-3 w-3 mr-2 text-accent-orange" />
                                Technical Specs
                            </h4>
                            <table className="w-full text-sm">
                                <tbody>
                                    {system.specs.map((spec, i) => (
                                        <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                            <td className="py-2 text-gray-500 pr-4 font-medium text-xs uppercase">{spec.label}</td>
                                            <td className="py-2 text-navy-900 font-mono text-right text-xs">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Components List */}
                        <div>
                            <h4 className="flex items-center text-xs font-bold uppercase tracking-widest text-navy-900 mb-4 border-b border-gray-200 pb-2 font-display">
                                <ChevronRight className="h-3 w-3 mr-2 text-accent-orange" />
                                Modules Included
                            </h4>
                            <ul className="space-y-2">
                                {system.components.map((comp, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-700 group/item">
                                        <span className="w-1.5 h-1.5 bg-accent-orange rounded-none mt-1.5 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                                        {comp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded-sm border border-gray-200">SYS-ID: {system.id.toUpperCase()}-00{index+1}</span>
                        <Link to={RoutePath.CONTACT} className="text-navy-900 text-sm font-bold hover:text-accent-red flex items-center font-display uppercase tracking-wide transition-colors group/link">
                            Request System Spec <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Solutions: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Turnkey Infrastructure Solutions" 
        description="Discover pre-engineered, integrated GRP systems for power distribution, urban sanitation, transit shelters, and structural components. Designed for rapid deployment and zero maintenance."
      />
      <div className="bg-gray-50 min-h-screen pb-20 pt-16">
        
        {/* Dark Header */}
        <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <span className="inline-block py-1 px-3 rounded-sm bg-accent-red text-white text-xs font-bold uppercase tracking-wide mb-6 font-display animate-fade-in">
                  Integrated Systems
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 font-display uppercase animate-fade-up delay-200">Turnkey Infrastructure</h1>
              <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed animate-fade-up delay-300">
                  Pre-engineered composite infrastructure solutions designed for rapid deployment and zero maintenance. 
                  Moving beyond individual components to deliver fully integrated functional systems.
              </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {SYSTEMS.map((system, index) => (
              <SolutionCard key={system.id} system={system} index={index} />
          ))}
        </div>
        
        <div className="bg-white border-t border-gray-200 py-16">
           <div className="max-w-4xl mx-auto px-4 text-center">
               <h3 className="text-2xl font-bold text-navy-900 mb-4 font-display uppercase">Engineering a Custom System?</h3>
               <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                   We collaborate with architects and consultants to develop specification-compliant GRP solutions for unique project requirements.
               </p>
               <Link to={RoutePath.CONTACT}>
                  <Button variant="secondary" className="hover:shadow-lg transition-shadow">Consult Engineering Team</Button>
               </Link>
           </div>
        </div>
      </div>
    </>
  );
};