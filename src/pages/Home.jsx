import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockEvents = [
      {
        id: 1,
        title: 'Team Meeting',
        date: '2024-04-10',
        time: '14:00',
        location: 'Conference Room A',
        description: 'Weekly team sync meeting'
      },
      {
        id: 2,
        title: 'Project Review',
        date: '2024-04-12',
        time: '10:00',
        location: 'Virtual',
        description: 'Monthly project review with stakeholders'
      }
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home; 