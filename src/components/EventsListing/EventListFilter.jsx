import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventList = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [checkedLocations, setCheckedLocations] = useState([]);
  const [checkedEventNames, setCheckedEventNames] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = [
    { name: "Arts & Culture", id: "Ctgry3825628" },
    { name: "Business", id: "Ctgry2872354" },
    { name: "Education", id: "Ctgry1824539" },
    { name: "Entertainment", id: "Ctgry5397457" },
    { name: "Family", id: "Ctgry3475443" },
    { name: "Spiritual & Religious", id: "Ctgry4835123" },
  ];

  useEffect(() => {
  const fetchEventsAndUsers = async () => {
    try {
      const [eventsRes, usersRes] = await Promise.all([
        axios.get("https://6834d971cd78db2058bf87f2.mockapi.io/eventify/event"),
        axios.get("https://6834806d464b499636031d7e.mockapi.io/eventify/users"),
      ]);

      const users = usersRes.data;
      const enrichedEvents = eventsRes.data.map((event) => {
        const creator = users.find((u) => u.user_id === event.creator_id);
        return {
          ...event,
          creator_username: creator ? creator.username : "Unknown",
        };
      });

      setAllEvents(enrichedEvents);
      setEvents(enrichedEvents);
      setFilteredResults(enrichedEvents);
    } catch (err) {
      console.error("Error fetching events or users:", err);
    }
  };

  fetchEventsAndUsers();
}, []);


  const uniqueLocations = [...new Set(allEvents.map((e) => e.location))];
  const uniqueEventNames = [...new Set(allEvents.map((e) => e.event_name))];

  const handleCheckboxFilter = () => {
    let filtered = allEvents;

    if (checkedCategories.length > 0) {
      filtered = filtered.filter((event) =>
        checkedCategories.includes(event["event-categoryId"])
      );
    }

    if (checkedLocations.length > 0) {
      filtered = filtered.filter((event) =>
        checkedLocations.includes(event.location)
      );
    }

    if (checkedEventNames.length > 0) {
      filtered = filtered.filter((event) =>
        checkedEventNames.includes(event.event_name)
      );
    }

    setFilteredResults(filtered);
  };

  

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

  const handleApplyFilters = () => {
    handleCheckboxFilter();
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen px-10 py-10 w-full">
      
      <div className="flex justify-end my-2 mr-53 text-[24px]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 shadow-sm rounded-md transition w-40"
        >
          Filters
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#000000]/30 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 text-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Filter</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto">
              {/* Category Filters */}
              <div>
                <h3 className="font-semibold mb-2">Event Category</h3>
                {categories.map((cat) => (
                  <label key={cat.id} className="block text-sm mb-1 cursor-pointer">
                    <input
                      type="checkbox"
                      value={cat.id}
                      checked={checkedCategories.includes(cat.id)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCheckedCategories((prev) =>
                          e.target.checked
                            ? [...prev, value]
                            : prev.filter((id) => id !== value)
                        );
                      }}
                      className="mr-2"
                    />
                    {cat.name}
                  </label>
                ))}
              </div>

              {/* Location Filters */}
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                {uniqueLocations.map((loc) => (
                  <label key={loc} className="block text-sm mb-1 cursor-pointer">
                    <input
                      type="checkbox"
                      value={loc}
                      checked={checkedLocations.includes(loc)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCheckedLocations((prev) =>
                          e.target.checked
                            ? [...prev, value]
                            : prev.filter((l) => l !== value)
                        );
                      }}
                      className="mr-2"
                    />
                    {loc}
                  </label>
                ))}
              </div>

              {/* Event Name Filters */}
              <div>
                <h3 className="font-semibold mb-2">Event</h3>
                {uniqueEventNames.map((name) => (
                  <label key={name} className="block text-sm mb-1 cursor-pointer">
                    <input
                      type="checkbox"
                      value={name}
                      checked={checkedEventNames.includes(name)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCheckedEventNames((prev) =>
                          e.target.checked
                            ? [...prev, value]
                            : prev.filter((n) => n !== value)
                        );
                      }}
                      className="mr-2"
                    />
                    {name}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyFilters}
                className="px-6 py-2 bg-[#3D5300] text-white rounded-md hover:bg-[#A6C237] transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 justify-items-center my-[100px] px-30">
        {filteredResults.map((event) => (
          <div
            key={event.event_id}
            onClick={() => navigate(`/event/${event.event_id}`)}
            className="bg-white shadow-md rounded-lg overflow-hidden w-80 cursor-pointer flex flex-col text-left"
          >
            <img
              src={event.event_img}
              alt={event.event_name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-7 flex flex-col flex-grow">
              <div>
                <h3 className="font-semibold text-[#3D5300] text-lg mb-1">
                  Event Name: {event.event_name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">📅 {event.event_date}</p>
                <p className="text-sm font-light mb-4">{event.event_description}</p>
              </div>

              <div className="mt-auto flex items-end justify-between pt-4">
                <p className="text-sm text-gray-600">
                  Created by <br />
                  <span className="text-[#A6C237] font-bold">
                    {event.creator_username || "Unknown"}
                  </span>
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/event/${event.event_id}`);
                  }}
                  className="px-4 py-1 text-sm font-semibold border-2 border-[#3D5300] text-[#3D5300] rounded-[7px] hover:bg-[#3D5300] hover:text-white transition"
                >
                  SEE EVENT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventList;
