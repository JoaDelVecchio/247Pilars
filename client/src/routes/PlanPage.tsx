import { useState } from 'react';

const PlanPage = () => {
  // Task List State
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Make at least one Full Stack App', completed: false },
    {
      id: 2,
      text: 'Have deep conversations with friends & family',
      completed: false,
    },
    { id: 3, text: 'Workout 5x-6x a week', completed: false },
    {
      id: 4,
      text: 'Eat clean 80% of the time, enjoy the rest without feeling guilty',
      completed: false,
    },
    {
      id: 5,
      text: 'Do something new',
      completed: false,
    },
  ]);

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-grow items-start justify-center">
      <div className="flex flex-col justify-center p-8">
        {/* Header */}
        <h1 className="text-center text-4xl font-bold text-gray-800">
          🎯 2025 Game Plan
        </h1>
        <p className="mt-2 text-center text-lg italic text-gray-600">
          Life moves fast—embrace the journey. Be grateful that you can move,
          think, grow, and push forward. Enjoy the process, because having the
          ability to do it is a privilege.
        </p>

        {/* Goals Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800">
              💻 Get a Full-Stack Developer Job
            </h2>
            <p className="text-gray-600">
              - Apply consistently & improve skills.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800">
              🤝 Improve My Relationships
            </h2>
            <p className="text-gray-600">
              - Be present & invest time in people.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800">
              🏋️‍♂️ Get the Best Body Possible
            </h2>
            <p className="text-gray-600">
              - Train hard, eat clean, and recover well.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800">
              🙏 Enjoy the Process
            </h2>
            <p className="text-gray-600">- Stay grateful.</p>
          </div>
        </div>

        {/* Task Checklist */}
        <div className="mt-10 rounded-lg bg-gray-100 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            ✅ Weekly Focus
          </h2>
          <ul className="mt-4 space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer text-lg ${
                  task.completed
                    ? 'text-gray-400 line-through'
                    : 'text-gray-700'
                }`}
              >
                {task.completed ? '✔️' : '🔲'} {task.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Reflection Section */}
        <div className="mt-10 rounded-lg bg-gray-100 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            🙏 Gratitude & Reflection
          </h2>
          <p className="mt-2 text-gray-600">
            Take a moment to appreciate your progress and the things you already
            have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
