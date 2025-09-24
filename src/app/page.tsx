'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNavigation, fetchProducts } from '../services/api';
import Link from 'next/link';
import { Navigation, Product } from '../types/category';
import SkeletonLoader from '@/components/SkeletonLoader';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [rating, setRating] = useState<number | null>(null);
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('browsingHistory') || '[]');
    history.push({ path: '/', timestamp: new Date().toISOString() });
    localStorage.setItem('browsingHistory', JSON.stringify(history));
  }, []);

  
  const { data: navigationData, isLoading: isLoadingNavigation } = useQuery<Navigation[]>({
    queryKey: ['navigation'],
    queryFn: fetchNavigation,
  });

  // Fetch products
  const { data: products, isLoading: isLoadingProducts } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoadingNavigation || isLoadingProducts) return <SkeletonLoader count={5} />;
  if (!navigationData || !products) return <p className="text-center mt-8">No data found</p>;

  // Filter products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesAuthor = author
      ? p.productDetail?.author?.toLowerCase().includes(author.toLowerCase())
      : true;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesRating = rating
      ? Math.round(
          (p.productDetail?.reviews?.reduce((sum, r) => sum + r.rating, 0) ?? 0) /
            (p.productDetail?.reviews?.length || 1)
        ) >= rating
      : true;

    return matchesSearch && matchesAuthor && matchesPrice && matchesRating;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* 🔹 Top Filters */}
      <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] border rounded-md p-2 focus:ring focus:ring-blue-300"
        />

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm">Max Price: ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={e => setPriceRange([0, Number(e.target.value)])}
            className="w-40"
          />
        </div>

        <select
          value={rating ?? ''}
          onChange={e => setRating(e.target.value ? Number(e.target.value) : null)}
          className="border rounded-md p-2 min-w-[120px]"
        >
          <option value="">All Ratings</option>
          <option value="1">⭐ 1+</option>
          <option value="2">⭐ 2+</option>
          <option value="3">⭐ 3+</option>
          <option value="4">⭐ 4+</option>
        </select>

        <input
          type="text"
          placeholder="Filter by author..."
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="border rounded-md p-2 min-w-[180px] focus:ring focus:ring-blue-300"
        />
      </div>

      {/* 🔹 Navigation Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {navigationData.map(nav => (
            <Link
              key={nav.id}
              href={`/category/${nav.slug}`}
              className="border p-4 rounded hover:shadow-lg transition transform hover:scale-105 text-center"
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>

      {/* 🔹 Product Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        {filteredProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}
