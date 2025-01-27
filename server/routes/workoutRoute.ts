import express from 'express'
import {  createWorkout, getWorkouts } from '../controller/workoutController'
import verifyToken from '../middleware/verifyToken'

const router = express.Router()

router.get('/',verifyToken,getWorkouts)
router.post('/',verifyToken,createWorkout)

export default router