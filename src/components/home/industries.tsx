
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Zap, Building, HardHat, Car, Factory, Shield, Wifi, Wind, Briefcase } from "lucide-react";

const industries = [
    { name: 'Power Distribution & Utilities', icon: Zap },
    { name: 'Infrastructure & Public Works', icon: Building },
    { name: 'Telecom & Digital Networks', icon: Wifi },
    { name: 'Energy & Process Facilities', icon: Factory },
    { name: 'Renewable Energy & EV Infrastructure', icon: Wind },
    { name: 'Industrial & Manufacturing Units', icon: HardHat },
];

export default function Industries() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">INDUSTRIES & APPLICATIONS</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            We support infrastructure and industrial projects across:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
                <Card key={industry.name} className="flex flex-col items-center justify-center p-6 text-center bg-card hover:bg-accent hover:shadow-md transition-all">
                    <industry.icon className="w-10 h-10 text-primary mb-4" />
                    <p className="font-semibold text-base">{industry.name}</p>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">Each solution is engineered to meet operational, safety, and durability expectations.</p>
        </div>
      </div>
    </section>
  );
}
