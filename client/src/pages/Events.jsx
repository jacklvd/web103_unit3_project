import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import { getAllEvents } from '../services/EventsAPI'

const Events = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const eventsData = await getAllEvents()
        setEvents(eventsData)
      } catch (error) {
        throw error
      }
    })()
  }, [])
  return (
    <div className="location-events">
      <header>
        <div className="location-info">
          <h2>Events</h2>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.event}
              date={event.date}
              time={event.time}
              image={event.picture}
              price={event.price}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{' '}
            {'No events scheduled at this location yet!'}
          </h2>
        )}
      </main>
    </div>
  )
}

export default Events
