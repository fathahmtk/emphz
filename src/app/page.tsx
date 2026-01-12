import EntryFrame from '@/components/home/entry-frame';
import ApplicationNavigation from '@/components/home/application-navigation';
import SystemOverview from '@/components/home/system-overview';
import EngineeringLogic from '@/components/home/engineering-logic';
import Deployments from '@/components/home/deployments';
import ModularityExplainer from '@/components/home/modularity-explainer';
import ComplianceInfrastructure from '@/components/home/compliance-infrastructure';
import EngagementModel from '@/components/home/engagement-model';
import ClosingStatement from '@/components/home/closing-statement';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <div className="space-y-16 sm:space-y-24 py-16 sm:py-24">
        <EntryFrame />
        <ApplicationNavigation />
        <SystemOverview />
        <EngineeringLogic />
        <Deployments />
        <ModularityExplainer />
        <ComplianceInfrastructure />
        <EngagementModel />
        <ClosingStatement />
      </div>
    </div>
  );
}
