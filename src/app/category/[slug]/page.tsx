'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchCategoriesByNavigationSlug, fetchProductsByCategoryId } from '@/services/api';
import ProductCard from '@/components/ProductCard';
import SkeletonLoader from '@/components/SkeletonLoader';
import type { Category, Product } from '@/types/category';

export default function CategoryPage() {
  const [mounted, setMounted] = useState(false);
  const params = useParams() as { slug: string };
  const { slug } = params;

  // Fetch categories for the navigation slug
  const { data: categories, isLoading: isLoadingCategories } = useQuery<Category[]>({
    queryKey: ['categories', slug],
    queryFn: () => fetchCategoriesByNavigationSlug(slug),
    enabled: !!slug,
  });

  // Get the first category or choose your logic for which category to show
  const categoryId = categories?.[0]?.id ?? '';

  // Fetch products only for that category
  const { data: products, isLoading: isLoadingProducts } = useQuery<Product[]>({
    queryKey: ['products', categoryId],
    queryFn: () => fetchProductsByCategoryId(categoryId),
    enabled: !!categoryId,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoadingCategories) return <SkeletonLoader count={4} />;
  if (!categories?.length) return <p>No categories found.</p>;
  if (isLoadingProducts) return <SkeletonLoader count={10} />;

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">{slug}</h1>

      {/* Product Grid */}
      {products && products.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}
