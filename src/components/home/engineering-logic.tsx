import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Sun, Droplets, HardHat, Construction } from "lucide-react";

const siteConditions = [
  { title: "Heat", icon: Sun },
  { title: "Dust", icon: Wind },
  { title: "Corrosion", icon: Droplets },
  { title: "Vandalism", icon: HardHat },
  { title: "Electrical Risk", icon: Zap },
];

const engineeringPrinciples = [
  { title: "Material Science", icon: Construction },
  { title: "Structural Design", icon: HardHat },
  { title: "Fire Retardancy", icon: Shield },
  { title: "Compliance Engineering", icon: Zap },
  { title: "Factory Fabrication", icon: Factory },
];

import { Factory, Wind } from "lucide-react";

function LogicColumn({ title, items }: { title: string, items: {title: string, icon: any}[]}) {
    return (
        <Card className="rounded-xl p-6 bg-card/50">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ul className="space-y-3">
                    {items.map(item => (
                        <li key={item.title} className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-accent"/>
                            <span className="text-muted-foreground">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default function EngineeringLogic() {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Designed Backwards from the Site Conditions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We reframe EMPHZ as problem-solvers, not just fabricators.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <LogicColumn title="Site Conditions" items={siteConditions} />
        <LogicColumn title="Engineering Principles" items={engineeringPrinciples} />
      </div>
    </section>
  );
}
