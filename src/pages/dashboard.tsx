import StatCard from "../components/ui/startcard";
import ImageCard from "../components/ui/imagecard";
import GenerationBar from "../components/ui/generationbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { fetchDashboardImageData } from "../store/Thunk/dashboardAction";

const Dashboard = () => {
  const {startcarddata,generationHistory,popularCategories,cardData}= useSelector((state:RootState) => state.dashboardState);
  const dispatch=useDispatch<AppDispatch>()
  const axiosPrivate=useAxiosPrivate()
  useEffect(() => {
    dispatch(fetchDashboardImageData({axiosPrivate, page: 1})); // Fetch the first page with 10 items
  }, [dispatch]);  
  return (
    <main className="flex-1 p-8">
    {/* Overview Section */}
    {startcarddata.length>0&&<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {startcarddata.map((data, i) => (
            <StatCard key={i} {...data} />
        ))}
    </div>}
    {/* Recent Generations */}
    {<section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Recent Generations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((data, i) => (
            <ImageCard key={i} {...data} />
        ))}
        </div>
    </section>}

    {/* Data Visualization */}
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {/* Generation History */}
        <GenerationBar title="Generation History" data={generationHistory} color="green"/>
        {/* Popular Categories */}
        <GenerationBar title="Popular Categories" data={popularCategories} color="blue"/>
    </section>
    </main>
  );
};

export default Dashboard;
