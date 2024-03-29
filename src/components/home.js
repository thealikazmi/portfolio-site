import React from "react";
import "../App.css";
import alipic from "./pic.png";
import { Link } from "react-scroll";
export default function home() {
  return (
    <>
      <div className="w-screen h-screen flex  background  ">
        <div className=" ml-10 sm:ml-36 pt-32  ">
          <p className="text-white text-sm opacity-80 sm:text-xl">
            Hi, This is
          </p>
          <h2
            className=" text-2xl sm:text-8xl font-bold "
            style={{
              fontFamily:
                "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
              color: "#72A9B5",
            }}
          >
            Syed Ali Kazmi
          </h2>
          <h3 className="pt-3">
            <span className="text-white text-xl sm:text-5xl">I'm a </span>
            <span className="text-white text-xl sm:text-5xl">
              Web Developer
            </span>
          </h3>
          <p
            className="text-white text-sm sm:text-2xl  pt-8  w-48 sm:w-96"
            style={{
              color: "#CBA5A5",
            }}
          >
            I am software Engineer expertise in creating eye-catching and loved
            websites to attract your customers.{" "}
          </p>
          <Link to="contact" offset={-60} smooth={true} duration={1000}>
            <button
              className="bg-transparent text-green-300 border border-dashed font-bold py-2 px-4 border-green-400 mt-20 sm:ml-52 hover:bg-green-300 hover:text-white hover:border-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 10px 15px -3px #72A9B5",
                transition: "all .3s ease",
              }}
            >
              Hire me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
