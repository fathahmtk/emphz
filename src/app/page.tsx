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
    <div className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <div className="py-16 sm:py-24 space-y-8">
        <section className="animate-fade-in-up">
            <ValueProposition />
        </section>
        <section className="animate-fade-in-up">
            <Industries />
        </section>
        <section className="animate-fade-in-up">
            <ProductPortfolio />
        </section>
        <section className="animate-fade-in-up">
            <FeaturedProjects />
        </section>
        <section className="relative container py-24 sm:py-32 rounded-lg overflow-hidden text-white animate-fade-in-up">
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
        <section className="animate-fade-in-up">
            <AboutSummary />
        </section>
        <section className="animate-fade-in-up">
            <FinalCTA />
        </section>
      </div>
    </div>
  );
}
