export default function SettingsLoading() {
    return (
      <div className="flex flex-col flex-1 gap-4 p-4 md:p-10 bg-white dark:bg-neutral-900">
        {/* Sidebar Menu */}
        <div className="flex flex-row gap-4">
          <div className="w-1/4 rounded-lg h-64 bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          
          {/* Settings Content */}
          <div className="w-3/4 flex flex-col gap-4">
            {/* Header */}
            <div className="h-10 w-1/3 bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"></div>
            
            {/* Account Settings */}
            <div className="flex gap-4">
              <div className="h-28 w-28 rounded-full bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
              <div className="flex-1 flex flex-col gap-2">
                {[...new Array(2)].map((_, i) => (
                  <div
                    key={"account-text-" + i}
                    className="h-8 w-full bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Form Fields */}
            {[...new Array(4)].map((_, i) => (
              <div
                key={"form-field-" + i}
                className="h-10 w-full bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"
              ></div>
            ))}
            
            {/* Save Button */}
            <div className="h-12 w-32 bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"></div>
            
            {/* API Access */}
            <div className="h-10 w-1/3 bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"></div>
            <div className="h-12 w-48 bg-gray-100 dark:bg-neutral-800 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }
  