
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { InquiryForm } from '../components/InquiryForm';
import { Check, Download, FileText, ChevronRight, ArrowLeft, Printer, ChevronDown, Settings, Ruler, Layers } from 'lucide-react';
import { RoutePath } from '../types';

// Local Accordion Component for Product Page
const AccordionItem: React.FC<{
  title: string;
  isOpen: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, isOpen, onClick, icon, children }) => {
  return (
    <div className="border border-gray-200 rounded-sm mb-4 overflow-hidden bg-white hover:border-accent-orange/50 transition-colors">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left bg-gray-50/50 hover:bg-white transition-colors"
      >
        <div className="flex items-center space-x-3">
            {icon && <span className="text-accent-orange">{icon}</span>}
            <span className="text-sm font-bold text-navy-900 uppercase tracking-widest font-display">{title}</span>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 border-t border-gray-100">
            {children}
        </div>
      </div>
    </div>
  );
};

export const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenSection(null); // Reset accordions on product change
  }, [id]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleDownload = (type: string) => {
      alert(`Initiating download for ${type}... (Mock functionality)`);
  };

  const handlePrint = () => {
      window.print();
  };

  if (id) {
      const selectedProduct = PRODUCTS.find(p => p.id === id);

      if (!selectedProduct) {
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
                <div className="text-center p-12 bg-white border border-gray-200 shadow-sm rounded-sm max-w-lg">
                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-6" />
                    <h2 className="text-xl font-bold text-navy-900 mb-2 font-display uppercase">Product Not Found</h2>
                    <p className="text-gray-500 mb-8">The requested specification sheet is unavailable.</p>
                    <Link to={RoutePath.PRODUCTS}><Button>Return to Catalog</Button></Link>
                </div>
            </div>
          );
      }

      return (
        <div className="bg-white min-h-screen pt-16 pb-20">
          
          {/* Dark Industrial Header for Detail Page */}
          <div className="bg-navy-950 text-white relative overflow-hidden border-b border-white/5">
              <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
                  {/* Breadcrumbs */}
                  <div className="flex items-center space-x-2 text-xs font-mono mb-6 text-gray-400">
                     <Link to={RoutePath.PRODUCTS} className="hover:text-accent-red transition-colors flex items-center uppercase tracking-wide">
                        <ArrowLeft className="h-3 w-3 mr-1" /> Catalog
                     </Link>
                     <ChevronRight className="h-3 w-3 text-gray-600" />
                     <span className="text-accent-orange uppercase tracking-wide">{selectedProduct.name}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                          <span className="inline-flex items-center py-1 px-2 rounded-sm bg-navy-800 border border-navy-700 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-4 font-display">
                              <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-2"></span>
                              Series {selectedProduct.id.substring(0,3).toUpperCase()}
                          </span>
                          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] font-display uppercase max-w-3xl animate-fade-up">
                              {selectedProduct.name}
                          </h1>
                      </div>
                      <div className="flex items-center space-x-3">
                          <button onClick={handlePrint} className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                              <Printer className="h-4 w-4 mr-2" /> Print Spec
                          </button>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Content Column */}
                  <div className="lg:col-span-7 animate-fade-up delay-200">
                      
                      {/* 1. What It Is (Always Visible) */}
                      <div className="mb-12">
                          <h3 className="text-sm font-bold text-navy-900 uppercase tracking-widest mb-6 font-display border-b-2 border-accent-red inline-block pb-1">Product Overview</h3>
                          <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                              {selectedProduct.fullDescription}
                          </p>
                          
                          {selectedProduct.id === 'horizon-pod' && (
                              <div className="mb-8">
                                  <Link to={RoutePath.HORIZON}>
                                      <Button variant="secondary" fullWidth className="h-14 font-bold border-2 border-navy-900 shadow-xl">
                                          <Layers className="mr-3 h-5 w-5" />
                                          View Engineering Case Study (Shop Drawings)
                                      </Button>
                                  </Link>
                              </div>
                          )}

                          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">Key Applications</h4>
                             <div className="flex flex-wrap gap-2">
                                {selectedProduct.applications.map((app, i) => (
                                    <span key={i} className="text-xs font-bold uppercase tracking-wide bg-white text-navy-800 px-3 py-1.5 rounded-sm border border-gray-200 shadow-sm font-display">
                                        {app}
                                    </span>
                                ))}
                             </div>
                          </div>
                      </div>

                      {/* Visual for Mobile (hidden desktop) */}
                      <div className="lg:hidden mb-8 rounded-sm overflow-hidden bg-gray-100 border border-gray-200">
                          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-auto mix-blend-multiply" />
                      </div>
  
                      {/* 2. Technical Specs (Collapsible) */}
                      <AccordionItem 
                        title="Technical Specifications" 
                        isOpen={openSection === 'specs'} 
                        onClick={() => toggleSection('specs')}
                        icon={<Ruler className="h-4 w-4" />}
                      >
                           <table className="w-full text-sm text-left">
                              <tbody className="divide-y divide-gray-100">
                                  {selectedProduct.specs.map((spec, idx) => (
                                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                          <td className="py-3 px-2 font-bold text-navy-900 w-1/3 font-display uppercase text-xs tracking-wide">{spec.label}</td>
                                          <td className="py-3 px-2 text-gray-700 font-medium font-mono border-l border-gray-100 pl-4">{spec.value}</td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </AccordionItem>

                      {/* 3. Customization (Collapsible) */}
                      <AccordionItem 
                        title="Customization Options" 
                        isOpen={openSection === 'custom'} 
                        onClick={() => toggleSection('custom')}
                        icon={<Settings className="h-4 w-4" />}
                      >
                           <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                               EMPHZ offers build-to-print customization for bulk orders. Modifications must be specified at the inquiry stage.
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="p-4 bg-gray-50 rounded-sm">
                                   <span className="block text-xs font-bold uppercase text-navy-900 mb-1">Dimensions</span>
                                   <span className="text-xs text-gray-500">Custom height/width within mould limits.</span>
                               </div>
                               <div className="p-4 bg-gray-50 rounded-sm">
                                   <span className="block text-xs font-bold uppercase text-navy-900 mb-1">Color (RAL)</span>
                                   <span className="text-xs text-gray-500">Pigmentation available for orders {'>'} 50 units.</span>
                               </div>
                               <div className="p-4 bg-gray-50 rounded-sm">
                                   <span className="block text-xs font-bold uppercase text-navy-900 mb-1">Cutouts</span>
                                   <span className="text-xs text-gray-500">CNC machined entries for cable glands.</span>
                               </div>
                               <div className="p-4 bg-gray-50 rounded-sm">
                                   <span className="block text-xs font-bold uppercase text-navy-900 mb-1">Hardware</span>
                                   <span className="text-xs text-gray-500">SS 304/316 Locking systems available.</span>
                               </div>
                           </div>
                      </AccordionItem>

                      {/* Features Grid */}
                      <div className="py-8">
                           <h3 className="text-lg font-bold text-navy-900 mb-6 font-display uppercase">Construction Features</h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {selectedProduct.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start p-4 rounded-sm border border-gray-200 bg-white hover:border-accent-orange transition-colors group">
                                      <div className="bg-gray-50 border border-gray-200 p-1 rounded-sm mr-3 mt-0.5 group-hover:border-accent-orange transition-colors">
                                        <Check className="h-3 w-3 text-accent-orange" />
                                      </div>
                                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                                  </div>
                              ))}
                           </div>
                      </div>

                      <div className="py-8 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-navy-900 mb-6 font-display uppercase">Engineering Assets</h3>
                        <div className="flex flex-col sm:flex-row gap-4">
                             <Button variant="white" className="justify-between border-gray-300 hover:border-accent-red hover:text-accent-red group" onClick={() => handleDownload('Datasheet')}>
                                <span className="flex items-center"><FileText className="mr-2 h-4 w-4"/> Datasheet.pdf</span>
                                <Download className="h-4 w-4 text-gray-300 group-hover:text-accent-red ml-4"/>
                             </Button>
                             <Button variant="white" className="justify-between border-gray-300 hover:border-accent-red hover:text-accent-red group" onClick={() => handleDownload('GA Drawing')}>
                                <span className="flex items-center"><FileText className="mr-2 h-4 w-4"/> GA_Drawing.dwg</span>
                                <Download className="h-4 w-4 text-gray-300 group-hover:text-accent-red ml-4"/>
                             </Button>
                        </div>
                      </div>
                  </div>

                  {/* Sticky Sidebar */}
                  <div className="lg:col-span-5 space-y-8">
                      {/* Desktop Visual */}
                      <div className="hidden lg:block bg-white border border-gray-200 p-2 rounded-sm shadow-sm animate-fade-up delay-300">
                          <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                              <img 
                                  src={selectedProduct.imageUrl} 
                                  alt={selectedProduct.name}
                                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                              />
                              <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-900 backdrop-blur-sm">
                                  Standard Config
                              </div>
                          </div>
                      </div>

                      {/* Inquiry Card - Sticky */}
                      <div className="sticky top-32 animate-fade-up delay-500">
                          <div className="bg-navy-900 rounded-sm p-8 shadow-2xl text-white border border-navy-800 relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-16 bg-accent-orange/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                              <h3 className="text-xl font-bold mb-2 font-display uppercase relative z-10">Procurement Inquiry</h3>
                              <p className="text-gray-400 text-sm mb-6 relative z-10">
                                  Direct channel to engineering sales for <span className="text-white font-semibold">{selectedProduct.name}</span>.
                              </p>
                              <InquiryForm productName={selectedProduct.name} className="relative z-10 [&_label]:text-gray-400 [&_input]:bg-navy-800 [&_input]:border-navy-700 [&_input]:text-white [&_input]:focus:border-accent-red [&_textarea]:bg-navy-800 [&_textarea]:border-navy-700 [&_textarea]:text-white [&_textarea]:focus:border-accent-red [&_select]:bg-navy-800 [&_select]:border-navy-700 [&_select]:text-white [&_select]:focus:border-accent-red [&_div.border-dashed]:border-navy-600 [&_div.border-dashed]:hover:border-accent-orange [&_div.border-dashed]:text-gray-400" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      );
  }

  // Catalog View
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="bg-navy-950 text-white py-24 relative overflow-hidden border-b border-white/5">
         <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-950"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <span className="inline-block py-1 px-3 rounded-sm bg-accent-red text-white text-xs font-bold uppercase tracking-wide mb-6 font-display animate-fade-in">
                 Manufacturing Division
             </span>
             <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 font-display uppercase animate-fade-up delay-200">Product Catalog</h1>
             <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed animate-fade-up delay-300">
                 High-performance GRP composites engineered for the toughest infrastructure challenges. 
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12">
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} className="bg-white rounded-sm p-0 shadow-sm border border-gray-200 hover:shadow-xl hover:border-accent-red transition-all duration-300 group overflow-hidden">
              <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-5/12 bg-gray-100 relative min-h-[300px] md:min-h-full overflow-hidden">
                       <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-900 font-display">
                           Ref: {product.id.substring(0,3).toUpperCase()}
                       </div>
                  </div>
                  <div className="w-full md:w-7/12 p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {product.applications.slice(0,3).map((app, i) => (
                                <span key={i} className="text-[10px] font-bold uppercase tracking-wide bg-gray-50 text-navy-800 px-3 py-1 rounded-sm border border-gray-200 font-display">
                                    {app}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-3xl font-bold text-navy-900 mb-4 group-hover:text-accent-red transition-colors font-display uppercase leading-tight">
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </h3>
                        <p className="text-gray-500 mb-8 leading-relaxed max-w-2xl font-light text-lg">
                            {product.shortDescription}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                         <Link to={`/products/${product.id}`}>
                            <Button variant="outline" className="text-xs uppercase tracking-widest px-8 h-12 border-gray-300 hover:border-accent-red hover:bg-accent-red hover:text-white font-bold">View Specifications</Button>
                         </Link>
                         <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400 font-mono">
                             <Check className="h-3 w-3 text-accent-orange" />
                             <span>Standard Mould Available</span>
                         </div>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
