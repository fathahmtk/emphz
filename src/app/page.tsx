import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import FinalCTA from '@/components/home/final-cta';
import ValueProposition from '@/components/home/value-proposition';
import ProductPortfolio from '@/components/home/product-portfolio';
import QualitySafety from '@/components/home/quality-safety';
import Certifications from '@/components/home/certifications';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <div className="py-16 sm:py-24 space-y-8">
        <section>
            <ValueProposition />
        </section>
        <section>
            <Industries />
        </section>
        <section>
            <ProductPortfolio />
        </section>
        <section>
            <FeaturedProjects />
        </section>
        <section className="relative container py-24 sm:py-32 rounded-xl overflow-hidden text-white bg-gray-800">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 space-y-16 sm:space-y-24">
                <QualitySafety />
                <Certifications />
            </div>
        </section>
        <section>
            <AboutSummary />
        </section>
        <section>
            <FinalCTA />
        </section>
      </div>
    </div>
  );
}
