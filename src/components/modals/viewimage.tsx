import React from 'react';
import { IconDownload,IconX } from '@tabler/icons-react';
import { handleDownload } from '../../lib/utils';
interface ViewImageProps {
  url: string;
  onClose: () => void;
}

const ViewImage: React.FC<ViewImageProps> = ({ url, onClose }) => {
  
  return (
    <div className="relative max-w-4xl w-full mx-4">
      {/* Image container */}
      <div className="relative w-full bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
        <img
          src={url}
          alt="Full size view"
          className="w-full h-auto object-contain max-h-[80vh]"
          loading="lazy"
        />
        {/* Download button */}
        <button
          onClick={()=>handleDownload(url)}
          className="absolute bottom-4 right-4 p-2 bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-600 focus:outline-none transition-colors duration-200"
          title="Download image"
        >
          <IconDownload 
            size={24} 
            className="text-gray-700 dark:text-gray-200" 
          />
        </button>
        <button
          onClick={onClose}
          className="absolute bottom-4 left-4 p-2 bg-white dark:bg-neutral-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-600 focus:outline-none transition-colors duration-200"
          title="close image"
        >
          <IconX 
            size={24} 
            className="text-gray-700 dark:text-gray-200" 
          />
        </button>
      </div>
    </div>
  );
};

export default ViewImage;