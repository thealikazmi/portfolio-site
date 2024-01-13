import React from 'react';
import '../App.css';
import alipic from './dp.jpg';
export default function home()
{
    return (
      <>
        <div className=" h-screen flex   " style={{ backgroundColor: "#1E5D77" }}>
          <div className="ml-36 pt-20  ">
            <p className="text-white text-lg">Hi, This is</p>
            <h2
              className="  text-8xl font-bold "
              style={{
                fontFamily:
                  "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
                color: "#72A9B5",
              }}
            >
              Syed Ali Kazmi 
            </h2>
            <h3 className="pt-3">
              <span className="text-white text-5xl">I'm a </span>
              <span className="text-white text-5xl">Web Developer</span>
            </h3>
            <p
              className="text-white text-2xl  pt-8  w-96"
              style={{
                color: "#CBA5A5",
              }}
            >
              I am software Engineer expertise in creating eye-catching and
              loved websites to attract your customers.{" "}
            </p>
            <button
              className="bg-transparent text-green-300 border border-dashed font-bold py-2 px-4 border-green-400 mt-20 ml-52 hover:bg-green-300 hover:text-white hover:border-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 10px 15px -3px #72A9B5",
                transition: "all .3s ease",
              }}
            >
              Hire me
            </button>
          </div>

        </div>
      </>
    );
}