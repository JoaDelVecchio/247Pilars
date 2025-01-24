import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const commonClass =
    "border-1 rounded-lg transition duration-300 flex justify-center items-center";
  const activeClass = "bg-black text-white font-extrabold w-24 h-12";
  const inactiveClass =
    "w-24 h-12 hover:bg-black hover:text-white hover:font-extrabold";

  const [offset, setOffset] = useState(0); // Background position
  const location = useLocation(); // Track current route

  // Function to update the background position
  const updateOffset = () => {
    const activeLink = document.querySelector(".nav-item.active");
    if (activeLink) {
      setOffset(activeLink.offsetLeft); // Update the offsetLeft of the active link
    }
  };

  // Recalculate position when the route changes
  useEffect(() => {
    updateOffset();
  }, [location]);

  // Recalculate position on window resize
  useEffect(() => {
    window.addEventListener("resize", updateOffset); // Listen for window resize
    return () => window.removeEventListener("resize", updateOffset); // Cleanup on unmount
  }, []);

  return (
    <nav className="relative">
      {/* Animated background */}
      <div
        className="absolute top-0 h-12 bg-black rounded-lg transition-all duration-300"
        style={{
          width: "6rem", // Match the link width
          transform: `translateX(${offset}px)`,
        }}
      ></div>

      <ul className="font-bold flex justify-between px-6 relative z-10">
        {[
          { name: "Fitness", to: "/fitness" },
          { name: "247Pillars", to: "/" },
          { name: "Plan", to: "/plan" },
        ].map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) =>
              `nav-item ${
                isActive ? "active " + activeClass : inactiveClass
              } ${commonClass}`
            }
            to={link.to}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
