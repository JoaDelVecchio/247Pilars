import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

export const MainLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="p-6 shadow-lg rounded-lg">
        <Navbar />
      </header>
      <main className="flex flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
