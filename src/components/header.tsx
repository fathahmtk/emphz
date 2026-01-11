'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBasket, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { useAuth } from '@/context/auth-context';
import { useQuote } from '@/context/quote-context';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();
  const { itemCount } = useQuote();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  const headerClasses = cn(
    "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
    (hasScrolled || !isHomePage)
      ? "bg-background/80 backdrop-blur-sm border-b"
      : "bg-transparent border-b-transparent"
  );
  
  const linkClasses = (href: string) => cn(
    'text-sm font-medium transition-colors hover:text-primary',
    pathname === href ? 'text-primary' : (hasScrolled || !isHomePage ? 'text-muted-foreground hover:text-foreground' : 'text-slate-200 hover:text-white')
  );

  const iconButtonClasses = cn(
    "rounded-full",
    (hasScrolled || !isHomePage) ? 'text-foreground hover:bg-accent' : 'text-white hover:bg-white/10 hover:text-white'
  );

  const authButtonVariant = (!hasScrolled && isHomePage) ? 'outline' : 'default';
  const authButtonClasses = cn(
      "hidden sm:inline-flex rounded-full",
      (!hasScrolled && isHomePage) && 'text-white border-white hover:bg-white hover:text-primary'
  );


  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className={cn((!hasScrolled && isHomePage) && "text-white")} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={linkClasses('/')}>Home</Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/contact" className="relative">
            <Button variant="ghost" size="icon" className={iconButtonClasses}>
              <ShoppingBasket className="h-5 w-5" />
              <span className="sr-only">Quote Basket</span>
            </Button>
            {itemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{itemCount}</Badge>
            )}
          </Link>
          {isLoggedIn ? (
            <Button onClick={logout} size="sm" variant={authButtonVariant} className={authButtonClasses}>Logout</Button>
          ) : (
            <Button asChild size="sm" variant={authButtonVariant} className={authButtonClasses}>
              <Link href="/login">Partner Login</Link>
            </Button>
          )}

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={iconButtonClasses}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background/80 backdrop-blur-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                  </Link>
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className={cn('text-lg font-medium transition-colors hover:text-primary', pathname === '/' ? 'text-primary' : 'text-foreground')}>Home</Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto pt-4 border-t">
                    {isLoggedIn ? (
                        <Button onClick={() => {logout(); setMobileMenuOpen(false);}} size="sm" className="w-full rounded-full">Logout</Button>
                    ) : (
                        <Button asChild size="sm" onClick={() => setMobileMenuOpen(false)} className="w-full rounded-full">
                        <Link href="/login">Partner Login</Link>
                        </Button>
                    )}
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
