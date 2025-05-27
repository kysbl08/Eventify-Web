import React, {useState} from "react";
import imgheader from "../../img/headerimg.png";
import imgArts from "../../img/artspic.png"
import imgBusiness from "../../img/businesspic.png"
import imgEduc from "../../img/educ.png"
import imgEntertainment from "../../img/entertainment.png"
import imgFamily from "../../img/family.png"
import imgSpiritual from "../../img/spiritual.png"
import imgLogo from "../../img/logo.png";
import openDiscussion from "../../img/openDiscussion.png";
import businessMeeting from "../../img/businessMeeting.png";
import imgMuseum2 from "../../img/museumTour2.png";
import wedding from "../../img/wedding.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../../img/calendarBG.png";
import { useNavigate } from "react-router-dom";

  const events = [
    {
      name: "Event Name: Open Discussion",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec. Aliquam tristique nunc quis arcu scelerisque, quis vulputate ex placerat. Nunc a tincidunt odio, eleifend imperdiet justo.",
      image: openDiscussion
    },
    {
      name: "Event Name: Business Meeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec. Aliquam tristique nunc quis arcu scelerisque, quis vulputate ex placerat. Nunc a tincidunt odio, eleifend imperdiet justo.",
      image: businessMeeting
    },
    {
      name: "Event Name: Museum Tour",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec. Aliquam tristique nunc quis arcu scelerisque, quis vulputate ex placerat. Nunc a tincidunt odio, eleifend imperdiet justo.",
      image: imgMuseum2
    },
    {
      name: "Event Name: Wedding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec. Aliquam tristique nunc quis arcu scelerisque, quis vulputate ex placerat. Nunc a tincidunt odio, eleifend imperdiet justo.",
      image: wedding
    },
  ];
  
  const eventsCal = [
    {
      title: "Wedding (Family)",
      date: "May 23, 2025",
      time: "Thursday @ 7am",
      location: "Nueva Ecija, Cabaratuan",
    },
    {
      title: "Araneta Concert (Entertainment)",
      date: "May 6, 2025",
      time: "Tuesday @ 10pm",
      location: "Baguio, Benguet",
    },
    {
      title: "Field Day (Education)",
      date: "May 17, 2025",
      time: "Friday @ 9am",
      location: "Malolos, Bulacan",
    },
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const currentMonth = 4; // May (0-indexed)
  const currentYear = 2025;

const Homepage = () => {
    document.title = "Eventify - Landing";
    const [showLogin, setShowLogin] = useState(false);
    const [isDis, setIsDis] = useState(true);
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = date.getDay();

    // Fill initial empty cells
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const days = getDaysInMonth(currentMonth, currentYear);

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
        <div id="Categories" className="bg-black/20 w-full h-full">
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
                  <option disabled selected value="" >Select Category</option>
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
                  <option disabled selected value="" >Select Location</option>
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
              <button onClick={() => setShowLogin(true)} className="p-3 rounded-md bg-[#A4B465] poppins text-normal text-[#FEFAE0] hover:bg-[#3D5300] transform transition-all duration-100 ">
                Search
              </button>
            </div>
          </div>
        </div>
      </main>

      <section
        id="about"
        className="bg-[#F6FFEA]  dark:bg-slate-800 dark:t  `ext-white"
      >
        
        <div className="mx-auto w-[90%] h-[600px] px-20 py-20">
          <p className="mb-10 ml-10 text-[20px] text-[#3D5300] font-bold poppins text-xl">Browse by Category</p>

          <div className="grid grid-cols-3 gap-20 px-10">
            {/* First Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgArts} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/arts-events")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => navigate("/arts-events")} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ARTS & CULTURE</button>
            </div>
            {/* Second Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgBusiness} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/business")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button>
              </div>
              <button onClick={() => navigate("/business")} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">BUSINESS</button>
            </div>

            {/* Third Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEduc} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/education")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => navigate("/education")}  className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">EDUCATION</button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[90%] h-[400px] px-20 ">
          <div className="grid grid-cols-3 gap-20 px-10">
            {/* Fourth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgEntertainment} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/entertainment")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => navigate("/entertainment")} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">ENTERTAINMENT</button>
            </div>

            {/* Fifth Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgFamily} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/family")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => navigate("/family")} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">FAMILY</button>
            </div>

            {/* Spiritual & Religious Card */}
            <div className="w-[63%] mx-auto">
              <div className="relative w-full">
                <img src={imgSpiritual} alt="" className="w-[400px] h-[270px] rounded-lg" />
                <button onClick={() => navigate("/spiritualNreligious")} className="absolute right-5 bottom-5 text-white italic text-sm hover:font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-[-2px]">
                  Explore
                </button> 
              </div>
              <button onClick={() => navigate("/spiritualNreligious")} className="mt-7 text-black font-semibold text-[#3D5300] poppins text-l text-left">SPIRITUAL & RELIGIOUS</button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="w-[1920px] h-[805px] mx-auto pt-[100px] min-h-screen bg-cover bg-center p-6 flex flex-col md:flex-row gap-8"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Calendar Section */}
        <div className="bg-lime-50 text-lime-900 rounded-xl p-5 h-[650px] ml-[90px] shadow-2xl w-full md:w-1/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="poppins text-[40px] pb-[50px] font-bold">May 2025</h2>
            <div className="flex gap-2">
              <button className="pb-[50px] rounded">
                <ChevronLeft size={32} />
              </button>
              <button className="pb-[50px] rounded">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center font-semibold text-lime-800 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-[40px] text-center">
            {days.map((date, index) => {
              const day = date?.getDate();
              const highlight =
                day === 6
                  ? "bg-lime-200 text-black"
                  : day === 17
                  ? "bg-lime-600 text-white"
                  : day === 23
                  ? "bg-lime-300 text-black"
                  : "";

              return (
                <div
                  key={index}
                  className={`h-8 w-8 mx-auto flex items-center justify-center rounded-full cursor-pointer ${highlight}`}
                >
                  {day || ""}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events Section */}
        <div className="flex-1 space-y-[50px] overflow-hidden">
          <h2 className="pl-[60px] pt-[30px] text-[40px] font-regular italic tracking-[40px] text-lime-100">
            CALENDAR EVENTS
          </h2>
          {eventsCal.map((event, idx) => (
            <div
              key={idx}
              className="bg-lime-100 text-lime-900 rounded-xl p-[30px] ml-[50px] mr-[90px] shadow-md flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm">{event.date} – {event.time}</p>
                <p className="text-sm mt-1 flex items-center">
                  <span className="mr-1">📍</span> {event.location}
                </p>
              </div>
              <button className="text-sm text-lime-800 font-medium hover:underline">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-[#f5fbe8] py-16 px-4 text-center">
        <h2 className="text-[35px] font-semibold poppins text-[#3D5300] mb-2">Sample Events</h2>
        <p className="text-black poppins max-w-4xl mx-auto mb-20">
          Nam scelerisque sapien a tellus tincidunt, aliquet porttitor massa
          pharetra. In hac habitasse platea dictumst. Sed mattis sollicitudin
          quam, ac pharetra leo fermentum vitae.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[190px] gap-6 justify-items-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md max-w-xs overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="font-semibold poppins text-[#3D5300] mb-4">{event.name}</h3>
                <p className="text-sm poppins text-gray-600 mb-[50px]">{event.description}</p>
              </div>
            </div>
          ))}
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

export default Homepage;
