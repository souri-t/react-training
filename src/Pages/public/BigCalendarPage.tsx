import React, { useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: '予定1',
      start: new Date('2023-07-01T02:00:00'),
      end: new Date('2023-07-01T04:00:00'),
    },
    // 他の予定もここに追加する
  ]);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const { start, end } = slotInfo;
    const newEvent: Event = {
      title: '新しい予定',
      start,
      end,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        events={events}
        defaultView="week"
      />
    </div>
  );
};

export default MyCalendar;