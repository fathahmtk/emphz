

import { LucideIcon } from 'lucide-react';

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  
  overview: string;
  overviewContext?: string;
  
  applications: string[];
  applicationsContext?: string;

  constructionDetails: string[];
  constructionContext?: string;

  technicalHighlights: string[];
  technicalContext?: string;
  
  standardConfigurations: { parameter: string; options: string }[];
  standardConfigurationsContext?: string;
  
  dimensions: string[];
  dimensionsNote?: string;
  
  customisationOptions: string[];
  customisationContext?: string;
  
  supplyScope: string[];
  supplyScopeContext?: string;

  qualityAssurance: string[];
  qualityAssuranceContext?: string;
  
  downloads: { title: string; url: string }[];
  
  relatedProducts: { name: string; slug: string }[];

  image_id: string;
  gallery_image_ids: string[];
  
  // Deprecated fields from old structure, kept for compatibility during transition if needed
  category?: 'Electrical Enclosures' | 'Kiosks' | 'Portable Toilets' | 'Custom';
  sku?: string;
  short_description?: string;
  long_description?: string;
  features?: { name: string, icon: string }[];
  ip_rating?: number;
  material_specs?: string;
  authority_approval?: string[];
  material_standard?: string;
  fire_retardancy_class?: string;
  download_url?: string;
  cad_download_url?: string;
  gallery?: { image_id: string; description: string }[];
  industry_ids?: string[];
  standard_models?: { height: number; width: number; depth: number; ip_rating: number }[];
  short_intro?: string;
  manufacturing_details?: string[];
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

export type InquiryNote = {
  text: string;
  author: string;
  authorId: string;
  createdAt: any; // Firestore Timestamp
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
  summary: string;
  routedAt: any; // Firestore Timestamp
  status: string;
  createdAt: any; // Firestore Timestamp
  notes?: InquiryNote[];
};

export type PortfolioItem = {
    id: string;
    title: string;
    description: string;
    applications: string[];
    features: string[];
    customisation: string[];
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  image_id: string;
}
