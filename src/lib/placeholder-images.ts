// This file is deprecated and will be removed in a future update.
// Please do not use this file for new image placeholders.

export type ImagePlaceholder = {
  id: string;
  description: string;
  url: string;
  hint: string;
};

export const placeholderImages: Record<string, ImagePlaceholder> = {};

export function getImage(id: string): ImagePlaceholder | null {
  return placeholderImages[id] || null;
}

export function getImages(ids: string[]): ImagePlaceholder[] {
    return ids.map(id => ({
        id,
        url: `https://picsum.photos/seed/${id}/600/600`,
        description: 'Placeholder Image',
        hint: 'placeholder'
    }));
}
