import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import FinalCTA from '@/components/home/final-cta';
import ValueProposition from '@/components/home/value-proposition';
import ProductPortfolio from '@/components/home/product-portfolio';
import QualitySafety from '@/components/home/quality-safety';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
        <ValueProposition />
        <Industries />
        <ProductPortfolio />
        <FeaturedProjects />
        <QualitySafety />
        <AboutSummary />
        <FinalCTA />
      </div>
    </div>
  );
}
