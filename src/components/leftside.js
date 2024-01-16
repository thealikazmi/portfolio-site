import React, { useState } from "react";
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
        className=" background  inline-block    h-full w-12"      >
        <div className=" mt-20 px-5 h-fit w-12 grid  fixed space-y-1 ">
          <Link to="https://www.facebook.com/syedalikazmi2/" target="blank">
            <FaFacebook
              className=" text-blue-600  transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://github.com/syedalikazmi1122" target="blank">
            <FaGithub
              className="transition duration-500  left-1 mt-5 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.instagram.com/TheSyedalikazmi/" target="blank">
            <FaInstagram
              className="  text-pink-800 transition duration-500  left-1 mt-10 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/ali-kazmi-956865279/">
            <FaLinkedin
              className=" text-blue-500 transition duration-500 ease-in-out  left-1 mt-16 transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
        </div>
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}
