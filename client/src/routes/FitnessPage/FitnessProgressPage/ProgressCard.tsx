import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from 'recharts';
import { ProgressData } from '../../../types/types';

const ProgressCard = ({ progress }: { progress: ProgressData }) => {
  if (!progress) {
    return (
      <p className="margin-auto animate-pulse text-center font-bold text-gray-300">
        Loading progress...
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
      {/* Strength Progress */}
      <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
        <h4 className="text-center text-lg font-semibold text-black">
          🏋️ Strength Progress
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={progress.strengthProgress.map((exercise) => ({
              name: exercise.exercise,
              weight:
                exercise.records[exercise.records.length - 1]?.weight || 0,
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Running Progress */}
      <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
        <h4 className="text-center text-lg font-semibold text-black">
          🏃 Running Progress
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={progress.runningProgress.map((run) => ({
              name: run.distance,
              time: run.records[run.records.length - 1]?.time || 0,
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* HYROX Progress */}
      <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
        <h4 className="text-center text-lg font-semibold text-black">
          🔥 HYROX Progress
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={progress.hyroxProgress.map((hyrox) => ({
              name: hyrox.workout,
              time: hyrox.records[hyrox.records.length - 1]?.time || 0,
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="time" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Workout Consistency */}
      <div className="rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105">
        <h4 className="text-center text-lg font-semibold text-black">
          📆 Workout Consistency
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={progress.workoutConsistency.weeklyWorkouts.map(
              (count, index) => ({
                week: `Week ${index + 1}`,
                workouts: count,
              })
            )}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="workouts" fill="#1f77b4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressCard;
