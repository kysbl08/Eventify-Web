import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../../img/calendarBG.png";

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

const CalendarEvents = () => {
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
    <div
        className="w-[1920px] h-[805px] mt-[100px] mx-auto pt-[100px] min-h-screen bg-cover bg-center p-6 flex flex-col md:flex-row gap-8"
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
  );
};

export default CalendarEvents;
