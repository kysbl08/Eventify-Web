import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import HomePage from './components/Homepage/HomePage';
import ArtsNCulture from './components/EventsListing/ArtsNCulture';
import Business from './components/EventsListing/Business';
import Education from './components/EventsListing/Education';
import Entertainment from './components/EventsListing/Entertainment';
import Family from './components/EventsListing/Family';
import SpiritualNReligious from './components/EventsListing/SpiritualNReligious';
import UserProfile from './components/dashboard/UserProfilee';
import Calendar from './components/Calendar/Calendar';

import MuseumTour1 from './components/EventDetails/MuseumTour1';
import ArtFest from './components/EventDetails/ArtFest';
import MuseumTour2 from './components/EventDetails/MuseumTour2';
import GrandOpening from './components/EventDetails/GrandOpening';
import BusinessConference from './components/EventDetails/BusinessConference';
import BusinessMeeting from './components/EventDetails/BusinessMeeting';
import CodeFest from './components/EventDetails/CodeFest';
import FieldDay from './components/EventDetails/FieldDay';
import OpenDiscussion from './components/EventDetails/OpenDiscussion';
import IdolPhilippines from './components/EventDetails/IdolPhilippines';
import FashionShow from './components/EventDetails/fashionShow';
import ArenaConcert from './components/EventDetails/ArenaConcert';
import BirthdayParty from './components/EventDetails/BirthdayParty';
import Wedding from './components/EventDetails/Wedding';
import FamilyReunion from './components/EventDetails/FamilyReunion';
import WorshipService from './components/EventDetails/WorshipService';
import CharityEvent from './components/EventDetails/CharityEvent';
import PrayerDevotion from './components/EventDetails/PrayerDevotion';


const App= () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Navbar />} >
              <Route index element={<Landing />}/>
              <Route path='/home' element={<HomePage />}/>
              <Route path="/arts-events" element={<ArtsNCulture />} />
              <Route path="/business" element={<Business />} />
              <Route path="/education" element={<Education />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/family" element={<Family />} />
              <Route path="/spiritualNreligious" element={<SpiritualNReligious />} />
              <Route path="/dashboard/user-profile" element={<UserProfile />} />
              <Route path="/calendar/calendar" element={<Calendar />} />
              <Route path="/event-details/museum-tour-1" element={<MuseumTour1 />} />
              <Route path="/event-details/art-fest" element={<ArtFest />} />
              <Route path="/event-details/museum-tour-2" element={<MuseumTour2 />} />
              <Route path="/event-details/grand-opening" element={<GrandOpening />} />
              <Route path="/event-details/business-conference" element={<BusinessConference />} />
              <Route path="/event-details/business-meeting" element={<BusinessMeeting />} />
              <Route path="/event-details/code-fest" element={<CodeFest />} />
              <Route path="/event-details/field-day" element={<FieldDay />} />
              <Route path="/event-details/open-discussion" element={<OpenDiscussion />} />
              <Route path="/event-details/idol-philippines" element={<IdolPhilippines />} />
              <Route path="/event-details/fashion-show" element={<FashionShow />} />
              <Route path="/event-details/arena-concert" element={<ArenaConcert />} />
              <Route path="/event-details/birthday-party" element={<BirthdayParty />} />
              <Route path="/event-details/wedding" element={<Wedding />} />
              <Route path="/event-details/family-reunion" element={<FamilyReunion />} />
              <Route path="/event-details/worship-service" element={<WorshipService />} />
              <Route path="/event-details/charity-event" element={<CharityEvent />} />
              <Route path="/event-details/prayer-devotion" element={<PrayerDevotion />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;
