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
  { name: "GRP Canopy Structure", href: "/products/custom-grp-manufacturing" },
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4">
            <div className="max-w-4xl mx-auto">
                <Logo className="fill-white drop-shadow-lg" />
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase mt-4 drop-shadow-md">
                    Modular Infrastructure Systems
                </h1>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {productLinks.map((link) => (
                            <Button key={link.name} variant="secondary" asChild className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                                <Link href={link.href}>{link.name}</Link>
                            </Button>
                        ))}
                    </div>
                     <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-12 py-6 text-lg">
                        Request Specification
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}
