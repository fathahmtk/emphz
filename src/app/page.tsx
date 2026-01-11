import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import Certifications from '@/components/home/certifications';
import FinalCTA from '@/components/home/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-16 sm:space-y-24 py-16 sm:py-24">
        <Industries />
        <FeaturedProjects />
        <AboutSummary />
        <Certifications />
        <FinalCTA />
      </div>
    </>
  );
}
