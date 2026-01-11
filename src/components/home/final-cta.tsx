import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-final');

  return (
    <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        {ctaImage && 
          <Image 
            src={ctaImage.imageUrl} 
            alt="Contact us for a quote" 
            data-ai-hint={ctaImage.imageHint}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Our team of experts is here to help you find the perfect GRP solution for your needs. Contact us today for a personalized quote or to discuss your project requirements in detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact?quote=true">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="tel:+1-800-555-GRP1"><Phone className="mr-2 h-5 w-5"/> Call Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
