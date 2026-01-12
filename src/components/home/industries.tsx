
import { Card, CardContent } from "@/components/ui/card";
import { industries } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Industries() {
  const image = PlaceHolderImages.find(p => p.id === 'industry-verticals');
  return (
    <section>
        <div className="relative container py-24 sm:py-32 rounded-lg overflow-hidden text-white glass">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INDUSTRIES & APPLICATIONS</h2>
            <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
                We support infrastructure and industrial projects across:
            </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {industries.map((industry) => (
                    <Link key={industry.name} href={`/products?industry=${industry.id}`} className="group">
                        <Card className="flex flex-col items-center justify-center p-6 text-center bg-card/80 backdrop-blur-sm hover:bg-accent/80 hover:shadow-md transition-all h-full text-card-foreground">
                             <CardContent className="p-0 flex flex-col items-center justify-center">
                                <industry.icon className="w-10 h-10 text-primary mb-4" />
                                <p className="font-semibold text-base">{industry.name}</p>
                                 <div className="flex items-center text-sm text-primary font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Products <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-lg text-neutral-200">Each solution is engineered to meet operational, safety, and durability expectations.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
