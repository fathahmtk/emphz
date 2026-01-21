
export interface SpecItem {
  label: string;
  value: string;
}

export interface ProductDef {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  applications: string[];
  specs: SpecItem[];
  features: string[];
  imageUrl: string;
}

export enum RoutePath {
  HOME = '/',
  PRODUCTS = '/products',
  PRODUCT_DETAIL = '/products/:id',
  ENGINEERING = '/engineering',
  MANUFACTURING = '/manufacturing',
  SOLUTIONS = '/solutions',
  ABOUT = '/about',
  CONTACT = '/contact',
  HORIZON = '/project/horizon-pod',
}
