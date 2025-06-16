export default function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Search and Filter Skeleton */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="h-10 bg-gray-200 rounded-3xl w-full"></div>
        <div className="h-12 bg-gray-200 rounded-full w-[200px]"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-[32px] shadow-lg overflow-hidden"
          >
            {/* Flag placeholder */}
            <div className="h-48 bg-gray-200"></div>
            
            {/* Content placeholder */}
            <div className="p-6 space-y-4">
              {/* Country name */}
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              
              {/* Population */}
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              
              {/* Region */}
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              
              {/* Capital */}
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="h-10 w-20 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-10 w-20 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}