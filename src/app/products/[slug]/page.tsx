import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Metadata } from 'next';
import ProductActions from './product-actions';

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

  const image = PlaceHolderImages.find((img) => img.id === product.image_id);

  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          )}
        </div>
        <div>
          <Badge variant="secondary">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-2 mb-4">{product.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{product.long_description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {product.features.map(feature => (
              <div key={feature.name} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <span>{feature.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm text-muted-foreground mb-8">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>IP Rating:</strong> {product.ip_rating}</p>
            <p><strong>Material:</strong> {product.material_specs}</p>
            <p><strong>Approvals:</strong> {product.authority_approval.join(', ')}</p>
          </div>

          <ProductActions product={product} />

        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter mb-6">Technical Data: Standard Models</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Height (mm)</TableHead>
                <TableHead>Width (mm)</TableHead>
                <TableHead>Depth (mm)</TableHead>
                <TableHead>IP Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.standard_models.map((model, index) => (
                <TableRow key={index}>
                  <TableCell>{model.height}</TableCell>
                  <TableCell>{model.width}</TableCell>
                  <TableCell>{model.depth}</TableCell>
                  <TableCell>{model.ip_rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
