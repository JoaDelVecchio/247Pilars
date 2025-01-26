import DisplayWeekOrDayWorkout from './DisplayWeekOrDayWorkouts';
import { workoutsMockData } from '../../../mockData/data';
import Workouts from './Workouts';
import { useState } from 'react';
import WorkoutCard from './WorkoutCard';
import { Workout } from '../../../types/types';

const FitnessWorkoutsPage = () => {
  const [view, setView] = useState<'week' | 'today'>('week');
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Filter workouts based on the view
  const workoutsToShow =
    view === 'week'
      ? workoutsMockData
      : workoutsMockData.find((workout) => workout.dayOfWeek === today);

  return workoutsToShow ? (
    <div className="flex w-full flex-col items-center">
      <DisplayWeekOrDayWorkout view={view} setView={setView} />
      {view === 'week' ? (
        <Workouts workouts={workoutsToShow as Workout[]} />
      ) : (
        <WorkoutCard workout={workoutsToShow as Workout} />
      )}
    </div>
  ) : (
    <div className="flex flex-grow items-center justify-center">
      <button className="cursor-pointer rounded-full border-2 px-6 py-3 text-4xl font-medium duration-300 hover:scale-105 hover:bg-black hover:font-bold hover:text-white">
        Add my first workout
      </button>
    </div>
  );
};

export default FitnessWorkoutsPage;
