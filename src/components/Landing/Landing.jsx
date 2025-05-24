import React, {useState} from "react";
import imgheader from "../../img/headerimg.png";
import LoginModal from "../userprofile/LoginModal";
import imgArts from "../../img/artspic.png"
import imgBusiness from "../../img/businesspic.png"
import imgEduc from "../../img/educ.png"
import imgEntertainment from "../../img/entertainment.png"
import imgFamily from "../../img/family.png"
import imgSpiritual from "../../img/spiritual.png"
import imgLogo from "../../img/logo.png";

const Hero = () => {
    document.title = "Eventify - Landing";
    const [showLogin, setShowLogin] = useState(false);
    const [isDis, setIsDis] = useState(true);

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
              Your Events, Your Way, tinry ko lang pano wo magwork
            </p>

            <p className="text-lg text-[#FEFAE0] poppins text- text-white max-w-2xl">
              Plan and filter your perfect events with ease and flexibility.
            </p>

            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl px-4 sm:px-0">
              {/* Select Category */}
              <div className="relative w-full">
                <select disabled selected className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 text-black poppins text-normal dark:text-white shadow">
                  <option value="" >Select Category</option>
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
                <select disabled selected className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 poppins text-normal text-black dark:text-white shadow">
                  <option value="" >Select Location</option>
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
              <button  disabled={isDis}  onClick={() => setShowLogin(true)} className="p-3 rounded-md bg-[#A4B465]/70 poppins text-normal text-[#FEFAE0] ">
                Search
              </button>
            </div>
          </div>
        </div>
      </main>

      <section
        id="about"
        className="bg-[#FEFAE0] dark:bg-slate-800 dark:t  `ext-white"
      >
        
        <div className="mx-auto w-[90%] h-[600px] px-20 py-20">
          <p className="mb-10 ml-10 text-[20px] text-[#3D5300] font-bold poppins text-xl">Browse by Category</p>

          <div className="grid grid-cols-3 gap-20 px-10">
            {/* First Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgArts} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ARTS & CULTURE</button>
            </div>

            {/* Second Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgBusiness} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button>
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">BUSINESS</button>
            </div>

            {/* Third Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEduc} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">EDUCATION</button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[90%] h-[400px] px-20 ">
          <div className="grid grid-cols-3 gap-20 px-10">
            {/* Fourth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEntertainment} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ENTERTAINMENT</button>
            </div>

            {/* Fifth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgFamily} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">FAMILY</button>
            </div>

            {/* Spiritual & Religious Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgSpiritual} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowLogin(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => setShowLogin(true)} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">SPIRITUAL & RELIGIOUS</button>
            </div>
          </div>
          {showLogin && <LoginModal onClose={() => setShowLogin(false)}/>}
        </div>
      </section>
        <div className="bg-[#3D5300]">
            
            <footer className="flex flex-row items-center mx-auto justify-center text-center w-[50%] h-30 py-6  dark:bg-slate-950 dark:text-white">
                <div className="flex justify-start">
                    <img src={imgLogo} alt="" className=" bg-[#3D5300] w-50 h-20 mx-auto"/>
                </div>
                <div className="flex justify-end">
                    <p className="poppings text-normal pl-6 font-bold text-[#FEFAE0] tracking-wider"> |   </p>
                    <p className="poppings text-normal pl-8 font-bold text-[#FEFAE0] tracking-wider"> All Rights Reserved 2025  </p>
                </div>   
            </footer>
        </div>
        
    </>
  );
};

export default Hero;
