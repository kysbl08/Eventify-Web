import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import HomePage from './components/Homepage/HomePage';

const App= () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Navbar />} >
              <Route index element={<Landing />}/>
              <Route path='/home' element={<HomePage />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App;
