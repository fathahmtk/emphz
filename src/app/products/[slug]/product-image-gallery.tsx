
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ZoomIn } from 'lucide-react';
import { ImagePlaceholder } from '@/lib/placeholder-images';


type ProductImageGalleryProps = {
  images: ImagePlaceholder[];
};

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0] || null);

  if (!mainImage) {
    return (
      <div className="aspect-square w-full rounded-lg bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No image available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 sticky top-24">
       <Dialog>
        <DialogTrigger asChild>
            <div className="relative aspect-square w-full rounded-lg overflow-hidden cursor-zoom-in group">
                <Image 
                  src={mainImage.url} 
                  alt={mainImage.description} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  data-ai-hint={mainImage.hint}
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="h-12 w-12 text-white" />
                </div>
            </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-auto p-0">
             <div className="relative aspect-video w-full">
                <Image 
                  src={mainImage.url} 
                  alt={mainImage.description} 
                  fill
                  className="object-cover"
                  sizes="100vw"
                  data-ai-hint={mainImage.hint}
                />
            </div>
        </DialogContent>
      </Dialog>
      
      <div className="grid grid-cols-5 gap-2">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image)}
            className={cn(
              'relative aspect-square w-full rounded-md overflow-hidden transition-all',
              mainImage.id === image.id
                ? 'ring-2 ring-primary ring-offset-2'
                : 'opacity-70 hover:opacity-100'
            )}
          >
            <Image 
                src={image.url}
                alt={image.description}
                fill
                className="object-cover"
                sizes="10vw"
                data-ai-hint={image.hint}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
