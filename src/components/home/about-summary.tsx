import Image from "next/image";
import CallToAction from "@/components/shared/call-to-action";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSummary() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <CallToAction
        title="About EMPHZ"
        description={
          <>
            <p>
              EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions.
              With long-standing engineering expertise, we support critical infrastructure, utilities, and industrial projects with durable, site-ready products.
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
  );
}
