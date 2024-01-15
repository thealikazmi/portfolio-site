import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJavascript, SiCplusplus, SiPython } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function experience() {
    return (
      <>
        <div className="background  h-full">
          <div className="flex pt-10 ml-3 sm:ml-10 items-center">
            <div
              className=" text-xl sm:text-3xl font-semibold hover:cursor-pointer"
              style={{
                fontFamily:
                  "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
                color: "#72A9B5",
              }}
            >
              <span className="text-xl sm:text-2xl">02.</span> Experiences
            </div>
            <div className=" border-b border-white mt-3 w-14 sm:w-36 ml-2   opacity-50"></div>
          </div>
          <div className=" ml-10 sm:ml-40 mt-5">
            <p className="flex text-lg ">
              <div className=" flex border-b-2 mb-3 border-white w-6"></div>
              <span className="text-white ml-2 opacity-80">
                {" "}
                Data Insight Lab{" "}
              </span>
            </p>
            <p className=" text-white  w-64 sm:w-96 ml-3 sm:ml-48 mt-2 sm:mt-8 opacity-80 text-sm sm:text-xl">
              I have worked as a MERN Developer Intern at{" "}
              <span className="text-blue-300">
                Data Insight Lab ,Fast University Islamabad
              </span>{" "}
              i was responsible to create the web Application of there system. i
              have created responsives interfaces covering several
              functionalities which the application had to perform. The
              technologies i have used for this project are React, Node,
              Express, MongoDB,Tailwind css.
              <div className="flex space-x-5 mt-2">
                <FaReact
                  size={50}
                  className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-500 "
                />
                <DiMongodb
                  size={50}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-green-500"
                />
                <FaNodeJs
                  size={50}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-green-500"
                />
                <SiTailwindcss
                  className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                  size={50}
                />
              </div>
              <div className=" flex border-b-4 opacity-45 ml-24 mt-6 border-white w-46"></div>
            </p>
          </div>
          <div className=" ml-10 sm:ml-40 mt-5">
            <p className="flex text-lg ">
              <div className=" flex border-b-2 mb-3 border-white w-6"></div>
              <span className="text-white ml-2 opacity-80"> Teaching </span>
            </p>
            <p className=" text-white  w-64 sm:w-96 ml-3 sm:ml-48 mt-2 sm:mt-8 opacity-80 text-sm sm:text-xl">
              "I am currently working  as an online tutor, where I am responsible for
              teaching various programming languages to my students, including
              Python, C++, and JavaScript."
              <div className="flex space-x-5 mt-5">
                <SiPython
                  size={40}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-500"
                />
                <SiJavascript
                  size={40}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-yellow-500"
                />

                <SiCplusplus
                  size={40}
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-500"
                />
  
              </div>
              <div className=" flex border-b-4 opacity-45 ml-24 mt-6 border-white w-46"></div>
            </p>
          </div>
        </div>
      </>
    );
} 