import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  percentageChange: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentageChange,color }) => {
  return (
    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md flex items-start justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
      </div>
      <div
        className={`text-sm font-medium px-2  rounded-md ${
          color === "green"
            ? "bg-green-100 text-green-500"
            : color === "yellow"
            ? "bg-yellow-100 text-yellow-500"
            : color === "red"
            ? "bg-red-100 text-red-500"
            : "bg-gray-100 text-gray-500"
        }`}
      >
       {percentageChange}
      </div>
    </div>
  );
};

export default StatCard;
