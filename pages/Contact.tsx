import React from 'react';
import { COMPANY_INFO } from '../constants';
import { InquiryForm } from '../components/InquiryForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export const Contact: React.FC = () => {
  return (
    <>
      <PageMeta 
        title="Contact & Procurement" 
        description="Submit a technical inquiry or a request for quotation. Direct procurement channel for EPC contractors, government departments, and industrial consultants."
      />
      <div className="bg-gray-50 min-h-screen pt-16 pb-20">
        
        {/* Dark Header */}
        <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <span className="inline-block py-1 px-3 rounded-sm bg-accent-red text-white text-xs font-bold uppercase tracking-wide mb-6 font-display">
                  Procurement Gateway
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 font-display uppercase">Contact & Procurement</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                  Direct channel for EPC contractors, government departments, and industrial consultants.
              </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="bg-white rounded-sm shadow-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Contact Info Sidebar */}
                  <div className="lg:col-span-4 bg-gray-50 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
                      <div className="space-y-10">
                          <div>
                              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-display">Headquarters</h3>
                              <div className="space-y-6">
                                  <div className="flex items-start">
                                      <MapPin className="h-5 w-5 mr-4 text-accent-orange mt-1 flex-shrink-0" />
                                      <div>
                                          <h4 className="font-bold text-navy-900 text-sm font-display uppercase tracking-wide">Manufacturing Unit</h4>
                                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{COMPANY_INFO.locations.factory}</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start">
                                       <MapPin className="h-5 w-5 mr-4 text-gray-400 mt-1 flex-shrink-0" />
                                      <div>
                                          <h4 className="font-bold text-navy-900 text-sm font-display uppercase tracking-wide">Corporate Office</h4>
                                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{COMPANY_INFO.locations.corporate}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div>
                              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-display">Direct Lines</h3>
                              <div className="space-y-4">
                                  <div className="flex items-center group">
                                      <Phone className="h-5 w-5 mr-4 text-gray-400 group-hover:text-accent-red transition-colors" />
                                      <p className="text-sm font-medium text-navy-900 font-mono">{COMPANY_INFO.contact.phone}</p>
                                  </div>
                                  <div className="flex items-center group">
                                      <Mail className="h-5 w-5 mr-4 text-gray-400 group-hover:text-accent-red transition-colors" />
                                      <p className="text-sm font-medium text-navy-900 font-mono">{COMPANY_INFO.contact.email}</p>
                                  </div>
                              </div>
                          </div>

                          <div className="pt-8 border-t border-gray-200">
                               <p className="text-xs text-gray-400 leading-relaxed">
                                   EMPHZ operates strictly on a B2B / B2G basis. Please include valid company GSTIN for commercial quotations.
                               </p>
                          </div>
                      </div>
                  </div>

                  {/* Inquiry Form Area */}
                  <div className="lg:col-span-8 p-8 md:p-12">
                      <div className="max-w-2xl">
                          <h2 className="text-2xl font-bold text-navy-900 mb-2 font-display uppercase">Submit Technical Inquiry</h2>
                          <p className="text-gray-500 mb-8 font-light">Please provide project details for an accurate commercial proposal.</p>
                          <InquiryForm />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};