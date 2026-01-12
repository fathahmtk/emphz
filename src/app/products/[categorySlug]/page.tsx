
import { productCategories, products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/products/breadcrumbs';
import { getProductsByCategory, getCategoryBySlug } from '@/lib/product-utils';

import CategoryEntryFrame from '@/components/product-category/category-entry-frame';
import ApplicationContextBar from '@/components/product-category/application-context-bar';
import UseCaseSection from '@/components/product-category/use-case-section';
import VariantGrid from '@/components/product-category/variant-grid';
import TechnicalFoundation from '@/components/product-category/technical-foundation';
import ComplianceMatrix from '@/components/product-category/compliance-matrix';
import SystemIntegration from '@/components/product-category/system-integration';
import CustomisationSupport from '@/components/product-category/customisation-support';
import DeploymentSnapshot from '@/components/product-category/deployment-snapshot';
import EngineerCTA from '@/components/product-category/engineer-cta';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    categorySlug: category.slug.replace('/products/', ''),
  }));
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

      <div className="space-y-16 sm:space-y-24 py-16 sm:py-24">
        <CategoryEntryFrame category={category} />
        <ApplicationContextBar />
        <UseCaseSection useCases={category.useCases} categoryName={category.name} />
        <VariantGrid products={categoryProducts} />
        <TechnicalFoundation category={category} />
        <ComplianceMatrix category={category} />
        <SystemIntegration category={category} />
        <CustomisationSupport />
        <DeploymentSnapshot />
        <EngineerCTA />
      </div>
    </div>
  );
}
