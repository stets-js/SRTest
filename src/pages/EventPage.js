import React from 'react';
import EventDetails from '../components/EventDetails';

const EventPage = ({ event }) => {
  return (
    <div className="event-page">
      <h1>Event page</h1>
      <EventDetails event={event} />
    </div>
  );
};

export default EventPage;