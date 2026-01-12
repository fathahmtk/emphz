import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const modules = [
  { title: "Metering Enclosures", href: "/products/grp-electrical-enclosures" },
  { title: "Control Kiosks", href: "/products/grp-kiosks-equipment-shelters" },
  { title: "Equipment Shelters", href: "/products/grp-kiosks-equipment-shelters" },
  { title: "Power Rooms", href: "/products" },
  { title: "Utility Cabinets", href: "/products/grp-electrical-enclosures" },
];

export default function SystemOverview() {
  return (
    <section className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Live System Overview</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Select an application to see the relevant infrastructure modules.
            </p>
        </div>
      <div className="bg-card rounded-xl border p-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {modules.map((mod) => (
            <Link href={mod.href} key={mod.title} className="group shrink-0">
                <Card className="w-48 h-32 flex items-center justify-center text-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:bg-accent-soft/50">
                    <CardContent className="p-0">
                        <p className="font-medium text-foreground">{mod.title}</p>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
