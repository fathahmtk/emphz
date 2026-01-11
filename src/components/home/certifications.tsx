import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Certifications() {
  return (
    <section>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Compliance You Can Trust</h3>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
            Our products meet and exceed the most stringent international standards.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => {
            const image = PlaceHolderImages.find(p => p.id === cert.image_id);
            return (
              <Link key={cert.id} href="/contact" passHref>
                <Card className="h-full flex flex-col items-center justify-center p-4 aspect-square bg-card/80 backdrop-blur-sm hover:bg-accent/80 transition-all text-card-foreground">
                  <CardContent className="p-0 flex flex-col items-center justify-center text-center">
                    {image && 
                      <div className="relative w-16 h-16 mb-2">
                        <Image src={image.imageUrl} alt={cert.name} fill className="object-contain" />
                      </div>
                    }
                    <p className="text-sm font-semibold">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
    </section>
  );
}
