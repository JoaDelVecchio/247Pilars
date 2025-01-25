import DisplayWeekOrDayWorkout from "./DisplayWeekOrDayWorkouts";
import { workoutsMockData } from "../../../mockData/data";
import Workouts from "./Workouts";

const FitnessWorkoutsPage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <DisplayWeekOrDayWorkout />
      <Workouts workouts={workoutsMockData} />
    </div>
  );
};

export default FitnessWorkoutsPage;
