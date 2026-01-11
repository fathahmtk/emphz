

import { portfolioItems } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Breadcrumbs from '@/components/products/breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function DetailList({ title, items }: { title: string, items: string[] }) {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-3 text-secondary-foreground">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default function ProductsPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'products-header');

  return (
    <div className="bg-background text-foreground">
       <div className="container pt-8 lg:pt-12">
        <Breadcrumbs />
      </div>

       <section className="relative py-20 lg:py-32 text-white">
        {headerImage && (
            <Image 
                src={headerImage.imageUrl} 
                alt={headerImage.description}
                data-ai-hint={headerImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Product Portfolio
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-neutral-200 md:text-lg">
                GRP Manufacturing & Modular Infrastructure Solutions
            </p>
        </div>
      </section>

      <div className="container py-16 lg:py-24">
        <Accordion type="single" collapsible className="w-full space-y-4">
            {portfolioItems.map((item) => (
                 <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-lg bg-card overflow-hidden">
                    <AccordionTrigger className="p-6 text-xl font-bold hover:no-underline">
                        {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                        <p className="text-lg text-muted-foreground mb-8">{item.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <DetailList title="Applications" items={item.applications} />
                            <DetailList title="Key Features" items={item.features} />
                            <DetailList title="Customisation Options" items={item.customisation} />
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>

         <Card className="mt-16 bg-secondary">
             <CardHeader>
                <CardTitle className="text-2xl text-center">Manufacturing Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
                 <p className="mb-4">In-house GRP fabrication, custom mould development, and panel, enclosure, and structural manufacturing for project-based and repeat production.</p>
                 <h3 className="font-bold text-primary text-lg">If it can be made in GRP, EMPHZ can manufacture it.</h3>
            </CardContent>
         </Card>

      </div>
    </div>
  );
}

