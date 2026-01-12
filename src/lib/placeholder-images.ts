// This file is deprecated and will be removed in a future update.
// Please do not use this file for new image placeholders.
// Use src/lib/images.ts instead.

import { placeholderImages } from './images';
import type { ImagePlaceholder } from './images';

export function getImage(id: string): ImagePlaceholder | null {
  return placeholderImages[id] || null;
}

export function getImages(ids: string[]): ImagePlaceholder[] {
    return ids.map(id => placeholderImages[id]).filter(Boolean) as ImagePlaceholder[];
}
