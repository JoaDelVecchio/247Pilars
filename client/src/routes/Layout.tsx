import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

export const MainLayout = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('Auth context is not available');
  const { currentUser } = authContext;

  return !currentUser ? (
    <Navigate to="/profile/login" />
  ) : (
    <div className="flex h-full w-full flex-col">
      <header className="h-22 flex w-full items-center justify-center bg-white shadow-md">
        <Navbar />
      </header>
      <div className="flex flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};
