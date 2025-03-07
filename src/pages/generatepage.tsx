import { useActionState } from 'react';
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import HelpGuide from "../components/ui/helpguidprompt";
import { ComponentType,AspectRatio,StylePreset,OutputFormat} from "../utils/payloadtyles";
import RightPanelGenerate from "../components/ui/rightpanelgenerate";
import { useDispatch } from 'react-redux';
import { FormStateGenerateImage, handleGenerateAction } from '../api/image';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function GeneratePage() {
  const { id } = useParams<{ id: string }>();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [data,submitAction,isPending]=useActionState<FormStateGenerateImage,FormData>(
    (_previousState: FormStateGenerateImage,formData: FormData)=>handleGenerateAction(_previousState,formData,dispatch,axiosPrivate,id ?? '')
    ,{})
  //console.log(data,isPending)
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
            <form action={submitAction}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Component Type <span className='text-red-700 dark:text-red-400'>⁕</span></label>
              <select 
              id="component_type" name="type"
              className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option value={ComponentType.HEADER}>Header/Banner Images</option>
                <option value={ComponentType.CARD}>Card Images</option>
                <option value={ComponentType.PROFILE}>Profile Images</option>
                <option value={ComponentType.BACKGROUND}>Background Images</option>
                <option value={ComponentType.THUMBNAIL}>Thumbnails</option>
                <option value={ComponentType.PRODUCT}>Product Images</option>
                <option value={ComponentType.ICON}>Icons</option>
                <option value={ComponentType.INFOGRAPHIC}>Infographic Images</option>
                <option value={ComponentType.TESTIMONIAL}>Testimonials/Review Images</option>
                <option value={ComponentType.CTA}>CTA Images</option>
              </select>
            </div>

            {/* Aspect Ratio */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Aspect Ratio</label>
              <select
              id="aspect_ratio" name="ratio" 
              className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option value=''>Auto</option>
                <option value={AspectRatio.RATIO_1_1}>1:1</option>
                <option value={AspectRatio.RATIO_16_9}>16:9</option>
                <option value={AspectRatio.RATIO_9_16}>9:16</option>
                <option value={AspectRatio.RATIO_5_4}>5:4</option>
                <option value={AspectRatio.RATIO_4_5}>4:5</option>
                <option value={AspectRatio.RATIO_3_2}>3:2</option>
                <option value={AspectRatio.RATIO_2_3}>2:3</option>
              </select>
            </div>

            {/* Negative Prompt */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Negative Prompt</label>
              <textarea
                id="negative_prompt" name="negative_prompt"
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="Describe what you do NOT want in the image..."
              ></textarea>
            </div>

            {/* Output Format */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Output Format</label>
              <select
                id="output_format" name="output_format"
                defaultValue={OutputFormat.JPEG}
               className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700">
                <option value={OutputFormat.JPEG}>jpeg</option>
                <option value={OutputFormat.PNG}>png</option>
              </select>
            </div>

            {/* Prompt */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Prompt<span className='text-red-700 dark:text-red-400'>⁕</span></label>
              <textarea
                id="prompt" name="prompt"
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
                placeholder="Describe the image you want to generate..."
                defaultValue={String(data?.prevValue?.prompt ?? '')}
              ></textarea>
            </div>

            {/* Color Scheme */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Color Scheme</label>
              <fieldset className="flex gap-10 mt-2 items-start">
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
              </fieldset>
            </div>

            {/* Style Preset */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Style Preset</label>
              <select 
                id="style_preset" name="style_preset"
                className="w-full mt-2 p-2 border rounded dark:bg-neutral-800 dark:border-neutral-700"
              >
                <option value={StylePreset.MINIMALIST}>Minimalist</option>
                <option value={StylePreset.MODERN}>Modern</option>
                <option value={StylePreset.CORPORATE}>Corporate</option>
                <option value={StylePreset.CREATIVE}>Creative</option>
                <option value={StylePreset.GEOMETRIC}>Geometric</option>
                <option value={StylePreset.SKETCH}>Sketch</option>
              </select>
            </div>

            <button disabled={isPending} className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Generate Image
            </button>
            </form>
            {/* error handling */}
            {data?.error && (
          <div className="mt-3 text-sm text-red-600 bg-red-100 p-2 rounded dark:bg-red-800 dark:text-red-300">
            {data?.error}
          </div>
        )}
            {/* Help Guide */}
            <HelpGuide/>
          </div>

          {/* Right Panel */}
          {isPending && (<div className="w-full h-[400px] bg-gray-300 dark:bg-neutral-800 flex items-center justify-center rounded-lg relative overflow-hidden">
            {/* Animated Loading Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 animate-pulse"></div>
            {/* Loading Text */}
            <strong className="relative text-gray-700 dark:text-gray-300">Loading...</strong>
          </div>)}
          {!isPending && <RightPanelGenerate img={data?.img}/>}
        </div>
      </div>
    </div>
  );
}

export default GeneratePage;
