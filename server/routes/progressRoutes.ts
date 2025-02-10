import express from 'express';
import { getProgress, updateProgress, resetProgress } from '../controller/progressController';

const router = express.Router();

router.get('/:userId', getProgress);

router.put('/:userId', updateProgress);

router.delete('/:userId', resetProgress);

export default router;
