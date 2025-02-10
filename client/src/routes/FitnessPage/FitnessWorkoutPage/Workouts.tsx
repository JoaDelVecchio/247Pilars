import { Workout as WorkoutType } from '../../../types/types';
import WorkoutCard from './WorkoutCard';

const Workouts = ({ workouts }: { workouts: WorkoutType[] }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-12">
      {workouts.map((workout, i) => (
        <WorkoutCard key={workout._id || i} workout={workout} />
      ))}
    </div>
  );
};

export default Workouts;
