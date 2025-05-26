import React , { useState}from "react";

const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState("profile");
    
    return (
        <div className="min-h-screen bg-[#F6FFEA] flex items-center justify-center pt-20">
          <div className="w-[1300px] h-[550px] bg-white shadow-lg rounded-xl overflow-hidden border border-green-100">
            {/* Header */}
            <div className="text-center pt-6 border-b border-gray-300">
              <h1 className="text-[50px] font-semibold poppins text-[#3D5300]">User Dashboard</h1>
              
              {/* Tabs */}
              <div className="flex justify-center mt-4 space-x-[100px] font-semibold poppins text-[#3D5300]">
                <button
                  className={`pb-1 ${activeTab === "profile" ? "border-b-2 border-green-700" : "hover:text-green-900"}`}
                  onClick={() => setActiveTab("profile")}
                >
                  User Profile
                </button>
                <button
                  className={`pb-1 ${activeTab === "rsvp" ? "border-b-2 border-green-700" : "hover:text-green-900"}`}
                  onClick={() => setActiveTab("rsvp")}
                >
                  RSVPs
                </button>
                <button
                  className={`pb-1 ${activeTab === "settings" ? "border-b-2 border-green-700" : "hover:text-green-900"}`}
                  onClick={() => setActiveTab("settings")}
                >
                  Account Settings
                </button>
              </div>
            </div>
    
            {/* Tab Content */}
            <div className="px-[200px] py-6 overflow-y-auto h-[400px]">
              {activeTab === "profile" && (
                <>
                  <h2 className="text-[35px] font-semibold poppins text-[#3D5300] mb-6">User Profile</h2>
                  <div className="space-y-[30px] px-[20px] poppins text-[16px] text-[#3D5300]">
                    <div className="flex">
                      <div className="w-40 text-gray-500">First Name</div>
                      <div className="font-semibold pl-[100px]">Kyla Isabel</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 text-gray-500">Last Name</div>
                      <div className="font-semibold pl-[100px]">Flores</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 text-gray-500">Birthday</div>
                      <div className="font-semibold pl-[100px]">August 28, 2005</div>
                    </div>
                    <div className="flex">
                      <div className="w-40 text-gray-500">Username</div>
                      <div className="font-semibold pl-[100px]">kanade_0950</div>
                    </div>
                  </div>
                  <div className="mt-8 text-right">
                    <button className="px-[20px] py-[12px] border-[2px] border-[#3D5300] text-[#3D5300] poppins text-[15px] font-bold rounded-[10px] hover:bg-[#3D5300] hover:text-white transition">
                      EDIT PROFILE
                    </button>
                  </div>
                </>
              )}
    
              {activeTab === "rsvp" && (
                <>
                  <h2 className="text-[35px] font-semibold poppins text-[#3D5300] mb-6">RSVPs</h2>
                  <div className="space-y-4">
                    {[
                      "Arena Concert",
                      "Field Day"
                    ].map((event, i) => (
                      <div key={i} className="flex justify-between items-center bg-white px-12 py-7 rounded-xl shadow-lg">
                        <span className=" text-[#3D5300] font-semibold">{event}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-green-600 pr-[250px] font-regular">Going</span>
                          <button className="hover:text-yellow-700">✏️</button>
                          <button className="hover:text-red-700">🗑️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
    
              {activeTab === "settings" && (
                <>
                  
                  <div className="flex justify-center gap-10 mt-[150px]">
                    <button className="px-[110px] py-[10px] border-[2px] border-[#6B9102] text-[#6B9102] poppins text-[15px] font-bold rounded-[10px] hover:bg-[#6B9102] hover:text-white transition">
                      Log out
                    </button>
                    <button className="px-[80px] py-[10px]  bg-[#6B9102] text-[#ffffff] poppins text-[15px] font-bold rounded-[10px] hover:bg-[#3D5300] hover:text-white transition">
                      Delete Account
                    </button>
                  </div>
                    
                </>
              )}
            </div>
          </div>
        </div>
      );
};

export default UserDashboard;
