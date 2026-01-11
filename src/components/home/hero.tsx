"use client";

import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  ...placeholderImages.filter(p => p.id.startsWith('hero-')),
  {
    "id": "hero-animated-1",
    "description": "A modern factory or industrial setting.",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/studio-3915762913-39f0d.firebasestorage.app/o/nee.png?alt=media&token=460c46d6-1a2d-4794-af93-ee6d4d2cb89f",
    "imageHint": "industrial factory"
  },
  {
    "id": "hero-animated-2",
    "description": "A modern factory or industrial setting.",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/studio-3915762913-39f0d.firebasestorage.app/o/Gemini_Generated_Image_4mzj664mzj664mzj.png?alt=media&token=028c2b61-3d81-4372-8418-9ae94ce37b97",
    "imageHint": "industrial factory"
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-start text-white">
      {heroImages.map((image, index) => (
        <Image
          key={image.id}
          src={image.imageUrl}
          alt={image.description}
          data-ai-hint={image.imageHint}
          fill
          className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          priority={index === 0}
          sizes="100vw"
        />
      ))}
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
