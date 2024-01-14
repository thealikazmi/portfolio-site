import React, { useState } from "react";
import connections from "./connections";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaHome } from 'react-icons/fa';
import Home from "./home";
export default function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleMouseEnter = () => {
    setSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="flex">
      <div
        className={`border inline-block border-solid pr-4 w-10 h-screen transition-all duration-300 ${
          isSidebarVisible ? "w-40" : "w-12"
        }`}
        style={{ backgroundColor: "#1E5D67", borderColor: "#1E5D67" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex py-10 px-10 h-screen flex-col items-end space-y-6 ">
          <FaGithub
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            size={32}
          />
          <FaInstagram
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            size={32}
          />
          <FaFacebook
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            size={32}
          />
          <FaLinkedin
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            size={32}
          />
        </div>
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}
