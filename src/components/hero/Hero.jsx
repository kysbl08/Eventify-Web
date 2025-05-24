import React from "react";
import imgheader from "../../img/headerimg.png";

const Hero = () => {
  return (
    <>
      <main
        className="w-full bg-secondary dark:bg-gray-900 dark:text-white"
        style={{
          backgroundImage: `url(${imgheader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/20 w-full h-full">
          <div className="container flex flex-col items-center justify-end text-center min-h-[500px] py-12 space-y-6">
            <p className="text-4xl text-[#FEFAE0] md:text-6xl font-normal tracking-wider poppins text- text-white">
              Your Events, Your Way
            </p>

            <p className="text-lg text-[#FEFAE0] poppins text- text-white max-w-2xl">
              Plan and filter your perfect events with ease and flexibility.
            </p>

            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl px-4 sm:px-0">
              {/* Select Category */}
              <div className="relative w-full">
                <select className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 text-black poppins text-normal dark:text-white shadow">
                  <option value="" disabled selected>Select Category</option>
                  <option value="arts">Arts & Culture</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="family">Family</option>
                  <option value="spiritual">Spiritual & Religious</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-white text-sm">
                  ▼
                </div>
              </div>


              {/* Select Location */}
              <div className="relative w-full">
                <select className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 poppins text-normal text-black dark:text-white shadow">
                  <option value="" disabled selected>Select Location</option>
                  <option value="arts">Arts & Culture</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="family">Family</option>
                  <option value="spiritual">Spiritual & Religious</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-white text-sm">
                  ▼
                </div>
              </div>


              {/* Filter by Category Button */}
              <button className="p-3 rounded-md bg-[#A4B465] poppins text-normal text-[#FEFAE0] hover:bg-[#3D5300] transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
