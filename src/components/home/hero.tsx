
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
    <div className="container pt-4">
      <Carousel
        className="w-full rounded-xxl overflow-hidden"
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
                <div className="relative h-[600px] md:h-[700px]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      priority={slide.id === 'hero-1'}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                  <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto mb-10">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link href={slide.primaryLink}>
                          {slide.primaryText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
             )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
