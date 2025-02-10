import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  strengthProgress: [
    {
      exercise: String,
      records: [{ date: Date, weight: Number, reps: Number }],
    },
  ],
  
  runningProgress: [
    {
      distance: String, // e.g., '5K', '10K'
      records: [{ date: Date, time: Number }], // Time in seconds
    },
  ],

  hyroxProgress: [
    {
      workout: String, // e.g., "HYROX Race"
      records: [{ date: Date, time: Number }], // Total time for completion
    },
  ],

  workoutConsistency: {
    totalWorkouts: Number,
    lastWorkoutDate: Date,
    weeklyWorkouts: [Number], // Stores the count of workouts per week
  },
});

const Progress = mongoose.model('Progress', progressSchema);
export default Progress;
