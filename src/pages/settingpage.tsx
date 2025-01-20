import { useState } from "react";

function SettingsPage() {
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

  const regenerateApiKey = () => {
    const newApiKey = `sk_live_${Math.random().toString(36).substring(2)}`;
    setUserData((prev) => ({ ...prev, apiKey: newApiKey }));
    alert("New API key generated.");
  };

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  const handleChangePhoto = () => {
    alert("Change photo clicked!");
  };

  const handleRemovePhoto = () => {
    const confirmation = window.confirm("Are you sure you want to remove your profile photo?");
    if (confirmation) {
      alert("Profile photo removed.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-4 dark:bg-neutral-900 dark:text-white bg-gray-100 text-gray-800">
      <div className="w-full mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>
        {/* Profile Picture Section */}
        <div className="flex items-center space-x-4 mb-6">
          <img
              src={userData.profileUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <button
              onClick={handleChangePhoto}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2"
            >
              Change Photo
            </button>
            <button
              onClick={handleRemovePhoto}
              className="px-4 py-2 text-sm bg-transparent text-red-600 border border-red-600 rounded-lg hover:bg-red-100"
            >
              Remove
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={userData.fullName}
                onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
                <label htmlFor="role" className="block text-sm font-medium">
                Organization
                </label>
                <input
                type="text"
                id="role"
                name="role"
                value={userData.organization}
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="role" className="block text-sm font-medium">
                 Role
                </label>
                <input
                type="text"
                id="role"
                name="role"
                value={userData.role}
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Preferences</h2>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userData.preferences.emailNotifications}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    preferences: { ...prev.preferences, emailNotifications: e.target.checked },
                  }))
                }
                className="mr-2"
              />
              Email notifications for generation completion
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userData.preferences.weeklyReports}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    preferences: { ...prev.preferences, weeklyReports: e.target.checked },
                  }))
                }
                className="mr-2"
              />
              Weekly usage reports
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={userData.preferences.marketing}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    preferences: { ...prev.preferences, marketing: e.target.checked },
                  }))
                }
                className="mr-2"
              />
              Marketing communications
            </label>
          </div>
          <button
            type="button"
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="mt-8 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">API Access</h2>
        <div className="flex justify-between items-start">
          <input
            type="text"
            readOnly
            value={userData.apiKey}
            className="w-2/3 px-4 py-2 text-sm border border-gray-300 rounded-md mr-2"
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
