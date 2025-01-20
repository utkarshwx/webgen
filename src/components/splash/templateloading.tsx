export default function TemplateGalleryLoading() {
    return (
      <div className="flex flex-col p-4 md:p-8 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full h-full">
        {/* Tabs Section */}
        <div className="flex gap-4 mb-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={"tab-" + i}
              className="h-10 w-32 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
  
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={"template-card-" + i}
              className="h-64 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
  
        {/* Load More Button */}
        <div className="flex justify-center mt-6">
          <div className="h-10 w-48 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
        </div>
      </div>
    );
  }
  