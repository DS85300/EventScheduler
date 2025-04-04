import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { getAllEvents } from '../utils/api';

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        // Handle paginated response structure
        setEvents(data.results || []);
      } catch (err) {
        console.error('Error fetching events:', err);
        // Provide mock data when API call fails
        setEvents([
          {
            id: 1,
            title: 'Event Title',
            date: '2025-04-04T07:59:56.966Z',
            location: 'Schloßbezirk 10, 76131 Karlsruhe',
            description: 'Some Description for the Event',
            latitude: 8.404746955649602,
            longitude: 49.01438194665317
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">OUR LATEST EVENTS</h1>
      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No events found.</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id}>
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home; 