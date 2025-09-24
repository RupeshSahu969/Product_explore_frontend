interface Props {
  count?: number;
}

export default function SkeletonLoader({ count = 5 }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="animate-pulse space-y-4">
          <div className="bg-gray-200 h-48 rounded-lg w-full"></div>
          <div className="bg-gray-200 h-6 rounded w-3/4"></div>
          <div className="bg-gray-200 h-4 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
