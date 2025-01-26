const Register = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <form className="flex w-full max-w-md flex-col items-center justify-center gap-10 rounded-lg p-16 shadow-lg duration-500 hover:scale-105">
        <h1 className="text-3xl font-semibold text-gray-800">
          Create an account
        </h1>
        <div className="flex w-full flex-col gap-4">
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            name="username"
            required
            placeholder="Username"
          />
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            name="email"
            required
            placeholder="Email"
          />
          <input
            className="w-full rounded-xl border border-gray-300 bg-white p-3 font-medium shadow-lg duration-300 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-gray-400"
            type="text"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <button className="cursor-pointer rounded-full border border-gray-300 px-2 py-1 text-lg font-medium duration-300 hover:scale-105 hover:bg-black hover:font-bold hover:text-white">
            Register
          </button>
          <button className="hover:scale-101 text-gray-400 duration-500 hover:font-medium hover:text-black">
            Do you already have an account? Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
