import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industries We Serve</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our versatile GRP solutions are trusted by leaders across diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry.id} className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary h-16 w-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <industry.icon className="h-8 w-8" />
                </div>
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
