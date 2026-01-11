"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export default function RootLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <>
            <Header />
            <main className={cn("flex-grow", !isHomePage && 'pt-24')}>
                {children}
            </main>
            <Footer />
            <Toaster />
        </>
    );
}
