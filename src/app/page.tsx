import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import Certifications from '@/components/home/certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <FeaturedProjects />
      <AboutSummary />
      <Certifications />
    </>
  );
}
