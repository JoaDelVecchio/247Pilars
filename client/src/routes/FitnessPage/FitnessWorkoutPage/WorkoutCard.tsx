import { Workout as WorkoutType } from "../../../types/types";

const WorkoutCard = ({ workout }: { workout: WorkoutType }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-80 max-w-3xl hover:scale-101 duration-300">
      {/* Workout Title */}
      <h3 className="text-2xl font-bold text-black mb-4 border-b-2 pb-2">
        {workout.dayOfWeek} - {workout.title}
      </h3>

      {/* Exercises List */}
      <ul className="space-y-6 ">
        {workout.exercises.map((exercise, i) => (
          <li
            key={i}
            className="bg-gray-100 rounded-lg p-4 shadow-sm hover:scale-105 duration-300"
          >
            {/* Exercise Name */}
            <h4 className="text-lg font-semibold text-black">
              {exercise.name}
            </h4>

            {/* Notes */}
            <p className="text-gray-600 text-sm italic mb-2">
              {exercise.notes}
            </p>

            {/*Reps */}
            <div className="p-2 flex flex-col gap-2">
              {exercise.reps.map((rep) => (
                <div className="flex gap-4 items-center justify-center">
                  <span className="bg-black text-center text-white py-1 flex-grow rounded-lg text-sm font-semibold">
                    {" "}
                    {rep.numberOfReps}
                  </span>{" "}
                  x{" "}
                  <span className="bg-black text-center text-white py-1  flex-grow rounded-lg text-sm font-semibold">
                    {rep.weight}kg
                  </span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutCard;
