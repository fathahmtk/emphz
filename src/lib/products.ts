import { placeholderImages } from "./placeholder-images.json";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  images: {
    imageUrl: string;
    description: string;
  }[];
}

export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(
    placeholderImages
      .filter((image) => image.id.startsWith("product-"))
      .map((image) => ({
        id: image.id,
        name: image.imageHint,
        slug: image.id,
        shortDescription: image.description,
        description: image.description,
        images: [image],
      }))
  );
}

export async function getProduct(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return Promise.resolve(products.find((p) => p.slug === slug) ?? null);
}
