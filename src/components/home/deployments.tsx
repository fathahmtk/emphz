
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const deployments = [
    { location: "Offshore Platforms", environment: "North Sea", system: "Control Kiosks" },
    { location: "Urban Substations", environment: "Dubai, UAE", system: "Metering Enclosures" },
    { location: "Renewable Parks", environment: "Gujarat, India", system: "Equipment Shelters" },
    { location: "Industrial Plants", environment: "Ruhr Valley, Germany", system: "Power Rooms" }
]

export default function Deployments() {
  return (
    <section className="container">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Where Our Systems Are Operating
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Proven performance in the world's most demanding environments.
        </p>
      </div>
      <div className="bg-card border rounded-xl p-4">
        <div className="space-y-2">
            {deployments.map(dep => (
                <Card key={dep.location} className="p-4 rounded-lg hover:bg-accent-soft/30 transition-colors">
                    <CardContent className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-accent"/>
                            <h3 className="font-semibold text-foreground">{dep.location}</h3>
                        </div>
                        <div className="text-sm text-muted-foreground grid grid-cols-2 sm:flex sm:gap-6 w-full sm:w-auto">
                            <div className="col-span-1"><span className="font-medium text-foreground/80">Environment:</span> {dep.environment}</div>
                            <div className="col-span-1"><span className="font-medium text-foreground/80">System:</span> {dep.system}</div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
