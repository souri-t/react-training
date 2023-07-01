import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';

import 'react-big-calendar/lib/css/react-big-calendar.css';

//イベントの型定義
interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  //初期表示時にデータを取得する
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/rest/schedules');
        const data = response.data.schedules.map((schedule: any) => ({
          title: schedule.title,
          start: new Date(schedule.starttime),
          end: new Date(schedule.endtime),
        }));
        console.log(data);

        //取得したデータをセットする
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //スケジュールを追加する
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
