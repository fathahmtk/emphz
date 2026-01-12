
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBasket, X, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { useUser, logout } from '@/firebase';
import { useQuote } from '@/context/quote-context';
import { ThemeToggleButton } from './theme-toggle';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { productCategories } from '@/lib/data';
import React from 'react';

const navLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || ''}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default function Header() {
  const pathname = usePathname();
  const { user } = useUser();
  const { itemCount } = useQuote();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const linkClasses = (href: string) => cn(
    'text-sm font-medium transition-colors',
    pathname === href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
  );

  const iconButtonClasses = "rounded-full text-foreground hover:bg-accent";
  const authButtonClasses = "hidden sm:inline-flex";


  return (
    <header className="border-b bg-card/80 text-card-foreground sticky top-0 z-40 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClasses('/'))}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

             <NavigationMenuItem>
              <NavigationMenuTrigger className={cn('bg-transparent', pathname.startsWith('/products') ? 'text-primary' : 'text-muted-foreground')}>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {productCategories.map((component) => (
                    <ListItem
                      key={component.name}
                      title={component.name}
                      href={component.slug}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navLinks.filter(l => l.href !== '/products').map((link) => (
              <NavigationMenuItem key={link.href}>
                 <Link href={link.href} passHref legacyBehavior>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClasses(link.href))}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
            ))}
            
            {user && (
              <NavigationMenuItem>
                <Link href="/inquiries" passHref legacyBehavior>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), linkClasses('/inquiries'), 'flex items-center gap-2')}>
                      <LayoutDashboard className="h-4 w-4" />
                      Inquiries
                    </NavigationMenuLink>
                  </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleButton />
          <Link href="/contact" className="relative">
            <Button variant="ghost" size="icon" className={iconButtonClasses}>
              <ShoppingBasket className="h-5 w-5" />
              <span className="sr-only">Quote Basket</span>
            </Button>
            {itemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{itemCount}</Badge>
            )}
          </Link>
          {user ? (
            <Button onClick={() => logout()} size="sm" variant="outline" className={authButtonClasses}>Logout</Button>
          ) : (
            <Button asChild size="sm" variant="default" className={authButtonClasses}>
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
                   <Link href="/products" onClick={() => setMobileMenuOpen(false)} className={cn('text-lg font-medium transition-colors hover:text-primary', pathname.startsWith('/products') ? 'text-primary' : 'text-foreground')}>Products</Link>
                  {navLinks.filter(l => l.href !== '/products').map((link) => (
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
                  {user && (
                     <Link href="/inquiries" onClick={() => setMobileMenuOpen(false)} className={cn('text-lg font-medium transition-colors hover:text-primary flex items-center gap-2', pathname === '/inquiries' ? 'text-primary' : 'text-foreground')}>
                        <LayoutDashboard className="h-5 w-5" />
                        Inquiries
                     </Link>
                  )}
                </nav>
                 <div className="mt-auto pt-4 border-t">
                    {user ? (
                        <Button onClick={() => {logout(); setMobileMenuOpen(false);}} size="sm" className="w-full" variant="outline">Logout</Button>
                    ) : (
                        <Button asChild size="sm" onClick={() => setMobileMenuOpen(false)} className="w-full">
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
