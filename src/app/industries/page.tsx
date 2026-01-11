
import { industries } from "@/lib/data";
import IndustryCard from "./industry-card";

export default function IndustriesPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Industries We Serve</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          We provide engineered GRP solutions for a wide range of critical infrastructure and industrial sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>
    </div>
  );
}
