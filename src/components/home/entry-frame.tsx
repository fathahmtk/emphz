
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EntryFrame() {
  return (
    <section className="container">
      <div className="relative rounded-xxl bg-card border p-8 md:p-16 min-h-[400px] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground mb-4">
            ENGINEERED MODULAR SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            For Infrastructure That Cannot Fail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild>
              <Link href="#applications">Start with Your Application</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">View Standard Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
