import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { InquiryForm } from '../components/InquiryForm';
import { 
  Check, 
  Download, 
  FileText, 
  ChevronRight, 
  ArrowLeft, 
  Printer, 
  ChevronDown, 
  Settings, 
  Ruler, 
  Layers, 
  Filter, 
  X,
  Search,
  RotateCcw
} from 'lucide-react';
import { RoutePath } from '../types';
import { PageMeta } from '../components/PageMeta';

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

// Filter Section Component
const FilterSection: React.FC<{
  title: string;
  options: string[];
  selected: string[];
  onChange: (option: string) => void;
}> = ({ title, options, selected, onChange }) => (
  <div className="mb-8">
    <h4 className="text-[10px] font-black uppercase tracking-widest text-navy-400 mb-4 font-display flex items-center">
      <div className="w-1.5 h-1.5 bg-accent-red mr-2"></div>
      {title}
    </h4>
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center group cursor-pointer">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="peer h-4 w-4 appearance-none border border-gray-300 rounded-none bg-white checked:bg-navy-900 checked:border-navy-900 transition-all cursor-pointer"
              checked={selected.includes(option)}
              onChange={() => onChange(option)}
            />
            <Check className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 left-0.5 pointer-events-none transition-opacity" />
          </div>
          <span className={`ml-3 text-xs font-medium uppercase tracking-wide transition-colors ${selected.includes(option) ? 'text-navy-900' : 'text-gray-500 group-hover:text-navy-700'}`}>
            {option}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export const Products: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  // Filtering States
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenSection(null);
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

  // Filter Logic Data
  const ALL_APPLICATIONS = [
    "Power Distribution",
    "Urban Infrastructure",
    "Industrial Plants",
    "Mass Transit",
    "Telecom & Data",
    "Water & Utilities"
  ];

  const ALL_MATERIALS = [
    "SMC (Sheet Moulding Compound)",
    "Isophthalic Polyester",
    "Vinyl Ester",
    "GRP Sandwich Panel"
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      // Application filter
      const matchesApp = selectedApps.length === 0 || 
        selectedApps.some(app => product.applications.includes(app));

      // Material filter (extracted from specs)
      const materialSpec = product.specs.find(s => s.label === "Material Composition" || s.label === "Resin System" || s.label === "Wall Construction")?.value || "";
      const matchesMaterial = selectedMaterials.length === 0 || 
        selectedMaterials.some(mat => materialSpec.toLowerCase().includes(mat.toLowerCase().split(' ')[0]));

      return matchesSearch && matchesApp && matchesMaterial;
    });
  }, [selectedApps, selectedMaterials, searchQuery]);

  const toggleApp = (app: string) => {
    setSelectedApps(prev => prev.includes(app) ? prev.filter(a => a !== app) : [...prev, app]);
  };

  const toggleMaterial = (mat: string) => {
    setSelectedMaterials(prev => prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]);
  };

  const resetFilters = () => {
    setSelectedApps([]);
    setSelectedMaterials([]);
    setSearchQuery('');
  };

  if (id) {
      const selectedProduct = PRODUCTS.find(p => p.id === id);

      if (!selectedProduct) {
          return (
            <>
              <PageMeta title="Product Not Found" description="The requested product specification is not available in our catalog." />
              <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
                  <div className="text-center p-12 bg-white border border-gray-200 shadow-sm rounded-sm max-w-lg">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-6" />
                      <h2 className="text-xl font-bold text-navy-900 mb-2 font-display uppercase">Product Not Found</h2>
                      <p className="text-gray-500 mb-8">The requested specification sheet is unavailable.</p>
                      <Link to={RoutePath.PRODUCTS}><Button>Return to Catalog</Button></Link>
                  </div>
              </div>
            </>
          );
      }

      return (
        <>
          <PageMeta title={selectedProduct.name} description={selectedProduct.shortDescription} />
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
        </>
      );
  }

  // Catalog View
  return (
    <>
      <PageMeta 
        title="Product Catalog" 
        description="Explore our full catalog of high-performance GRP composites including electrical enclosures, modular kiosks, sanitation units, and custom fabrications for industrial infrastructure."
      />
      <div className="bg-gray-50 min-h-screen pt-16">
        
        {/* Dark Hero Header */}
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

        {/* Search & Filter Bar (Mobile Trigger) */}
        <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search technical catalog..." 
                  className="w-full bg-gray-50 border-gray-200 rounded-sm py-2 pl-10 pr-4 text-sm focus:bg-white focus:border-navy-900 transition-all outline-none font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 bg-navy-900 text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-navy-800 transition-colors"
              >
                <Filter className="h-4 w-4" /> Filters
              </button>
              <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <span>Displaying <span className="text-navy-900 font-bold">{filteredProducts.length}</span> Results</span>
                {(selectedApps.length > 0 || selectedMaterials.length > 0 || searchQuery !== '') && (
                   <button 
                    onClick={resetFilters}
                    className="text-accent-red hover:underline flex items-center gap-1"
                   >
                     <RotateCcw className="h-3 w-3" /> Reset
                   </button>
                )}
              </div>
          </div>
        </div>

        {/* Main Catalog Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-40 space-y-2">
                <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-navy-900 mb-8 font-display border-b border-gray-100 pb-2">Technical Filtering</h3>
                  
                  <FilterSection 
                    title="By Application" 
                    options={ALL_APPLICATIONS} 
                    selected={selectedApps} 
                    onChange={toggleApp} 
                  />

                  <FilterSection 
                    title="Material Specification" 
                    options={ALL_MATERIALS} 
                    selected={selectedMaterials} 
                    onChange={toggleMaterial} 
                  />

                  {(selectedApps.length > 0 || selectedMaterials.length > 0) && (
                    <button 
                      onClick={resetFilters}
                      className="w-full py-3 mt-4 border border-dashed border-gray-200 text-gray-400 hover:text-accent-red hover:border-accent-red transition-all text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 font-display"
                    >
                      <RotateCcw className="h-3 w-3" /> Clear Active Filters
                    </button>
                  )}
                </div>

                {/* Procurement Support Block */}
                <div className="bg-navy-900 text-white p-8 rounded-sm shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 bg-white/5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 relative z-10 font-display">Tender Support</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed mb-6 relative z-10 font-light">
                    Need custom specifications for an active tender? Our engineering team provides detailed BOQ and shop drawings.
                  </p>
                  <Link to={RoutePath.CONTACT} className="text-[10px] font-black uppercase tracking-widest text-accent-orange hover:text-white transition-colors flex items-center relative z-10 font-display">
                    Contact Engineering <ChevronRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-9">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-12">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-sm p-0 shadow-sm border border-gray-200 hover:shadow-xl hover:border-accent-red transition-all duration-300 group overflow-hidden animate-fade-up">
                      <div className="flex flex-col md:flex-row h-full">
                          <div className="w-full md:w-5/12 bg-gray-100 relative min-h-[260px] md:min-h-full overflow-hidden">
                              <img 
                                  src={product.imageUrl} 
                                  alt={product.name}
                                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-900 font-display">
                                  Ref: {product.id.substring(0,3).toUpperCase()}
                              </div>
                          </div>
                          <div className="w-full md:w-7/12 p-8 lg:p-10 flex flex-col justify-between">
                              <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.applications.slice(0,3).map((app, i) => (
                                        <span key={i} className="text-[9px] font-black uppercase tracking-wider bg-gray-50 text-navy-800 px-2 py-1 rounded-sm border border-gray-200 font-display">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-black text-navy-900 mb-4 group-hover:text-accent-red transition-colors font-display uppercase leading-tight tracking-tight">
                                    <Link to={`/products/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="text-gray-500 mb-8 leading-relaxed max-w-2xl font-light text-base lg:text-lg">
                                    {product.shortDescription}
                                </p>
                              </div>
                              
                              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                <Link to={`/products/${product.id}`}>
                                    <Button variant="outline" className="text-[10px] uppercase tracking-widest px-6 h-10 border-gray-300 hover:border-accent-red hover:bg-accent-red hover:text-white font-black">View Technical Sheet</Button>
                                </Link>
                                <div className="hidden sm:flex items-center space-x-2 text-[10px] text-gray-400 font-mono uppercase tracking-widest font-bold">
                                    <Check className="h-3 w-3 text-accent-orange" />
                                    <span>In-Stock</span>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-sm p-24 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                    <Search className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2 font-display uppercase">No Results Found</h3>
                  <p className="text-gray-500 mb-8 font-light">We couldn't find any products matching your current filter criteria.</p>
                  <Button variant="outline" onClick={resetFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)}></div>
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl animate-fade-in-right overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 font-display">Product Filters</h3>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="p-8">
               <FilterSection 
                title="By Application" 
                options={ALL_APPLICATIONS} 
                selected={selectedApps} 
                onChange={toggleApp} 
              />

              <FilterSection 
                title="Material Specification" 
                options={ALL_MATERIALS} 
                selected={selectedMaterials} 
                onChange={toggleMaterial} 
              />

              <div className="space-y-4 pt-8 border-t border-gray-100">
                <Button 
                  fullWidth 
                  variant="primary" 
                  onClick={() => setShowMobileFilters(false)}
                  className="text-xs h-12"
                >
                  Apply Filters
                </Button>
                <button 
                  onClick={resetFilters}
                  className="w-full py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-accent-red font-display"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};