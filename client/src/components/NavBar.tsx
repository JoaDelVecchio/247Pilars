import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const commonClass =
    'rounded-full transition duration-300 flex justify-center items-center';
  const activeClass =
    'bg-black text-white font-extrabold w-28 h-10 shadow-md transform scale-105';
  const inactiveClass =
    'w-28 h-10 text-gray-700 hover:bg-gray-200 hover:text-black hover:font-extrabold';

  const [offset, setOffset] = useState(0); // Background position
  const location = useLocation(); // Track current route

  // Function to update the background position
  const updateOffset = () => {
    const activeLink = document.querySelector(
      '.nav-item.active'
    ) as HTMLElement;
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
    window.addEventListener('resize', updateOffset); // Listen for window resize
    return () => window.removeEventListener('resize', updateOffset); // Cleanup on unmount
  }, []);

  return (
    <nav className="relative w-full rounded-xl">
      {/* Animated background */}
      <div
        className="absolute top-0 h-10 rounded-full bg-black shadow-md transition-all duration-300"
        style={{
          width: '7rem', // Match the link width
          transform: `translateX(${offset}px)`,
        }}
      ></div>

      <ul className="relative z-10 flex justify-between px-6 font-bold">
        {[
          { name: 'Fitness', to: '/fitness' },
          { name: '247Pilars', to: '/' },
          { name: 'Plan', to: '/plan' },
        ].map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) =>
              `nav-item ${
                isActive ? 'active ' + activeClass : inactiveClass
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
