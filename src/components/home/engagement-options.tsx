
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EngagementOptions() {
  return (
    <section className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Start with a system, not a catalogue.
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Engage with our engineering team to define the right solution for your project.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/products" className="group block">
                <Card className="rounded-xl p-8 text-center h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">Standard Modules</CardTitle>
                        <CardDescription>Browse our portfolio of pre-engineered, site-ready solutions for rapid deployment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-primary font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Standard Products <ArrowRight className="ml-2 h-4 w-4"/>
                        </div>
                    </CardContent>
                </Card>
            </Link>
            <Link href="/contact" className="group block">
                <Card className="rounded-xl p-8 text-center h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">Custom Engineered Systems</CardTitle>
                        <CardDescription>Discuss your unique site, operational, or project requirements for a bespoke solution.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-primary font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           Engage Our Engineers <ArrowRight className="ml-2 h-4 w-4"/>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    </section>
  );
}
