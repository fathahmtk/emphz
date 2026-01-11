"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[640px] w-full">
      <Carousel
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => {
            const image = PlaceHolderImages.find(
              (p) => p.id === slide.imageId
            );

            return (
              <CarouselItem key={slide.id} className="h-full">
                <div className="relative h-full w-full flex items-center justify-center text-white">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/55" />

                  {/* Content */}
                  <div className="relative z-10 max-w-5xl px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link href={slide.primaryLink}>
                          {slide.primaryText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                        <Link href={slide.secondaryLink}>
                          {slide.secondaryText}
                          <FileDown className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-none" />
      </Carousel>
    </section>
  );
}
