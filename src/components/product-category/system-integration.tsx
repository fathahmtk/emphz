
import { ProductCategory } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SystemIntegrationProps {
  category: ProductCategory;
}

export default function SystemIntegration({ category }: SystemIntegrationProps) {
  if (!category.systemIntegrations || category.systemIntegrations.length === 0) {
    return null;
  }

  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          System Integration View
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          How {category.name} fit into larger infrastructure systems.
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <Card className="p-6 font-semibold bg-primary text-primary-foreground">
          {category.name}
        </Card>

        {category.systemIntegrations.map((integration, index) => (
          <div key={integration.slug} className="flex items-center gap-4">
            <div className="text-muted-foreground font-bold text-2xl">+</div>
            <Link href={`/products/${integration.slug}`} className="block">
              <Card className="p-6 font-semibold hover:bg-accent/10 transition-colors">
                {integration.name}
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
