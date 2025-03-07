import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft,IconFilter } from "@tabler/icons-react";
import ProjectCard from "../components/ui/projectcard";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/modals/modal";
import { AppDispatch,RootState } from "../store";
import { fetchProjects } from "../store/Thunk/projectActions";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { CreateProjectForm } from "../components/modals/createproject";
import ProjectLoading from "../components/splash/projectloading";
import { cn } from "../lib/utils";
import { TagInput } from "../components/ui/tag";

const ProjectPage = () => {
  // Add state for filters
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [tags, setTags] = useState<string[]>([]);
  // Predefined tag options
  const tagOptions = [
    { value: 'important', label: 'Important' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'personal', label: 'Personal' },
    { value: 'work', label: 'Work' }
  ];
  const axiosPrivate = useAxiosPrivate();
  const newProRef = useRef<{ open: () => void, close: () => void } | null>(null)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {projects,pagination,loading}= useSelector((state:RootState) => state.projectState);
  
  const handleApplyFilters = () => {
    dispatch(fetchProjects({
      axiosPrivate,
      page: 1,
      limit: 10,
      title: searchTitle,
      status: statusFilter !== "all" ? statusFilter : undefined,
      tags: tags.length > 0 ? tags : undefined
    }));
  };
  const NextPage = (step:number) => {
    dispatch(fetchProjects({
      axiosPrivate,
      page: pagination.totalPages>=pagination.page-step&&pagination.page-step>0?pagination.page-step:pagination.page,
      limit: 10,
      title: searchTitle,
      status: statusFilter !== "all" ? statusFilter : undefined,
      tags: tags.length > 0 ? tags : undefined
    }));
  };
  useEffect(() => {
    dispatch(fetchProjects({axiosPrivate, page: 1, limit: 10 })); // Fetch the first page with 10 items
  }, [dispatch]);
  if (!loading && projects.length === 0) {
    return <ProjectLoading/>;
  }

  return (
    <div
      className="min-h-screen px-6 py-4 dark:bg-neutral-900 dark:text-white bg-gray-100 text-gray-800"
    >
      <Modal ref={newProRef}>
        <CreateProjectForm/>
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
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 w-full md:w-auto rounded-lg border bg-white text-gray-700 dark:bg-neutral-800 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <TagInput className="w-full md:w-94" value={tags} options={tagOptions} onChange={setTags} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto">
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Search by title..."
            className="flex-grow px-4 py-2 rounded-lg border bg-white text-gray-700 dark:bg-neutral-800 dark:text-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleApplyFilters}
            className="px-4 py-2 w-full md:w-auto rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <IconFilter size={20} />
            Apply Filters
          </button>
          <button 
          className="px-4 py-2 w-full md:w-auto rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => newProRef.current?.open()}
          >
            New Project
          </button>
        </div>
      </div>

      {/* Project Cards */}
      {projects.length === 0 && <p className="text-2xl text-center text-gray-500 dark:text-gray-400">Create Project To Get Start</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} status={project.status as "draft" | "in-progress" | "completed"}/>
        ))}
      </div>

      {/* Pagination */}
      {pagination.totalPages!=0&&<div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing page {pagination.page} of 1-{pagination.totalPages} pages.
        </p>
        <div className="flex items-center gap-2">
          <button
          onClick={()=>NextPage(+1)} 
          className={cn(
            "px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-neutral-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600",
            pagination.page==1?"hidden":"block"
            )}>
            Previous
          </button>
          <button 
          onClick={()=>NextPage(-1)}
          className={cn(
            "px-4 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-neutral-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600",
            pagination.page==pagination.totalPages?"hidden":"block"
            )}>            
            Next
          </button>
        </div>
      </div>}
    </div>
  );
};

export default ProjectPage;
