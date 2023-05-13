import React from 'react';

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
    <div>
      <h2>Procom Event Itinerary</h2>
      <ul>
        {schedule.map(item => (
          <li key={item.time}>
            <strong>{item.time}</strong>: {item.event}
            {item.subEvents && (
              <ul>
                {item.subEvents.map(subEvent => (
                  <li key={subEvent}>{subEvent}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventItinerary;
