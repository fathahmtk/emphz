import Hero from '@/components/home/hero';
import Industries from '@/components/home/industries';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSummary from '@/components/home/about-summary';
import Certifications from '@/components/home/certifications';
import FinalCTA from '@/components/home/final-cta';
import ElectricalEnclosures from '@/components/home/electrical-enclosures';
import GrpKiosks from '@/components/home/grp-kiosks';
import PortableToilets from '@/components/home/portable-toilets';
import SecurityCabins from '@/components/home/security-cabins';
import GeneratorPowerRooms from '@/components/home/generator-power-rooms';
import FoodKiosks from '@/components/home/food-kiosks';
import BusWaitingSheds from '@/components/home/bus-waiting-sheds';
import EvChargingShelters from '@/components/home/ev-charging-shelters';
import CanopiesAndCustom from '@/components/home/canopies-and-custom';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
        <Industries />
        <ElectricalEnclosures />
        <GrpKiosks />
        <PortableToilets />
        <SecurityCabins />
        <GeneratorPowerRooms />
        <FoodKiosks />
        <BusWaitingSheds />
        <EvChargingShelters />
        <CanopiesAndCustom />
        <FeaturedProjects />
        <AboutSummary />
        <Certifications />
        <FinalCTA />
      </div>
    </div>
  );
}
