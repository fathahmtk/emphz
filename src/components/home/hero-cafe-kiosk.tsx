"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getImage } from "@/lib/images"
import Logo from "../logo"
import Link from "next/link"

const productLinks = [
  { name: "GRP Café Kiosk", href: "/products/grp-kiosks-equipment-shelters" },
  { name: "GRP Electrical Enclosure", href: "/products/grp-electrical-enclosures" },
  { name: "GRP Portable Toilet", href: "/products/portable-grp-toilets" },
  { name: "EV Charging Stations", href: "/products/custom-grp-manufacturing" },
]

export default function HeroCafeKiosk() {
  const heroImage = getImage("hero-modular-systems");

  return (
    <section className="relative w-full h-[600px] md:h-[700px] text-white overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.url}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.hint}
                priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-4 md:p-8">
            
            <div className="w-full max-w-5xl">
                 <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tight uppercase drop-shadow-md">
                    Modular Infrastructure Systems
                </h1>
                
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {productLinks.map((link) => (
                        <Button key={link.name} variant="secondary" asChild className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                            <Link href={link.href}>{link.name}</Link>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="mt-12 mb-4">
                 <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-pill px-10 py-6 text-base font-semibold">
                    <Link href="/contact">Request Specification</Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
