import { pool } from './database.js'
import '../config/dotenv.js'
import eventData from '../data/events.js'

const createEventTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        location VARCHAR(255),
        address VARCHAR(255),
        event VARCHAR(255),
        date VARCHAR(255),
        time VARCHAR(255),
        picture VARCHAR(255),
        price VARCHAR(255)
    );
    `

  try {
    await pool.query(createTableQuery)
    console.log('Event table created successfully!')
  } catch (error) {
    console.log('Event table could not be created!', error)
  }
}

const seedEventTable = async () => {
  await createEventTable()

  eventData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO events(location, address, event, date, time, picture, price) VALUES($1, $2, $3, $4, $5, $6, $7)',
    }

    const values = [
      event.location,
      event.address,
      event.event,
      event.date,
      event.time,
      event.picture,
      event.price,
    ]

    pool.query(insertQuery, values, (error, result) => {
      if (error) {
        console.log('An error occurred while seeding the event table!', error)
        return
      }
      console.log(`✅ ${event.name} seeded successfully!`)
    })
  })
}

seedEventTable()
