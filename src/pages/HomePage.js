import React from 'react';
import EventList from '../components/EventList';

const HomePage = ({ events }) => {
  return (
    <div className="home-page">
      <h1>Home page</h1>
      <EventList events={events} />
    </div>
  );
};

export default HomePage;