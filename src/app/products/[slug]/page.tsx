import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { Metadata } from 'next';
import ProductDetails from './product-details';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | EMPHZ`,
    description: `Technical details and specifications for ${product.name}, a high-performance ${product.category}. IP Rating: ${product.ip_rating}.`,
    keywords: ['GRP', product.name, product.category, 'electrical enclosure', 'kiosk', 'portable toilet'],
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
