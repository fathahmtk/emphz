import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { Button } from '../components/Button';
import { Shield, Zap, Layers, Maximize, ChevronRight, Factory, Building2, Train, Radio, Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { useInView } from 'react-intersection-observer';

const PRODUCT_CATEGORIES = [
  { 
      title: 'Electrical Enclosures', 
      desc: 'IEC 62208 compliant IP65 cabinets. Non-conductive SMC for roadside and coastal power distribution.',
      link: `${RoutePath.PRODUCTS}/electrical-enclosures`,
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Modular Kiosks', 
      desc: 'Prefabricated PUF-insulated shelters. Rapid deployment for checkpoints, ticketing, and control rooms.',
      link: `${RoutePath.PRODUCTS}/modular-kiosks`,
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Sanitation Units', 
      desc: 'Seamless, chemical-resistant GRP toilets. Designed for public hygiene and industrial labor camps.',
      link: `${RoutePath.PRODUCTS}/portable-toilets`,
      img: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Security Cabins', 
      desc: 'Heavy-duty guard rooms with thermal insulation. Weatherproof construction for 24/7 occupancy.',
      link: `${RoutePath.PRODUCTS}/security-cabins`,
      img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Utility Housing', 
      desc: 'Acoustic enclosures for DG sets and pumps. Fire-retardant laminates with custom airflow.',
      link: `${RoutePath.PRODUCTS}/generator-rooms`,
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Canopies & Roofing', 
      desc: 'Structural GRP roofing for bus stops and walkways. Zero-maintenance alternative to coated steel.',
      link: `${RoutePath.PRODUCTS}/grp-canopies`,
      img: 'https://images.unsplash.com/photo-1517153192978-b67364173873?q=80&w=800&auto=format&fit=crop'
  }
];

const INDUSTRIES = [
    { icon: <Zap size={24} />, title: "Power Distribution", desc: "Non-conductive feeder pillars (LV/MV) replacing corroding steel in coastal and roadside distribution networks." },
    { icon: <Building2 size={24} />, title: "Urban Infrastructure", desc: "Smart city assets, information kiosks, and modular restrooms designed for high-traffic public spaces." },
    { icon: <Factory size={24} />, title: "Industrial Plants", desc: "Chemical-resistant GRP enclosures and gratings for refineries, fertilizer plants, and saline environments." },
    { icon: <Train size={24} />, title: "Mass Transit", desc: "Vibration-resistant trackside cabinetry and platform roofing systems for Metro and Rail projects." },
    { icon: <Radio size={24} />, title: "Telecom & Data", desc: "RF-transparent shelters for tower equipment, ensuring signal integrity without external antennas." },
    { icon: <Droplets size={24} />, title: "Water & Utilities", desc: "Rot-proof pump houses and valve chambers suitable for submerged or high-humidity installation conditions." }
];

const SectionHeader: React.FC<{ subtitle: string, title: string, dark?: boolean }> = ({ subtitle, title, dark }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div ref={ref} className={`mb-16 ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
            <span className={`${dark ? 'text-accent-orange' : 'text-accent-red'} font-bold uppercase tracking-widest text-xs mb-2 block font-display`}>{subtitle}</span>
            <h2 className={`text-3xl md:text-4xl font-black uppercase font-display ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
        </div>
    );
};

export const Home: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Industrial GRP Solutions & Engineering" 
        description="EMPHZ engineers high-performance GRP composite enclosures, shelters, and systems for Government, Utility, and EPC Infrastructure. ISO 9001 certified manufacturing."
      />
      <div className="flex flex-col bg-navy-950 min-h-screen text-white overflow-x-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
               <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2600&auto=format&fit=crop" 
                  alt="Industrial GRP Manufacturing" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-950/20"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
              <div className="max-w-4xl">
                  <div className="inline-block bg-accent-red text-white px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest border border-white/10 animate-fade-in">
                      ISO 9001 Certified Manufacturing
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8 font-display uppercase animate-fade-up">
                      Industrial <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GRP Solutions</span>
                  </h1>
                  <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed animate-fade-up delay-200 border-l-4 border-accent-orange pl-6">
                      Engineering high-performance composite enclosures, shelters, and systems for Government, Utility, and EPC Infrastructure.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
                      <Link to={RoutePath.CONTACT}>
                          <Button 
                              variant="primary" 
                              className="!bg-accent-red hover:!bg-red-600 border-none text-white px-8 py-4 text-sm font-bold tracking-widest uppercase shadow-lg"
                          >
                              Request a Quote
                          </Button>
                      </Link>
                      <Link to={RoutePath.PRODUCTS}>
                          <Button 
                              variant="outline" 
                              className="!border-white !text-white hover:!border-accent-red hover:!text-accent-red hover:!bg-transparent px-8 py-4 text-sm font-bold tracking-widest uppercase"
                          >
                              View Products
                          </Button>
                      </Link>
                  </div>
              </div>
          </div>
        </section>

        {/* 2. PRODUCT CATEGORIES */}
        <section className="relative py-24 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <SectionHeader subtitle="Manufacturing Capabilities" title="Product Categories" />
                    <div className="hidden md:block mb-16">
                        <Link to={RoutePath.PRODUCTS} className="text-navy-900 font-bold uppercase tracking-widest text-xs flex items-center hover:text-accent-red transition-colors">
                            Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCT_CATEGORIES.map((item, idx) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
                        return (
                            <Link 
                                ref={ref}
                                to={item.link} 
                                key={idx} 
                                className={`group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-accent-red transition-all duration-500 flex flex-col h-full ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                 <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                                     <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700" />
                                     <div className="absolute top-0 right-0 bg-navy-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                         Series 0{idx + 1}
                                     </div>
                                 </div>
                                 <div className="p-8 flex-grow flex flex-col justify-between">
                                     <div>
                                         <h3 className="text-lg font-bold uppercase text-navy-900 mb-3 font-display group-hover:text-accent-red transition-colors">{item.title}</h3>
                                         <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                                     </div>
                                     <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-xs font-bold uppercase tracking-widest text-navy-400 group-hover:text-navy-900 transition-colors">
                                         View Specs <ChevronRight className="ml-1 h-3 w-3" />
                                     </div>
                                 </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* 3. INDUSTRIES SERVED */}
        <section className="bg-navy-900 py-24 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader subtitle="Target Sectors" title="Industries Served" dark />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INDUSTRIES.map((ind, idx) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
                        return (
                            <div 
                                ref={ref}
                                key={idx} 
                                className={`bg-navy-950 border border-white/5 p-8 rounded-sm hover:border-accent-blue/50 transition-all duration-500 group ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                <div className="h-12 w-12 rounded-sm bg-navy-800 flex items-center justify-center text-accent-blue mb-6 border border-white/5 group-hover:bg-accent-blue group-hover:text-white transition-all">
                                    {ind.icon}
                                </div>
                                <h3 className="text-lg font-bold uppercase text-white mb-3 font-display">{ind.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">{ind.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* 4. MANUFACTURING PERFORMANCE */}
        <section className="bg-navy-950 py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-hex-pattern opacity-5 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                   <div className="lg:col-span-5">
                       <SectionHeader subtitle="Why EMPHZ" title="Manufacturing Performance" dark />
                       <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
                           We don't just mould plastic; we engineer infrastructure. Our factory-first approach prioritizes structural integrity and material science over aesthetics.
                       </p>
                       <div className="space-y-8">
                           {[
                               { icon: <Shield size={20} />, title: "Weatherproof Locking", desc: "IP65 mechanisms designed for high-exposure saline environments." },
                               { icon: <Layers size={20} />, title: "Precision Moulding", desc: "High-pressure SMC and RTM processes for consistent wall thickness." },
                               { icon: <Maximize size={20} />, title: "Seamless Gelcoat", desc: "Smooth, non-porous surfaces that resist bacteria and facilitate cleaning." }
                           ].map((feat, i) => (
                               <div key={i} className="flex">
                                   <div className="flex-shrink-0 mr-4">
                                       <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center text-accent-orange border border-white/10">
                                           {feat.icon}
                                       </div>
                                   </div>
                                   <div>
                                       <h4 className="text-white font-bold uppercase text-sm mb-1">{feat.title}</h4>
                                       <p className="text-sm text-gray-500">{feat.desc}</p>
                                   </div>
                               </div>
                           ))}
                       </div>
                       <div className="mt-10">
                           <Link to={RoutePath.MANUFACTURING}>
                               <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-navy-900">
                                   View Factory Capabilities
                               </Button>
                           </Link>
                       </div>
                   </div>

                   <div className="lg:col-span-7">
                       <div className="bg-navy-900 border border-white/10 p-4 mb-8 flex justify-around items-center rounded-sm">
                           <span className="text-xs font-mono text-gray-500 font-bold">IEC 62208</span>
                           <span className="text-xs font-mono text-gray-500 font-bold">UL 94-V0</span>
                           <span className="text-xs font-mono text-gray-500 font-bold">ISO 9001</span>
                           <span className="text-xs font-mono text-gray-500 font-bold">IK10</span>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-4 mt-8">
                               <img src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=600&auto=format&fit=crop" className="rounded-sm border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-500" alt="Locking Mechanism"/>
                               <div className="bg-navy-900 p-6 border border-white/10 rounded-sm">
                                   <div className="text-2xl font-black text-accent-red mb-1">20+</div>
                                   <div className="text-xs uppercase tracking-widest text-gray-400">Years Design Life</div>
                               </div>
                           </div>
                           <div className="space-y-4">
                               <div className="bg-navy-900 p-6 border border-white/10 rounded-sm">
                                   <div className="text-2xl font-black text-accent-red mb-1">IP65</div>
                                   <div className="text-xs uppercase tracking-widest text-gray-400">Protection Rating</div>
                               </div>
                               <img src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=600&auto=format&fit=crop" className="rounded-sm border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-500" alt="Material Surface"/>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </section>

        {/* 5. PROCUREMENT CTA */}
        <section className="relative py-24 bg-gray-900 border-t border-accent-orange">
             <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                 <span className="text-accent-red font-bold uppercase tracking-widest text-xs mb-4 block font-display">Procurement & Tendering</span>
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-display uppercase leading-tight">
                     Ready for Specification?
                 </h2>
                 <p className="text-xl text-gray-400 mb-10 font-light max-w-3xl mx-auto">
                     We support government tenders and EPC contracts with detailed technical drawings, compliance certifications, and material samples.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                     <Link to={RoutePath.CONTACT}>
                         <Button className="bg-accent-red text-white hover:bg-red-600 border-0 uppercase tracking-widest font-bold px-10 py-4 shadow-xl hover:shadow-red-900/50 transition-all">
                             Submit Inquiry
                         </Button>
                     </Link>
                     <Link to={RoutePath.PRODUCTS}>
                         <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-navy-900 px-10 py-4 uppercase tracking-widest font-bold">
                             Download Catalog
                         </Button>
                     </Link>
                 </div>
             </div>
        </section>
      </div>
    </>
  );
};