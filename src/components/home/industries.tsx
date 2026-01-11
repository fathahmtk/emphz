
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Box, Car, BatteryCharging, Factory, HardHat, Home, Utensils, Warehouse } from "lucide-react";

const productCategories = [
    { name: 'Electrical Enclosures', icon: Box },
    { name: 'GRP Kiosks & Shelters', icon: Warehouse },
    { name: 'Portable Toilets', icon: Home },
    { name: 'Security Cabins', icon: HardHat },
    { name: 'Generator & Power Rooms', icon: Factory },
    { name: 'Food Kiosks', icon: Utensils },
    { name: 'Bus Waiting Sheds', icon: Car },
    { name: 'EV Charging Shelters', icon: BatteryCharging },
    { name: 'Canopies & Custom Structures', icon: Home },
];

export default function Industries() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">PRODUCT CATEGORIES</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Our versatile GRP solutions are trusted by leaders across diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {productCategories.map((category) => (
                <Card key={category.name} className="flex flex-col items-center justify-center p-4 aspect-square text-center bg-card hover:bg-accent hover:shadow-md transition-all">
                    <category.icon className="w-10 h-10 text-primary mb-4" />
                    <p className="font-semibold text-sm">{category.name}</p>
                </Card>
            ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">Browse All Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
