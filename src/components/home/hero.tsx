"use client";

import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-screen w-full flex items-center justify-start text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/20"></div>
      <div className="container relative z-10 md:w-1/2 md:pl-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
          Engineered GRP Solutions for Demanding Environments
        </h1>
        <p className="max-w-xl text-lg text-slate-200 mb-10">
          Leading manufacturer of high-performance GRP products for infrastructure, utilities, and industrial applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="/products">Explore Our Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}