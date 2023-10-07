// EventsAPI.js

import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/event'

const getAllEvents = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    return error.message
  }
}

const getEventById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  } catch (error) {
    return error.message
  }
}

const getEventsByLocationId = async (location) => {
  try {
    const response = await axios.get(`${baseUrl}/location/${location}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    return error.message
  }
}

export { getAllEvents, getEventById, getEventsByLocationId }
