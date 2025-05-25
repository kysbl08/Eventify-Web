import React from 'react';
import familyReunion from "../../img/familyReunion.png";
import imgBack from "../../img/back.png";

export default function MuseumTour1() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[auto_65%_35%] items-start gap-6 mt-6">
        <div className="md:col-span-1">
            <div className="flex justify-start">
                <button onClick={() => window.history.back()} className="w-10 text-[20px]"><img className="w-[80%]" src={imgBack} alt=" " /></button>
            </div>
        </div>
        {/* Left Side - Image */}
        <div>
          <img
            src={familyReunion}
            alt="Museum Tour"
            className="w-[full] h-[500px] object-cover rounded-md"
          />
        </div>

        {/* Right Side - Details */}
        <div className="bg-white rounded-md p-10 border shadow-sm">
          <h2 className="text-2xl font-bold mb-2 poppins text-[#527000]">Family Reunion</h2>
          <p className="text-sm poppins text-gray-700 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo risus est, eu pulvinar ipsum molestie nec.
          </p>

          <ul className="text-sm font-light poppins text-[#586140] mb-4 space-y-2">
            <li>📅 14 July 2025</li>
            <li>🕘 8:00 AM - 10:00 AM</li>
            <li>📍 Pasig City, Metro Manila</li>
          </ul>

          <span className="inline-block bg-[#1100FF] poppins text-white text-xs px-3 py-1 rounded-full mb-[80px]">
            Business
          </span>

          <p className="poppins text-sm text-gray-600 mb-6">
            Created by <span className="poppins text-[#A6C237] font-semibold">Kanade_8990</span>
          </p>

          <button className="w-full bg-lime-600 hover:bg-lime-700 poppins text-white py-2 px-4 rounded shadow">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}