import express from 'express'
import {  createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from '../controller/workoutController'
import verifyToken from '../middleware/verifyToken'

const router = express.Router()

router.get('/',verifyToken,getWorkouts)
router.get('/:id',verifyToken,getWorkout)
router.post('/',verifyToken,createWorkout)
router.put('/:id',updateWorkout)
router.delete("/:id",deleteWorkout)


export default router