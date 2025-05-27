import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Events_Listing() {
    const navigate = useNavigate();

    

      return (
        <>
        <Hero />
        <EventList />
        </>

      );
}

