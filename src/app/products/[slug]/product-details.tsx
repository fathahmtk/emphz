

'use client';

import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import ProductActions from './product-actions';
import { Product } from '@/lib/types';
import { ShieldCheck, Sun, Flame } from 'lucide-react';
import ProductImageGallery from './product-image-gallery';

const featureIcons: { [key: string]: React.ElementType } = {
    ShieldCheck,
    Sun,
    Flame
};

type ProductDetailsProps = {
    product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {

    return (
        <div className="container py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                <ProductImageGallery images={product.gallery} />

                <div>
                    <Badge variant="secondary">{product.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mt-2 mb-4">{product.name}</h1>
                    <p className="text-lg text-muted-foreground mb-6">{product.long_description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        {product.features.map(feature => {
                            const Icon = featureIcons[feature.icon];
                            return (
                                <div key={feature.name} className="flex items-center gap-2">
                                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                                    <span>{feature.name}</span>
                                </div>
                            )
                        })}
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
