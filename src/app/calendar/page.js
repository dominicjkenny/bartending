import { useState, useEffect } from 'react';
import axios from 'axios';

export const metadata = {
  title: 'Upscale Mobile Bartending | Calendar',
  description: 'Check our availability for your upcoming event.',
};

export default function CalendarPage() {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    axios.get('/api/availability').then((response) => {
      setAvailability(response.data);
    });
  }, []);

  return (
    <section>
      <h1>Availability Calendar</h1>
      <ul>
        {availability.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </section>
  );
}
