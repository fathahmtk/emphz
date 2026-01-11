
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
      <div className="relative z-10 bg-background py-16 sm:py-24 space-y-24 md:space-y-32 -mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Industries />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedProjects />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSummary />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Certifications />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FinalCTA />
        </div>
      </div>
    </>
  );
}
