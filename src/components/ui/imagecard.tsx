import React, { useRef, useState } from 'react';
import { IconTrash, IconCopy} from "@tabler/icons-react";
import { Image } from '../../store/project-slice';
import { formatDistanceToNow } from 'date-fns';
import Modal from '../modals/modal';
import ConfirmationModal from '../modals/deleteproject';
import { submitActionDeleteImage } from '../../api/image';
import { cn } from '../../lib/utils';
import ViewImage from '../modals/viewimage';



interface ExtendedImage extends Image {
  Pid?: string;
}

const ImageCard: React.FC<ExtendedImage> = ({Pid, _id, url, metadata, generatedAt }) => {
  const RefImage = useRef<{ open: () => void, close: () => void } | null>(null);
  const newProRef = useRef<{ open: () => void, close: () => void } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  function HandleClose() {
    newProRef.current?.close();
  }
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };
  return (
    <div className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-lg flex flex-col items-start justify-between">
      {
        url && <Modal ref={RefImage}>
          <ViewImage url={url} onClose={()=>RefImage.current?.close()} />
        </Modal>
      }
      {_id && <Modal ref={newProRef}><ConfirmationModal 
      close={HandleClose} 
      data={{Pid,Iid: _id }} 
      action={submitActionDeleteImage}
      warnning="Are you sure you want to delete this image"
       /></Modal>}
      {/* Image */}
      <img
        src={url} // Dynamically set the image source
        alt={metadata?.type} // Dynamically set the image alt
        className="w-full h-[200px] object-cover rounded-md"
        onClick={() => RefImage.current?.open()}
      />
      {/* Information Below Image */}
      <div className="mt-2 text-left">
        <div className="flex justify-between items-stretch mt-2">
          <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
            {metadata?.type}:
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              create {generatedAt ? formatDistanceToNow(new Date(generatedAt)) : 'unknown time'} ago
            </span>
            <button 
              onClick={handleCopy}
              className={cn(
                "focus:outline-none transition-colors duration-200",
                "hover:scale-95 focus:scale-90",
                isCopied 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-blue-800 dark:text-blue-200"
              )}
            >
              <IconCopy 
                size={20} 
                strokeWidth={1}
              />
            </button>
          </p>
          {Pid&&<button onClick={() => newProRef.current?.open()} className="focus:outline-none">
            <IconTrash size={20} strokeWidth={1} className="text-red-900 dark:text-red-200" />
          </button>}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">{metadata?.prompt}</p>
      </div>
    </div>
  );
};

export default ImageCard;
