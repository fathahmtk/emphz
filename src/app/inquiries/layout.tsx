
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { LayoutDashboard } from 'lucide-react';
import { useUser, logout } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function getInitials(name?: string | null) {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}


export default function InquiriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader>
              <h2 className="text-lg font-semibold">EMPHZ Dashboard</h2>
            </SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === '/inquiries'}
                >
                    <Link href="/inquiries">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
             <SidebarFooter>
                {user && (
                    <div className="flex items-center gap-3 p-2">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                            <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">{user.displayName}</span>
                             <Button variant="link" size="sm" onClick={() => logout()} className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                                Logout
                            </Button>
                        </div>
                    </div>
                )}
             </SidebarFooter>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <header className="flex items-center justify-between p-4 border-b md:hidden">
                <h2 className="font-semibold">Dashboard</h2>
                <SidebarTrigger />
            </header>
            {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
