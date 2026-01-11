
import { Check } from "lucide-react";

const valuePoints = [
  "Decades of engineering-led manufacturing experience",
  "Products designed for harsh weather, heavy usage, and long service life",
  "Proven performance in utility, infrastructure, and EPC projects",
  "Factory-fabricated solutions with fast site installation",
  "Custom-built designs aligned to project and department requirements"
];

export default function ValueProposition() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why organisations choose EMPHZ:</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {valuePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
