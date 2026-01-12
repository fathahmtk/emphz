'use client';

import dynamic from 'next/dynamic';
import { ImagePlaceholder } from '@/lib/placeholder-images';

const ProductImageGallery = dynamic(() => import('./product-image-gallery'), {
    loading: () => <div className="aspect-square w-full rounded-lg bg-muted animate-pulse"></div>,
    ssr: false,
});

interface ProductDetailClientProps {
    galleryImages: ImagePlaceholder[];
}

export default function ProductDetailClient({ galleryImages }: ProductDetailClientProps) {
    return <ProductImageGallery images={galleryImages} />;
}
