/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Layers, Globe, Star } from 'lucide-react';
import { Button, GlassCard, SectionHeader } from '../components/UI';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#00101B] via-[#01243A] to-[#013E56]">
    {/* Full Wide Hero Image Background */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://lh3.googleusercontent.com/pw/AP1GczM23e5IB401B6M-knj-n3x72djmOLjm9HE2awJAuhVdyaXmAjCeRkd4o0nWGsOVnODi-5OHDBbfFJGXHFAMQqLGJtY7Af4o8soGA9b6A92u04WXskUIwjtsXSdumMYO6nbUiX3N9CL7VwIqL25oti253g=w1545-h869-s-no-gm?authuser=0" 
        alt="EMPHZ Futuristic Modular Infrastructure" 
        className="w-full h-full object-cover brightness-[0.95] scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000814]/70 via-[#001D2E]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00101B]/70 via-[#00243B]/20 to-transparent" />
    </div>
    
    <motion.div
      aria-hidden="true"
      className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
      animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      aria-hidden="true"
      className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl"
      animate={{ x: [0, 20, 0], y: [0, -25, 0], scale: [1, 0.95, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="section-padding relative z-10 w-full">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-white/85 border border-white/70 mb-8 backdrop-blur-md shadow-lg shadow-slate-900/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#E8F4FA]">Scaling India + Global Export</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter leading-[1.1] uppercase mb-8 text-white">
            Precision <br />
            <span className="text-accent underline decoration-8 decoration-accent/20 underline-offset-[-8px]">Engineering</span> <br />
            Modular Units
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-xl mb-8 leading-relaxed font-medium">
            EMPHZ crafts premium modular pods designed for rapid deployment. High-fidelity workspaces and resting units engineered for the architectural standards of tomorrow.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {['Factory Finished', 'Weather Resistant', 'Pan-India Delivery'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 text-xs font-semibold tracking-wide rounded-full bg-white/85 border border-zinc-200 text-zinc-700 shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-6">
            <Link to="/contact">
              <Button size="lg" className="group h-full">
                Start Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">Product Catalog</Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 pt-16 border-t border-white/20 max-w-2xl">
            <div>
              <p className="text-white font-display text-3xl font-black mb-1">48H</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-black">Installation</p>
            </div>
            <div>
              <p className="text-white font-display text-3xl font-black mb-1">45dB</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-black">Acoustics</p>
            </div>
            <div className="hidden md:block">
              <p className="text-white font-display text-3xl font-black mb-1">ZERO</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-black">Foundation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValueProps = () => {
  const props = [
    { icon: <Zap />, title: "Rapid Deploy", desc: "Our standardized modules are delivered pre-assembled and functional within 48 hours." },
    { icon: <ShieldCheck />, title: "Acoustic Shield", desc: "Architectural soundproofing technology creating an oasis of silence in noisy zones." },
    { icon: <Layers />, title: "Infinite Scale", desc: "Interlocking systems that allow your infrastructure to expand as your requirements grow." },
    { icon: <Globe />, title: "Global Grade", desc: "Tested for extreme Indian climates and built to meet international seismic standards." }
  ];

  return (
    <section className="section-padding bg-white">
      <SectionHeader 
        number="01" 
        title="Industrial Standards" 
        subtitle="We deliver factory-finished precision that on-site masonry construction simply cannot replicate. No mess, no delays, zero compromise."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="h-full border border-zinc-100 hover:border-accent/40 bg-zinc-50/50">
              <div className="text-accent mb-8 w-14 h-14 flex items-center justify-center bg-accent/5 rounded-full border border-accent/10">
                {p.icon}
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-4 text-zinc-900">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductPreview = () => (
  <section className="section-padding bg-gradient-to-b from-zinc-50 to-white">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <SectionHeader 
        number="02" 
        title="Pod Ecosystem" 
        subtitle="Explore our range of purpose-built modular units."
        className="mb-0"
      />
      <Link to="/products" className="text-zinc-900 text-[10px] uppercase tracking-[0.2em] font-black flex items-center group bg-white px-6 py-3 border border-zinc-200">
        All Specifications <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
      </Link>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PRODUCTS.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          whileHover={{ y: -8 }}
          className="group h-full"
        >
          <div className="h-80 md:h-96 overflow-hidden bg-white/95 mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-zinc-100 flex items-center justify-center relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/70 via-blue-400/70 to-cyan-300/70" />
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-contain scale-100 group-hover:scale-105 transition-all duration-700 p-3"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-black mb-2">{product.category} Series</p>
          <h3 className="text-2xl font-display font-bold uppercase mb-4 text-zinc-900">{product.name}</h3>
          <p className="text-zinc-500 text-sm mb-8 line-clamp-2 leading-relaxed min-h-[44px]">{product.description}</p>
          <Link to={`/products/${product.category}`} className="text-[10px] uppercase tracking-widest font-black text-zinc-900 group-hover:text-accent flex items-center justify-between transition-colors border border-zinc-200 px-4 py-3 rounded-sm hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
            View Details <ArrowRight className="ml-2" size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

const WhyEMPHZ = () => (
  <section className="section-padding bg-white border-y border-zinc-100 overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <SectionHeader 
          number="03" 
          title="Modular ROI" 
          subtitle="A strategic investment for developers, hospitality chains, and enterprises."
        />
        <div className="space-y-16 mt-12">
          {[
            { t: "Asset Versatility", d: "Relocate components as per project priority. Convert one unit type to another with modular internal segments." },
            { t: "Tax Optimization", d: "Classified as mobile plant & equipment, enabling accelerated depreciation and significant capital saving." },
            { t: "Safety Audited", d: "Fire-rated materials, certified electrical systems, and structural integrity reports provided with every unit." }
          ].map((item, i) => (
            <div key={item.t} className="flex gap-8">
              <div className="font-display text-5xl text-zinc-100 font-black leading-none pt-1">0{i+1}</div>
              <div>
                <h4 className="text-lg font-display uppercase tracking-tight text-zinc-900 font-bold mb-3">{item.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square bg-zinc-50 p-4 border border-zinc-100 rotate-1">
          <img src="https://lh3.googleusercontent.com/pw/AP1GczPDRXHhmo1DelLxi0HtftJnSmJ5IkdKr2Ul0o4WqNdZC0aJLGTf3RDD6NY95soy12tjT-9X5MXLRdCBt8plfP21vC68xJgU31pGM52ih8yBsDP2UzyWWShp8haDaNLGCv-EGnHQMuwNSVEJe7G288whig=w1545-h869-s-no-gm?authuser=0" className="w-full h-full object-cover" alt="EMPHZ Modular Pod Engineering" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent flex flex-col justify-center items-center text-white shadow-2xl">
            <span className="text-5xl font-display font-black leading-none">15+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold mt-2">Cities Reach</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceCenter = () => (
  <section className="section-padding text-center bg-zinc-50 relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10 bg-white/70 backdrop-blur-md border border-white rounded-2xl p-8 md:p-12 shadow-xl shadow-zinc-200/50">
      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-8 text-zinc-900">
        Visit The <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-[-4px]">Showroom</span>
      </h2>
      <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        Our Kerala Experience Center showcases the range of finishes, acoustics and technological integrations. Witness the build quality that sets EMPHZ apart.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Link to="/contact">
          <Button size="lg">Schedule Tour</Button>
        </Link>
        <a href="#portfolio" aria-label="Jump to recent deployments section">
          <Button variant="outline" size="lg">Virtual Gallery</Button>
        </a>
        <a href="https://www.instagram.com/emphz.in" target="_blank" rel="noopener noreferrer" aria-label="Open EMPHZ Instagram profile">
          <Button variant="outline" size="lg">Instagram</Button>
        </a>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding bg-white">
    <SectionHeader align="center" title="Industry Trust" subtitle="Architects and CEOs on the EMPHZ experience." />
    <div className="grid md:grid-cols-3 gap-10">
      {[
        { n: "Rajesh Menon", r: "CEO, Nexa Hubs", t: "The acoustics are incredible. We've placed these in the middle of our busiest production zones and the silence inside is absolute." },
        { n: "Ananya Dixit", r: "Resort Architect", t: "EMPHZ units allowed us to open a luxury eco-resort 6 months ahead of schedule. The finish quality is truly architectural grade." },
        { n: "Siddharth Varma", r: "Project lead, Skyline", t: "Finally, a modular vendor in India that understands technical specifications and structural durability. Truly impressed." }
      ].map((test, i) => (
        <div key={test.n}>
          <GlassCard className="flex flex-col h-full justify-between border-zinc-100 hover:border-zinc-200">
            <div>
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-zinc-600 italic text-lg mb-10 leading-relaxed font-medium">"{test.t}"</p>
            </div>
            <div className="pt-8 border-t border-zinc-50">
              <p className="font-display uppercase text-[10px] font-black tracking-[0.2em] text-zinc-900">{test.n}</p>
              <p className="text-[10px] uppercase tracking-widest text-accent mt-2 font-bold">{test.r}</p>
            </div>
          </GlassCard>
        </div>
      ))}
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="section-padding bg-zinc-50 border-t border-zinc-100">
    <SectionHeader 
      number="04" 
      title="Recent Deployments" 
      subtitle="Precision architectural units integrated into high-stakes environments across India."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczMV5hGEEEdpdnKLgB0DRqObV9cKXP6QKAncSrIbIQnQoJeXZl9eBjhd2sap19P0g52wKE_guoBLXeO69MZIbnjljuao0D0YXi2N3VvoMU1BeXn7d4l-kqoXag1lLPorlKp2DK5ndinicl1qigofgs9AXA=w1545-h869-s-no-gm?authuser=0" 
          alt="EMPHZ Laboratory Pod" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Research Sector</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Lab-Grade Modular Unit</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczMY7U4pLjoqWAm-csUaIIohGKEvAafb-m942e923vdz34e9xTe5RTeyrTfHQBFYuH2FySKs4SwIFw3O716U_gcfXDjDrbrYfuMTCVxPmhY6kMX2VC-2dInfCxF7IF3i2l5-LiAUAUC8zoGO6P2g51mNzQ=w1344-h768-s-no-gm?authuser=0" 
          alt="EMPHZ Office Pod" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Corporate HQ</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">WorkSpace Pro Deployment</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczOQCBCGPhZmf_8ilQ0TED_VfO2Yh2GRgUiIbZ3WB3tbtea5rCI43cIVGHNUo-dy4zyOJV3QYL3YAxSUbZsCHr7EVEWRq4SmPiNCEIlMzxIiE6FRwBb5S9HtFn-08vgOPxWVTNSMLnmdTyuEeIMgtX7iYA=w869-h869-s-no-gm?authuser=0" 
          alt="EMPHZ Sanitary Module" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Sanitary Solutions</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">SaniMod Portable Unit</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczNydAEeadD4afouzV-k8Srj8GPWnSoG4714kIJfeUgIYW5XLAAk26VhFc9zaGSAT226oPBh3LNYjgyFTmZhQa_KjCJmpqIYboJzoS6-BBM37-gdFFQa1reZb_7sTAyibwgIvqH23zZoRpBj5XOP6FD2gQ=w1545-h869-s-no-gm?authuser=0" 
          alt="EMPHZ Urban Transit Module" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Public Infrastructure</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Urban Transit Module</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczMe1mwOA84BIJHtR5Bmlm2Y59AP-X4R0c-xrWMKdq3PTwxcwl3JKGVtTucHulwZC7fvPFGgSG9JOHxRFG7HgNvZksxRPnBM43HKmghY8xFC119g3rlfoQw6keBieXkY0ieeipHFXt8ae0tpNw3ULflq5g=w869-h869-s-no-gm?authuser=0" 
          alt="EMPHZ Generator Room Pod" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Industrial Power</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Generator Room Module</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczOYyrN7zzWAF72LarCKhxba48Z63JkRPQa84TPIyRzuZwyGt-CbVJd4tzh2kNF93HhECGlR7d4lJzH5XFeWiqwiwWJy3yuaqr4v3VJXs3CJHYNEgmroDLxP0U89hb-D5PJ0wB1CNPL56fN7KgdXmzWs7w=w1304-h869-s-no-gm?authuser=0" 
          alt="EMPHZ Bus Transit Station" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Urban Infrastructure</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Bus Transit Station</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczO3QR_zgU5NrlwdA2evx824k4sb5JwDTl4OHCODq6pvYk0F5ScgKPCvtsjkMm-dJy0sFr6_n26KwNqFTm2s3U-ASDgf4kQHP2NHFiRGBpX7I_BSB5r9k6I8ULuWc9Z2zy0_lNEXNBFf9LlHspsnhdDErA=w1344-h768-s-no-gm?authuser=0" 
          alt="EMPHZ Hybrid Workspace Module" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Multi-Purpose</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Hybrid Workspace Module</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000" 
          alt="EMPHZ Eco-Hospitality Pod" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Hospitality</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Eco-Retreat Hospitality Pod</h4>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="group relative aspect-[16/9] overflow-hidden bg-white shadow-sm"
      >
        <img 
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2000" 
          alt="EMPHZ Retail Pop-up Module" 
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-accent mb-2">Commercial</p>
            <h4 className="text-xl font-display font-bold text-white uppercase">Retail Pop-up Module</h4>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);


const PhotoGallery = () => {
  const photos = [
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczOQCBCGPhZmf_8ilQ0TED_VfO2Yh2GRgUiIbZ3WB3tbtea5rCI43cIVGHNUo-dy4zyOJV3QYL3YAxSUbZsCHr7EVEWRq4SmPiNCEIlMzxIiE6FRwBb5S9HtFn-08vgOPxWVTNSMLnmdTyuEeIMgtX7iYA=w869-h869-s-no-gm?authuser=0",
      alt: "Closeup of modular sanitation unit",
      label: "Sanitation"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczMY7U4pLjoqWAm-csUaIIohGKEvAafb-m942e923vdz34e9xTe5RTeyrTfHQBFYuH2FySKs4SwIFw3O716U_gcfXDjDrbrYfuMTCVxPmhY6kMX2VC-2dInfCxF7IF3i2l5-LiAUAUC8zoGO6P2g51mNzQ=w1344-h768-s-no-gm?authuser=0",
      alt: "Interior workspace pod deployment",
      label: "Workspace"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczNydAEeadD4afouzV-k8Srj8GPWnSoG4714kIJfeUgIYW5XLAAk26VhFc9zaGSAT226oPBh3LNYjgyFTmZhQa_KjCJmpqIYboJzoS6-BBM37-gdFFQa1reZb_7sTAyibwgIvqH23zZoRpBj5XOP6FD2gQ=w1545-h869-s-no-gm?authuser=0",
      alt: "Urban modular transit shelter",
      label: "Transit"
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AP1GczMV5hGEEEdpdnKLgB0DRqObV9cKXP6QKAncSrIbIQnQoJeXZl9eBjhd2sap19P0g52wKE_guoBLXeO69MZIbnjljuao0D0YXi2N3VvoMU1BeXn7d4l-kqoXag1lLPorlKp2DK5ndinicl1qigofgs9AXA=w1545-h869-s-no-gm?authuser=0",
      alt: "Laboratory-grade exterior module",
      label: "Research"
    },
  ];

  return (
    <section className="section-padding bg-white border-y border-zinc-100">
      <SectionHeader
        number="Gallery"
        title="Photo Gallery"
        subtitle="A quick visual tour of EMPHZ builds across workspace, transit, and industrial deployments."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden border border-zinc-100 bg-zinc-50"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent text-white px-4 py-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black">{photo.label}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Consultation", desc: "Our engineers analyze your spatial requirements and technical constraints." },
    { title: "Configuration", desc: "Choose from our eco-system of materials, acoustics, and smart integrations." },
    { title: "Precision Build", desc: "Factory construction under strict quality control ensures zero defect delivery." },
    { title: "Rapid Deploy", desc: "On-site installation and integration completed within a 48-hour window." }
  ];

  return (
    <section className="section-padding bg-zinc-900 text-white">
      <SectionHeader 
        number="05" 
        title="Deployment Lifecycle" 
        subtitle="From blueprint to reality in under 15 days. Streamlined architectural integration."
        className="invert"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="text-accent text-6xl font-display font-black mb-6 opacity-30">0{i+1}</div>
            <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-4">{step.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-[15%] -right-6 w-12 h-[1px] bg-zinc-800" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TechSpecs = () => {
  const specs = [
    { label: "Frame", value: "Aviation-Grade Aluminum" },
    { label: "Insulation", value: "High-Density Rockwool (80kg/m³)" },
    { label: "Acoustics", value: "Double-Glazed Tempered Glass" },
    { label: "Fire Rating", value: "60-Minute Fire Stability" },
    { label: "Weight", value: "350kg - 1200kg per Module" },
    { label: "Power", value: "Smart PDU with Surge Guard" }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <SectionHeader 
            number="06" 
            title="Engineering DNA" 
            subtitle="Built to endure the harshest environments while maintaining aesthetic purity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {specs.map((spec) => (
              <div key={spec.label} className="border-b border-zinc-100 pb-4">
                <p className="text-[10px] uppercase font-black tracking-widest text-zinc-400 mb-1">{spec.label}</p>
                <p className="text-lg font-display font-bold text-zinc-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-zinc-50 border border-zinc-100 p-8 flex items-center justify-center">
             {/* Abstract technical drawing or high-quality image */}
             <img 
               src="https://lh3.googleusercontent.com/pw/AP1GczPDRXHhmo1DelLxi0HtftJnSmJ5IkdKr2Ul0o4WqNdZC0aJLGTf3RDD6NY95soy12tjT-9X5MXLRdCBt8plfP21vC68xJgU31pGM52ih8yBsDP2UzyWWShp8haDaNLGCv-EGnHQMuwNSVEJe7G288whig=w1545-h869-s-no-gm?authuser=0" 
               alt="Technical Blueprint" 
               className="w-full h-full object-cover opacity-20 grayscale brightness-0"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-accent/20 rounded-full animate-ping absolute" />
                <div className="w-48 h-48 border border-accent/40 rounded-full animate-pulse absolute" />
                <div className="bg-white p-8 border border-accent shadow-2xl relative">
                   <p className="text-[10px] uppercase font-black tracking-[0.5em] text-accent text-center mb-2">Build Integrity</p>
                   <p className="text-4xl font-display font-black text-zinc-900 text-center">CERTIFIED</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <ValueProps />
      <ProductPreview />
      <WhyEMPHZ />
      <Portfolio />
      <PhotoGallery />
      <Process />
      <TechSpecs />
      <ExperienceCenter />
      <Testimonials />
      <section className="section-padding bg-accent text-dark-bg text-center">
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8">Ready to modularize?</h2>
        <p className="text-dark-bg/70 text-lg max-w-2xl mx-auto mb-10 font-medium">
          Whether it's a single office pod or a 100-unit campus, our engineering team is ready to scale your infrastructure.
        </p>
        <Button size="lg" className="bg-dark-bg text-white hover:shadow-none border-none">Get a Custom Proposal</Button>
      </section>
    </main>
  );
};

export default Home;
