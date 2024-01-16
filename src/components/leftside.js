import React, { useState } from "react";
import connections from "./connections";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaHome } from 'react-icons/fa';
import Home from "./home";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleMouseEnter = () => {
    setSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="flex     h-full">
      <div
        className={`border inline-block border-solid pr-4 w-10 h-full transition-all duration-300 ${
          isSidebarVisible ? "w-40" : "w-12"
        }`}
        style={{ backgroundColor: "#1E5D67", borderColor: "#1E5D67" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex py-10 px-10 h-full flex-col items-end space-y-6 ">
          <Link to="https://www.facebook.com/syedalikazmi2/" target="blank">
            <FaFacebook
              className=" text-blue-600 fixed left-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://github.com/syedalikazmi1122" target="blank">
            <FaGithub
              className="transition duration-500 fixed left-1 mt-5 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.instagram.com/TheSyedalikazmi/" target="blank">
            <FaInstagram
              className="  text-pink-800 transition duration-500 fixed left-1 mt-10 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/ali-kazmi-956865279/">
            <FaLinkedin
              className=" text-blue-500 transition duration-500 ease-in-out fixed left-1 mt-16 transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
        </div>
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}
