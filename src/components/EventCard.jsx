function EventCard({ event }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full mb-4 group">
      <div className="bg-[#FF6B6B] rounded-lg p-4 flex items-center justify-between transition-transform hover:translate-x-2 cursor-pointer">
        {/* Date Badge */}
        <div className="bg-white text-[#414E59] px-4 py-2 rounded-full font-medium">
          {formatDate(event.date)}
        </div>

        {/* Title */}
        <div className="flex-grow mx-6">
          <h2 className="text-white text-xl font-medium">{event.title}</h2>
        </div>

        {/* Arrow Icon */}
        <div className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default EventCard; 