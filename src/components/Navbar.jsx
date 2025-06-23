import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#141e30] text-white border-b border-white shadow-md overflow-x-hidden">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 max-w-screen-xl mx-auto">
        <div className="logo flex gap-2 items-center">
          <img src="https://img.icons8.com/?size=100&id=kmqexIGAK3DI&format=png&color=000000" alt="" className="w-12"/>
          <div className="text-4xl font-bold font-['Orbitron'] text-blue-400">QBoxx</div>
        </div>
        

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden sm:flex gap-6 text-lg">
          {['/', '/quiz', '/leaderboard', '/about'].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className="flex flex-col items-center text-white hover:text-blue-400"
            >
              <p>{['HOME', 'START QUIZ', 'LEADERBOARD', 'ABOUT'][i]}</p>
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            {['/', '/quiz', '/leaderboard', '/about'].map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={toggleMenu}
                className="text-white hover:text-blue-400"
              >
                {['HOME', 'START QUIZ', 'LEADERBOARD', 'ABOUT'][i]}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
