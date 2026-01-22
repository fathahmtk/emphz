
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { RoutePath } from '../types';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page to apply transparent header logic
  const isHome = location.pathname === RoutePath.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome || isOpen 
        ? 'bg-navy-950/90 backdrop-blur-md shadow-lg border-b border-white/5 py-2' 
        : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Area */}
          <div className="flex items-center relative z-50">
            <Link to={RoutePath.HOME} className="flex-shrink-0 flex items-center group" onClick={() => setIsOpen(false)}>
              <Logo className="text-3xl" showTagline={false} />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-widest transition-all duration-300 font-display relative group ${
                    isActive 
                    ? 'text-accent-red' 
                    : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-accent-red transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
             <Link to={RoutePath.CONTACT}>
              <button className="text-xs font-bold font-display uppercase tracking-widest bg-white/5 border border-white/10 text-white px-6 py-2 rounded-sm hover:bg-accent-red hover:border-accent-red transition-all shadow-lg backdrop-blur-sm group">
                <span className="group-hover:mr-2 transition-all">Inquire</span>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-red focus:outline-none transition-transform active:scale-95"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        role="menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-navy-950 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
        <div className="flex flex-col justify-center h-full px-8 space-y-2">
            {NAV_LINKS.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `text-4xl font-black uppercase font-display tracking-tight transition-all duration-300 flex items-center group ${
                    isActive
                      ? 'text-white translate-x-4'
                      : 'text-gray-600 hover:text-white hover:translate-x-4'
                  }`
                }
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {({ isActive }) => (
                  <>
                    {isActive && <ChevronRight className="h-8 w-8 text-accent-red mr-2 animate-pulse" />}
                    {link.name}
                  </>
                )}
              </NavLink>
            ))}
             
             <div className="mt-12 border-t border-white/10 pt-8" role="none">
                <p className="text-gray-500 text-xs font-mono mb-4 uppercase tracking-widest">Procurement</p>
                <Link 
                  to={RoutePath.CONTACT} 
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  tabIndex={isOpen ? 0 : -1}
                  className="block w-full text-center text-sm font-bold uppercase tracking-widest text-navy-900 bg-white px-4 py-4 rounded-sm font-display hover:bg-accent-red hover:text-white transition-colors shadow-lg"
                >
                  Request Quote
                </Link>
             </div>
        </div>
      </div>
    </nav>
  );
};
