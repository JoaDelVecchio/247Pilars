import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <form className="flex w-full max-w-md flex-col items-center justify-center gap-10 rounded-lg p-16 shadow-lg duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold text-gray-800">
          Create an Account
        </h1>

        {/* 🔑 Display Example Credentials */}
        <div className="w-full rounded-lg bg-gray-100 p-4 text-center shadow-sm">
          <p className="text-sm text-gray-700">
            Demo Username: <span className="font-semibold">jdelvecchio</span>
          </p>
          <p className="text-sm text-gray-700">
            Password: <span className="font-semibold">123456</span>
          </p>
        </div>

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
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 text-lg font-medium duration-300 hover:scale-105 hover:bg-black hover:font-bold hover:text-white">
          Register
        </button>

        <button
          onClick={() => navigate('/profile/login')}
          className="hover:scale-101 text-gray-400 duration-500 hover:font-medium hover:text-black"
        >
          Already have an account? <span className="font-semibold">Log In</span>
        </button>
      </form>
    </div>
  );
};

export default Register;
