
export type Product = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: 'Electrical Enclosures' | 'Kiosks' | 'Portable Toilets';
  short_description: string;
  long_description: string;
  features: { name: string, icon: string }[];
  ip_rating: number;
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
  material_specs: string;
  authority_approval: string[];
  material_standard: string;
  fire_retardancy_class: string;
  download_url: string;
  cad_download_url: string;
  image_id: string;
  standard_models: {
    height: number;
    width: number;
    depth: number;
    ip_rating: number;
  }[];
};

export type Industry = {
  id: string;
  name: string;
  description: string;
  icon: any;
  image_id: string;
};

export type Project = {
  id: string;
  title: string;
  location: string;
  tags: string[];
  imageId: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_id: string;
};

export type Certification = {
  id: string;
  name: string;
  description: string;
  image_id: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  isProtected?: boolean;
};

export type HeroSlide = {
  id: string;
  imageId: string;
  title: string;
  subtitle: string;
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
};

export type Inquiry = {
  id?: string;
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  product: string;
  quantity?: string;
  location?: string;
  message: string;
  quoteItems?: { sku: string; name: string }[];
  routedTo: string;
  routedAt: any; // Firestore Timestamp
  status: string;
};
