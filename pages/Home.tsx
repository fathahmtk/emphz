
import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { Button } from '../components/Button';
import { Shield, Zap, Layers, Maximize, ChevronRight, Factory, Building2, Train, Radio, Droplets, ArrowRight } from 'lucide-react';

const PRODUCT_CATEGORIES = [
  { 
      title: 'Electrical Enclosures', 
      desc: 'IEC 62208 compliant IP65 cabinets. Non-conductive SMC for roadside and coastal power distribution.',
      link: '/products/electrical-enclosures',
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Modular Kiosks', 
      desc: 'Prefabricated PUF-insulated shelters. Rapid deployment for checkpoints, ticketing, and control rooms.',
      link: '/products/modular-kiosks',
      img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Sanitation Units', 
      desc: 'Seamless, chemical-resistant GRP toilets. Designed for public hygiene and industrial labor camps.',
      link: '/products/portable-toilets',
      img: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Security Cabins', 
      desc: 'Heavy-duty guard rooms with thermal insulation. Weatherproof construction for 24/7 occupancy.',
      link: '/products/security-cabins',
      img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Utility Housing', 
      desc: 'Acoustic enclosures for DG sets and pumps. Fire-retardant laminates with custom airflow.',
      link: '/products/generator-rooms',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Canopies & Roofing', 
      desc: 'Structural GRP roofing for bus stops and walkways. Zero-maintenance alternative to coated steel.',
      link: '/products/grp-canopies',
      img: 'https://images.unsplash.com/photo-1517153192978-b67364173873?q=80&w=800&auto=format&fit=crop'
  },
  { 
      title: 'Custom Fabrication', 
      desc: 'Build-to-print component manufacturing. In-house mould making and compounding for bespoke infrastructure.',
      link: '/products/custom-fabrication',
      img: 'https://images.unsplash.com/photo-1581093588401-fbb077766361?q=80&w=800&auto=format&fit=crop'
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

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-navy-950 min-h-screen text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: Manufacturing First */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2600&auto=format&fit=crop" 
                alt="Industrial GRP Manufacturing" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay animate-fade-in duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-950/20"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
            <div className="max-w-4xl">
                <div className="inline-block bg-accent-red text-white px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest border border-white/10 animate-fade-up">
                    ISO 9001 Certified Manufacturing
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8 font-display uppercase opacity-0 animate-fade-up delay-200">
                    Industrial <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GRP Solutions</span>
                </h1>
                <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-up delay-300 border-l-4 border-accent-orange pl-6">
                    Engineering high-performance composite enclosures, shelters, and systems for Government, Utility, and EPC Infrastructure.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up delay-500">
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

      {/* 2. PRODUCT CATEGORIES: Technical Summary Grid */}
      <section className="relative py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                      <span className="text-accent-red font-bold uppercase tracking-widest text-xs mb-2 block font-display">Manufacturing Capabilities</span>
                      <h2 className="text-3xl md:text-4xl font-black uppercase text-navy-900 font-display">Product Categories</h2>
                  </div>
                  <div className="hidden md:block">
                      <Link to={RoutePath.PRODUCTS} className="text-navy-900 font-bold uppercase tracking-widest text-xs flex items-center hover:text-accent-red transition-colors">
                          Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCT_CATEGORIES.map((item, idx) => (
                      <Link to={item.link} key={idx} className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-accent-red transition-all duration-300 flex flex-col h-full">
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
                  ))}
              </div>
          </div>
      </section>

      {/* 3. INDUSTRIES SERVED */}
      <section className="bg-navy-900 py-24 relative border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                  <span className="text-accent-orange font-bold uppercase tracking-widest text-xs mb-2 block font-display">Target Sectors</span>
                  <h2 className="text-3xl font-bold uppercase text-white font-display">Industries Served</h2>
                  <p className="text-gray-400 font-light mt-4 max-w-2xl text-lg">
                      Infrastructure verticals requiring zero-maintenance performance and absolute corrosion resistance.
                  </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {INDUSTRIES.map((ind, idx) => (
                      <div key={idx} className="bg-navy-950 border border-white/5 p-8 rounded-sm hover:border-accent-blue/50 transition-colors duration-300 group">
                          <div className="h-12 w-12 rounded-sm bg-navy-800 flex items-center justify-center text-accent-blue mb-6 border border-white/5 group-hover:bg-accent-blue group-hover:text-white transition-all">
                              {ind.icon}
                          </div>
                          <h3 className="text-lg font-bold uppercase text-white mb-3 font-display">{ind.title}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed font-light">{ind.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. MANUFACTURING & PERFORMANCE (WHY EMPHZ) */}
      <section className="bg-navy-950 py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-hex-pattern opacity-5 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                 
                 {/* Text Content */}
                 <div className="lg:col-span-5">
                     <span className="text-accent-red font-bold uppercase tracking-widest text-xs mb-2 block font-display">Why EMPHZ</span>
                     <h2 className="text-4xl font-black uppercase text-white mb-6 font-display leading-tight">
                         Manufacturing <br/> Performance
                     </h2>
                     <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
                         We don't just mould plastic; we engineer infrastructure. Our factory-first approach prioritizes structural integrity and material science over aesthetics.
                     </p>
                     
                     <div className="space-y-8">
                         <div className="flex">
                             <div className="flex-shrink-0 mr-4">
                                 <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center text-accent-orange border border-white/10">
                                     <Shield size={20} />
                                 </div>
                             </div>
                             <div>
                                 <h4 className="text-white font-bold uppercase text-sm mb-1">Weatherproof Locking</h4>
                                 <p className="text-sm text-gray-500">IP65 mechanisms designed for high-exposure saline environments.</p>
                             </div>
                         </div>
                         <div className="flex">
                             <div className="flex-shrink-0 mr-4">
                                 <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center text-accent-orange border border-white/10">
                                     <Layers size={20} />
                                 </div>
                             </div>
                             <div>
                                 <h4 className="text-white font-bold uppercase text-sm mb-1">Precision Moulding</h4>
                                 <p className="text-sm text-gray-500">High-pressure SMC and RTM processes for consistent wall thickness.</p>
                             </div>
                         </div>
                         <div className="flex">
                             <div className="flex-shrink-0 mr-4">
                                 <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center text-accent-orange border border-white/10">
                                     <Maximize size={20} />
                                 </div>
                             </div>
                             <div>
                                 <h4 className="text-white font-bold uppercase text-sm mb-1">Seamless Gelcoat</h4>
                                 <p className="text-sm text-gray-500">Smooth, non-porous surfaces that resist bacteria and facilitate cleaning.</p>
                             </div>
                         </div>
                     </div>

                     <div className="mt-10">
                         <Link to={RoutePath.MANUFACTURING}>
                             <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-navy-900">
                                 View Factory Capabilities
                             </Button>
                         </Link>
                     </div>
                 </div>

                 {/* Visual Grid */}
                 <div className="lg:col-span-7">
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
                                 <div className="text-2xl font-black text-accent-red mb-1">IK10</div>
                                 <div className="text-xs uppercase tracking-widest text-gray-400">Impact Rating</div>
                             </div>
                             <img src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=600&auto=format&fit=crop" className="rounded-sm border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-500" alt="Material Surface"/>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      </section>

      {/* 5. PROCUREMENT CTA FOOTER */}
      <section className="relative py-24 bg-gray-900 border-t border-accent-orange">
           {/* Background Texture */}
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
  );
};
