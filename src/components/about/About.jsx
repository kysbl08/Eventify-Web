import React, {useState} from "react";
import LoginModal from "../userprofile/LoginModal";
import SignUp from "../userprofile/SIgnUp";
import imgArts from "../../img/artspic.png"
import imgBusiness from "../../img/businesspic.png"
import imgEduc from "../../img/educ.png"
import imgEntertainment from "../../img/entertainment.png"
import imgFamily from "../../img/family.png"
import imgSpiritual from "../../img/spiritual.png"



const About = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
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
              {showLogin && <LoginModal onClose={() => setShowLogin(false)}/>}
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ARTS & CULTURE</button>
            </div>

            {/* Second Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgBusiness} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => setShowSignUp(true)} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button>
              </div>
              {showSignUp && <SignUp/>}
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">BUSINESS</button>
            </div>

            {/* Third Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEduc} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">EDUCATION</button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[90%] h-[400px] px-20 ">
          <div className="grid grid-cols-3 gap-20 px-10">
            {/* Fourth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEntertainment} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ENTERTAINMENT</button>
            </div>

            {/* Fifth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgFamily} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">FAMILY</button>
            </div>

            {/* Sixth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgSpiritual} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">SPIRITUAL & RELIGIOUS</button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
