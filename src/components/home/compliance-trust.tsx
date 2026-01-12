
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const pillars = [
    { title: "Safety", description: "IEC 61439, Fire Retardancy, Electrical Insulation" },
    { title: "Durability", description: "IP65/IP55, UV Resistance, Corrosion Proof" },
    { title: "Regulation", description: "Utility Approved, ISO 9001 / 14001 Compliant" },
]

export default function ComplianceTrust() {
  return (
    <section className="container">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Built on a Foundation of Trust
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Our commitment to standards is foundational, ensuring reliability and peace of mind.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(pillar => (
                <div key={pillar.title} className="rounded-xl p-6 bg-card/50 text-center">
                    <h3 className="font-semibold text-lg">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{pillar.description}</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button variant="outline" asChild>
                <Link href="/resources">View Full Compliance Matrix</Link>
            </Button>
        </div>
    </section>
  );
}
