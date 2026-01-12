
import { Card, CardContent } from "@/components/ui/card";

const deployments = [
  { location: "Offshore Platform", environment: "North Sea", application: "Control Systems" },
  { location: "Urban Substation", environment: "Dubai, UAE", application: "Metering & Distribution" },
  { location: "Renewable Park", environment: "Gujarat, India", application: "Grid Interface" },
  { location: "Industrial Plant", environment: "Ruhr Valley, Germany", application: "Motor Control" }
];

export default function DeploymentSnapshot() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Real-World Deployment Snapshot
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Factual examples of our enclosures in operation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deployments.map(dep => (
          <Card key={dep.location} className="glass p-4">
            <CardContent className="p-0">
              <h3 className="font-semibold">{dep.location}</h3>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground/80">Env:</span> {dep.environment}
              </p>
               <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground/80">App:</span> {dep.application}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
