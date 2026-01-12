
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, Combine, Network } from "lucide-react";

export default function ModularityExplainer() {
  return (
    <section className="container">
      <div className="rounded-xl bg-card border p-8 md:p-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-foreground">
            <div className="flex flex-col items-center">
                <Boxes className="h-12 w-12 text-accent mb-4"/>
                <p className="font-semibold">One enclosure is a product.</p>
            </div>
            <div className="flex flex-col items-center">
                <Combine className="h-12 w-12 text-accent mb-4"/>
                <p className="font-semibold">Multiple units form a solution.</p>
            </div>
            <div className="flex flex-col items-center">
                <Network className="h-12 w-12 text-accent mb-4"/>
                <p className="font-semibold">Connected enclosures are a system.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
