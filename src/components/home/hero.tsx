
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroSlides } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  return (
    <Carousel
      className="w-full"
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {heroSlides.map((slide) => {
           const image = PlaceHolderImages.find((p) => p.id === slide.imageId);
           return (
            <CarouselItem key={slide.id}>
              <div className="container py-16 md:py-24 lg:py-32">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10 text-left">
                      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 animate-slide-in-down text-foreground">
                        {slide.title}
                      </h1>

                      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-slide-in-up">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-start animate-slide-in-up" style={{animationDelay: '0.4s', opacity: 0}}>
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
                     <div className="relative h-80 md:h-[450px] w-full rounded-lg overflow-hidden shadow-lg animate-slide-in-up">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                            priority={slide.id === 'hero-1'}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                    </div>
                  </div>
              </div>
            </CarouselItem>
           )
        })}
      </CarouselContent>
    </Carousel>
  );
}
