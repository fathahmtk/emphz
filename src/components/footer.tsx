import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Phone, Mail, Globe } from 'lucide-react';
import Logo from '@/components/logo';

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/#industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
             <p className="text-muted-foreground text-sm max-w-md">
              EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
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
          <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:info@emphz.in" className="hover:text-primary">info@emphz.in</a>
                  </li>
                   <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                       <a href="https://www.emphz.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">www.emphz.in</a>
                  </li>
                   <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                       <a href="tel:+919037874080" className="hover:text-primary">+91 9037 874 080</a>
                  </li>
              </ul>
          </div>
           <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMPHZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
