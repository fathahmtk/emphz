
import imageData from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  url: string;
  hint: string;
};

export const placeholderImages: Record<string, ImagePlaceholder> = imageData;

export function getImage(id: string): ImagePlaceholder | null {
  return placeholderImages[id] || null;
}

export function getImages(ids: string[]): ImagePlaceholder[] {
  return ids.map(id => getImage(id)).filter((img): img is ImagePlaceholder => img !== null);
}
