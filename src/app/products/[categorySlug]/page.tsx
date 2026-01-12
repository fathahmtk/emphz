
import { productCategories, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/products/breadcrumbs';
import { getProductsByCategory, getCategoryBySlug } from '@/lib/product-utils';
import VariantGrid from '@/components/product-category/variant-grid';
import ApplicationContextBar from '@/components/product-category/application-context-bar';
import UseCaseSection from '@/components/product-category/use-case-section';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    categorySlug: category.slug.replace('/products/', ''),
  }));
}

export default function ProductCategoryPage({ params }: { params: { categorySlug:string } }) {
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

      <div className="container py-16 lg:py-24 space-y-16">
         <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {category.subline}
            </p>
        </div>
        
        <ApplicationContextBar />
        <UseCaseSection useCases={category.useCases} categoryName={category.name} />
        <VariantGrid products={categoryProducts} />
      </div>
    </div>
  );
}
