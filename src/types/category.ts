// category.ts

export interface Navigation {
  id: string;
  title: string;
  slug: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  navigationId: string;
  parentId?: string;
  navigation?: Navigation;
  products?: Product[];
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  imageUrl: string;
  sourceUrl: string;
  categoryId: string;
  sourceId: string;
  productDetail?: ProductDetail; // Reference to ProductDetail
}

export interface ProductDetail {
  description?: string;
  specs?: Record<string, any>;
  ratingsAvg?: number;
  reviewsCount?: number;
  reviews?: Review[]; // Add reviews to ProductDetail
  author?: string;  // Add author
  publisher?: string; // Add publisher
  publicationDate?: string; // Add publication date
  ISBN?: string; // Add ISBN
}

export interface Review {
  id: string;
  productId: string;
  userId?: string;
  author: string;
  rating: number;
  text: string;
  createdAt: string;
}
