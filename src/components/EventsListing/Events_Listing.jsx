import React, {useEffect, useState} from "react";
import {useNavigate } from 'react-router-dom';
import imgBack from "../../img/back.png";
import imgheader from "../../img/headerimg.png";
import imgMuseum1 from "../../img/museumTour1.png";
import ArtFest from "../../img/artFest.png";
import imgMuseum2 from "../../img/museumTour2.png";
import grandOpening from "../../img/grandOpening.png";
import businessConference from "../../img/businessConference.png";
import businessMeeting from "../../img/businessMeeting.png";
import codeFest from "../../img/codeFest.png";
import fiedDay from "../../img/fieldDay.png";
import openDiscussion from "../../img/openDiscussion.png";
import idolPhilippines from "../../img/idolPhilippines.png";
import fashionShow from "../../img/fashionShow.png";
import arenaConcert from "../../img/arenaConcert.png";
import birthdayParty from "../../img/birthdayParty.png";
import wedding from "../../img/wedding.png";
import familyReunion from "../../img/familyReunion.png";
import worshipService from "../../img/worshipService.png";
import charityEvent from "../../img/charityEvent.png";
import prayerDevotion from "../../img/prayerDevotion.png";

export default function Events_Listing() {
    const navigate = useNavigate();


    useEffect(() => {
        const isLoggedIn = localStorage.getItem("loggedIn");
        if (!isLoggedIn) {
          navigate("/login"); // or wherever your login page is
        }
      }, []);

    const events = [
        {
          image: imgMuseum1,
          name: 'Event Name: Museum Tour',
          date: '📅 Fri, 14 July 2025',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
          creator: 'Kanade',
          route: '/event-details/museum-tour-1',
        },
        {
          image: ArtFest,
          name: 'Event Name: Art Fest',
          date: '📅 Fri, 14 July 2025',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
          creator: 'Kanade',
          route: '/event-details/art-fest',
        },
        {
          image: imgMuseum2,
          name: 'Event Name: Museum Tour',
          date: '📅 Fri, 14 July 2025',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
          creator: 'Kanade',
          route: '/event-details/museum-tour-2',
        },
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
          {
            image: codeFest,
            name: 'Event Name: Code Fest',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/code-fest',
          },
          {
            image: fiedDay,
            name: 'Event Name: Field Day',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/field-day',
          },
          {
            image: openDiscussion,
            name: 'Event Name: Open Discussion',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/open-discussion',
          },
          {
            image: idolPhilippines,
            name: 'Event Name: Idol Philippines',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/idol-philippines',
          },
          {
            image: fashionShow,
            name: 'Event Name: Fashion Show',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/fashion-show',
          },
          {
            image: arenaConcert,
            name: 'Event Name: Arena Concert',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/arena-concert',
          },
          {
            image: birthdayParty,
            name: 'Event Name: Birthday Party',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/birthday-party',
          },
          {
            image: wedding,
            name: 'Event Name: Wedding',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/wedding',
          },
          {
            image: familyReunion,
            name: 'Event Name: Family Reunion',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/family-reunion',
          },
          {
            image: worshipService,
            name: 'Event Name: Worship Service',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/worship-service',
          },
          {
            image: charityEvent,
            name: 'Event Name: Charity Event',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/charity-event',
          },
          {
            image: prayerDevotion,
            name: 'Event Name: Prayer Devotion',
            date: '📅 Fri, 14 July 2025',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo risus est, a pulvinar ipsum molestie nec.',
            creator: 'Kanade',
            route: '/event-details/prayer-devotion',
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
          <section className="py-10 px-[150px] bg-[#F6FFEA] text-center">

            <div className="my-[100px] grid grid-cols-3 gap-[90px] justify-items-center">
                {events.map((event, index) => (
                <div
                    key={index}
                    onClick={() => navigate(event.route)}
                    className="bg-white shadow-md rounded-md overflow-hidden w-80 cursor-pointer"
                >
                    <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
                    <div className="p-5 text-left">
                    <h3 className="font-semibold text-[#3D5300] poppins text-lg">{event.name}</h3>
                    <p className="pb-2 text-sm text-gray-500 mb-2">{event.date}</p>
                    <p className="pb-7 poppins text-sm font-light mb-2">{event.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm poppins text-gray-600 mb-2">
                        Created by <br />
                        <span className="text-[#A6C237] poppins font-bold">{event.creator}</span>
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

