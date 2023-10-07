// LocationsAPI.jsx
import axios from 'axios'

const baseUrl = 'http://localhost:3002/api/location'

const getAllLocations = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    throw error
  }
}

const getLocationById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export default { getAllLocations, getLocationById }
