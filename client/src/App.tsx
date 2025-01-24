import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import FitnessPage from "./routes/FitnessPage";
import { MainLayout } from "./routes/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/fitness", element: <FitnessPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
