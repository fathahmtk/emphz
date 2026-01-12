import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/lib/images";

const modules = [
  { title: "Metering Enclosures", href: "/products/grp-electrical-enclosures", imageId: "product-enclosure-category" },
  { title: "Control Kiosks", href: "/products/grp-kiosks-equipment-shelters", imageId: "product-kiosk-category" },
  { title: "Equipment Shelters", href: "/products/grp-kiosks-equipment-shelters", imageId: "product-kiosk-category" },
  { title: "Power Rooms", href: "/products/custom-grp-manufacturing", imageId: "product-custom-category" },
  { title: "Portable Toilets", href: "/products/portable-grp-toilets", imageId: "product-toilet-category" },
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
          {modules.map((mod) => {
            const image = getImage(mod.imageId);
            return (
              <Link href={mod.href} key={mod.title} className="group shrink-0">
                  <Card className="w-56 h-40 flex flex-col justify-end text-center rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:border-primary relative overflow-hidden">
                      {image && <Image src={image.url} alt={image.description} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-ai-hint={image.hint} />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <CardContent className="p-0 relative z-10">
                          <p className="font-medium text-white">{mod.title}</p>
                      </CardContent>
                  </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
