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
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroSlides = [
  {
    id: "hero-1",
    imageId: "hero-background",
    title: "Engineered GRP Infrastructure",
    subtitle:
      "High-performance GRP kiosks, enclosures, shelters, and modular structures built for utilities, EPCs, and public infrastructure.",
    primaryText: "View Products",
    primaryLink: "/products",
    secondaryText: "Download Catalogue",
    secondaryLink: "/resources",
  },
  {
    id: "hero-2",
    imageId: "hero-solar",
    title: "Utility & Power-Ready Solutions",
    subtitle:
      "Weather-resistant GRP enclosures and kiosks designed for electrical distribution, renewable energy, and utility networks.",
    primaryText: "Utility Solutions",
    primaryLink: "/products",
    secondaryText: "Talk to Engineering",
    secondaryLink: "/contact",
  },
  {
    id: "hero-3",
    imageId: "hero-industrial",
    title: "Modular. Durable. Scalable.",
    subtitle:
      "From urban infrastructure to large EPC projects, EMPHZ delivers GRP systems optimised for lifecycle cost and rapid deployment.",
    primaryText: "Request a Quote",
    primaryLink: "/contact",
    secondaryText: "Why EMPHZ",
    secondaryLink: "/about",
  },
];

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
                      sizes="100vw"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/55" />

                  {/* Content */}
                  <div className="relative z-10 max-w-5xl px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-down">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 animate-fade-in-up">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                      <Button asChild size="lg">
                        <Link href={slide.primaryLink}>
                          {slide.primaryText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                       <Button asChild size="lg" variant="outline">
                        <Link href={slide.secondaryLink}>
                          {slide.secondaryText === 'Download Catalogue' && <FileDown className="mr-2 h-5 w-5" />}
                          {slide.secondaryText}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-4">
          <CarouselPrevious className="static translate-y-0 text-white bg-white/10 border-white/20 hover:bg-white/20" />
          <CarouselNext className="static translate-y-0 text-white bg-white/10 border-white/20 hover:bg-white/20" />
        </div>
      </Carousel>
    </section>
  );
}