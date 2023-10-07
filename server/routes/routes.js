import express from 'express'
import EventController from '../controllers/controllers.js'

const router = express.Router()

router.get('/event', EventController.getAllEvents)

router.get('/event/:id', EventController.getEventById)

router.get('/event/location/:location', EventController.getEventByLocation)

router.get('/location', EventController.getAllLocations)

router.get('/location/:id', EventController.getLocationById)

export default router
