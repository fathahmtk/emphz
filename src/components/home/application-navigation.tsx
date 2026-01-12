import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const applications = [
  {
    title: "Public Infrastructure",
    description: "Transport, public works, and urban systems.",
    href: "/industries"
  },
  {
    title: "Energy & Utilities",
    description: "Power, water, and grid-level deployments.",
    href: "/industries"
  },
  {
    title: "Industrial & Process Facilities",
    description: "Manufacturing, processing, and heavy industry.",
    href: "/industries"
  }
];

export default function ApplicationNavigation() {
  return (
    <section id="applications" className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Link href={app.href} key={app.title} className="group block">
            <Card className="rounded-xxl p-8 h-full transition-all duration-300 group-hover:bg-accent-soft/50 group-hover:border-accent">
              <CardContent className="p-0">
                <h3 className="text-2xl font-headline font-bold mb-2">{app.title}</h3>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                 <div className="flex items-center text-primary font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
