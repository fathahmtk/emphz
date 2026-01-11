import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const applications = ["Metering", "Control Panels", "Distribution Boards"];
const features = [
    "IP55 to IP67 ratings",
    "UV and corrosion resistant GRP",
    "Fire-retardant construction",
    "Indoor and outdoor configurations",
];

export default function ElectricalEnclosures() {
    const enclosureImage = PlaceHolderImages.find(p => p.id === 'product-enclosure-1');

    return (
        <section className="bg-card py-16 sm:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                    {enclosureImage && (
                        <Image
                            src={enclosureImage.imageUrl}
                            alt="Electrical Enclosure"
                            data-ai-hint={enclosureImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6">Electrical Enclosures</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Applications</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {applications.map(app => (
                                    <li key={app} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {features.map(feat => (
                                    <li key={feat} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="outline">
                            <Link href="/resources">Request Datasheet</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/contact">Request Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
