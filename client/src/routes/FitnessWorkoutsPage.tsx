import { useState, useEffect } from "react";

const FitnessWorkoutsPage = () => {
  const commonClass =
    "px-6 py-2 text-center rounded-full border-2 transition-all duration-300";
  const activeClass = "bg-black text-white border-black font-bold";
  const inactiveClass =
    "text-black hover:bg-gray-200 hover:border-black hover:text-black";

  const [secondaryStyle, setSecondaryStyle] = useState({ left: 0, width: 0 });
  const [view, setView] = useState("week"); // State for secondary navigation (buttons)

  const updateSecondaryBackground = () => {
    const activeElement = document.querySelector(
      `.secondary-nav .${view}`
    ) as HTMLElement;
    const parentElement = document.querySelector(
      ".secondary-nav"
    ) as HTMLElement;

    if (activeElement && parentElement) {
      const parentLeft = parentElement.getBoundingClientRect().left;
      const { offsetLeft, offsetWidth } = activeElement;
      setSecondaryStyle({ left: offsetLeft - parentLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    updateSecondaryBackground(); // Run on mount or when view changes
    window.addEventListener("resize", updateSecondaryBackground); // Adjust on resize
    return () =>
      window.removeEventListener("resize", updateSecondaryBackground);
  }, [view]);

  return (
    <div className="flex flex-col w-full items-center">
      {/* Secondary Navigation */}
      <nav className="relative w-full flex justify-center">
        {/* Animated Background */}
        <div
          className="absolute h-10 bg-black rounded-full transition-all duration-300"
          style={{
            left: `${secondaryStyle.left}px`,
            width: `${secondaryStyle.width}px`,
          }}
        ></div>
        <ul className="flex gap-4 relative z-10 secondary-nav">
          <button
            onClick={() => setView("week")}
            className={`${commonClass} ${
              view === "week" ? "week " + activeClass : inactiveClass
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setView("today")}
            className={`${commonClass} ${
              view === "today" ? "today " + activeClass : inactiveClass
            }`}
          >
            Today
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default FitnessWorkoutsPage;
