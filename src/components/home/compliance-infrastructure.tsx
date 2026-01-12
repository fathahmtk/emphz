import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const pillars = [
    { title: "Safety", standards: ["IEC 61439", "BS EN 60529", "Fire Retardancy"] },
    { title: "Durability", standards: ["IP65 / IP55", "UV Resistance", "Corrosion Proof"] },
    { title: "Regulation", standards: ["Utility Approved", "ISO 9001", "ISO 14001"] },
]

export default function ComplianceInfrastructure() {
  return (
    <section className="container">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Compliance as Infrastructure
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Our commitment to standards is foundational, not just a badge.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(pillar => (
                <Card key={pillar.title} className="rounded-xl p-6 bg-card/50">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle>{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="space-y-2">
                            {pillar.standards.map(standard => (
                                <li key={standard} className="text-muted-foreground">{standard}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button variant="outline" asChild>
                <Link href="/resources">View Compliance Matrix</Link>
            </Button>
        </div>
    </section>
  );
}
