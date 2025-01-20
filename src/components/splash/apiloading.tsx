export default function APIDocumentationLoading() {
    return (
      <div className="grid grid-cols-4 h-full w-full bg-white dark:bg-neutral-900 gap-4">
        {/* Sidebar */}
        <div className="col-span-1 p-4 border-r border-neutral-200 dark:border-neutral-700">
          <div className="h-10 w-32 mb-6 bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          <div className="space-y-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={"sidebar-item-" + i}
                className="h-8 w-3/4 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="h-10 w-24 rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="col-span-3 p-6">
          {/* Header */}
          <div className="h-10 w-1/3 mb-6 bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
  
          {/* Content Blocks */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={"content-block-" + i} className="space-y-4">
                {/* Title */}
                <div className="h-6 w-1/4 bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
                {/* Code Section */}
                <div className="h-32 w-full rounded-md bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  