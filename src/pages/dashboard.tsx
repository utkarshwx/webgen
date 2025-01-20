import StatCard from "../components/ui/startcard";
import ImageCard from "../components/ui/imagecard";
import GenerationBar from "../components/ui/generationbar";

const Dashboard = () => {
  const generationHistory = [
    { name: "Mon", value: 75 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 90 },
  ];

  const popularCategories = [
    { name: "Headers", value: 65 },
    { name: "Profiles", value: 40 },
    { name: "Cards", value: 85 },
  ];

  const startcarddata = [
    { title: "Images Generated", value: "1,234", percentageChange: "12" },
    { title: "API creadits", value: "1234", percentageChange: "834", color: "green" },
    { title: "Projects", value: "12", percentageChange: "Active", color: "red" },
    { title: "Storage Use", value: "15GB", percentageChange: "12%", color: "yellow" },
    ];
  const cardData = [
    {
      image: 'https://picsum.photos/id/237/200/300',
      title: 'Header Image',
      subtitle: 'Generated 2h ago',
    },
    {
    image: 'https://picsum.photos/id/237/200/300',
      title: 'Profile Picture',
      subtitle: 'Generated 3h ago',
    },
    {
      image: 'https://picsum.photos/id/237/200/300',
      title: 'Card Background',
      subtitle: 'Generated 5h ago',
    },
    {
      image: 'https://picsum.photos/id/237/200/300',
      title: 'Card Background',
      subtitle: 'Generated 5h ago',
    },
  ];
  return (
    <main className="flex-1 p-8">
    {/* Overview Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {startcarddata.map((data, i) => (
            <StatCard key={i} {...data} />
        ))}
    </div>
    {/* Recent Generations */}
    <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Recent Generations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((data, i) => (
            <ImageCard key={i} {...data} />
        ))}
        </div>
    </section>

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
