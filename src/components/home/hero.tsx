import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          30+ Years of Engineering
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
          Delivering robust, reliable, and revolutionary GRP modular solutions for the world's most demanding industries.
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
