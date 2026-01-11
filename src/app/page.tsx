import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import Certifications from '@/components/home/certifications';
import FinalCTA from '@/components/home/final-cta';
import ValueProposition from '@/components/home/value-proposition';
import ProductPortfolio from '@/components/home/product-portfolio';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
        <ValueProposition />
        <Industries />
        <ProductPortfolio />
        <FeaturedProjects />
        <AboutSummary />
        <Certifications />
        <FinalCTA />
      </div>
    </div>
  );
}
