import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  images: number;
  updated: string;
  imageSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, images, updated, imageSrc }) => {
    const navigate = useNavigate();
    return (
      <div 
      className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
      onClick={()=>{   navigate('/generate')}}
      >
        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 dark:bg-neutral-700">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
          ) : (
            <p>600 × 400</p>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {images} images
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Last updated: {updated}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  