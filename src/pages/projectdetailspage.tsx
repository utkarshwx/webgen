"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageCard from "../components/ui/imagecard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { formatDistanceToNow } from "date-fns";
import { IconArrowLeft } from "@tabler/icons-react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { FormState,submitActionDelete,submitActionUpdate } from "../api/project";
import Modal from "../components/modals/modal";
import { cn } from "../lib/utils";
import ConfirmationModal from "../components/modals/deleteproject";
import ProjectLoading from "../components/splash/projectloading";
import { TagInput } from "../components/ui/tag";

const statusColors = {
  draft: "bg-yellow-500",
  "in-progress": "bg-blue-500",
  completed: "bg-green-500",
};


const ProjectDetailsPage = () => {
  const newProRef = useRef<{ open: () => void, close: () => void } | null>(null)
  const refMessage = useRef<{ open: () => void, close: () => void } | null>(null)
  const axiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project = useSelector((state: RootState) =>
    state.projectState.projects.find((proj) => proj._id === id)
);
function HandleClose(){
  newProRef.current?.close();
}
const [title, setTitle] = useState(project?.title || "");
const [description, setDescription] = useState(project?.description || "");
const [status, setStatus] = useState(project?.status || "draft");
const [tags, setTags] = useState<string[]>(project?.tags?.length ?? 0 > 0 ? project?.tags||[] : ["tag"]);

  /* const submitAction = async(_prevState: FormState, formData: FormData,dispatch:AppDispatch,axiosPrivate:Axios,id?:string) => {
    try {
      const payload = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        status: formData.get("status") as string,
      };

      // Client-side validation
      const errors: FormState["errors"] = {};
      if (!payload.title.trim()) errors.title = "Title is required";
      if (!payload.description.trim()) errors.description = "Description is required";

      if (Object.keys(errors).length > 0) {
        return { errors, message: "Validation failed" };
      }

      const response = await axiosPrivate.put(`/api/v1/project/${id}`, payload);
      console.log("Update successful:", response.data.data);
      dispatch(projectActions.updateProject(response.data.data));

      return {
        errors: {},
        message: "Project updated successfully!",
      };
    } catch (error: any) {
      console.error("Update failed:", error);
      return {
        errors: {
          title: error.response?.data?.errors?.title,
          description: error.response?.data?.errors?.description,
        },
        message: error.response?.data?.error?.message || "Failed to update project",
      };
    }
  } */

  const [state, formAction, isPending] = useActionState((_prevState:FormState,formData:FormData)=>submitActionUpdate(_prevState,formData,dispatch,axiosPrivate,id), { errors: {}, message: "" });

  const handleGenerate = () => {
    navigate(`/generate/${id}`);
  };
  useEffect(() => {
    if (isPending) {
      refMessage?.current?.open(); // Replace with your actual function
    }
  }, [isPending]);
  if (!project) {
    if(isPending) return <ProjectLoading/>
    else navigate("/projects");
  }

  return (
    <div className="min-h-screen px-6 py-4 dark:bg-neutral-900 dark:text-white bg-gray-100 text-gray-800">
      {/* Delete Conform Modal */}
      {id && <Modal ref={newProRef}><ConfirmationModal 
      close={HandleClose} 
      data={{id}} 
      action={submitActionDelete}
      warnning="Are you sure you want to delete this item? This action cannot be undoneand will delete all associated images."
      /></Modal>}
      <form action={formAction}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg text-md font-medium dark:text-white text-black hover:bg-sky-500"
          >
            <IconArrowLeft size={20} />
          </button>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-semibold bg-transparent border-b border-transparent focus:border-gray-300 dark:focus:border-gray-600 outline-none"
          />
          {state.errors?.title && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
          )}
        </div>

        {/* Editable Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-neutral-700"
              rows={2}
            />
            {state.errors?.description && (
              <p className="text-red-500 text-sm mt-1">{state.errors.description}</p>
            )}
          </div>
          {/* Read-only Details */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Details</h2>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Total Images:</span> {project?.images.length}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Last Updated:</span>{" "}
              {formatDistanceToNow(new Date(project?.updatedAt ?? ''))} ago
            </p>
          </div>
          {/* Status */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Status</h2>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`px-2 py-1 text-white text-xs font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                statusColors[status as keyof typeof statusColors]
              }`}
            >
              <option value="draft">Draft</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="font-medium">Tags:</span>{" "}
              {tags.length>0&&<TagInput value={tags}  onChange={setTags} className="h-6" />}
              <input 
                type="hidden" 
                name="tags" 
                value={JSON.stringify(tags)}
                className='dark:bg-neutral-800' 
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4 mb-6">
          {/* Status Message */}
          {state.message && (
            <Modal ref={refMessage}>
            <p className={cn(`text-sm mt-2 p-5 rounded-md text-center bg-indigo-950`,` ${
              state.message.includes("success") ? "text-green-500" : "text-red-500"
            }`)}>
              {state.message}
            </p>
            </Modal>
          )}
          <button
            type="button"
            onClick={() => newProRef.current?.open()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>

      {/* Images Grid */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project?.images.map((img, index) => (
            <ImageCard
              key={index}
              Pid={id ?? ''}
              {...img}
            />
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-end">
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Generate
        </button>
      </div>

      
    </div>
  );
};

export default ProjectDetailsPage;