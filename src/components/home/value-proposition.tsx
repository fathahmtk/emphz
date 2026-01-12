
import { Check } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const valuePoints = [
  "Decades of engineering-led manufacturing experience",
  "Products designed for harsh weather, heavy usage, and long service life",
  "Proven performance in utility, infrastructure, and EPC projects",
  "Factory-fabricated solutions with fast site installation",
  "Custom-built designs aligned to project and department requirements"
];

export default function ValueProposition() {
  const image = PlaceHolderImages.find(p => p.id === 'industry-energy');
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Why organisations choose EMPHZ:</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {valuePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-neutral-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
