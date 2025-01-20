export default function DashboardLoading() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4 md:p-10 bg-white dark:bg-neutral-900">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-4 gap-4">
        {[...new Array(4)].map((_, i) => (
          <div
            key={"top-metrics-" + i}
            className="h-20 rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Recent Generations */}
      <div className="grid grid-cols-4 gap-2">
        {[...new Array(4)].map((_, i) => (
          <div
            key={"recent-generations-" + i}
            className="h-48 rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Bottom Row - History & Popular Categories */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {[...new Array(2)].map((_, i) => (
          <div
            key={"bottom-row-" + i}
            className="h-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
