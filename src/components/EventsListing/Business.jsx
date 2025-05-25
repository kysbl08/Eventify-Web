import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgBack from "../../img/back.png";
import imgheader from "../../img/headerimg.png";
import grandOpening from "../../img/grandOpening.png";
import businessConference from "../../img/businessConference.png";
import businessMeeting from "../../img/businessMeeting.png";

export default function Business() {
  const navigate = useNavigate();

  const events = [
    {
      image: grandOpening,
      name: 'Event Name: Grand Opening',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
      route: '/event-details/grand-opening',
    },
    {
      image: businessConference,
      name: 'Event Name: Business Conference',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
      route: '/event-details/business-conference',
    },
    {
      image: businessMeeting,
      name: 'Event Name: Business Meeting',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
      route: '/event-details/business-meeting',
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen font-sans">
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
            <p className="text-4xl text-[#FEFAE0] md:text-6xl font-normal tracking-wider poppins text-white">
              Your Events, Your Way
            </p>
            <p className="text-lg text-[#FEFAE0] poppins text-white max-w-2xl">
              Plan and filter your perfect events with ease and flexibility.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl px-4 sm:px-0">
              <div className="relative w-full">
                <select className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 text-black poppins text-normal dark:text-white shadow">
                  <option disabled selected value="">Select Category</option>
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
              <div className="relative w-full">
                <select className="appearance-none w-full p-3 pr-10 rounded-md bg-white dark:bg-gray-800 poppins text-normal text-black dark:text-white shadow">
                  <option disabled selected value="">Select Location</option>
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
              <button onClick={() => setShowLogin(true)} className="p-3 rounded-md bg-[#A4B465] poppins text-normal text-[#FEFAE0] hover:bg-[#3D5300] transform transition-all duration-100">
                Search
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="py-10 px-[150px] text-center">
      <div className="flex justify-start mb-4">
        <button
          onClick={() => window.history.back()}
          className="mb-[-100px] flex items-center space-x-2 text-green-900 hover:text-green-700 text-base"
        >
          <img src={imgBack} alt="Back Icon" className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
        <div className="my-[100px] flex flex-wrap justify-center gap-[90px]">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => navigate(event.route)}
              className="bg-white shadow-md rounded-md overflow-hidden w-80 "
            >
              <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-[#3D5300] poppins text-lg">{event.name}</h3>
                <p className="pb-2 text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="pb-7 poppins text-sm font-light mb-2">{event.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm poppins text-gray-600 mb-2">
                    Created by <br /><span className="text-[#A6C237] poppins font-bold">{event.creator}</span>
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(event.route);
                    }}
                    className="mt-2 px-4 py-1 poppins text-[14px] font-semibold border-2 border-[#3D5300] text-[#3D5300] rounded-[7px] hover:bg-[#3D5300] hover:text-white transition"
                  >
                    SEE EVENT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
