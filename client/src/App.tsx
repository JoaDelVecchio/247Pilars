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
      path: '/profile/auth/register',
      element: <Register />,
    },
    {
      path: 'profile/auth/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/fitness',
          element: <FitnessNavBar />,
          children: [
            {
              path: '/fitness/progress',
              element: <FitnessProgressPage />,
            },
            { path: '/fitness/workouts', element: <FitnessWorkoutsPage /> },
            { path: '/fitness/fuel', element: <FitnessFuelPage /> },
          ],
        },
        { path: '/plan', element: <PlanPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
