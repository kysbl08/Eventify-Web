
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventFilterSearch = () => {
  const navigate = useNavigate();
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const uniqueLocations = [...new Set(allEvents.map((e) => e.location))];
  const uniqueEventNames = [...new Set(allEvents.map((e) => e.event_name))];

  const categories = [
    { name: "Arts & Culture", id: "Ctgry3825628" },
    { name: "Business", id: "Ctgry2872354" },
    { name: "Education", id: "Ctgry1824539" },
    { name: "Entertainment", id: "Ctgry5397457" },
    { name: "Family", id: "Ctgry3475443" },
    { name: "Spiritual & Religious", id: "Ctgry4835123" },
  ];
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "https://6834d971cd78db2058bf87f2.mockapi.io/eventify/event"
        );
        setAllEvents(res.data);
        setEvents(res.data);
        setFilteredResults(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = () => {
    if (selectedCategory) {
      const query = selectedLocation
        ? `?location=${encodeURIComponent(selectedLocation)}`
        : "";
      navigate(`/category/${selectedCategory}${query}`);
    } else {
      alert("Please select a category to search.");
    }
  };

  return (
    <div className="flex flex-row justify-center gap-4 mb-6 w-full mx-auto focuse:none outline-none">
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-5 border border-gray-300 rounded-md w-full text-[22px]"
        >
            <option value="" className="text-[22px]">-- Select Category --</option>
            {categories.map((cat) => (
            <option key={cat.id} value={cat.id} className="w-full text-[22px]">
                {cat.name}
            </option>
            ))}
        </select>
        
        <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-5 border border-gray-300 rounded-md w-full text-[22px]"
        >
            <option value="">-- Select Location --</option>
            {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
                {loc}
            </option>
            ))}
        </select>

        <button
            onClick={() => handleSearch()}
            className="bg-[#3D5300] text-white px-6 py-5 rounded-md hover:bg-[#2f4200] w-full text-[22px]"
        >
            Search
        </button>
    </div>
  );
};

export default EventFilterSearch;
