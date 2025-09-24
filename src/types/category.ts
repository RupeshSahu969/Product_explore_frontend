// src/types/category.ts

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
  productDetail?: ProductDetail; // Nested details
}

export interface ProductDetail {
  description?: string;
  specs?: Record<string, string | number | boolean>; // safer type than 'any'
  ratingsAvg?: number;
  reviewsCount?: number;
  reviews?: Review[];
  author?: string;
  publisher?: string;
  publicationDate?: string;
  ISBN?: string;
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
