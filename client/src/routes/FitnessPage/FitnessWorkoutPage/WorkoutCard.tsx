import { Workout as WorkoutType } from '../../../types/types';

const WorkoutCard = ({ workout }: { workout: WorkoutType }) => {
  return (
    <div className="w-84 hover:scale-101 mb-6 max-w-3xl rounded-lg bg-white p-6 shadow-lg duration-300">
      {/* Workout Title */}
      <div className="mb-4 flex items-center justify-between border-b-2 pb-2">
        <h3 className="text-xl font-bold text-black">
          {workout.dayOfWeek} - {workout.title}
        </h3>
        <button className="cursor-pointer rounded-xl border-2 bg-white px-2 font-medium shadow-lg duration-300 hover:scale-105 hover:border-black hover:bg-black hover:font-bold hover:text-white">
          Edit
        </button>
      </div>

      {/* Exercises List */}
      <ul className="space-y-6">
        {workout.exercises.map((exercise, i) => (
          <li
            key={i}
            className="rounded-lg bg-gray-100 p-4 shadow-sm duration-300 hover:scale-105"
          >
            {/* Exercise Name */}
            <h4 className="text-lg font-semibold text-black">
              {exercise.name}
            </h4>

            {/* Notes */}
            <p className="mb-2 text-sm italic text-gray-600">
              {exercise.notes}
            </p>

            {/*Reps */}
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center justify-center gap-4">
                <span className="flex-grow rounded-lg bg-black py-1 text-center text-sm font-semibold text-white">
                  {exercise.reps.numberOfReps}
                </span>{' '}
                x{' '}
                <span className="flex-grow rounded-lg bg-black py-1 text-center text-sm font-semibold text-white">
                  {exercise.reps.weight}kg
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutCard;
