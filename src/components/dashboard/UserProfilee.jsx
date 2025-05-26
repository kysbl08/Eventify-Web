import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F6FFEA] flex items-center justify-center pt-20">
      <div className="w-[1300px] h-[550px]  bg-white shadow-lg rounded-xl overflow-hidden border border-green-100">
        {/* Header */}
        <div className="text-center pt-6 border-b border-gray-300">
          <h1 className="text-[50px] font-semibold poppins text-[#3D5300]">User Dashboard</h1>
          {/* Tabs */}
          <div className="flex  justify-center mt-4 space-x-[100px] font-semibold poppins text-[#3D5300]">
            <button className="border-b-2 border-green-700 pb-1">User Profile</button>
            <button className="hover:text-green-900">RSVPs</button>
            <button className="hover:text-green-900">Account Settings</button>
          </div>
        </div>

        {/* User Profile Content */}
        <div className="px-[200px] py-6">
          <h2 className="text-[35px] font-semibold poppins text-[#3D5300] mb-6">User Profile</h2>
          <div className="space-y-[30px] px-[20px] poppins text-[16px] text-[#3D5300]">
            <div className="flex">
              <div className="w-40  text-gray-500">First Name</div>
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
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
