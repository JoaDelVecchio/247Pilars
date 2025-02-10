import express from 'express';
import {
  getFuelPlan,
  createFuelPlan,
  updateFuelPlan,
  deleteFuelPlan,
} from '../controller/fuelController';

const router = express.Router();


router.get('/', getFuelPlan);


router.post('/', createFuelPlan);


router.put('/', updateFuelPlan);


router.delete('/', deleteFuelPlan);

export default router;
