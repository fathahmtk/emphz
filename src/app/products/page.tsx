import Breadcrumbs from "@/components/products/breadcrumbs";
import ProductGallery from "@/components/products/product-gallery";
import { getProducts } from "@/lib/products";

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:px-6">
        <Breadcrumbs />
        <section className="mt-8">
          <h1 className="text-4xl font-bold text-gray-900">
            All Products
          </h1>
        </section>
        <ProductGallery products={products} />
      </div>
    </div>
  );
}
