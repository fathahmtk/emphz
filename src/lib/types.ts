export type Product = {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: 'Electrical Enclosures' | 'Kiosks' | 'Portable Toilets';
  short_description: string;
  long_description: string;
  features: { name: string, icon: any }[];
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
  name: string;
  industry: string;
  description: string;
  image_id: string;
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
};
