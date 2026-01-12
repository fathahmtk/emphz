
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
        title: "Electrical Enclosures",
        description: "Durable GRP enclosures for metering, control, and distribution applications.",
        link: "/products/grp-electrical-enclosures"
    },
    {
        title: "GRP Kiosks & Equipment Shelters",
        description: "Factory-built modular shelters for electrical, telecom, and control equipment.",
        link: "/products/grp-kiosks-equipment-shelters"
    },
    {
        title: "Portable Toilets",
        description: "Hygienic and durable sanitation units for public, construction, and industrial use.",
        link: "/products/portable-grp-toilets"
    },
    {
        title: "Security Cabins",
        description: "Compact, weather-resistant cabins for controlled access and monitoring.",
        link: "/products"
    },
    {
        title: "Generator & Power Rooms",
        description: "Protective enclosures for backup and utility power systems.",
        link: "/products"
    },
    {
        title: "Custom Manufacturing",
        description: "Bespoke GRP structures built as per any project requirement.",
        link: "/products/custom-grp-manufacturing"
    },
];

export default function ProductPortfolio() {
    const image = PlaceHolderImages.find(p => p.id === 'hero-industrial');
    return (
        <section className="relative container py-24 sm:py-32 rounded-xl overflow-hidden">
            {image && (
                <Image 
                src={image.imageUrl} 
                alt={image.description} 
                data-ai-hint={image.imageHint}
                fill 
                className="object-cover"
                sizes="100vw"
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl text-primary">PRODUCT PORTFOLIO</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
                        We manufacture a wide range of GRP-based products for infrastructure and industrial needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item) => (
                         <Link key={item.title} href={item.link} className="block h-full group">
                            <Card className="bg-card/80 backdrop-blur-sm h-full flex flex-col hover:bg-card transition-colors text-card-foreground">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        {item.title}
                                        <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
