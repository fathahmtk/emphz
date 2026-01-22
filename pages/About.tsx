import React from 'react';
import { PageMeta } from '../components/PageMeta';

export const About: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="About EMPHZ" 
        description="Learn about EMPHZ, a vertically integrated industrial manufacturer of GRP solutions focused on structural integrity, material science, and lifecycle performance for critical infrastructure."
      />
      <div className="bg-white min-h-screen pt-16 pb-20">
         
         {/* Dark Header */}
         <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
           <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <span className="inline-block py-1 px-3 rounded-sm bg-accent-red text-white text-xs font-bold uppercase tracking-wide mb-6 font-display">
                  Corporate Profile
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-8 font-display leading-tight uppercase">
                  Structural Integrity. Material Science. <br/>Lifecycle Performance.
              </h1>
           </div>
         </div>

         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="prose prose-lg prose-slate text-gray-600 font-light leading-relaxed">
               <p className="text-xl leading-relaxed text-navy-900 font-normal">
                   EMPHZ is an industrial manufacturing company dedicated to the engineering and production of Glass Reinforced Polyester (GRP) solutions.
               </p>
               <p>
                   Established to address the growing need for corrosion-resistant infrastructure in India, we operate with a singular focus: delivering composite products that outlast and outperform traditional materials in harsh environments.
               </p>
               <p>
                   Unlike trading companies or general fabricators, EMPHZ is a vertically integrated manufacturer. Our operations encompass design, mould-making, compounding, and final assembly. This integration allows us to guarantee the mechanical properties of our products, ensuring they meet the stringent specifications of government bodies, PSUs, and multinational EPC contractors.
               </p>
            </div>
         </div>

         <div className="bg-gray-50 border-y border-gray-200 py-24">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="border-l-4 border-navy-900 pl-6">
                         <h3 className="text-xl font-bold text-navy-900 mb-4 font-display uppercase">Infrastructure Vision</h3>
                         <p className="text-gray-600 text-base leading-relaxed">
                             We view GRP not just as a plastic, but as an engineered construction material. Our goal is to replace corroding steel and heavy concrete in utility and public infrastructure, reducing maintenance burdens on the exchequer.
                         </p>
                     </div>
                     <div className="border-l-4 border-navy-900 pl-6">
                         <h3 className="text-xl font-bold text-navy-900 mb-4 font-display uppercase">Operational Excellence</h3>
                         <p className="text-gray-600 text-base leading-relaxed">
                             Our management philosophy is rooted in factory-floor discipline. We prioritize dimensional accuracy, consistent resin-mix formulations, and adherence to delivery schedules over marketing narratives. 
                         </p>
                     </div>
                      <div className="border-l-4 border-navy-900 pl-6">
                         <h3 className="text-xl font-bold text-navy-900 mb-4 font-display uppercase">Reliability</h3>
                         <p className="text-gray-600 text-base leading-relaxed">
                             With strategic raw material sourcing and bulk manufacturing capabilities in Mysuru, EMPHZ is positioned to support large-scale rollouts for telecom, power distribution, and urban development projects.
                         </p>
                     </div>
                 </div>
             </div>
         </div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
             <div className="flex flex-col md:flex-row items-center justify-between bg-navy-900 text-white rounded-sm p-12 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-32 bg-accent-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                 <div className="mb-8 md:mb-0 md:mr-12 relative z-10">
                     <h2 className="text-2xl font-bold mb-4 font-display uppercase">Compliance & Standards</h2>
                     <p className="text-gray-400 font-light">We manufacture strictly to international and Indian standards.</p>
                 </div>
                 <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-mono text-accent-orange relative z-10">
                     <div className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>IS 10192:1982</div>
                     <div className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>IEC 60529 (IP65)</div>
                     <div className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>UL 94-V0</div>
                     <div className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>ISO 9001:2015</div>
                 </div>
             </div>
         </div>
      </div>
    </>
  );
};