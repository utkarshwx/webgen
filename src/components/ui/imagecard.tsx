import React from 'react';

interface ImageCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-lg flex flex-col items-start justify-between">
      {/* Image */}
      <img
        src={image} // Dynamically set the image source
        alt={title}
        className="w-full h-[200px] object-cover rounded-md"
      />

      {/* Information Below Image */}
      <div className="mt-2 text-left">
        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
          {title}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
