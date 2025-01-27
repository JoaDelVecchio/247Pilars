import express from 'express'
import { createWorkout } from '../controller/workoutController'
import verifyToken from '../middleware/verifyToken'

const router = express.Router()

router.post('/',verifyToken,createWorkout)

export default router