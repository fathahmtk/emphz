
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Twitter, Linkedin, Facebook, Phone, Mail, Globe } from 'lucide-react';
import Logo from '@/components/logo';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/#', label: 'Privacy Policy' },
];

export default function Footer() {
  const pathname = usePathname();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsDashboard(pathname.startsWith('/inquiries'));
  }, [pathname]);

  if (isDashboard) {
    return null; // The footer is not shown on the dashboard pages
  }

  return (
    <footer className="py-8">
      <div className="container">
          <div className="bg-card rounded-xl p-8 md:p-12 border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Column 1: Logo and About */}
              <div className="space-y-4">
                <Link href="/" className="mb-4 inline-block">
                  <Logo />
                </Link>
                <p className="text-muted-foreground text-sm max-w-xs">
                  EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions.
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                  <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
                  <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                          <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                          <a href="mailto:info@emphz.in" className="text-muted-foreground hover:text-primary">info@emphz.in</a>
                      </li>
                      <li className="flex items-start gap-3">
                          <Globe className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                          <a href="https://www.emphz.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">www.emphz.in</a>
                      </li>
                      <li className="flex items-start gap-3">
                          <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                          <a href="tel:+919037874080" className="text-muted-foreground hover:text-primary">+91 9037 874 080</a>
                      </li>
                  </ul>
              </div>

              {/* Column 4: Social Media */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-pill">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-pill">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary rounded-pill">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} EMPHZ. All rights reserved.</p>
            </div>
          </div>
      </div>
    </footer>
  );
}
