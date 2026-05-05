/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Navigate, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { SectionHeader, Button, ViewableImage } from '../components/UI';
import { motion, useReducedMotion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const ProductPage = () => {
  const { category } = useParams();
  const products = PRODUCTS.filter(p => p.category === category);
  const shouldReduceMotion = useReducedMotion();

  if (!products.length) return <Navigate to="/products" />;

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="section-padding">
        <SectionHeader 
          number="Series"
          title={`${category?.toUpperCase()} Infrastructure`}
          subtitle={`High-precision modular ${category} solutions engineered for corporate standards and rapid deployment.`}
        />

        {products.map((product) => (
          <div key={product.id} className="grid lg:grid-cols-2 gap-24 items-start mb-48 last:mb-0">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : undefined}
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-50 p-4 border border-zinc-100 shadow-sm relative group">
                <ViewableImage 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 right-8 bg-white px-6 py-2 border border-zinc-100 text-[10px] font-black uppercase tracking-widest shadow-sm">
                  Ref: {product.id.split('-').pop()}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : undefined}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4 text-zinc-900 tracking-tighter">{product.name}</h2>
              <p className="text-xl text-accent font-display mb-10 tracking-tight font-black uppercase">{product.headline}</p>
              <p className="text-zinc-500 mb-12 leading-relaxed text-lg font-medium">{product.description}</p>
              
              <div className="grid md:grid-cols-2 gap-16 mb-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-accent/20" /> Design Features
                  </h4>
                  <ul className="space-y-6">
                    {product.features.map(f => (
                      <li key={f} className="flex items-start gap-4 text-sm text-zinc-600 font-medium group">
                        <Check size={18} className="text-accent shrink-0" />
                        <span className="group-hover:text-zinc-900 transition-colors">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-accent/20" /> Technical Data
                  </h4>
                  <div className="space-y-6">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="border-b border-zinc-100 pb-3 group">
                        <p className="text-[10px] uppercase text-zinc-400 tracking-[0.2em] mb-2 font-bold">{k.replace('_', ' ')}</p>
                        <p className="text-xs font-black text-zinc-900 uppercase">{v as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Optimized Applications</h4>
                <div className="flex flex-wrap gap-3">
                  {product.useCases.map(u => (
                    <span key={u} className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-12 border-t border-zinc-100">
                <Button size="lg" className="px-12">Download Specs</Button>
                <Button variant="outline" size="lg">Consult Engineer</Button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <section className="bg-zinc-50 section-padding mt-24 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            align="center"
            title="Custom Infrastructure"
            subtitle="Need a non-standard footprint or specific material finish? Our design team works with architects to deliver tailored modular solutions for unique sites."
          />
          <Link to="/contact">
            <Button size="lg" className="group">
              Discuss Custom Brief <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
