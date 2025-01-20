import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ProjectCard from "../components/ui/projectcard";
import { useRef, MutableRefObject } from "react";
import Modal from "../components/modals/modal";

const ProjectPage = () => {
  const newProRef = useRef() as MutableRefObject<{ open: () => void,close:()=>void } | null>
  const navigate = useNavigate();
  const projects = [
    {
      title: "E-commerce Headers",
      images: 12,
      updated: "2 days ago",
    },
    {
      title: "Profile Collection",
      images: 8,
      updated: "5 days ago",
    },
    {
      title: "Blog Cards",
      images: 15,
      updated: "1 week ago",
    },
    {
      title: "Blog Cards",
      images: 15,
      updated: "1 week ago",
    },
    {
      title: "Blog Cards",
      images: 15,
      updated: "1 week ago",
    },
    {
      title: "Blog Cards",
      images: 15,
      updated: "1 week ago",
    },
  ];

  return (
    <div
      className="min-h-screen px-6 py-4 dark:bg-neutral-900 dark:text-white bg-gray-100 text-gray-800"
    >
      <Modal ref={newProRef}>
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Create a new project</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="px-4 py-2 rounded-lg text-md font-medium  dark:text-white text-black hover:bg-sky-500"
        >
          <IconArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">Project Library</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div className="flex gap-4 w-full md:w-auto">
          <select
            className="px-4 py-2 w-full md:w-auto rounded-lg border bg-white text-gray-700 dark:bg-neutral-800 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option>All Projects</option>
            <option>Personal</option>
            <option>Work</option>
          </select>
          <select
            className="px-4 py-2 w-full md:w-auto rounded-lg border bg-white text-gray-700 dark:bg-neutral-800 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option>All Types</option>
            <option>Images</option>
            <option>Videos</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search projects..."
            className="flex-grow px-4 py-2 rounded-lg border bg-white text-gray-700 dark:bg-neutral-800 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button 
          className="px-4 py-2 w-full md:w-auto rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => newProRef.current?.open()}
          >
            New Project
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project}/>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing 1-3 of {projects.length} projects
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-neutral-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-neutral-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
