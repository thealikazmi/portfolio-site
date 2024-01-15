import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../App.css";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contactus() {
  return (
    <div className="background h-screen">
      <div className="flex flex-col items-center pt-20 h-full">
        <h1 className="text-3xl text-center text-white font-bold">
          Lets Connect
        </h1>

        <p className=" w-80 pt-5 text-white opacity-80">
          I am always looking for new oppurtunities and projects to work on. If
          you have any questions or just want to say hi, feel free to drop a
          message. i will be back to you as soon as possible.
        </p>

        <form
          action="https://getform.io/f/469c75bd-481a-4bbe-b26c-b98a1ff9ed6b"
          method="POST"
          className="flex flex-col items-center space-y-2"
          target="blank"
        >
          <input
            className="w-64 mt-5 p-2 text-white bg-transparent border-b-2 border-white outline-none"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="w-64 p-2 text-white bg-transparent border-b-2 border-white outline-none"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-64 p-2 text-white bg-transparent border-b-2 border-white outline-none"
            name="message"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="submit"
            className="bg-transparent text-green-300 border border-dashed font-bold py-2 px-4 border-green-400   hover:bg-green-300 hover:text-white hover:border-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              boxShadow: "0 10px 15px -3px #72A9B5",
              transition: "all .3s ease",
              marginTop: "20px",
            }}
          />
        </form>
        <p className="mt-5 text-white opacity-80">Or connect with me on my social media </p>
        <div className="mt-2  space-x-5 flex ">
          <Link to="https://www.facebook.com/syedalikazmi2/" target="blank">
            <FaFacebook
              className=" text-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://github.com/syedalikazmi1122" target="blank">
            <FaGithub
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.instagram.com/TheSyedalikazmi/" target="blank">
            <FaInstagram
              className="  text-pink-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/ali-kazmi-956865279/">
            <FaLinkedin
              className=" text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size={32}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
