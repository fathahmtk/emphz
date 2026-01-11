import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export default function Certifications() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Quality & Compliance You Can Trust</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our products meet and exceed the most stringent international standards.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => {
            const image = PlaceHolderImages.find(p => p.id === cert.image_id);
            return (
              <Link key={cert.id} href="/contact" passHref>
                <Card className="h-full flex flex-col items-center justify-center p-4 aspect-square glass hover:bg-card/80 hover:shadow-md transition-all">
                  <CardContent className="p-0 flex flex-col items-center justify-center text-center">
                    {image && (
                      <div className="relative h-16 w-24 mb-2">
                        <Image
                          src={image.imageUrl}
                          alt={cert.name}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16.6vw"
                        />
                      </div>
                    )}
                    <p className="text-xs font-semibold">{cert.name}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
