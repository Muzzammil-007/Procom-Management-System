import React from 'react';
import axios from 'axios';
import './eventItinerary.css';

const EventItinerary = () => {
  const schedule = [
    { time: '8:00 AM', event: 'Participants Arrive' },
    { time: '9:00 AM', event: 'Opening Ceremony' },
    { time: '10:00 AM - 2:00 PM', event: 'CS and EE Competitions', subEvents: [
      'Hackathon',
      'Speed Programming',
      'Code in the Dark',
      'UI/UX Design',
      'Robo Wars'
    ] },
    { time: '2:00 PM - 4:00 PM', event: 'Career Fair of All Companies' },
    { time: '4:00 PM - 6:00 PM', event: 'Lunch' },
    { time: '6:00 PM - 7:00 PM', event: 'Innovative Hardware Exhibition' },
    { time: '8:00 PM', event: 'Participants Leave' }
  ];
   
  return (
    <div className="event-itinerary">
      <h2 className="event-title">Procom Event Itinerary</h2>
      <ul>
        {schedule.map(item => (
          <li key={item.time}>
            <span className="event-time">{item.time}</span>: {item.event}
            {item.subEvents && (
              <ul className="sub-events">
                {item.subEvents.map(subEvent => (
                  <li key={subEvent} className="sub-event-item">{subEvent}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <img
        src="event_image.jpg"
        alt="Event Image"
        className="event-image"
      />
    </div>
  );
};




const getAllItineraries = async () => {
  try {
    const response = await axios.get('/api/itineraries');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const createItinerary = async (time, event, subevent) => {
  try {
    const response = await axios.post('/api/itineraries', {
      time,
      event,
      subevent,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getAllItineraries, createItinerary };


export default EventItinerary;
