
import { useState } from 'react';
import { useActionState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {FormState,submitActionCreate} from '../../api/project';


export function CreateProjectForm() {
  const dispatch = useDispatch<AppDispatch>();
  const axiosPrivate = useAxiosPrivate();
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [state, formAction, isPending] = useActionState(
    (
      prevState: FormState, formData: FormData
    ) => submitActionCreate(
      prevState, formData, dispatch, axiosPrivate
    ),
     { errors: {}, message: '' }
    );

  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 dark:text-gray-300">Create a new project</h2>
      <form action={formAction} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full px-4 py-2 text-sm border dark:text-gray-300 dark:bg-neutral-800 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {state.errors?.title && (
            <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium  dark:text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 block w-full px-4 py-2 text-sm border dark:bg-neutral-800 dark:text-gray-300 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          {state.errors?.description && (
            <p className="text-red-500 text-sm mt-1">{state.errors.description}</p>
          )}
        </div>

        {/* Tags Field */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium dark:text-gray-300">
            Tags
          </label>
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              id="tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm border dark:text-gray-300 dark:bg-neutral-800 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-200 dark:text-gray-300 dark:bg-gray-700 text-sm rounded flex items-center gap-1">
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-red-600 text-xs hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          
          <input 
            type="hidden" 
            name="tags" 
            value={JSON.stringify(tags)}
            className='dark:bg-neutral-800' 
          />
          
          {state.errors?.tags && (
            <p className="text-red-500 text-sm mt-1">{state.errors.tags}</p>
          )}
        </div>

        {/* Status Message */}
        {state.message && (
          <p className={`text-sm mt-2 ${
            Object.keys(state.errors || {}).length > 0 
              ? 'text-red-500' 
              : 'text-green-500'
          }`}>
            {state.message}
          </p>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Creating...' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}