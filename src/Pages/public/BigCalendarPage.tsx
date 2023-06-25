import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);
const eventList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date('2020-03-01'),
    end: new Date('2020-03-01'),
  },
  {
    id: 1,
    title: 'Long Event',
    allDay: false,
    start: new Date('2020-03-07 15:00'),
    end: new Date('2020-03-07 17:00'),
  }
];

const BigCalendarPage = () => {
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventList}
        timeslots={2}
        defaultView={Views.WEEK}
        onSelectEvent={event => alert(event.title)}
        style={{ height: 500 }} />
    </div>
  );
 
}

export default BigCalendarPage;