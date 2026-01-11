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
    <div className="bg-background text-foreground">
      <Hero />
      <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
        <ValueProposition />
        <Industries />
        <ProductPortfolio />
        <FeaturedProjects />
        <section className="bg-card py-16 sm:py-24">
            <div className="container space-y-16 sm:space-y-24">
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
