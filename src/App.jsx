import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import HomePage from './components/Homepage/HomePage';
import EventsListing from './components/EventsListing/ArtsNCulture';
import EventDetails from './components/EventDetails/ArtsCulture';

const App= () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Navbar />} >
              <Route index element={<Landing />}/>
              <Route path='/home' element={<HomePage />}/>
              <Route path="/arts-events" element={<EventsListing />} />
              <Route path="/arts-events/details" element={<EventDetails />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;
