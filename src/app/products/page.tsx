

import { productCategories } from '@/lib/data';
import Breadcrumbs from '@/components/products/breadcrumbs';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';


export default function ProductsPage() {

  return (
    <div className="bg-background text-foreground">
       <div className="container pt-8 lg:pt-12">
        <Breadcrumbs />
      </div>

       <section className="relative py-20 lg:py-32 text-white text-center">
        <div className="absolute inset-0 bg-muted" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Product Portfolio
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-neutral-200 md:text-lg">
                GRP Manufacturing & Modular Infrastructure Solutions
            </p>
        </div>
      </section>

      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map(category => {
                return (
                    <Link href={category.slug} key={category.id} className="group block">
                        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:border-primary group-hover:shadow-xl">
                            <div className="relative h-64 w-full">
                                <div className="w-full h-full bg-muted"></div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center justify-between">
                                    {category.name}
                                    <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </CardTitle>
                                <CardDescription>{category.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                )
            })}
        </div>
      </div>
    </div>
  );
}
