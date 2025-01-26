import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const FitnessNavBar = () => {
  const commonClass =
    "px-6 py-2 text-center rounded-full border-2 transition-all duration-300";
  const activeClass = "bg-black text-white border-black font-bold";
  const inactiveClass =
    "text-black hover:bg-gray-200 hover:border-black hover:text-black";

  const [style, setStyle] = useState({ left: 0, width: 0 });

  const updateBackground = () => {
    const activeElement = document.querySelector(
      ".main-nav .active",
    ) as HTMLElement;
    const parentElement = document.querySelector(".main-nav") as HTMLElement;

    if (activeElement && parentElement) {
      const parentLeft = parentElement.getBoundingClientRect().left;
      const { offsetLeft, offsetWidth } = activeElement;
      setStyle({ left: offsetLeft - parentLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    updateBackground(); // Run on mount
    window.addEventListener("resize", updateBackground); // Adjust on resize
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <div className="flex flex-grow flex-col">
      <nav className="relative mb-4 flex w-full justify-center">
        {/* Animated Background */}
        <div
          className="absolute rounded-full bg-black transition-all duration-300"
          style={{
            left: `${style.left}px`,
            width: `${style.width}px`,
          }}
        ></div>
        <ul className="main-nav relative z-10 flex gap-4">
          <NavLink
            to="/fitness/progress"
            className={({ isActive }) =>
              `${commonClass} ${
                isActive ? "active " + activeClass : inactiveClass
              }`
            }
          >
            Progress
          </NavLink>
          <NavLink
            to="/fitness/workouts"
            className={({ isActive }) =>
              `${commonClass} ${
                isActive ? "active " + activeClass : inactiveClass
              }`
            }
          >
            Workouts
          </NavLink>
          <NavLink
            to="/fitness/fuel"
            className={({ isActive }) =>
              `${commonClass} ${
                isActive ? "active " + activeClass : inactiveClass
              }`
            }
          >
            Fuel
          </NavLink>
        </ul>
      </nav>
      <main className="flex flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default FitnessNavBar;
