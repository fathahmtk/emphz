import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSummary() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">A Legacy of Quality and Innovation</h2>
          <p className="text-muted-foreground mb-4 md:text-lg">
            For over three decades, EMPHZ has been at the forefront of designing and manufacturing high-performance GRP products. Our mission is to provide durable, reliable infrastructure that stands the test of time, even in the harshest environments.
          </p>
          <p className="text-muted-foreground mb-8 md:text-lg">
            We are committed to continuous innovation, superior quality, and unparalleled customer service.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
