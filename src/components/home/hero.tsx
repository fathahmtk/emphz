
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const slide = heroSlides[0];
  const image = PlaceHolderImages.find((p) => p.id === slide.imageId);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center text-white">
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-background/70" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 animate-slide-in-down">
            {slide.title}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 animate-slide-in-up">
            {slide.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: '0.4s', opacity: 0}}>
            <Button asChild size="lg">
              <Link href={slide.primaryLink}>
                {slide.primaryText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={slide.secondaryLink}>
                {slide.secondaryText}
                <FileDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
