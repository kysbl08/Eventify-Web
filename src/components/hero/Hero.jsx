import React from "react";
import imgheader from "../../img/headerimg.png";
import EventFilterSearch from "../EventsListing/EventFilterSearch";

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
            <EventFilterSearch />
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
