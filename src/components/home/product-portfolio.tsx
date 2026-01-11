
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioItems = [
    {
        title: "Electrical Enclosures",
        description: "Durable GRP enclosures for metering, control, and distribution applications.",
        link: "/products?category=Electrical+Enclosures"
    },
    {
        title: "GRP Kiosks & Equipment Shelters",
        description: "Factory-built modular shelters for electrical, telecom, and control equipment.",
        link: "/products?category=Kiosks"
    },
    {
        title: "Portable Toilets",
        description: "Hygienic and durable sanitation units for public, construction, and industrial use.",
        link: "/products?category=Portable+Toilets"
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
        title: "Food Kiosks",
        description: "Modular kiosks for organised food service operations.",
        link: "/products"
    },
];

export default function ProductPortfolio() {
    const image = PlaceHolderImages.find(p => p.id === 'hero-industrial');
    return (
        <section className="relative container py-24 sm:py-32 rounded-lg overflow-hidden text-white">
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
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">PRODUCT PORTFOLIO</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
                        We manufacture a wide range of GRP-based products for infrastructure and industrial needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item) => (
                         <Link key={item.title} href={item.link} className="block h-full">
                            <Card className="bg-card/80 backdrop-blur-sm h-full flex flex-col hover:border-primary transition-colors text-card-foreground">
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
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
