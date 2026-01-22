
import React from 'react';
import { Ruler, Anchor, Cable, Cog, FileText, Download, ArrowRight, Printer } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { PageMeta } from '../components/PageMeta';

export const HorizonPod: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Project Horizon Pod - Shop Drawings" 
        description="Engineering case study and shop drawings for the Horizon Pod (Civic Nest System), a landscape-integrated urban infrastructure platform."
      />
      <div className="bg-gray-100 min-h-screen pt-16 pb-20">
        
        {/* Header with Blueprint Aesthetic */}
        <div className="bg-navy-950 text-white py-12 border-b-4 border-accent-orange relative">
           <div className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-end">
              <div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-accent-orange mb-2">
                      <span>PROJECT ID: HZ-IN-2024</span>
                      <span>|</span>
                      <span>REV: A.03</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black uppercase font-display tracking-tight">Horizon Pod</h1>
                  <p className="text-xl font-light text-gray-400 font-mono mt-2">SHOP DRAWINGS: INDIA EDITION</p>
              </div>
              <div className="mt-8 md:mt-0 flex gap-4">
                   <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900 text-xs h-10">
                      <Printer className="mr-2 h-4 w-4" /> Print Set
                   </Button>
                   <Button variant="primary" className="bg-accent-red border-none text-xs h-10">
                      <Download className="mr-2 h-4 w-4" /> DWG Bundle
                   </Button>
              </div>
           </div>
        </div>

        {/* Main Drawing Grid */}
        <div className="max-w-[1400px] mx-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* SD-01: GENERAL ARRANGEMENT (Large Hero) */}
              <div className="md:col-span-8 bg-white p-6 shadow-sm border border-gray-300 relative group">
                  <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-01</div>
                  <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4">General Arrangement</h3>
                  <div className="aspect-video bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                      {/* Placeholder for Organic Top View */}
                      <img 
                          src="https://images.unsplash.com/photo-1599368306059-4b355819385d?q=80&w=1200&auto=format&fit=crop" 
                          alt="General Arrangement"
                          className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" 
                      />
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-mono text-gray-600">
                      <div>
                          <span className="block font-bold text-navy-900">Total Footprint:</span>
                          3400mm x 2800mm
                      </div>
                      <div>
                          <span className="block font-bold text-navy-900">Seating Capacity:</span>
                          8 - 12 Pax
                      </div>
                      <div className="col-span-2">
                          <span className="block font-bold text-navy-900">Config:</span>
                          Tri-lobe organic cluster with integrated planter void (V04).
                      </div>
                  </div>
              </div>

              {/* SD-02: BASE MODULE (Side Panel) */}
              <div className="md:col-span-4 bg-white p-6 shadow-sm border border-gray-300 relative">
                  <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-02</div>
                  <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4">Base Module Plan</h3>
                  <div className="aspect-square bg-white border border-gray-200 p-4 relative mb-4">
                       {/* Diagrammatic Lines CSS */}
                       <div className="w-full h-full border-2 border-navy-900 rounded-tl-[40px] rounded-br-[40px] relative">
                          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300"></div>
                          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gray-300"></div>
                          <div className="absolute bottom-4 right-4 text-[10px] font-mono">SCALE 1:20</div>
                       </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-mono">
                      <span className="font-bold text-navy-900 block mb-1">SECTION A-A:</span>
                      Double-wall GRP construction with 40mm PUF core.
                      Internal stiffeners spaced at 400mm c/c.
                  </p>
              </div>

              {/* SD-03 & SD-04: ENGINEERING DETAILS (Row) */}
              <div className="md:col-span-6 bg-white p-6 shadow-sm border border-gray-300 relative">
                  <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-04</div>
                  <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4 flex items-center">
                      <Cable className="h-4 w-4 mr-2 text-accent-orange" />
                      Service Void & Conduit
                  </h3>
                  <div className="bg-navy-50 p-4 border border-navy-100 h-40 mb-4 overflow-hidden relative">
                      <div className="absolute top-4 left-4 w-full h-2 bg-gray-300 rounded-full"></div>
                      <div className="absolute top-4 left-10 w-2 h-20 bg-gray-300 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-accent-red font-bold">
                          Warning: High Voltage Route
                      </div>
                  </div>
                  <ul className="text-xs space-y-2 font-mono text-gray-600">
                      <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                          <span>LED Driver Void</span>
                          <span>IP67 Rated</span>
                      </li>
                      <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                          <span>Cable Entry</span>
                          <span>Ø32mm Gland</span>
                      </li>
                       <li className="flex justify-between pb-1">
                          <span>Access Hatch</span>
                          <span>Concealed (Rear)</span>
                      </li>
                  </ul>
              </div>

              <div className="md:col-span-6 bg-white p-6 shadow-sm border border-gray-300 relative">
                  <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-05</div>
                  <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4 flex items-center">
                      <Anchor className="h-4 w-4 mr-2 text-accent-orange" />
                      Foundation Interface
                  </h3>
                  <div className="bg-navy-50 p-4 border border-navy-100 h-40 mb-4 flex items-center justify-center">
                       <div className="text-center">
                           <div className="inline-block w-2 h-16 bg-gray-400 mb-1 mx-2"></div>
                           <div className="inline-block w-2 h-16 bg-gray-400 mb-1 mx-2"></div>
                           <div className="h-2 w-32 bg-navy-800"></div>
                           <p className="text-[10px] mt-2 font-mono text-gray-500">CONCRETE PLINTH</p>
                       </div>
                  </div>
                   <ul className="text-xs space-y-2 font-mono text-gray-600">
                      <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                          <span>Anchor Bolt</span>
                          <span>M12 x 150 SS316</span>
                      </li>
                      <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                          <span>Grouting</span>
                          <span>Non-shrink Epoxy</span>
                      </li>
                       <li className="flex justify-between pb-1">
                          <span>Leveling</span>
                          <span>Shim Stack (Max 20mm)</span>
                      </li>
                  </ul>
              </div>

              {/* SD-06: JOINTING (Detailed) */}
              <div className="md:col-span-4 bg-white p-6 shadow-sm border border-gray-300 relative">
                   <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-06</div>
                   <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4">Jointing & Expansion</h3>
                   <p className="text-sm font-light text-gray-600 mb-4">
                       Modular segments connected via internal flange system. EPDM gaskets accommodate thermal expansion (coefficient 22 x 10⁻⁶ /°C).
                   </p>
                   <div className="bg-gray-100 p-3 text-xs font-mono text-navy-900 border-l-4 border-accent-orange">
                       NOTE: Sealant color must match RAL 7035.
                   </div>
              </div>

               {/* SD-09: INSTALLATION SEQUENCE (Process) */}
              <div className="md:col-span-8 bg-white p-6 shadow-sm border border-gray-300 relative">
                   <div className="absolute top-0 left-0 bg-navy-900 text-white px-3 py-1 text-xs font-bold font-mono">SD-09</div>
                   <h3 className="mt-6 text-lg font-bold uppercase text-navy-900 font-display border-b border-gray-100 pb-2 mb-4 flex items-center">
                      <Cog className="h-4 w-4 mr-2 text-accent-orange" />
                      Installation Sequence
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                          { step: 1, title: "Plinth Prep", text: "Verify levels & bolt centers." },
                          { step: 2, title: "Positioning", text: "Crane lift via soft slings (no chains)." },
                          { step: 3, title: "Fixing", text: "Torque anchors to 45Nm." }
                      ].map((s) => (
                          <div key={s.step} className="bg-gray-50 p-4 border border-gray-200">
                              <div className="text-2xl font-black text-gray-200 mb-2 font-mono">0{s.step}</div>
                              <h4 className="text-xs font-bold uppercase text-navy-900 mb-1">{s.title}</h4>
                              <p className="text-[10px] text-gray-500">{s.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

               {/* Footer Spec Block */}
               <div className="md:col-span-12 bg-navy-900 text-white p-8 border-t-4 border-accent-orange mt-8 flex flex-col md:flex-row justify-between items-center">
                   <div className="mb-6 md:mb-0">
                       <h4 className="text-lg font-bold uppercase font-display mb-2">Technical Approval</h4>
                       <p className="text-xs text-gray-400 font-mono max-w-xl">
                           This document is property of EMPHZ. Dimensions are indicative and subject to site verification.
                           Structural validation to IS 875 (Part 3) for Wind Load.
                       </p>
                   </div>
                   <div className="flex gap-4">
                       <Link to={RoutePath.CONTACT}>
                          <Button variant="secondary" className="font-mono text-xs">Request Full DWG</Button>
                       </Link>
                   </div>
               </div>

          </div>
        </div>

      </div>
    </>
  );
};