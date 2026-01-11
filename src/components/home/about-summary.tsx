
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import CallToAction from "@/components/shared/call-to-action";

export default function AboutSummary() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <CallToAction
          title="A Legacy of Quality and Innovation"
          description={
            <>
              <p className="mb-4">
                For over three decades, EMPHZ has been at the forefront of designing and manufacturing high-performance GRP products. Our mission is to provide durable, reliable infrastructure that stands the test of time, even in the harshest environments.
              </p>
              <p>
                We are committed to continuous innovation, superior quality, and unparalleled customer service.
              </p>
            </>
          }
          buttonText="Learn More About Us"
          buttonLink="/about"
        />
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  );
}
