import { Request, Response } from 'express';
import Progress from '../models/Progress';

// ✅ Get Progress
export const getProgress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const progress = await Progress.findOne({ userId });

    if (!progress) {
       res.status(404).json({ message: 'No progress data found' });
       return
    }

    res.json({ progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ✅ Update Progress (Workout, Running, HYROX)
export const updateProgress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { strengthProgress, runningProgress, hyroxProgress, workoutConsistency } = req.body;

    const updatedProgress = await Progress.findOneAndUpdate(
      { userId },
      { $set: { strengthProgress, runningProgress, hyroxProgress, workoutConsistency } },
      { new: true, upsert: true }
    );

    res.json({ message: 'Progress updated successfully', progress: updatedProgress });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ✅ Reset Progress (For testing or starting fresh)
export const resetProgress = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await Progress.deleteOne({ userId });
    res.json({ message: 'Progress reset successfully' });
  } catch (error) {
    console.error('Error resetting progress:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
