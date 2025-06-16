export default function Loading() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center py-8">
      {/* Back Button Skeleton */}
      <div className="w-full max-w-4xl mb-6">
        <div className="inline-block px-20 py-4 bg-green-200 rounded-full animate-pulse" />
      </div>
      {/* Card Skeleton */}
      <div className="bg-white rounded-[48px] shadow-xl flex flex-col md:flex-row items-center max-w-4xl w-full p-8 md:p-16 gap-8 animate-pulse">
        {/* Flag Skeleton */}
        <div className="flex-shrink-0">
          <div className="w-64 h-40 rounded-2xl bg-green-200" />
        </div>
        {/* Info Skeleton */}
        <div className="flex-1 w-full">
          <div className="h-10 w-2/3 bg-green-200 rounded mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-lg space-y-2 md:space-y-0">
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-green-200 rounded" />
              <div className="h-6 w-2/3 bg-green-200 rounded" />
              <div className="h-6 w-1/2 bg-green-200 rounded" />
            </div>
            <div className="space-y-4">
              <div className="h-6 w-3/4 bg-green-200 rounded" />
              <div className="h-6 w-2/3 bg-green-200 rounded" />
              <div className="h-6 w-1/2 bg-green-200 rounded" />
            </div>
          </div>
          {/* Border Countries Skeleton */}
          <div className="mt-8">
            <div className="h-6 w-40 bg-green-200 rounded mb-4" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-28 bg-green-200 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
