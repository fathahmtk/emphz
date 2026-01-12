
import { productCategories, products } from '@/lib/data';

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === `/products/${slug}`);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}
