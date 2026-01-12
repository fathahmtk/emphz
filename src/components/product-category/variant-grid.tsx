
import { Product } from '@/lib/types';
import ProductCard from '@/components/products/product-card';

interface VariantGridProps {
  products: Product[];
}

export default function VariantGrid({ products }: VariantGridProps) {
  if (products.length === 0) return null;

  return (
    <section className="container">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Modular Variants
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Standard configurations available for rapid deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
