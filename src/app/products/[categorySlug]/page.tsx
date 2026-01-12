
import { productCategories, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/products/breadcrumbs';
import ProductCard from '@/components/products/product-card';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    categorySlug: category.slug.replace('/products/', ''),
  }));
}

function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === `/products/${slug}`);
}

function getProductsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}

export default function ProductCategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = getCategoryBySlug(params.categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="bg-background text-foreground">
      <div className="container pt-8 lg:pt-12">
        <Breadcrumbs current={category.name} />
      </div>

      <section className="relative py-20 lg:py-32 text-white text-center">
        <div className="absolute inset-0 bg-muted" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {category.name}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-neutral-200 md:text-lg">
                {category.description}
            </p>
        </div>
      </section>

      <div className="container py-16 lg:py-24">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
