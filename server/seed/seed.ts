import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Workout } from '../models/Workout';
import FuelPlan from '../models/FuelPlan';
import { MONGO_URI } from '../config';
import Progress from '../models/Progress';

dotenv.config();

// MongoDB Connection
mongoose.connect(MONGO_URI as string, 
);

// ✅ Workout Data for Each Day of the Week
const workouts = [
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Pull + Core + Long Run (Easy Day)',
    dayOfWeek: 'Monday',
    exercises: [
      { name: 'Hanging Leg Raises', notes: 'Core workout', reps: { numberOfReps: 4, weight: 0 } },
      { name: 'Pull-ups (Wide Grip)', notes: 'Slow eccentric', reps: { numberOfReps: 3, weight: 0 } },
      { name: 'Pull-ups (Neutral / Seated Triangle Grip)', notes: 'Use 77lb assist if needed', reps: { numberOfReps: 3, weight: 77 } },
      { name: 'Incline Biceps Curl / Preacher Curl', notes: 'Controlled movement', reps: { numberOfReps: 3, weight: 7.5 } },
      { name: 'Hammer Biceps (Standing / Preacher)', notes: 'Focus on form', reps: { numberOfReps: 3, weight: 7.5 } },
      { name: 'Easy Run', notes: '5K-8K', reps: { numberOfReps: 1, weight: 0 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Hard Running Intervals',
    dayOfWeek: 'Tuesday',
    exercises: [
      { name: 'Warm-up Run', notes: '1K easy', reps: { numberOfReps: 1, weight: 0 } },
      { name: '10x400m Sprints', notes: '10K PB pace with 45s rest', reps: { numberOfReps: 10, weight: 0 } },
      { name: 'Cool-down Run', notes: '1K easy', reps: { numberOfReps: 1, weight: 0 } },
      { name: 'Lateral Raises', notes: 'Controlled reps', reps: { numberOfReps: 6, weight: 12 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Push + Core + Easy Run',
    dayOfWeek: 'Wednesday',
    exercises: [
      { name: 'Hanging Leg Raises', notes: 'Core workout', reps: { numberOfReps: 4, weight: 0 } },
      { name: 'Incline Bench Press', notes: 'Controlled movement', reps: { numberOfReps: 3, weight: 15 } },
      { name: 'Dips / Close-Grip Bench Press', notes: 'Triceps focused', reps: { numberOfReps: 3, weight: 0 } },
      { name: 'Lean-in Lateral Raises', notes: 'Slow & controlled', reps: { numberOfReps: 3, weight: 12 } },
      { name: 'Overhead Triceps Extension (EZ Bar)', notes: 'Full range of motion', reps: { numberOfReps: 3, weight: 16.5 } },
      { name: 'Triceps Kickback (Cable)', notes: 'Controlled movement', reps: { numberOfReps: 3, weight: 5 } },
      { name: 'Easy Run', notes: '5K-8K', reps: { numberOfReps: 1, weight: 0 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Long Run + Biceps',
    dayOfWeek: 'Thursday',
    exercises: [
      { name: '10K Easy Run', notes: 'Endurance focus', reps: { numberOfReps: 1, weight: 0 } },
      { name: 'Biceps Curl', notes: 'Controlled movement', reps: { numberOfReps: 3, weight: 12 } },
      { name: 'Hammer Curl', notes: 'Focus on form', reps: { numberOfReps: 3, weight: 12 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Legs + Core + Short Run (Easy Day)',
    dayOfWeek: 'Friday',
    exercises: [
      { name: 'Hamstring Curls (Machine)', notes: 'Full range of motion', reps: { numberOfReps: 3, weight: 10 } },
      { name: 'Sumo Squats', notes: 'Keep back straight', reps: { numberOfReps: 3, weight: 12 } },
      { name: 'Leg Extensions (Seated)', notes: 'Controlled reps', reps: { numberOfReps: 3, weight: 15 } },
      { name: 'Adductors / Abductors (Superset)', notes: 'Slow and controlled', reps: { numberOfReps: 2, weight: 12 } },
      { name: 'Calf Raises', notes: 'Full contraction', reps: { numberOfReps: 3, weight: 15 } },
      { name: 'Easy Run (Optional)', notes: '~5K', reps: { numberOfReps: 1, weight: 0 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'Recovery / Active Rest',
    dayOfWeek: 'Saturday',
    exercises: [
      { name: 'Hanging Leg Raises + 5 Arms', notes: 'Core workout', reps: { numberOfReps: 4, weight: 0 } },
      { name: 'Walk / Easy Run', notes: 'Light movement', reps: { numberOfReps: 1, weight: 0 } },
    ],
  },
  {
    userId: '67969b8228f9ed890840c5ca',
    title: 'HYROX / Full-Body Strength',
    dayOfWeek: 'Sunday',
    exercises: [
      { name: 'Hanging Leg Raises', notes: 'Core workout', reps: { numberOfReps: 4, weight: 0 } },
      { name: '800m Run', notes: 'Cardio challenge', reps: { numberOfReps: 1, weight: 0 } },
      { name: 'Burpees', notes: 'Explosive movement', reps: { numberOfReps: 15, weight: 0 } },
      { name: 'Farmer’s Carries', notes: 'Grip and core strength', reps: { numberOfReps: 1, weight: 0 } },
      { name: 'Thrusters', notes: 'Full-body power', reps: { numberOfReps: 1, weight: 0 } },
      { name: 'Optional Arm Work (Curls / Triceps Kickbacks)', notes: 'Burnout finisher', reps: { numberOfReps: 1, weight: 0 } },
    ],
  },
];


// ✅ Fuel Plan Data
const fuelPlan = {
  meals: {
    Morning: 'Coffee with or without honey + 1 banana',
    'Post-Workout': 'Protein shake with water + coffee with milk protein & honey + Berries + Omega 3 & vitamins',
    Lunch: '2 lean steaks (300 g raw) + 25 g raw rice or 50 g raw sweet potato',
    Dinner: '1 lean steak (150 g raw) + 1 piece of chicken (200 g cooked, ~250-270 g raw)',
    Snacks: 'Low-sugar fruits (apple, berries)',
  },
  macros: {
    protein: 174,
    carbs: 71,
    fats: 88,
    calories: 1711,
  },
  portions: {
    'Lean steaks': '300 g raw for lunch, 150 g raw for dinner',
    Chicken: '200 g cooked (~250-270 g raw)',
    Rice: '25 g raw (~75 g cooked)',
    'Sweet Potato': '50 g raw (~115 g cooked)',
    Banana: '1/2 banana = 50 g',
    Honey: '10 g (~1 teaspoon)',
  },
  estimation: {
    weight: 67,
    height: 1.75,
    age: 23,
    maintenanceCalories: '1,800-1,900 kcal',
  },
};

const progressData = {
  userId: '67969b8228f9ed890840c5ca',
  strengthProgress: [
    {
      exercise: 'Bench Press',
      records: [
        { date: new Date('2024-01-01'), weight: 70, reps: 10 },
        { date: new Date('2024-02-01'), weight: 75, reps: 10 },
        { date: new Date('2024-03-01'), weight: 80, reps: 10 },
      ],
    },
    {
      exercise: 'Squat',
      records: [
        { date: new Date('2024-01-01'), weight: 100, reps: 8 },
        { date: new Date('2024-02-01'), weight: 110, reps: 8 },
        { date: new Date('2024-03-01'), weight: 120, reps: 8 },
      ],
    },
  ],
  runningProgress: [
    {
      distance: '5K',
      records: [
        { date: new Date('2024-01-15'), time: 1500 }, // 25 minutes
        { date: new Date('2024-02-15'), time: 1450 }, // 24:10 minutes
        { date: new Date('2024-03-15'), time: 1400 }, // 23:20 minutes
      ],
    },
    {
      distance: '10K',
      records: [
        { date: new Date('2024-01-15'), time: 3100 }, // 51:40 minutes
        { date: new Date('2024-02-15'), time: 3000 }, // 50 minutes
        { date: new Date('2024-03-15'), time: 2900 }, // 48:20 minutes
      ],
    },
  ],
  hyroxProgress: [
    {
      workout: 'HYROX Race',
      records: [
        { date: new Date('2024-01-10'), time: 3600 }, // 1 hour
        { date: new Date('2024-02-10'), time: 3500 }, // 58:20 minutes
      ],
    },
  ],
  workoutConsistency: {
    totalWorkouts: 60,
    lastWorkoutDate: new Date(),
    weeklyWorkouts: [5, 5, 4, 6, 5, 6, 4], // Weekly workout count for past 7 weeks
  },
};


// ✅ Seed Function
const seedDB = async () => {
  try {
    console.log('🚀 Seeding Database...');

    // Clear existing data
    await Workout.deleteMany();
    await FuelPlan.deleteMany();
    await Progress.deleteMany();

    // Insert new data
    await Workout.insertMany(workouts);
    await FuelPlan.create(fuelPlan);
    await Progress.create(progressData)

    console.log('✅ Workout, Progress data and Fuel Plan Data Seeded Successfully!');
  } catch (error) {
    console.error('❌ Error Seeding Database:', error);
  } finally {
    mongoose.connection.close();
  }
};

// ✅ Run Seeding Script
seedDB();
