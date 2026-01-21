import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { RoutePath } from '../types';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-8 border-t border-accent-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* 1. Brand */}
            <div>
                <div className="mb-6 flex justify-start">
                    <Logo className="text-5xl items-start" showTagline={true} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-6">
                    Industrial manufacturing of GRP solutions for global infrastructure. ISO 9001 certified operations.
                </p>
            </div>

            {/* 2. Quick Links */}
            <div>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-8 font-display">Divisions</h4>
                 <ul className="space-y-4">
                    {[
                        { name: "Products", path: RoutePath.PRODUCTS },
                        { name: "Manufacturing", path: RoutePath.MANUFACTURING },
                        { name: "Engineering", path: RoutePath.ENGINEERING },
                        { name: "Solutions", path: RoutePath.SOLUTIONS },
                    ].map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} className="text-sm font-bold text-gray-300 hover:text-white hover:underline decoration-accent-orange underline-offset-4 uppercase tracking-wide">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                 </ul>
            </div>

            {/* 3. Contact Details */}
            <div className="lg:col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-accent-orange mb-8 font-display">Contact Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                        <div>
                            <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Factory</span>
                            <p className="text-sm text-white leading-relaxed">{COMPANY_INFO.locations.factory}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                        <div>
                            <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Support</span>
                            <p className="text-sm text-white font-mono">{COMPANY_INFO.contact.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                        <div>
                            <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Email</span>
                            <p className="text-sm text-white font-mono">{COMPANY_INFO.contact.email}</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                        <div>
                            <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Hours</span>
                            <p className="text-sm text-white">Mon - Sat: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-mono uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} EMPHZ. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};