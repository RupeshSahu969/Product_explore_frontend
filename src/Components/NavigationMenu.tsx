'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchNavigation } from '../services/api';
import { Navigation } from '../types/category';

export default function NavigationMenu() {
  const { data, isLoading } = useQuery<Navigation[]>({
    queryKey: ['navigation'],
    queryFn: fetchNavigation,
  });

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No navigation found</p>;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {data.map((nav) => (
        <Link
          key={nav.id}
          href={`/category/${nav.slug}`}
          className="hover:text-blue-500 font-medium"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
