// App.js
import React from 'react';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventPage from './pages/EventPage';
import eventList from './data/events.json';

const App = () => {
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage events={eventList} />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
