
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const qualityPoints = [
    "Electrical safety standards",
    "Fire-retardant materials",
    "Structural integrity",
    "Department and utility approvals",
];

export default function QualitySafety() {
  return (
    <section>
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">QUALITY, SAFETY & COMPLIANCE</h2>
            <p className="mt-4 text-lg text-neutral-200">All EMPHZ products are designed and manufactured with focus on:</p>
        </div>
        <div className="max-w-xl mx-auto mt-8">
          <ul className="space-y-4">
            {qualityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-neutral-200">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-8">
            <p className="text-neutral-300">Compliance documents and technical details are available on request.</p>
             <Button asChild variant="secondary" className="mt-6">
                <Link href="/contact">Request Details</Link>
            </Button>
        </div>
    </section>
  );
}
