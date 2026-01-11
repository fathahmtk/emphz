import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    (<Link href={`/products/${product.slug}`}>

      <div className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src={product.images[0].imageUrl}
            alt={product.images[0].description}
            fill
            className="group-hover:opacity-75 object-cover"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.shortDescription}
        </p>
      </div>

    </Link>)
  );
}
