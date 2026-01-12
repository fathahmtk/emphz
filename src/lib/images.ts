import placeholderData from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  url: string;
  hint: string;
};

export const placeholderImages: Record<string, ImagePlaceholder> = placeholderData;

export function getImage(id: string): ImagePlaceholder | null {
  const data = placeholderImages[id];
  if (data) {
    if (data.url.startsWith('http')) {
        return data;
    }
    return {
        ...data,
        url: `https://picsum.photos/seed/${data.id}/${data.url.split('/').slice(-2).join('/')}`
    }
  }
  return null;
}

export function getImages(ids: string[]): ImagePlaceholder[] {
    return ids.map(id => getImage(id)).filter(Boolean) as ImagePlaceholder[];
}
