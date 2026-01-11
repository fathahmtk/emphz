"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    title: "30+ Years of Engineering",
    subtitle: "Delivering robust, reliable, and revolutionary GRP modular solutions for the world's most demanding industries.",
    buttonText: "Explore Our Products",
    buttonLink: "/products",
  },
  {
    id: "hero-2",
    imageId: "hero-solar",
    title: "Powering the Future",
    subtitle: "Customized enclosures and kiosks for renewable energy projects, built to withstand the elements.",
    buttonText: "Energy Sector Solutions",
    buttonLink: "/products",
  },
  {
    id: "hero-3",
    imageId: "hero-industrial",
    title: "Industrial Grade Infrastructure",
    subtitle: "From construction sites to public works, our products provide unparalleled durability and performance.",
    buttonText: "View All Industries",
    buttonLink: "/about",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full -mt-[64px]">
      <Carousel
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => {
            const image = PlaceHolderImages.find((p) => p.id === slide.imageId);
            return (
              <CarouselItem key={slide.id} className="h-full">
                <div className="relative h-full w-full flex items-center justify-center text-white pt-[64px]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-slate-900/60" />
                  <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 animate-fade-in-down">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-8 animate-fade-in-up">
                      {slide.subtitle}
                    </p>
                    <Button asChild size="lg" className="animate-fade-in-up">
                      <Link href={slide.buttonLink}>
                        {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
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
