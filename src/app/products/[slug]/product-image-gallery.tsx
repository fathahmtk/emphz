
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

type ProductImageGalleryProps = {
    images: { image_id: string; description: string }[];
};

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
    const galleryImages = images.map(galleryImage => {
        const placeholder = PlaceHolderImages.find(p => p.id === galleryImage.image_id);
        return {
            ...placeholder,
            originalDescription: galleryImage.description,
        };
    }).filter(Boolean);

    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = galleryImages[activeIndex];

    if (!activeImage) {
        return (
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Image not available</p>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="aspect-square relative rounded-lg overflow-hidden border group cursor-zoom-in">
                         <Image
                            src={activeImage.imageUrl!}
                            alt={activeImage.originalDescription!}
                            data-ai-hint={activeImage.imageHint}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                         <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="h-12 w-12 text-white" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-auto p-0 bg-transparent border-0">
                    <div className="relative aspect-video">
                        <Image
                            src={activeImage.imageUrl!}
                            alt={activeImage.originalDescription!}
                            fill
                            className="object-contain"
                        />
                    </div>
                </DialogContent>
            </Dialog>

            {galleryImages.length > 1 && (
                 <div className="grid grid-cols-5 gap-2">
                    {galleryImages.map((image, index) => (
                        <button
                            key={image!.id}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "aspect-square relative rounded-md overflow-hidden border-2 transition",
                                index === activeIndex ? "border-primary" : "border-transparent hover:border-primary/50"
                            )}
                        >
                             <Image
                                src={image!.imageUrl!}
                                alt={image!.originalDescription!}
                                data-ai-hint={image!.imageHint}
                                fill
                                className="object-cover"
                                sizes="100px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
