
import { Button } from "@/components/ui/button";
import { getImage } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from 'lucide-react';

export default function EntryFrame() {
  const heroImage = getImage('hero-factory');
  return (
    <section className="container">
      <div className="relative rounded-xxl bg-card border p-8 md:p-16 min-h-[400px] flex items-center overflow-hidden">
        {heroImage && 
            <Image 
                src={heroImage.url}
                alt={heroImage.description}
                fill
                className="object-cover opacity-10 dark:opacity-5"
                data-ai-hint={heroImage.hint}
            />
        }
        <div className="relative max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground mb-4">
            Infrastructure Systems, Engineered as Modules
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            For utilities, energy, and industrial environments that operate without pause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="/products">Explore Solutions <ArrowRight /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to Engineering <Phone /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
