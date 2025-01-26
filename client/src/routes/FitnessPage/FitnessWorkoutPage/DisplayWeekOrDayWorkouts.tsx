import { SetStateAction, useEffect, useState } from "react";

const DisplayWeekOrDayWorkout = ({
  view,
  setView,
}: {
  view: string;
  setView: React.Dispatch<SetStateAction<"week" | "today">>;
}) => {
  const commonClass =
    "px-6 py-2 text-center rounded-full border-2 transition-all duration-300";
  const activeClass = "bg-black text-white border-black font-bold";
  const inactiveClass =
    "text-black hover:bg-gray-200 hover:border-black hover:text-black";

  const [secondaryStyle, setSecondaryStyle] = useState({ left: 0, width: 0 });
  const updateSecondaryBackground = () => {
    const activeElement = document.querySelector(
      `.secondary-nav .${view}`,
    ) as HTMLElement;
    const parentElement = document.querySelector(
      ".secondary-nav",
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
  {
    /* Secondary Navigation */
  }

  return (
    <nav className="relative flex w-full justify-center">
      {/* Animated Background */}
      <div
        className="absolute h-10 rounded-full bg-black transition-all duration-300"
        style={{
          left: `${secondaryStyle.left}px`,
          width: `${secondaryStyle.width}px`,
        }}
      ></div>
      <ul className="secondary-nav relative z-10 flex gap-4">
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
  );
};

export default DisplayWeekOrDayWorkout;
