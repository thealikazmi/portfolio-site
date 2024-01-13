import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="" style={{ backgroundColor: "#1E5D67" }}>
        <div className="flex items-center justify-between py-7  px-4">
          <p className="text-white hover:scale-y-75 transition-all duration-500">
            Logo
          </p>

          {/* Hamburger Icon for Mobile */}
          <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? "flex flex-col items-end" : "hidden"
            } lg:flex lg:flex-row lg:space-x-10 mt-4 lg:mt-0`}
          >
            <p className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300">
              Myself
            </p>
            <p className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300">
              Experience
            </p>
            <p className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300">
              My work
            </p>
            <p className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300">
              Contact me
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
