// App.js
import React from 'react';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventPage from './pages/EventPage';

const App = () => {
  
  const events = [
    // fetch масив з подіями
  ];

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage events={events} />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/event/*" element={<EventPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
