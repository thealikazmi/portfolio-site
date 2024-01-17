import React from "react";
import "../App.css";
import alipic from "./pic.png";
export default function Aboutus() {
  return (
    <>
      <div
        id="about"
        className=" h-screen flex  background  "
        style={{ backgroundImage: `${alipic}` }}
      >
        <div>
          <div className="flex mt-10 ml-3 sm:ml-10 items-center">
            <div
              className=" text-xl sm:text-3xl font-semibold hover:cursor-pointer"
              style={{
                fontFamily:
                  "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
                color: "#72A9B5",
              }}
            >
              <span className="text-xl sm:text-2xl">01.</span> About Me
            </div>
            <div className=" border-b border-white mt-3 w-14 sm:w-36 ml-2   opacity-50"></div>
          </div>
          <div className="ml-5 sm:ml-24">
            <ul>
              <li
                className="text-lg sm:text-2xl mt-2 sm:mt-5 ml-5 sm:ml-10"
                style={{ color: "#72A9B5" }}
              >
                Introduction:
                <p className="text-white  w-48 sm:w-96 ml-3 sm:ml-20 mt-2 opacity-80 text-sm sm:text-xl">
                  My Name is{" "}
                  <span className="text-blue-300">Syed Ali Kazmi</span> and I am
                  a{" "}
                  <span className="text-blue-300">
                    Software Engineering Student
                  </span>{" "}
                  at{" "}
                  <span className="text-blue-300">
                    Fast University ,Islamabad campus.
                  </span>{" "}
                  I was born and bought up in Islamabad,Pakistan .
                </p>
                <p className="  w-48 sm:w-96 ml-3 sm:ml-48 mt-2 sm:mt-8 opacity-80 text-sm sm:text-xl">
                  I have worked as a React Developer Intern at{" "}
                  <span className="text-blue-300">
                    Data Insight Lab ,Fast University Islamabad
                  </span>{" "}
                  and currently working as a{" "}
                  <span className="text-blue-300">Full Stack Developer </span>{" "}
                  at Freelancing Platforms.
                </p>
                <p className="text-xs sm:text-lg text-white mt-10 sm:ml-20 opacity-80 sm:w-96">
                  My Tech Stack includes :
                  <span className="flex space-x-3 sm:space-x-6 space-y-1 sm:space-y-2">
                    <ul className="space-y-2 w-fit mt-2 text-blue-300">
                      <li className="w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Java Script{" "}
                      </li>
                      <li className=" w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        html 5
                      </li>
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Css 3
                      </li>
                    </ul>
                    <ul className="space-y-2  mt-2 text-blue-300">
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        React.js{" "}
                      </li>
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Node.js
                      </li>
                      <li className="w-fit sm:w-24  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Next js{" "}
                      </li>
                    </ul>
                    <ul className="w-fit space-y-1 ml-4 mt-2 text-blue-300">
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Tailwind Css{" "}
                      </li>
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Git Control
                      </li>
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        C++{" "}
                      </li>
                    </ul>
                    <ul className="space-y-2 w-fit  mt-2 text-blue-300">
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Python{" "}
                      </li>
                      <li className="w-fit sm:w-24 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        MongoDb{" "}
                      </li>
                    </ul>{" "}
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className=" border-b-2 border-white mt-10 w-1/3 sm:w-1/2  ml-14 sm:ml-96   opacity-50"></div>
        </div>
        <div className="flex  items-start   -ml-16 sm:ml-0 sm:h-screen sm:items-end   opacity-75">
          <img className="  " src={alipic} alt="aa" />
        </div>
      </div>
    </>
  );
}
