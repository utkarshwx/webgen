import { useNavigate } from "react-router-dom";

const BillingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex w-full min-h-screen bg-gray-100 dark:bg-neutral-900">
            <div className="flex flex-col gap-6 w-full p-6 bg-white dark:bg-neutral-900">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Billing & Subscription
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your subscription and billing details
                    </p>
                </div>

                {/* Current Plan Section */}
                <div className="grid grid-cols-1  gap-6">
                    <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                            Current Plan
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                                Pro Plan - Monthly
                            </span>
                            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full dark:text-green-200 dark:bg-green-700">
                                Active
                            </span>
                        </div>

                        {/* Plan Details in Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Next Billing Date */}
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Next Billing Date</p>
                                <p className="text-gray-800 dark:text-gray-100 font-medium">
                                    Feb 1, 2024
                                </p>
                            </div>

                            {/* Monthly Cost */}
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Monthly Cost</p>
                                <p className="text-gray-800 dark:text-gray-100 font-medium">$49.00</p>
                            </div>

                            {/* Images Remaining */}
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Images Remaining</p>
                                <p className="text-gray-800 dark:text-gray-100 font-medium">
                                    842 of 1,000
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button 
                            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
                            onClick={()=>navigate('/pricing')}
                            >
                                Upgrade Plan
                            </button>
                            <button className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600">
                                Cancel Subscription
                            </button>
                        </div>
                    </div>

                    
                </div>

                {/* Usage Overview Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
                            Usage Overview
                        </h3>
                        {[
                            { label: "API Calls", value: "758/1000", width: "75.8%" },
                            { label: "Storage Used", value: "4.2GB/5GB", width: "84%" },
                            { label: "Processing Time", value: "12.5hrs/20hrs", width: "62.5%" },
                        ].map((item, index) => (
                            <div key={index} className="mb-4">
                                <p className="text-gray-500 dark:text-gray-400">{item.label}</p>
                                <div className="relative h-4 bg-gray-200 dark:bg-neutral-700 rounded-full">
                                    <div
                                        className="absolute top-0 left-0 h-4 bg-blue-600 dark:bg-blue-500 rounded-full"
                                        style={{ width: item.width }}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Billing History Section */}
                    <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
                            Billing History
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { date: "Jan 1, 2024", amount: "$49.00" },
                                { date: "Dec 1, 2023", amount: "$49.00" },
                                { date: "Nov 1, 2023", amount: "$49.00" },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center text-gray-800 dark:text-gray-100"
                                >
                                    <span>{item.date}</span>
                                    <span>{item.amount}</span>
                                    <a
                                        href="#"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Download
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Payment Method Section */}
                <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
                        Payment Method
                    </h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-800 dark:text-gray-100">**** **** **** 4242</p>
                            <p className="text-gray-600 dark:text-gray-400">Expires 12/25</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-200 dark:bg-neutral-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-600">
                            Add Payment Method
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;
