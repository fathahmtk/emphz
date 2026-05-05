/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-zinc-900 text-white font-bold hover:bg-accent transition-all duration-300 shadow-lg shadow-black/5',
    outline: 'border border-zinc-200 hover:border-accent hover:text-accent bg-zinc-50/50 transition-all duration-300',
    ghost: 'hover:bg-zinc-100 transition-all text-zinc-600 hover:text-zinc-900'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px] uppercase tracking-widest',
    md: 'px-8 py-3.5 text-xs uppercase tracking-widest',
    lg: 'px-10 py-4.5 text-sm uppercase tracking-widest'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-display disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('bg-white/80 backdrop-blur-md border border-zinc-100 p-8 shadow-sm hover:shadow-xl hover:border-accent/10 transition-all duration-500 group', className)}>
    {children}
  </div>
);

export const SectionHeader = ({ 
  title, 
  subtitle, 
  number,
  align = 'left',
  className
}: { 
  title: string; 
  subtitle?: string; 
  number?: string;
  align?: 'left' | 'center';
  className?: string;
}) => (
  <div className={cn('mb-16 max-w-2xl', align === 'center' ? 'mx-auto text-center' : '', className)}>
    <div className={cn('flex items-center gap-4 mb-6', align === 'center' ? 'justify-center' : '')}>
      {number && <span className="font-display text-accent text-sm font-bold tracking-widest">{number}</span>}
      <div className="h-[2px] w-12 bg-accent/20" />
    </div>
    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 uppercase text-zinc-900">
      {title}
    </h2>
    {subtitle && <p className="text-zinc-500 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export const ViewableImage = ({ src, alt, className, referrerPolicy }: { src: string; alt: string; className?: string; referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'] }) => (
  <a href={src} target="_blank" rel="noopener noreferrer" className="group/view block relative" aria-label={`View full image: ${alt}`}>
    <img src={src} alt={alt} className={className} referrerPolicy={referrerPolicy} />
    <span className="absolute right-3 top-3 bg-white/90 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-zinc-700 opacity-0 group-hover/view:opacity-100 transition-opacity">View</span>
  </a>
);
