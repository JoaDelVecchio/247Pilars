import { Schema, model } from "mongoose";
import { Workout as WorkoutType, Exercise } from "../types";

const ExerciseSchema: Schema<Exercise> = new Schema({
    name: { type: String, required: true },
    notes: { type: String, required: true },
    reps:{numberOfReps: { type: Number, required: true },
    weight: { type: Number, required: false },
  }});
  
  // Define Workout Schema
  const WorkoutSchema: Schema<WorkoutType> = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    dayOfWeek: { type: String, required: true },
    exercises: { type: [ExerciseSchema], required: true }, // Array of Exercise objects
  });

export const Workout = model<WorkoutType>('Workout',WorkoutSchema)