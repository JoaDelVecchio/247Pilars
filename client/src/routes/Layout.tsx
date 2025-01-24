import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header>Header</header>
      <main className="flex flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
