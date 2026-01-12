
import ApplicationNavigation from '@/components/home/application-navigation';
import SystemOverview from '@/components/home/system-overview';
import EngineeringLogic from '@/components/home/engineering-logic';
import Deployments from '@/components/home/deployments';
import ModularityExplainer from '@/components/home/modularity-explainer';
import EngagementOptions from '@/components/home/engagement-options';
import ClosingStatement from '@/components/home/closing-statement';
import ComplianceTrust from '@/components/home/compliance-trust';
import HeroCafeKiosk from '@/components/home/hero-cafe-kiosk';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <HeroCafeKiosk />
      <div className="space-y-16 sm:space-y-24 py-16 sm:py-24">
        <ApplicationNavigation />
        <SystemOverview />
        <EngineeringLogic />
        <Deployments />
        <ModularityExplainer />
        <ComplianceTrust />
        <EngagementOptions />
        <ClosingStatement />
      </div>
    </div>
  );
}
