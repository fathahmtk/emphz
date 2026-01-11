/* eslint-disable @next/next/no-img-element */
'use client';

import { placeholderImages } from "@/lib/placeholder-images.json";
import { useEffect, useState } from "react";

const heroImages = placeholderImages.filter((image) =>
  image.id.startsWith("hero-")
);

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96">
      {heroImages.map((image, index) => (
        <img
          key={image.id}
          src={image.imageUrl}
          alt={image.description}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
