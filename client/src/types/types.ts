// shared/types.ts

export type Exercise = {
  name: string; // Name of the exercise (e.g., Bench Press)
  notes: string; // Notes for the exercise (e.g., Felt strong)
  reps: { numberOfReps: number; weight: number }; // Array of reps for each set
  createdAt?: string; // Timestamps added by MongoDB
  updatedAt?: string;
};

export type Workout = {
  _id: string; // MongoDB's unique identifier
  userId: string; // ID of the user who owns this workout
  title: string; // Title of the workout (e.g., Chest Day)
  dayOfWeek: string; // Day of the week for the workout (e.g., Monday)
  exercises: Exercise[]; // Array of exercises in this workout
  createdAt?: string; // Timestamps added by MongoDB
  updatedAt?: string;
};

export type ExerciseRecord = {
  date: string;
  weight: number;
  reps: number;
};

export type RunningRecord = {
  date: string;
  time: number;
};

export type HyroxRecord = {
  date: string;
  time: number;
};

export type ProgressData = {
  userId: string;
  strengthProgress: {
    exercise: string;
    records: ExerciseRecord[];
  }[];
  runningProgress: {
    distance: string;
    records: RunningRecord[];
  }[];
  hyroxProgress: {
    workout: string;
    records: HyroxRecord[];
  }[];
  workoutConsistency: {
    totalWorkouts: number;
    lastWorkoutDate: string;
    weeklyWorkouts: number[];
  };
};
