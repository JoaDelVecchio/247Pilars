import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import FitnessProgressPage from "./routes/FitnessProgressPage";
import FitnessFuelPage from "./routes/FitnessFuelPage";
import { MainLayout } from "./routes/Layout";
import PlanPage from "./routes/PlanPage";
import FitnessNavBar from "./components/FitnessNavBar";
import FitnessWorkoutsPage from "./routes/FitnessWorkoutsPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/fitness",
          element: <FitnessNavBar />,
          children: [
            {
              path: "/fitness/progress",
              element: <FitnessProgressPage />,
            },
            { path: "/fitness/workouts", element: <FitnessWorkoutsPage /> },
            { path: "/fitness/fuel", element: <FitnessFuelPage /> },
          ],
        },
        { path: "/plan", element: <PlanPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
