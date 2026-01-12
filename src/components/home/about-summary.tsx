
import Image from "next/image";
import CallToAction from "@/components/shared/call-to-action";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSummary() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-main');

  return (
    <div className="container">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center text-center text-white p-4">
            {aboutImage && (
            <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
                sizes="100vw"
            />
            )}
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10">
                <CallToAction
                    title="About EMPHZ"
                    description={
                    <>
                        <p className="text-neutral-200">
                        EMPHZ is a manufacturer specialising in GRP and modular infrastructure solutions.
                        With long-standing engineering expertise, we support critical infrastructure, utilities, and industrial projects with durable, site-ready products.
                        </p>
                    </>
                    }
                    buttonText="Learn More About Us"
                    buttonLink="/about"
                />
            </div>
        </div>
    </div>
  );
}
