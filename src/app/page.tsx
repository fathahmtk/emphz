import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import FinalCTA from '@/components/home/final-cta';
import ValueProposition from '@/components/home/value-proposition';
import ProductPortfolio from '@/components/home/product-portfolio';
import QualitySafety from '@/components/home/quality-safety';
import Certifications from '@/components/home/certifications';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function Home() {
  const qaImage = PlaceHolderImages.find(p => p.id === 'project-neom');
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <div className="py-16 sm:py-24 space-y-8">
        <ValueProposition />
        <Industries />
        <ProductPortfolio />
        <FeaturedProjects />
        <section className="relative container py-24 sm:py-32 rounded-lg overflow-hidden text-white">
            {qaImage && (
                <Image 
                src={qaImage.imageUrl} 
                alt={qaImage.description} 
                data-ai-hint={qaImage.imageHint}
                fill 
                className="object-cover"
                sizes="100vw"
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 space-y-16 sm:space-y-24">
                <QualitySafety />
                <Certifications />
            </div>
        </section>
        <AboutSummary />
        <FinalCTA />
      </div>
    </div>
  );
}
