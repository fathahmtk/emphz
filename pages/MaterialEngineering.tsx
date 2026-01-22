import React from 'react';
import { Layers, Shield, Zap, Microscope, FileCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { PageMeta } from '../components/PageMeta';
import { useInView } from 'react-intersection-observer';

const AnimatedSection: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <div 
            ref={ref} 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-t border-gray-100 pt-16 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {children}
        </div>
    );
};

export const MaterialEngineering: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="GRP Composite Engineering" 
        description="Technical whitepaper on GRP composite systems. Analysis of resin chemistry (Isophthalic, Vinyl Ester), reinforcement architecture, and performance matrix for infrastructure applications."
      />
      <div className="bg-white min-h-screen pt-16 pb-20">
        
        {/* Dark Header */}
        <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
              <div className="max-w-3xl animate-fade-up">
                  <span className="text-accent-red font-semibold text-xs uppercase tracking-wide mb-4 block font-display">Technical Whitepaper</span>
                  <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Composite Engineering</h1>
                  <p className="text-xl text-gray-400 leading-relaxed font-light">
                      Technical justification for GRP systems in infrastructure. 
                      Analysis of resin chemistry, reinforcement architecture, and environmental performance.
                  </p>
              </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Philosophy */}
          <AnimatedSection index={1}>
              <div className="lg:col-span-4">
                  <h2 className="text-2xl font-bold text-navy-900 uppercase font-display">01. System Philosophy</h2>
              </div>
              <div className="lg:col-span-8 prose prose-lg prose-slate text-gray-600 font-light leading-relaxed">
                  <p>
                      EMPHZ defines GRP not as a generic molded plastic, but as an engineered composite system comprising a thermosetting polyester resin matrix reinforced with electrical-grade (E-glass) fiber. The mechanical interaction between the matrix (load transfer and environmental protection) and the reinforcement (tensile and structural strength) is the fundamental basis of our design.
                  </p>
              </div>
          </AnimatedSection>

          {/* Resin Systems */}
          <AnimatedSection index={2}>
              <div className="lg:col-span-4">
                  <h2 className="text-2xl font-bold text-navy-900 uppercase font-display">02. Matrix Selection</h2>
              </div>
              <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:border-accent-orange transition-colors group">
                          <span className="text-xs font-bold bg-navy-100 text-navy-800 px-2 py-1 rounded-sm mb-4 inline-block font-mono">INFRASTRUCTURE STANDARD</span>
                          <h3 className="font-bold text-navy-900 mb-3 text-lg font-display uppercase group-hover:text-accent-orange">Isophthalic Polyester</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                              Selected for outdoor enclosures and electrical kiosks. Offers superior resistance to hydrolysis (water absorption) and chemical attack compared to general-purpose resins.
                          </p>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 hover:border-accent-orange transition-colors group">
                          <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2 py-1 rounded-sm mb-4 inline-block font-mono">HEAVY INDUSTRIAL</span>
                          <h3 className="font-bold text-navy-900 mb-3 text-lg font-display uppercase group-hover:text-accent-orange">Vinyl Ester</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                              Used in coastal zones and chemical plants. The epoxy backbone confers toughness and resistance to stress cracking.
                          </p>
                      </div>
                  </div>
              </div>
          </AnimatedSection>

          {/* Performance Data Table */}
          <AnimatedSection index={3}>
               <div className="lg:col-span-4">
                  <h2 className="text-2xl font-bold text-navy-900 uppercase font-display">03. Performance Matrix</h2>
              </div>
              <div className="lg:col-span-8">
                  <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm">
                      <table className="w-full text-sm text-left">
                          <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs border-b border-gray-200 font-display">
                              <tr>
                                  <th className="px-6 py-4">Property</th>
                                  <th className="px-6 py-4">Value</th>
                                  <th className="px-6 py-4">Implication</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              <tr className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 font-semibold text-navy-900">Dielectric Strength</td>
                                  <td className="px-6 py-4 font-mono text-accent-orange font-bold">15 - 20 kV/mm</td>
                                  <td className="px-6 py-4 text-gray-600">Inherently safe against electrical shock.</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 font-semibold text-navy-900">Thermal Conductivity</td>
                                  <td className="px-6 py-4 font-mono text-accent-orange font-bold">0.2 - 0.3 W/mK</td>
                                  <td className="px-6 py-4 text-gray-600">Natural insulator. Reduces heat buildup.</td>
                              </tr>
                              <tr className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 font-semibold text-navy-900">Tensile Strength</td>
                                  <td className="px-6 py-4 font-mono text-accent-orange font-bold">80 - 150 MPa</td>
                                  <td className="px-6 py-4 text-gray-600">High strength-to-weight ratio.</td>
                              </tr>
                               <tr className="hover:bg-gray-50 transition-colors">
                                  <td className="px-6 py-4 font-semibold text-navy-900">Flammability</td>
                                  <td className="px-6 py-4 font-mono text-accent-orange font-bold">UL94 V0</td>
                                  <td className="px-6 py-4 text-gray-600">Self-extinguishing.</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </AnimatedSection>

          {/* Conclusion */}
          <div className="bg-navy-900 text-white rounded-sm p-12 text-center shadow-xl animate-fade-up">
              <h3 className="text-2xl font-bold mb-6 font-display uppercase">Engineering Conclusion</h3>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light mb-10">
                  EMPHZ delivers engineered GRP composite systems designed for predictable, long-life performance in demanding infrastructure environments.
              </p>
               <Link to={RoutePath.CONTACT}>
                  <Button variant="white">Request Lab Reports</Button>
              </Link>
          </div>

        </div>
      </div>
    </>
  );
};