import React, { useState } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("User Data");

  const tabs = ["User Data", "Events", "RSVPs", "Activity Log"];

  return (
    <div className="w-[900px] mx-auto mt-10 bg-white border border-lime-200 rounded-xl shadow-2xl p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-lime-800">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium pb-1 ${
              activeTab === tab
                ? "text-lime-800 border-b-2 border-lime-600"
                : "text-gray-500 hover:text-lime-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      {activeTab === "User Data" && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">Action</label>
              <input className="w-full border rounded p-2" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Username</label>
              <input className="w-full border rounded p-2" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input className="w-full border rounded p-2" type="password" />
            </div>
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input className="w-full border rounded p-2" type="text" />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input className="w-full border rounded p-2" type="text" />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 rounded">
                Execute
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border mt-6">
              <thead className="bg-lime-500 text-white">
                <tr>
                  <th className="px-4 py-2 border">UserID</th>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Username</th>
                  <th className="px-4 py-2 border">Acct. Type</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                    <td className="px-4 py-2 border"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
