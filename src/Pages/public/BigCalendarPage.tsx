import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/rest/schedules');
        const data = response.data.schedules.map((schedule: any) => ({
          title: schedule.title,
          start: new Date(schedule.starttime),
          end: new Date(schedule.endtime),
        }));
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const { start, end } = slotInfo;
    setNewEvent({
      title: '',
      start,
      end,
    });
    setShowModal(true);
  };

  const handleModalSave = () => {
    if (newEvent.title.trim() === '') {
      alert('タイトルを入力してください');
      return;
    }

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      title: event.target.value,
    }));
  };

  const handleStartDateChange = (date: Date) => {
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      start: date,
    }));
  };

  const handleEndDateChange = (date: Date) => {
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      end: date,
    }));
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>新しい予定</h2>
            <input
              type="text"
              value={newEvent.title}
              onChange={handleTitleChange}
              placeholder="タイトル"
            />
            <p>開始日時:</p>
            <DatePicker
                selected={newEvent.start}
                onChange={handleStartDateChange}
                showTimeSelect
                dateFormat="yyyy-MM-dd HH:mm"
              />
            <p>終了日時:</p>
            <DatePicker
              selected={newEvent.end}
              onChange={handleEndDateChange}
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm"
            />
            <div className="modal-buttons">
              <button onClick={handleModalSave}>保存</button>
              <button onClick={handleModalCancel}>キャンセル</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
