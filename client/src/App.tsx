import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import FitnessPage from "./routes/FitnessPage";
import { MainLayout } from "./routes/Layout";
import PlanPage from "./routes/PlanPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/fitness", element: <FitnessPage /> },
        { path: "/plan", element: <PlanPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
