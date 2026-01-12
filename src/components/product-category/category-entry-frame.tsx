
import { Button } from "@/components/ui/button";
import { ProductCategory } from "@/lib/types";
import Link from "next/link";
import { ArrowRight, FileText } from 'lucide-react';

interface CategoryEntryFrameProps {
  category: ProductCategory;
}

export default function CategoryEntryFrame({ category }: CategoryEntryFrameProps) {
  return (
    <section className="container">
      <div className="rounded-xxl bg-card border p-8 md:p-16 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground mb-4">
          {category.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {category.subline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Request Technical Specification <FileText /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#applications">View Applications <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
