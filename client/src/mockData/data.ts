import { Workout } from "../types/types";

export const workoutsMockData: Workout[] = [
  {
    id: "w1",
    userId: "u1",
    title: "Chest Day",
    dayOfWeek: "Monday",
    exercises: [
      {
        name: "Bench Press",
        notes: "Felt strong, increase weight next time",
        reps: [
          { numberOfReps: 10, weight: 100 },
          { numberOfReps: 8, weight: 105 },
          { numberOfReps: 8, weight: 110 },
          { numberOfReps: 6, weight: 115 },
        ],
      },
      {
        name: "Incline Dumbbell Press",
        notes: "Maintain form, focus on tempo",

        reps: [
          { numberOfReps: 12, weight: 50 },
          { numberOfReps: 10, weight: 55 },
          { numberOfReps: 10, weight: 60 },
        ],
      },
    ],
  },
  {
    id: "w2",
    userId: "u1",
    title: "Back Day",
    dayOfWeek: "Tuesday",
    exercises: [
      {
        name: "Pull-Ups",
        notes: "Focus on full range of motion",

        reps: [
          { numberOfReps: 10, weight: 0 },
          { numberOfReps: 8, weight: 0 },
          { numberOfReps: 8, weight: 0 },
          { numberOfReps: 6, weight: 5 },
        ],
      },
      {
        name: "Barbell Row",
        notes: "Keep back straight, avoid momentum",

        reps: [
          { numberOfReps: 12, weight: 60 },
          { numberOfReps: 10, weight: 65 },
          { numberOfReps: 10, weight: 70 },
          { numberOfReps: 8, weight: 75 },
        ],
      },
    ],
  },
  {
    id: "w3",
    userId: "u1",
    title: "Leg Day",
    dayOfWeek: "Wednesday",
    exercises: [
      {
        name: "Squats",
        notes: "Focus on depth, control the bar",

        reps: [
          { numberOfReps: 8, weight: 100 },
          { numberOfReps: 8, weight: 110 },
          { numberOfReps: 8, weight: 115 },
          { numberOfReps: 6, weight: 120 },
        ],
      },
      {
        name: "Walking Lunges",
        notes: "Maintain upright posture",

        reps: [
          { numberOfReps: 12, weight: 20 },
          { numberOfReps: 12, weight: 25 },
          { numberOfReps: 12, weight: 30 },
        ],
      },
    ],
  },
  {
    id: "w4",
    userId: "u1",
    title: "Shoulder Day",
    dayOfWeek: "Thursday",
    exercises: [
      {
        name: "Overhead Press",
        notes: "Control the negative motion",

        reps: [
          { numberOfReps: 10, weight: 40 },
          { numberOfReps: 8, weight: 45 },
          { numberOfReps: 6, weight: 50 },
        ],
      },
      {
        name: "Lateral Raises",
        notes: "Use lightweight, focus on form",

        reps: [
          { numberOfReps: 15, weight: 10 },
          { numberOfReps: 15, weight: 12 },
          { numberOfReps: 12, weight: 12 },
        ],
      },
    ],
  },
  {
    id: "w5",
    userId: "u1",
    title: "Arms Day",
    dayOfWeek: "Friday",
    exercises: [
      {
        name: "Bicep Curls",
        notes: "Strict form, avoid swinging",

        reps: [
          { numberOfReps: 12, weight: 15 },
          { numberOfReps: 12, weight: 17.5 },
          { numberOfReps: 10, weight: 20 },
        ],
      },
      {
        name: "Tricep Dips",
        notes: "Focus on depth and control",

        reps: [
          { numberOfReps: 15, weight: 0 },
          { numberOfReps: 12, weight: 5 },
          { numberOfReps: 10, weight: 10 },
        ],
      },
    ],
  },
];
