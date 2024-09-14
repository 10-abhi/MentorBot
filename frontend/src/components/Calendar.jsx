import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Sample events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Meeting with Team',
      start: new Date(2024, 8, 15, 10, 0), // September 15, 2024, 10:00 AM
      end: new Date(2024, 8, 15, 11, 0),   // September 15, 2024, 11:00 AM
    },
    {
      id: 2,
      title: 'Lunch with Client',
      start: new Date(2024, 8, 16, 12, 0), // September 16, 2024, 12:00 PM
      end: new Date(2024, 8, 16, 13, 30),  // September 16, 2024, 1:30 PM
    },
  ]);

  const handleSelectSlot = (slotInfo) => {
    const title = window.prompt('Enter a title for your event:');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    window.alert(event.title);
  };

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        selectable
        popup
      />
    </div>
  );
};

export default MyCalendar;