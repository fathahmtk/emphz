
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Electrical Enclosures",
        description: "Durable GRP enclosures for metering, control, and distribution applications.",
        benefits: ["Outdoor-ready construction", "Dust, moisture, and UV resistant", "Fire-retardant materials", "Custom sizes and configurations"],
        link: "/products"
    },
    {
        title: "GRP Kiosks & Equipment Shelters",
        description: "Factory-built modular shelters for electrical, telecom, and control equipment.",
        benefits: ["Thermally insulated panels", "Modular, transportable construction", "Utility and department-approved layouts", "Rapid on-site deployment"],
        link: "/products"
    },
    {
        title: "Portable Toilets",
        description: "Hygienic and durable sanitation units for public, construction, and industrial use.",
        benefits: ["Easy relocation and installation", "Smooth, easy-to-clean GRP interiors", "Flexible layout options", "Designed for high-usage environments"],
        link: "/products"
    },
    {
        title: "Security Cabins",
        description: "Compact, weather-resistant cabins for controlled access and monitoring.",
        benefits: ["Long service life", "Low maintenance requirements", "Custom sizes and layouts", "Suitable for permanent or temporary deployment"],
        link: "/products"
    },
    {
        title: "Generator & Power Rooms",
        description: "Protective enclosures for backup and utility power systems.",
        benefits: ["Acoustic treatment options", "Proper ventilation design", "Fire-retardant construction", "Engineered for continuous operation"],
        link: "/products"
    },
    {
        title: "Food Kiosks",
        description: "Modular kiosks for organised food service operations.",
        benefits: ["Compact and efficient layouts", "Fast installation", "Food-grade interiors", "Custom branding options"],
        link: "/products"
    },
    {
        title: "Bus Waiting Sheds",
        description: "Shelters designed for public transport and high-footfall areas.",
        benefits: ["Weather-resistant roofing", "Strong structural design", "Low maintenance", "Long operational life"],
        link: "/products"
    },
    {
        title: "EV Charging Shelters",
        description: "Protective structures for electric vehicle charging infrastructure.",
        benefits: ["Protection from sun and rain", "Cable-friendly layouts", "Modular and scalable design", "Suitable for outdoor electrical equipment"],
        link: "/products"
    },
     {
        title: "Canopies & Custom GRP Structures",
        description: "Custom-engineered solutions for site-specific requirements. Includes: Industrial canopies, Equipment covers, Utility shelters, Special application structures",
        benefits: [],
        link: "/products"
    }
];

export default function ProductPortfolio() {
    return (
        <section className="bg-card py-16 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">PRODUCT PORTFOLIO</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                         <Link key={item.title} href={item.link} className="block h-full">
                            <Card className="bg-background h-full flex flex-col hover:border-primary transition-colors">
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                {item.benefits.length > 0 &&
                                    <CardContent className="flex-grow">
                                        <h4 className="font-semibold mb-2 text-sm">Key Benefits</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {item.benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-start gap-2">
                                                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                }
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
