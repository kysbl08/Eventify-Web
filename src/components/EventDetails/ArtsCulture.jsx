import React from 'react';

export default function ArtsCulture() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center justify-start p-6 font-sans">
      {/* Main Content */}
      <div className="max-w-6xl w-full bg-white rounded-md p-4 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Left Side - Image */}
        <div>
          <img
            src="/images/museum.jpg"
            alt="Museum Tour"
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>

        {/* Right Side - Details */}
        <div className="bg-white rounded-md p-6 border shadow-sm">
          <h2 className="text-2xl font-bold mb-2 text-green-900">Museum Tour</h2>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            commodo risus est, eu pulvinar ipsum molestie nec.
          </p>

          <ul className="text-sm text-gray-800 mb-4 space-y-2">
            <li>📅 14 July 2025</li>
            <li>🕘 8:00 AM - 10:00 AM</li>
            <li>📍 Pasig City, Metro Manila</li>
          </ul>

          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4">
            Arts & Culture
          </span>

          <p className="text-sm text-gray-600 mb-6">
            Created by <span className="text-green-700 font-medium">Kanade_8990</span>
          </p>

          <button className="w-full bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded shadow">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}