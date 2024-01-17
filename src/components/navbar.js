import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav
        className="relative sm:fixed w-screen h-16 z-10 bg-gray-800"
        style={{ backgroundColor: isMenuOpen ? "#1E5D67" : "" }}
      >
        <div className="flex items-center justify-between py-7 px-4 flex-wrap">
          <p
            className="text-white hover:scale-y-75 transition-all duration-500"
            onClick={handleLinkClick}
          >
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

          {/* Navbar Links - Display horizontally on larger screens */}
          <div className="hidden lg:flex lg:flex-row lg:space-x-10">
            <Link
              to="about"
              offset={-60}
              smooth={true}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              onClick={handleLinkClick}
            >
              Myself
            </Link>
            
            <Link
              to="experience"
              smooth={true}
              offset={-60}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
            >
              Experience
            </Link>
            <Link
              to="mywork"
              smooth={true}
              offset={-60}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
            >
              My work
            </Link>

            <Link
              to="certifications"
              smooth={true}
              offset={-50}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
            >
              Certifications
            </Link>
            <Link
              to="blogs"
              smooth={true}
              offset={-60}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
            >
              Blogs
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
            >
              Contact me
            </Link>
          </div>

          {/* Grid Menu - Display on mobile screens */}
          {isMenuOpen && (
            <div className="grid justify-end lg:hidden w-screen pr-10 mt-4">
              <Link
                to="about"
                offset={-60}
                smooth={true}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                Myself
              </Link>

              <Link
                to="experience"
                smooth={true}
                offset={-60}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                Experience
              </Link>
              <Link
                to="mywork"
                smooth={true}
                offset={-60}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                My work
              </Link>

              <Link
                to="certifications"
                smooth={true}
                offset={-50}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                Certifications
              </Link>
              <Link
                to="blogs"
                smooth={true}
                offset={-60}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                Blogs
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="text-white transition duration-500 hover:translate-y-[-2px] cursor-pointer hover:text-green-300"
              >
                Contact me
              </Link>
              {/* Add other links as needed */}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
