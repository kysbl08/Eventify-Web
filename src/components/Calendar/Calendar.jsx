import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../../img/calendarBG.png"

const events = [
  {
    title: "Jay and Jaz's Wedding (Family)",
    date: "May 23, 2025",
    time: "Thursday @ 7am",
    location: "Nueva Ecija, Cabaratuan",
  },
  {
    title: "Sonic Serenade Concert (Entertainment)",
    date: "May 6, 2025",
    time: "Tuesday @ 10pm",
    location: "Baguio, Benguet",
  },
  {
    title: "MHPNHS' Educational Trip (Education)",
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
    <div className="pt-[100px]">
        <div className="min-h-screen bg-cover bg-center text-white p-6 flex flex-col md:flex-row gap-6"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bg-white text-lime-900 rounded-xl p-4 shadow-md w-full md:w-1/3">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">May 2025</h2>
                <div className="flex gap-2">
                    <button className="p-1 hover:bg-lime-100 rounded">
                    <ChevronLeft size={18} />
                    </button>
                    <button className="p-1 hover:bg-lime-100 rounded">
                    <ChevronRight size={18} />
                    </button>
                </div>
                </div>
                <div className="grid grid-cols-7 text-center font-medium mb-2">
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
                </div>
                <div className="grid grid-cols-7 text-center gap-y-2">
                {days.map((date, idx) => (
                    <div
                    key={idx}
                    className={`h-8 w-8 mx-auto flex items-center justify-center rounded-full cursor-pointer
                        ${date && date.getDate() === 6 ? "bg-lime-200 text-black" : ""}
                        ${date && date.getDate() === 17 ? "bg-lime-600 text-white" : ""}
                        ${date && date.getDate() === 23 ? "bg-lime-300 text-black" : ""}`}
                    >
                    {date ? date.getDate() : ""}
                    </div>
                ))}
                </div>
            </div>

            <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-semibold italic tracking-wide text-lime-100">
                CALENDAR <span className="not-italic font-light">EVENTS</span>
                </h2>
                {events.map((event, index) => (
                <div
                    key={index}
                    className="bg-lime-100 text-lime-900 rounded-xl p-4 shadow-md flex justify-between items-start"
                >
                    <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm">{event.date} – {event.time}</p>
                    <p className="text-sm mt-1 flex items-center">
                        <span className="mr-1">📍</span> {event.location}
                    </p>
                    </div>
                    <button className="text-sm text-lime-800 font-medium hover:underline">View</button>
                </div>
                ))}
            </div>
        </div>
    </div>
    
  );
};

export default CalendarEvents;