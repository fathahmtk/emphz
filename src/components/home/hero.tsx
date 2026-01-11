'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroContent = [
  {
    id: "hero-background",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczO3QR_zgU5NrlwdA2evx824k4sb5JwDTl4OHCODq6pvYk0F5ScgKPCvtsjkMm-dJy0sFr6_n26KwNqFTm2s3U-ASDgf4kQHP2NHFiRGBpX7I_BSB5r9k6I8ULuWc9Z2zy0_lNEXNBFf9LlHspsnhdDErA=w1344-h768-s-no-gm?authuser=0",
    title: "Engineered GRP Solutions for Demanding Environments",
    subtitle: "Leading manufacturer of high-performance GRP products for infrastructure, utilities, and industrial applications.",
    imageHint: "industrial factory"
  },
  {
    id: "hero-solar",
    imageUrl: "https://images.unsplash.com/photo-1558495033-60832438c64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODkyNjZ8MHwxfGFsbHx8fHx8fHx8fDE2ODk3ODg4Njk&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Powering the Future with Sustainable Energy Solutions",
    subtitle: "We are at the forefront of the renewable energy revolution, providing cutting-edge GRP solutions for solar and wind projects.",
    imageHint: "solar panels"
  },
  {
    id: "hero-industrial",
    imageUrl: "https://images.unsplash.com/photo-1587825045434-2b99212a41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODkyNjZ8MHwxfGFsbHx8fHx8fHx8fDE2ODk3ODg5MjI&ixlib=rb-4.0.3&q=80&w=1080",
    title: "Modernizing Manufacturing with Innovative GRP Products",
    subtitle: "Our GRP products are helping to modernize the manufacturing industry, providing durable and lightweight solutions for a variety of applications.",
    imageHint: "industrial warehouse"
  },
  {
    id: "hero-animated-1",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/studio-3915762913-39f0d.firebasestorage.app/o/nee.png?alt=media&token=460c46d6-1a2d-4794-af93-ee6d4d2cb89f",
    title: "Global Supplier of GRP Solutions",
    subtitle: "With a network of partners and distributors across the globe, we are a trusted supplier of GRP solutions to a wide range of industries.",
    imageHint: "global network"
  },
  {
    id: "hero-animated-2",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/studio-3915762913-39f0d.firebasestorage.app/o/Gemini_Generated_Image_4mzj664mzj664mzj.png?alt=media&token=028c2b61-3d81-4372-8418-9ae94ce37b97",
    title: "GRP Products for the Oil and Gas Industry",
    subtitle: "We offer a range of GRP products for the oil and gas industry, including blast-resistant enclosures and fire-rated doors.",
    imageHint: "oil and gas"
  }
];

export default function Hero() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-start text-white">
      {heroContent.map((content, index) => (
        <Image
          key={content.id}
          src={content.imageUrl}
          alt={content.title}
          data-ai-hint={content.imageHint}
          fill
          className={`object-cover transition-opacity duration-1000 ${index === currentContentIndex ? 'opacity-100' : 'opacity-0'}`}
          priority={index === 0}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/20"></div>
      <div className="container relative z-10 md:w-1/2 md:pl-8">
        <div className="relative h-48 flex items-center">
          {heroContent.map((content, index) => (
            <div key={content.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentContentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {content.title}
              </h1>
              <p className="max-w-xl text-lg text-slate-200 mb-10">
                {content.subtitle}
              </p>
            </div>
          ))}
        </div>
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
