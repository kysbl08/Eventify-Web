import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../hero/Hero';
import EventList from './EventListFilter';

export default function Events_Listing() {
    const navigate = useNavigate();

    

      return (
        <>
        <Hero />
        <EventList />
        </>

      );
}

