import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import Link from "next/link";

export default function Certifications() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Quality & Compliance You Can Trust</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our products meet and exceed the most stringent international standards.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => {
            return (
              <Link key={cert.id} href="/contact" passHref>
                <Card className="h-full flex flex-col items-center justify-center p-4 aspect-square glass hover:bg-card/80 hover:shadow-md transition-all">
                  <CardContent className="p-0 flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-semibold">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
