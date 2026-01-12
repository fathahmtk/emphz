import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import Link from "next/link";

export default function Certifications() {
  return (
    <section>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Compliance You Can Trust</h3>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-200 md:text-lg">
            Our products meet and exceed the most stringent international standards.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => {
            return (
              <Link key={cert.id} href="/contact" passHref>
                <Card className="h-full flex flex-col items-center justify-center p-4 aspect-square bg-card/80 backdrop-blur-sm hover:bg-accent/80 transition-all text-card-foreground">
                  <CardContent className="p-0 flex flex-col items-center justify-center text-center">
                    <div className="relative w-16 h-16 mb-2 bg-muted rounded-md">
                        {/* Image removed */}
                      </div>
                    <p className="text-sm font-semibold">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
    </section>
  );
}
