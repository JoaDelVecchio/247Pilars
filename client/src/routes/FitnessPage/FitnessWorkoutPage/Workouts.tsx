import { Workout as WorkoutType } from "../../../types/types";
import Workout from "./WorkoutCard";

const Workouts = ({ workouts }: { workouts: WorkoutType[] }) => {
  return (
    <div className="flex flex-wrap gap-12 mt-10">
      {workouts.map((workout: WorkoutType, i) => (
        <Workout key={i} workout={workout} />
      ))}
    </div>
  );
};

export default Workouts;
