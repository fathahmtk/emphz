import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Factory, Cog, ClipboardCheck, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { Button } from '../components/Button';

const CAPACITY_DATA = [
  { name: 'Enclosures', capacity: 5000, units: 'Units/Mo' },
  { name: 'Shelters', capacity: 200, units: 'Units/Mo' },
  { name: 'Sanitation', capacity: 350, units: 'Units/Mo' },
  { name: 'Custom', capacity: 15000, units: 'Sq. Ft/Mo' },
];

export const Manufacturing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-16 pb-20">
      
      {/* Header */}
      <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-sm bg-accent-red text-white text-xs font-bold uppercase tracking-wide mb-6 font-display">
                Operations & Quality
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 uppercase font-display">Factory Execution</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Vertical integration from raw material compounding to final assembly. 
                Ensuring structural integrity through controlled manufacturing processes.
            </p>
         </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="text-center p-4">
                <div className="text-4xl font-bold text-navy-900 mb-2 font-mono">45,000</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 font-display">Sq. Ft. Facility</div>
            </div>
             <div className="text-center p-4">
                <div className="text-4xl font-bold text-navy-900 mb-2 font-mono">ISO 9001</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 font-display">Certified Process</div>
            </div>
             <div className="text-center p-4">
                <div className="text-4xl font-bold text-navy-900 mb-2 font-mono">100+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 font-display">Technicians</div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold text-navy-900 mb-8 font-display uppercase">The Mysuru Facility</h2>
                <div className="prose prose-lg text-gray-600 mb-12 font-light">
                    <p>Located in the KIADB Industrial Area, our manufacturing unit is designed for end-to-end composite fabrication. From raw material blending to final assembly, every stage is executed in-house to maintain strict quality control.</p>
                </div>
                
                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="flex-shrink-0 h-12 w-12 rounded-sm bg-navy-50 flex items-center justify-center text-accent-orange border border-navy-100">
                            <Factory size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2 font-display uppercase">Dual Moulding Lines</h3>
                            <p className="text-gray-600 leading-relaxed">Dedicated lines for SMC (Hot Press) and Hand Lay-up processes ensuring zero cross-contamination and optimal workflow efficiency.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                         <div className="flex-shrink-0 h-12 w-12 rounded-sm bg-navy-50 flex items-center justify-center text-accent-orange border border-navy-100">
                            <Cog size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2 font-display uppercase">In-House Tooling</h3>
                            <p className="text-gray-600 leading-relaxed">Rapid pattern making and mould fabrication capabilities allowing for shorter lead times on custom projects.</p>
                        </div>
                    </div>
                     <div className="flex gap-6">
                         <div className="flex-shrink-0 h-12 w-12 rounded-sm bg-navy-50 flex items-center justify-center text-accent-orange border border-navy-100">
                            <ClipboardCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2 font-display uppercase">Quality Lab</h3>
                            <p className="text-gray-600 leading-relaxed">On-site testing for Barcol hardness, resin-glass ratio, and water absorption to verify laminate integrity.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chart Card */}
            <div className="lg:col-span-5 bg-gray-50 rounded-sm p-8 border border-gray-100">
                <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-8 font-display">Monthly Capacity</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={CAPACITY_DATA}
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e2e8f0" />
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12, fill: '#1e3a8a', fontWeight: 600, fontFamily: 'monospace'}} />
                            <Tooltip 
                                cursor={{fill: '#e2e8f0'}}
                                contentStyle={{ backgroundColor: '#0b1e3b', color: '#fff', border: 'none', borderRadius: '0px', fontSize: '12px', fontFamily: 'monospace' }}
                            />
                            {/* Accent Orange fill for bars */}
                            <Bar dataKey="capacity" fill="#f59e0b" radius={[0, 0, 0, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-8 p-4 bg-navy-100/50 rounded-sm text-sm text-navy-800 border-l-4 border-navy-900">
                    <p>Capacity scalable for large infrastructure tenders.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-navy-900 font-display uppercase">Process Protocol</h2>
                <p className="text-gray-500 mt-4">Standardized execution from drawing to delivery.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Design & FEA", desc: "CAD modeling and structural load simulation." },
                    { step: "02", title: "Pattern & Mould", desc: "CNC machining of master patterns and mould prep." },
                    { step: "03", title: "Fabrication", desc: "Layer-by-layer lamination or high-pressure compression." },
                    { step: "04", title: "Assembly & QC", desc: "Hardware integration, finishing, and final inspection." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg hover:border-accent-red transition-all">
                        <div className="text-6xl font-bold text-gray-100 absolute -right-4 -top-4 group-hover:text-red-50 transition-colors font-mono">{item.step}</div>
                        <div className="relative z-10">
                            <h4 className="text-lg font-bold text-navy-900 mb-3 font-display uppercase">{item.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </div>
      
      {/* Audit CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
         <h2 className="text-3xl font-bold text-navy-900 mb-6 font-display uppercase">Schedule Factory Audit</h2>
         <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
            We operate with transparency. Authorized EPC contractors and government officials are welcome to inspect our facility.
         </p>
         <Link to={RoutePath.CONTACT}>
            <Button variant="secondary" className="px-8">Contact Operations</Button>
         </Link>
      </div>
    </div>
  );
};