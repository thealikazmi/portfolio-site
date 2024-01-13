import React, { useState } from "react";
import Home from "./home";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

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
          <FaGithub size={32} />
          <FaInstagram size={32} />
          <FaFacebook size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>

      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}
