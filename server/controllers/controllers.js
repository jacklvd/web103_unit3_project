import { pool } from '../config/database.js'

const getAllEvents = async (request, response) => {
  try {
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
    response.status(200).json(results.rows)
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
}

const getEventById = async (request, response) => {
  try {
    const { id } = request.params
    const results = await pool.query('SELECT * FROM events WHERE id = $1', [id])
    response.status(200).json(results.rows[0])
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
}

export default { getAllEvents, getEventById }
