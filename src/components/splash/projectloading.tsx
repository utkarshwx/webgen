export default function ProjectLoading() {
    return (
      <div className="flex flex-col p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full h-full">
        {/* Top Filters Section */}
        <div className="flex gap-4 mb-4">
          {[...Array(2)].map((_, i) => (
            <div
              key={"filter-" + i}
              className="h-10 w-40 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
          <div className="h-10 flex-1 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
        </div>
  
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={"card-" + i}
              className="h-48 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
  
        {/* Pagination Section */}
        <div className="flex justify-between mt-4">
          <div className="h-8 w-20 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          <div className="h-8 w-20 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
        </div>
      </div>
    );
  }
  