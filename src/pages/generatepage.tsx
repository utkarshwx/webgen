import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function GeneratePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg text-md font-medium text-black dark:text-white hover:bg-sky-500"
          >
            <IconArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Image Generator</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel */}
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium">Component Type</label>
              <select className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option>Header Image</option>
                <option>Footer Image</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Width (px)</label>
              <input
                type="number"
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="1200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Height (px)</label>
              <input
                type="number"
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="630"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Color Scheme</label>
              <div className="flex gap-2 mt-2 items-start justify-between">
                {[
                { name: "blue", class: "bg-blue-500" },
                { name: "green", class: "bg-green-500" },
                { name: "purple", class: "bg-purple-500" },
                { name: "red", class: "bg-red-500" },
                { name: "yellow", class: "bg-yellow-500" },
                { name: "gray", class: "bg-gray-500" },
                ].map((color) => (
                  <div
                    key={color.name}
                    className={`h-6 w-6 rounded-full ${color.class} cursor-pointer`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Style Preset</label>
              <div className="flex gap-4 mt-2">
                {["Minimal", "Modern", "Bold"].map((preset) => (
                  <button
                    key={preset}
                    className="py-2 px-4 border rounded-md dark:bg-neutral-800 dark:border-neutral-700"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="Describe the image you want to generate..."
              ></textarea>
            </div>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Generate Image
            </button>
          </div>

          {/* Right Panel */}
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-full h-96 bg-gray-300 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-gray-500 dark:text-neutral-400">400 × 300</span>
            </div>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-300 dark:bg-neutral-800 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: "100%" }}></div>
              </div>
              <p className="text-sm mt-2 text-center">Generation Progress: 75%</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button className="py-2 px-4 bg-gray-300 dark:bg-neutral-800 text-gray-900 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-neutral-700">
                Download
              </button>
              <button className="py-2 px-4 bg-gray-300 dark:bg-neutral-800 text-gray-900 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-neutral-700">
                Save to Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratePage;
