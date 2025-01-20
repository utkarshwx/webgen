export default function BillingLoading() {
    return (
      <div className="flex w-full  min-h-screen bg-gray-100 dark:bg-neutral-900">
        <div className="flex flex-col gap-6 w-full p-6 bg-white dark:bg-neutral-900">
          {/* Header */}
          <div className="h-8 w-1/3 bg-gray-200 dark:bg-neutral-800 animate-pulse rounded-lg"></div>
  
          {/* Current Plan Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-2 p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg animate-pulse">
              <div className="flex flex-col gap-4">
                <div className="h-6 w-1/4 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
                {[...new Array(4)].map((_, i) => (
                  <div
                    key={"plan-details-" + i}
                    className="h-4 w-1/2 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"
                  ></div>
                ))}
                <div className="flex gap-4">
                  <div className="h-10 w-32 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
                  <div className="h-10 w-48 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
                </div>
              </div>
            </div>
  
            {/* Billing History Section */}
            <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg animate-pulse">
              <div className="h-6 w-1/4 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
              {[...new Array(3)].map((_, i) => (
                <div
                  key={"billing-history-" + i}
                  className="h-4 w-full mt-3 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          </div>
  
          {/* Usage Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg animate-pulse">
              <div className="h-6 w-1/3 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg mb-4"></div>
              {[...new Array(3)].map((_, i) => (
                <div key={"usage-bar-" + i} className="h-4 bg-gray-200 dark:bg-neutral-700 rounded-lg mb-3"></div>
              ))}
            </div>
            <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg animate-pulse">
              <div className="h-6 w-1/3 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg mb-4"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-neutral-700 rounded-lg mb-3"></div>
            </div>
          </div>
  
          {/* Payment Method */}
          <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg animate-pulse">
            <div className="h-6 w-1/4 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
            <div className="h-10 mt-3 w-1/2 bg-gray-200 dark:bg-neutral-700 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }
  