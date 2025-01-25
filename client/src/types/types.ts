export type Exercise = {
  name: string; // Name of the exercise (e.g., Bench Press)
  notes: string; // Notes for the exercise (e.g., Felt strong)
  reps: { numberOfReps: number; weight: number }[]; // Array of reps for each set (e.g., [10, 8, 6])
};

export type Workout = {
  id: string; // Unique identifier for the workout
  userId: string; // ID of the user who owns this workout
  title: string; // Title of the workout (e.g., Chest Day)
  dayOfWeek: string; // Day of the week for the workout (e.g., Monday)
  exercises: Exercise[]; // Array of exercises in this workout
};
