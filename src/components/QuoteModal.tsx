/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from './UI';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-white/60 backdrop-blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white border border-zinc-100 rounded-sm overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 z-10 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/20">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <h3 className="text-3xl font-display font-black uppercase mb-4 text-zinc-900 tracking-tighter">Draft Received</h3>
                <p className="text-zinc-500 mb-10 max-w-md mx-auto leading-relaxed">
                  Our system is analyzing your requirements. An EMPHZ engineering consultant will contact you within 4 business hours.
                </p>
                <Button onClick={onClose} className="w-full">Dismiss Terminal</Button>
              </motion.div>
            ) : (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-2 tracking-tighter text-zinc-900">Inquiry Specification</h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">Arch-Grade Infrastructure Procurement</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Full Name</label>
                            <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 transition-colors placeholder:text-zinc-300 rounded-sm" placeholder="e.g. Rajesh Menon" />
                    </div>
                    <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Contact Number</label>
                            <input required type="tel" className="w-full bg-zinc-50 border border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 transition-colors placeholder:text-zinc-300 rounded-sm" placeholder="+91 ..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Corporate Email</label>
                    <input required type="email" className="w-full bg-zinc-50 border border-zinc-200 p-4 focus:border-accent outline-none text-zinc-900 transition-colors placeholder:text-zinc-300 rounded-sm" placeholder="office@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Inquiry Category</label>
                    <select required className="w-full bg-zinc-50 border border-zinc-200 p-4 focus:border-accent outline-none appearance-none text-zinc-900 rounded-sm">
                      <option value="">Select Infrastructure Category</option>
                      <option value="office">Office Pods / WorkSpaces</option>
                      <option value="sleep">Sleeping Capsules / RestPods</option>
                      <option value="toilet">Modular Sanitary Units</option>
                      <option value="kiosk">Retail / Service Kiosks</option>
                      <option value="custom">Custom Industrial Solution</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full py-4 flex gap-3 text-sm"
                  >
                    {formState === 'submitting' ? 'Processing...' : 'Submit Specs'} 
                    <Send size={16} />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Phone size={16} />
                    <span className="text-[10px] uppercase tracking-widest font-black">Fast-track with WhatsApp:</span>
                  </div>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[10px] bg-zinc-50 px-4 py-2 border border-zinc-100 hover:border-accent transition-all"
                  >
                    Direct Support <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ArrowRight = ({ size, className }: { size?: number, className?: string }) => (
    <svg 
        width={size || 24} 
        height={size || 24} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);
