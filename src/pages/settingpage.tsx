import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import AccountSettings from "../components/accountsetting";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { fetchUser } from "../store/Thunk/userAction";

function SettingsPage() {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch<AppDispatch>();
  const [userData, setUserData] = useState({
    profileUrl:"https://picsum.photos/id/237/200/300",
    fullName: "John Doe",
    email: "john@example.com",
    organization: "Company Inc.",
    role: "Developer",
    preferences: {
      emailNotifications: true,
      weeklyReports: true,
      marketing: false,
    },
    apiKey: "sk_live_xxxxxxxxxxxxxxxxxxxxxxx",
  });
  const{user,loading}=useSelector((state:RootState) => state.userState);
  const regenerateApiKey = () => {
    const newApiKey = `sk_live_${Math.random().toString(36).substring(2)}`;
    setUserData((prev) => ({ ...prev, apiKey: newApiKey }));
    alert("New API key generated.");
  };
  useEffect(() => {
    dispatch(fetchUser({ axiosPrivate }));
  }, [dispatch]);
  return (
    <div className="min-h-screen px-6 py-4 dark:bg-neutral-900 dark:text-white bg-gray-100 text-gray-800">
      {loading && <p>Loading...</p>}
      {user && <AccountSettings />}
      <div className="mt-8 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">API Access</h2>
        <div className="flex justify-between items-start">
          <input
            type="text"
            readOnly
            value={userData.apiKey}
            className="w-2/3 px-4 py-2 text-sm border dark:bg-neutral-800 dark:text-gray-300 border-gray-300 rounded-md mr-2"
          />
          <button
            onClick={regenerateApiKey}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Generate New Key
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
