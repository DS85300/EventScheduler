const API_BASE_URL = 'http://localhost:3001';

export const createEvent = async (eventData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Failed to create event');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`);

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch event');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
}; 