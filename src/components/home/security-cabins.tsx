
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const applications = ["Industrial entry gates", "Commercial premises", "Infrastructure projects"];
const features = [
    "Durable GRP structure",
    "Weather resistant",
    "Custom sizes available",
];

export default function SecurityCabins() {
    const sectionImage = PlaceHolderImages.find(p => p.id === 'product-security-cabin');

    return (
        <section className="py-16 sm:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6">Security Cabins</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Applications</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {applications.map(app => (
                                    <li key={app} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {features.map(feat => (
                                    <li key={feat} className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                    {sectionImage && (
                        <Image
                            src={sectionImage.imageUrl}
                            alt="Security Cabins"
                            data-ai-hint={sectionImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
