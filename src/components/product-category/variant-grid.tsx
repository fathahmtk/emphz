
import { Product } from '@/lib/types';
import ProductCard from '@/components/products/product-card';

interface VariantGridProps {
  products: Product[];
}

export default function VariantGrid({ products }: VariantGridProps) {
  if (products.length === 0) {
    return (
        <div className="text-center py-16">
            <p className="text-muted-foreground">No standard variants found for this category.</p>
            <p className="text-muted-foreground">Please contact us for custom engineered solutions.</p>
        </div>
    );
  }

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
