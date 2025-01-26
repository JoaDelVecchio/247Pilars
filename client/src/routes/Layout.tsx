import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

export const MainLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-22 w-full items-center justify-center bg-white shadow-md">
        <Navbar />
      </header>
      <div className="flex flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};
