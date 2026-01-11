
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Breadcrumbs from '@/components/products/breadcrumbs';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download, FileText, ArrowRight, Share } from 'lucide-react';
import ProductImageGallery from './product-image-gallery';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

function DetailSection({ title, items }: { title: string, items: string[] }) {
    if (!items || items.length === 0) return null;
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}


export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }
  
  const image = PlaceHolderImages.find(p => p.id === product.image_id);
  const galleryImages = product.gallery_image_ids
    .map(id => PlaceHolderImages.find(p => p.id === id))
    .filter((img): img is NonNullable<typeof img> => img !== undefined);


  return (
    <div className="bg-background text-foreground">
        <div className="container pt-8 lg:pt-12">
            <Breadcrumbs current={product.name} />
        </div>

        <div className="container py-12 md:py-16">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground max-w-3xl">{product.short_intro}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                   <ProductImageGallery images={galleryImages} />
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <DetailSection title="Applications" items={product.applications} />
                    <DetailSection title="Key Features" items={product.key_features} />
                </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <DetailSection title="Standard Configurations" items={product.standard_configurations} />
                <DetailSection title="Customisation Options" items={product.customisation_options} />
                <DetailSection title="Manufacturing Details" items={product.manufacturing_details} />
            </div>
            
            <Card className="mt-16 bg-secondary/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Downloads & Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                     <div className="space-y-3">
                        <h3 className="font-semibold">Technical Documents</h3>
                         <div className="flex gap-4 justify-center">
                            {product.downloads.map(file => (
                                <Button key={file.title} variant="outline" asChild>
                                    <Link href={file.url} target="_blank">
                                        <Download className="mr-2 h-4 w-4" />
                                        {file.title}
                                    </Link>
                                </Button>
                            ))}
                         </div>
                    </div>
                     <div className="flex items-center">
                        <div className="h-12 w-px bg-border mx-6 hidden sm:block"></div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold">Ready to get started?</h3>
                        <div className="flex gap-4 justify-center">
                             <Button size="lg" asChild>
                                <Link href="/contact">
                                    Request Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                             <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">
                                    Share Your Drawing
                                    <Share className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>

    </div>
  );
}
