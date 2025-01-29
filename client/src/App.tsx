import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import FitnessProgressPage from './routes/FitnessPage/FitnessProgressPage/FitnessProgressPage';
import FitnessFuelPage from './routes/FitnessPage/FitnessFuelPage/FitnessFuelPage';
import { MainLayout } from './routes/Layout';
import PlanPage from './routes/PlanPage';
import FitnessNavBar from './routes/FitnessPage/FitnessWorkoutPage/FitnessNavBar';
import FitnessWorkoutsPage from './routes/FitnessPage/FitnessWorkoutPage/FitnessWorkoutsPage';
import Register from './routes/AuthPages/Register';
import Login from './routes/AuthPages/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/profile',
      children: [
        {
          path: 'register', // ✅ Corrected path
          element: <Register />,
        },
        {
          path: 'login', // ✅ Corrected path
          element: <Login />,
        },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        {
          path: 'fitness',
          element: <FitnessNavBar />,
          children: [
            { path: 'progress', element: <FitnessProgressPage /> },
            { path: 'workouts', element: <FitnessWorkoutsPage /> },
            { path: 'fuel', element: <FitnessFuelPage /> },
          ],
        },
        { path: 'plan', element: <PlanPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
