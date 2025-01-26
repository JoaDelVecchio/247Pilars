import { Workout } from '../types/types';

export const workoutsMockData: Workout[] = [
  {
    id: 'w1',
    userId: 'u1',
    title: 'Push Day',
    dayOfWeek: 'Monday',
    exercises: [
      {
        name: 'Bench Press',
        notes: 'Focus on form, increase weight gradually',
        reps: [
          { numberOfReps: 10, weight: 100 },
          { numberOfReps: 8, weight: 110 },
          { numberOfReps: 8, weight: 115 },
          { numberOfReps: 6, weight: 120 },
        ],
      },
      {
        name: 'Incline Dumbbell Press',
        notes: 'Maintain constant tension on chest',
        reps: [
          { numberOfReps: 12, weight: 50 },
          { numberOfReps: 10, weight: 55 },
          { numberOfReps: 8, weight: 60 },
        ],
      },
      {
        name: 'Overhead Press',
        notes: 'Control the bar on the way down',

        reps: [
          { numberOfReps: 10, weight: 40 },
          { numberOfReps: 8, weight: 45 },
          { numberOfReps: 6, weight: 50 },
        ],
      },
    ],
  },
  {
    id: 'w2',
    userId: 'u1',
    title: 'Pull Day',
    dayOfWeek: 'Tuesday',
    exercises: [
      {
        name: 'Deadlift',
        notes: 'Engage lats and keep back straight',

        reps: [
          { numberOfReps: 8, weight: 140 },
          { numberOfReps: 8, weight: 150 },
          { numberOfReps: 6, weight: 160 },
          { numberOfReps: 6, weight: 170 },
        ],
      },
      {
        name: 'Pull-Ups',
        notes: 'Full range of motion, add weight if needed',

        reps: [
          { numberOfReps: 12, weight: 0 },
          { numberOfReps: 10, weight: 5 },
          { numberOfReps: 8, weight: 10 },
          { numberOfReps: 8, weight: 15 },
        ],
      },
      {
        name: 'Barbell Row',
        notes: 'Avoid momentum, keep back flat',
        reps: [
          { numberOfReps: 10, weight: 60 },
          { numberOfReps: 8, weight: 65 },
          { numberOfReps: 8, weight: 70 },
        ],
      },
    ],
  },
  {
    id: 'w3',
    userId: 'u1',
    title: 'Leg Day',
    dayOfWeek: 'Wednesday',
    exercises: [
      {
        name: 'Back Squats',
        notes: 'Hit parallel or deeper, control descent',
        reps: [
          { numberOfReps: 8, weight: 100 },
          { numberOfReps: 8, weight: 110 },
          { numberOfReps: 6, weight: 115 },
          { numberOfReps: 6, weight: 120 },
        ],
      },
      {
        name: 'Walking Lunges',
        notes: 'Stay upright, push through the heels',
        reps: [
          { numberOfReps: 12, weight: 20 },
          { numberOfReps: 12, weight: 25 },
          { numberOfReps: 12, weight: 30 },
        ],
      },
      {
        name: 'Leg Press',
        notes: 'Controlled tempo, avoid locking knees',
        reps: [
          { numberOfReps: 15, weight: 200 },
          { numberOfReps: 12, weight: 210 },
          { numberOfReps: 10, weight: 220 },
        ],
      },
    ],
  },
  {
    id: 'w4',
    userId: 'u1',
    title: 'Push Day (Variation)',
    dayOfWeek: 'Thursday',
    exercises: [
      {
        name: 'Incline Bench Press',
        notes: 'Emphasize upper chest engagement',

        reps: [
          { numberOfReps: 10, weight: 90 },
          { numberOfReps: 8, weight: 95 },
          { numberOfReps: 8, weight: 100 },
          { numberOfReps: 6, weight: 105 },
        ],
      },
      {
        name: 'Dumbbell Shoulder Press',
        notes: 'Avoid arching lower back',

        reps: [
          { numberOfReps: 12, weight: 35 },
          { numberOfReps: 10, weight: 40 },
          { numberOfReps: 8, weight: 45 },
        ],
      },
      {
        name: 'Tricep Dips',
        notes: 'Keep elbows tucked',

        reps: [
          { numberOfReps: 15, weight: 0 },
          { numberOfReps: 12, weight: 5 },
          { numberOfReps: 10, weight: 10 },
        ],
      },
    ],
  },
  {
    id: 'w5',
    userId: 'u1',
    title: 'Pull Day (Variation)',
    dayOfWeek: 'Friday',
    exercises: [
      {
        name: 'Weighted Pull-Ups',
        notes: 'Add weight as strength improves',

        reps: [
          { numberOfReps: 10, weight: 0 },
          { numberOfReps: 8, weight: 5 },
          { numberOfReps: 6, weight: 10 },
        ],
      },
      {
        name: 'Cable Rows',
        notes: 'Focus on squeezing shoulder blades',

        reps: [
          { numberOfReps: 12, weight: 50 },
          { numberOfReps: 10, weight: 55 },
          { numberOfReps: 8, weight: 60 },
          { numberOfReps: 8, weight: 65 },
        ],
      },
    ],
  },
  {
    id: 'w6',
    userId: 'u1',
    title: 'Active Recovery',
    dayOfWeek: 'Saturday',
    exercises: [
      {
        name: 'Mobility Work',
        notes: 'Stretch hip flexors and shoulders',

        reps: [{ numberOfReps: 10, weight: 0 }],
      },
      {
        name: 'Light Cardio',
        notes: '15-20 minutes, moderate pace',

        reps: [{ numberOfReps: 1, weight: 0 }],
      },
    ],
  },
  {
    id: 'w7',
    userId: 'u1',
    title: 'Rest or Cardio',
    dayOfWeek: 'Sunday',
    exercises: [
      {
        name: 'Light Jog',
        notes: 'Keep it easy, recover for next week',
        reps: [{ numberOfReps: 20, weight: 0 }],
      },
    ],
  },
];
