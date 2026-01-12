import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/products/breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, Download } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AddToQuoteButton from './add-to-quote-button';
import ProductDetailClient from './product-detail-client';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

function DetailSection({ title, children, context }: { title: string, children: React.ReactNode, context?: string }) {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {children}
            {context && <p className="text-muted-foreground mt-4 text-sm">{context}</p>}
        </section>
    )
}

function ListSection({ title, items, context }: { title: string; items: string[]; context?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <DetailSection title={title} context={context}>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                </li>
            ))}
        </ul>
    </DetailSection>
  );
}


export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const galleryImages = product.gallery_image_ids.map(id => ({
      id,
      url: `https://picsum.photos/seed/${id}/600/600`,
      description: product.name,
      hint: '',
  }));

  return (
    <div className="bg-background text-foreground">
        <div className="container pt-8 lg:pt-12">
            <Breadcrumbs current={product.name} />
        </div>

        <div className="container py-12 md:py-16">
            {/* Header */}
            <header className="mb-12 border-b pb-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-2">{product.name}</h1>
                <p className="text-lg text-muted-foreground font-medium">{product.tagline}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {/* Left Column: Image Gallery */}
                <div className="lg:col-span-1">
                   <ProductDetailClient galleryImages={galleryImages} />
                </div>
                
                {/* Right Column: Overview and Key Details */}
                <div className="lg:col-span-2 space-y-10">
                    <DetailSection title="Product Overview">
                        <div className="prose prose-lg max-w-none text-foreground">
                            <p>{product.overview}</p>
                            {product.overviewContext && <p className="text-sm text-muted-foreground">{product.overviewContext}</p>}
                        </div>
                    </DetailSection>

                    <ListSection title="Typical Applications" items={product.applications} context={product.applicationsContext}/>
                </div>
            </div>

            {/* Full-width Details Section */}
            <div className="mt-16 space-y-12">
                <ListSection title="Construction Details" items={product.constructionDetails} context={product.constructionContext} />
                <ListSection title="Technical Highlights" items={product.technicalHighlights} context={product.technicalContext} />
                
                {product.standardConfigurations && product.standardConfigurations.length > 0 &&
                    <DetailSection title="Standard Configuration Options" context={product.standardConfigurationsContext}>
                        <Card className="glass">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Parameter</TableHead>

                                        <TableHead>Available Options</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {product.standardConfigurations.map((config) => (
                                        <TableRow key={config.parameter}>
                                            <TableCell className="font-medium">{config.parameter}</TableCell>
                                            <TableCell>{config.options}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </DetailSection>
                }

                <DetailSection title="Dimensions & Sizing">
                    <div className="prose prose-lg max-w-none text-foreground">
                        <ul className="space-y-2">
                             {product.dimensions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        {product.dimensionsNote && 
                             <div className="mt-4 border-l-4 border-primary pl-4">
                                <p className="font-semibold">Important Note:</p>
                                <p className="text-sm text-muted-foreground">{product.dimensionsNote}</p>
                            </div>
                        }
                    </div>
                </DetailSection>

                <ListSection title="Customisation Options" items={product.customisationOptions} context={product.customisationContext}/>
                <ListSection title="Supply Scope" items={product.supplyScope} context={product.supplyScopeContext}/>
                <ListSection title="Quality Assurance" items={product.qualityAssurance} context={product.qualityAssuranceContext}/>
            
                {/* Downloads */}
                <DetailSection title="Downloads & Technical Documents">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {product.downloads.map(file => (
                            <Button key={file.title} variant="outline" asChild>
                                <Link href={file.url} target="_blank">
                                    <Download className="mr-2 h-4 w-4" />
                                    {file.title}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </DetailSection>
                
                 {/* Related Products */}
                {product.relatedProducts && product.relatedProducts.length > 0 &&
                    <DetailSection title="Related GRP Products">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           {product.relatedProducts.map(related => (
                                <Card key={related.slug} className="hover:border-primary transition-colors glass">
                                   <Link href={`/products/${related.slug}`} className="block p-6">
                                        <CardTitle className="text-lg flex items-center justify-between">
                                            {related.name}
                                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                        </CardTitle>
                                   </Link>
                                </Card>
                           ))}
                        </div>
                    </DetailSection>
                }
            </div>
            
            {/* Final CTA */}
            <Card className="mt-20 glass">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">How to Order or Enquire</CardTitle>
                    <CardDescription className="max-w-2xl mx-auto">
                        Share your requirement, quantity, or drawing. Our engineering team will review and provide a technical and commercial proposal.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                     <AddToQuoteButton productId={product.id} />
                     <Button size="lg" asChild>
                        <Link href="/contact">
                            Request a Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

        </div>
    </div>
  );
}
