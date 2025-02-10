import DisplayWeekOrDayWorkout from './DisplayWeekOrDayWorkouts';
import Workouts from './Workouts';
import { useEffect, useState } from 'react';
import WorkoutCard from './WorkoutCard';
import { Workout } from '../../../types/types';
import { API_BASE_URL } from '../../../config/apiUrl';

const FitnessWorkoutsPage = () => {
  const [view, setView] = useState<'week' | 'today'>('week');
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const [workoutsToShow, setWorkoutsToShow] = useState<Workout[]>([]);

  // Fetch workouts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/fitness/workouts`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const workoutsMockData = await response.json();

        setWorkoutsToShow(
          view === 'week'
            ? workoutsMockData.workouts
            : workoutsMockData.workouts.filter(
                (workout: Workout) => workout.dayOfWeek === today
              ) //
        );
      } catch (error) {
        console.error((error as Error).message || 'Failed to fetch workouts');
      }
    };

    fetchData();
  }, [view]); //

  return workoutsToShow.length > 0 ? (
    <div className="flex w-full flex-col items-center">
      <DisplayWeekOrDayWorkout view={view} setView={setView} />
      {view === 'week' ? (
        <Workouts workouts={workoutsToShow} />
      ) : (
        <WorkoutCard workout={workoutsToShow[0]} /> //
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
