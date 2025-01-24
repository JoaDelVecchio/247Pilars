import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

export const MainLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="h-22 w-full flex bg-white shadow-md  justify-center items-center">
        <Navbar />
      </header>
      <main className="flex flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
