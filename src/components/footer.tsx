import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from '@/components/logo';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Engineering robust modular solutions for the world's most demanding industries. 30+ years of proven excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
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
          <p>&copy; {new Date().getFullYear()} EMPHZ Corporate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
