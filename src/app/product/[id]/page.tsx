'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchProductDetail, fetchProductsByCategoryId } from '@/services/api';
import SkeletonLoader from '@/components/SkeletonLoader';
import ProductCard from '@/components/ProductCard';
import type { Product, Review } from '@/types/category';

export default function ProductDetailPage() {
  const params = useParams() as { id: string };
  const { id } = params;

  // Fetch product detail
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ['productDetail', id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
  });

  const categoryId = product?.categoryId;

  // Fetch related products
  const { data: relatedProducts } = useQuery<Product[]>({
    queryKey: ['relatedProducts', categoryId],
    queryFn: async () => {
      if (!categoryId) return [];
      const prods = await fetchProductsByCategoryId(categoryId);
      return prods.filter((p: Product) => p.id !== id).slice(0, 5);
    },
    enabled: !!categoryId,
  });

  if (isLoading) return <SkeletonLoader count={1} />;
  if (!product) return <p className="text-center mt-8 text-gray-700">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-10">
      {/* Product Main Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl || '/fallback-image.jpg'}
            alt={product.title}
            className="w-full max-w-md h-80 md:h-[450px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
          {product.productDetail?.author && (
            <p className="text-gray-700 text-lg">Author: {product.productDetail.author}</p>
          )}
          <p className="text-gray-800 text-lg">
            Price: <span className="font-semibold">{product.price} {product.currency}</span>
          </p>
          <p className="text-gray-700">{product.productDetail?.description || 'No description available.'}</p>
          <div className="space-y-1 text-gray-600">
            {product.productDetail?.publisher && <p>Publisher: {product.productDetail.publisher}</p>}
            {product.productDetail?.publicationDate && <p>Publication Date: {product.productDetail.publicationDate}</p>}
            {product.productDetail?.ISBN && <p>ISBN: {product.productDetail.ISBN}</p>}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="space-y-4 max-h-72 overflow-y-auto">
          {product.productDetail?.reviews?.length ? (
            product.productDetail.reviews.map((r: Review) => (
              <div key={r.id} className="border-b pb-2">
                <p className="font-semibold">{r.author}</p>
                <p className="text-yellow-500 text-sm">
                  {'⭐'.repeat(Math.round(r.rating))} ({r.rating})
                </p>
                <p className="text-gray-700 text-sm">{r.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No reviews yet.</p>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts?.length ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {relatedProducts.map((p: Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
