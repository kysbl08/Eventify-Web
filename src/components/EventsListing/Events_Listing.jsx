import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgBack from "../../img/back.png";
import imgheader from "../../img/headerimg.png";
import imgMuseum1 from "../../img/museumTour1.png";
import ArtFest from "../../img/artFest.png";
import imgMuseum2 from "../../img/museumTour2.png";
import grandOpening from "../../img/grandOpening.png";
import businessConference from "../../img/businessConference.png";
import businessMeeting from "../../img/businessMeeting.png";
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

