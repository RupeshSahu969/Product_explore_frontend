import Link from 'next/link';
import { Product } from '../types/category';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="w-full h-48 relative mb-4">
        <img
          src={product.imageUrl || '/fallback-image.jpg'}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="font-semibold text-lg text-gray-800 mt-2">{product.title}</h3>

      {product.productDetail?.author && (
        <p className="text-gray-600">Author: {product.productDetail.author}</p>
      )}

      <p className="text-gray-600">
        Price: {product.price} {product.currency}
      </p>

      <p className="text-gray-500 text-sm mt-1">Source ID: {product.sourceId}</p>

      <Link
        href={`/product/${product.id}`}
        className="text-blue-500 mt-3 inline-block hover:text-blue-700 transition-colors"
        aria-label={`View details for ${product.title}`}
      >
        View Details
      </Link>
    </div>
  );
}
