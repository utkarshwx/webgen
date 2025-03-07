import React, { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";

interface GenerationBarProps {
  title: string;
  data: { name: string; value: number }[];
  color?: string;
}

const GenerationBar: React.FC<GenerationBarProps> = ({title,data,color}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions dynamically
  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        const { width } = chartContainerRef.current.getBoundingClientRect();
        const height = data.length * 50; // Adjust height based on data rows
        setDimensions({ width, height });
      }
    };

    // Update dimensions on mount and window resize
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [chartContainerRef.current,setDimensions]);

  return (
    <div
      ref={chartContainerRef}
      className="p-4 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-md w-full"
    >
      <h2 className="text-gray-800 dark:text-gray-300 font-medium mb-4">
        {title}
      </h2>
      {dimensions.width > 0 && (
        <BarChart
          width={dimensions.width}
          height={dimensions.height}
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 35, left:20, bottom: 10 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={40} />
          <Tooltip />
          <Bar
            dataKey="value"
            fill={color || "#3B82F6"}
            barSize={10}
            radius={[0, 10, 10, 0]} // Rounded edges only on the right side
          >
            <LabelList
              dataKey="value"
              position="right" // Positions the label at the right end
              fill="grey"
              fontSize={12}
              fontWeight="500"
              offset={5} // Adds spacing between the label and the bar
            />
          </Bar>
        </BarChart>
      )}
    </div>
  );
};

export default GenerationBar;
