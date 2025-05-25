import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ArtsCulture from '../EventDetails/ArtsCulture';

export default function EventsListing() {
    const navigate = useNavigate();

  const events = [
    {
      image: '/images/museum.jpg',
      name: 'Event Name: Museum Tour',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
    },
    {
      image: '/images/artfest.jpg',
      name: 'Event Name: Art Fest',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
    },
    {
      image: '/images/gallery.jpg',
      name: 'Event Name: Museum Tour',
      date: '📅 Fri, 14 July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
      creator: 'Kanade',
    },
  ];

  return (
    <div className="bg-green-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('/images/greenhouse.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Events, Your Way</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <select className="px-4 py-2 rounded text-black">
              <option>Select Category</option>
            </select>
            <select className="px-4 py-2 rounded text-black">
              <option>Select Location</option>
            </select>
            <button className="px-6 py-2 bg-lime-600 text-white rounded hover:bg-lime-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center justify-center gap-2">
          <span className="w-16 h-1 bg-green-700 inline-block"></span>
          Arts & Culture
          <span className="w-16 h-1 bg-green-700 inline-block"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white shadow-md rounded-md overflow-hidden w-80">
              <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg">{event.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-sm mb-2">{event.description}</p>
                <p className="text-sm text-gray-600 mb-2">
                  Created by <span className="text-green-700">{event.creator}</span>
                </p>
                <button onClick={() => navigate('/arts-events/details')} className="mt-2 px-4 py-1 bg-green-200 text-green-900 rounded text-sm hover:bg-green-300 transition">
                  SEE EVENT
                </button>
              </div>
            </div>
          ))}
        </div>

        <p onClick={() => navigate('/arts-events/details')} className="mt-6 text-sm text-green-800 underline cursor-pointer hover:text-green-900 transition">
          View Event Details &gt;&gt;
        </p>
      </section>
    </div>
  );
}