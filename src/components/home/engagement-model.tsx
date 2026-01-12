import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EngagementModel() {
  return (
    <section className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Engage with Engineering
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="rounded-xl p-6 text-center hover:border-accent transition-colors">
                <CardHeader>
                    <CardTitle className="text-2xl">Standard Infrastructure Modules</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">Browse our portfolio of pre-engineered, site-ready solutions.</p>
                    <Button asChild>
                        <Link href="/products">View Standard Products <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardContent>
            </Card>
            <Card className="rounded-xl p-6 text-center hover:border-accent transition-colors">
                <CardHeader>
                    <CardTitle className="text-2xl">Project-Specific Systems</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">Discuss your unique requirements for a custom-engineered solution.</p>
                     <Button asChild>
                        <Link href="/contact">Engage Our Engineers <ArrowRight className="ml-2 h-4 w-4"/></Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
