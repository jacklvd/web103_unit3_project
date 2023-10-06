import express from 'express'
import EventController from '../controllers/controllers.js'

const router = express.Router()

router.get('/api', EventController.getAllEvents)

router.get('/api/:id', EventController.getEventById)

export default router
