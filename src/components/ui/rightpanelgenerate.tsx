import { useEffect, useState } from "react";
import { handleDownload } from "../../lib/utils";
export interface ImgProps {
  url?: string;
  metadata?: {
    type?: string;
  };
}
// make download button functional by adding onClick event listener
// add a button to download the generated image from url
// add a progress bar to show the generation progress
// add a placeholder for the image if no image is generated
export default function RightPanelGenerate({ img }: { img?: ImgProps }) {
  const [progress, setProgress] = useState(0);
  // Simulate progress increment if an image is generating
  useEffect(() => {
    if (!img?.url) {
      let interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 500);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [img?.url]);
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-full h-96 bg-gray-300 dark:bg-neutral-800 flex items-center justify-center">
              
              {img?.url ? (
              <img 
              src={img?.url} 
              alt={img?.metadata?.type} 
              className="h-full w-full object-cover" 
              onClick={() => window.open(img?.url, "_blank")}
              />
              ) : (
              <span className="text-gray-500 dark:text-neutral-400">400 × 300</span>
              )}
            </div>
            {img?.url&&<div className="w-full mt-4">
              <div className="w-full bg-gray-300 dark:bg-neutral-800 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-center">
                {progress < 100 ? `Generation Progress: ${progress}%` : "Image Ready!"}
              </p>
            </div>}
           
            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <button
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                disabled={!img?.url}
                onClick={()=>handleDownload(img?.url || "")}
              >
                Download
              </button>
            </div>
          </div>
  )
}
