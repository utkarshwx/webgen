import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import HelpGuide from "../components/ui/helpguidprompt";

function GeneratePage() {
  const navigate = useNavigate()
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
            {/* Component Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Component Type</label>
              <select className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option                     >Header/Banner Images</option>
                <option>Card Images</option>
                <option>Profile Images</option>
                <option>Background Images</option>
                <option>Thumbnails</option>
                <option>Product Images</option>
                <option>Icons</option>
                <option>Infographic Images</option>
                <option>Testimonials/Review Images</option>
                <option>CTA Images</option>
              </select>
            </div>

            {/* Aspect Ratio */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Aspect Ratio</label>
              <select className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option>1:1</option>
                <option>16:9</option>
                <option>9:16</option>
                <option>5:4</option>
                <option>4:5</option>
                <option>3:2</option>
                <option>2:3</option>
              </select>
            </div>

            {/* Negative Prompt */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Negative Prompt</label>
              <textarea
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="Describe what you do NOT want in the image..."
              ></textarea>
            </div>

            {/* Output Format */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Output Format</label>
              <select className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option>jpeg</option>
                <option>png</option>
              </select>
            </div>

            {/* Prompt */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Prompt</label>
              <textarea
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="Describe the image you want to generate..."
              ></textarea>
            </div>

            {/* Color Scheme */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Color Scheme</label>
              <div className="flex gap-10 mt-2 items-start">
                {[
                  { name: "blue", class: "bg-blue-500" },
                  { name: "green", class: "bg-green-500" },
                  { name: "purple", class: "bg-purple-500" },
                  { name: "red", class: "bg-red-500" },
                  { name: "yellow", class: "bg-yellow-500" },
                  { name: "gray", class: "bg-gray-500" },
                ].map((color) => (
                  <div key={color.name} className="flex items-center">
                    <input
                      type="checkbox"
                      id={color.name}
                      name="colorScheme"
                      value={color.name}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={color.name}
                      className={`h-6 w-6 rounded-full ${color.class} cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-blue-500`}
                    ></label>
                  </div>
                ))}
              </div>
            </div>

            {/* Style Preset */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Style Preset</label>
              <select className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option>Minimalist</option>
                <option>Modern</option>
                <option>Corporate</option>
                <option>Creative</option>
                <option>Geometric</option>
                <option>Sketch</option>
              </select>
            </div>

            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Generate Image
            </button>

            {/* Help Guide */}
            <HelpGuide/>
          </div>

          {/* Right Panel */}
          <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-full h-96 bg-gray-300 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-gray-500 dark:text-neutral-400">400 × 300</span>
            </div>
            <div className="w-full mt-4">
              <div className="w-full bg-gray-300 dark:bg-neutral-800 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: "76%" }}></div>
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
