// LocationEvents.js

import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import { getEventsByLocationId } from '../services/EventsAPI'

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([])
  const [events, setEvents] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const eventsData = await getEventsByLocationId(index)
        const locationData = []
        console.log(eventsData)
        setEvents(eventsData)
        locationData.push(eventsData[0]['address'])
        locationData.push(eventsData[0]['locationimage'])
        locationData.push(eventsData[0]['name'])
        setLocation({
          address: locationData[0],
          image: locationData[1],
          name: locationData[2],
        })
      } catch (error) {
        throw error
      }
    })()
  }, [index])
  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>{location.address}</p>
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

export default LocationEvents
