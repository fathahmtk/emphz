
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
      <div className="relative z-10 bg-background py-16 sm:py-24 space-y-16 sm:space-y-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-40">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <Industries />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <FeaturedProjects />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <AboutSummary />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <Certifications />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <FinalCTA />
          </div>
        </div>
      </div>
    </>
  );
}
