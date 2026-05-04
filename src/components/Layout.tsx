/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Button } from './UI';
import { QuoteModal } from './QuoteModal';
import { cn } from '../lib/utils';
import logo from '../assets/emphz-logo.svg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(251, 251, 251, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-zinc-100"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="EMPHZ Logo" 
              className="w-11 h-11 object-contain rounded-md shadow-sm"
            />
            <span className="text-3xl font-display font-black tracking-tighter text-zinc-900 group-hover:text-accent transition-colors">
              EMPHZ
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-accent",
                  location.pathname === link.href ? "text-accent" : "text-zinc-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" onClick={() => setIsQuoteOpen(true)}>Inquiry</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <Button size="sm" onClick={() => setIsQuoteOpen(true)} className="px-4 py-2">Quote</Button>
            <button 
              className="text-zinc-900 p-2" aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden bg-white fixed top-20 left-0 w-full overflow-hidden flex flex-col justify-center px-12"
        >
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="text-4xl font-display font-medium uppercase tracking-tight text-zinc-900 hover:text-accent"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8">
              <Button size="lg" className="w-full" onClick={() => setIsQuoteOpen(true)}>Get Quote</Button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Floating WhatsApp Action */}
      <motion.a
        href="https://wa.me/919876543210"
        aria-label="Chat with EMPHZ on WhatsApp"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <MessageSquare size={24} />
      </motion.a>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-8 group">
            <img 
              src={logo} 
              alt="EMPHZ Logo" 
              className="w-12 h-12 object-contain rounded-md"
            />
            <h3 className="text-2xl font-display font-black tracking-tighter text-zinc-900 group-hover:text-accent transition-colors">
              EMPHZ
            </h3>
          </Link>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Pioneering modular infrastructure based in Kerala, India. We engineer precision-crafted pods that redefine rapid deployment for modern industrial and commercial needs.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-accent hover:border-accent hover:text-white transition-all">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current rounded-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-[0.2em] text-[10px] font-bold mb-10 text-zinc-400">Engineering</h4>
          <ul className="flex flex-col gap-4 text-zinc-600 text-sm">
            <li><Link to="/products/office" className="hover:text-accent transition-colors">Office Systems</Link></li>
            <li><Link to="/products/sleeping" className="hover:text-accent transition-colors">Rest Solutions</Link></li>
            <li><Link to="/products/toilet" className="hover:text-accent transition-colors">Sanitary Modules</Link></li>
            <li><Link to="/products/kiosks" className="hover:text-accent transition-colors">Retail Frameworks</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-[0.2em] text-[10px] font-bold mb-10 text-zinc-400">Address</h4>
          <ul className="flex flex-col gap-4 text-zinc-600 text-sm">
            <li>260/A, Meenakunte</li>
            <li>Hebbal Industrial Estate</li>
            <li>Hebbal Industrial Area, Mysuru</li>
            <li>Karnataka 570016</li>
            <li><a href="https://maps.app.goo.gl/UtBF6FBtw5N9b42j6" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">View on Google Maps</a></li>
            <li>+91 86488 81888</li>
            <li className="mt-4 font-bold text-zinc-900">Experience Center Open</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-[0.2em] text-[10px] font-bold mb-10 text-zinc-400">Newsletter</h4>
          <p className="text-zinc-500 text-xs mb-8">Receive technical reports and new deployment updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-zinc-100 border border-zinc-200 px-4 py-3.5 text-sm focus:outline-none focus:border-accent w-full text-zinc-900"
            />
            <button className="bg-zinc-900 text-white px-5 hover:bg-accent transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-200 gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
          © 2026 EMPHZ INFRASTRUCTURE SOLUTIONS.
        </p>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Safety</a>
          <a href="#" className="hover:text-accent transition-colors">Logistics</a>
        </div>
      </div>
    </footer>
  );
};
