import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/apiUrl';
import { AuthContext } from '../../context/AuthContextProvider';

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('AuthContext is not available');

  const { updateUser } = authContext;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      setError(null);
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const user = await response.json();
      updateUser(user);
      console.log('Login Successful');
      navigate('/fitness/progress');
    } catch (error: unknown) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="margin-auto animate-pulse text-center font-bold text-gray-300">
        Loading...
      </p>
    );

  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col items-center justify-center gap-10 rounded-lg p-16 shadow-lg duration-500 hover:scale-105"
      >
        <h1 className="text-3xl font-semibold text-gray-800">Login</h1>

        {/* 🔑 Display Example Credentials (Not in placeholders) */}
        <div className="w-full rounded-lg bg-gray-100 p-4 text-center shadow-sm">
          <p className="text-sm text-gray-700">
            Demo Login: <span className="font-semibold">jdelvecchio</span>
          </p>
          <p className="text-sm text-gray-700">
            Password: <span className="font-semibold">123456</span>
          </p>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex w-full flex-col gap-4">
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            name="username"
            required
            placeholder="Enter your username"
          />
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-full border border-gray-300 px-4 py-2 text-lg font-medium duration-300 hover:scale-105 hover:bg-black hover:font-bold hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
