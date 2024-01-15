
            import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { FaReact } from "react-icons/fa";
import { SiFirebase } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import foundation1 from "../components/myworkimages/foundation1.png";
import foundation2 from "../components/myworkimages/foundation2.png";
import foundation3 from "../components/myworkimages/foundation3.png";
import foundation4 from "../components/myworkimages/foundation4.png";
import foundation5 from "../components/myworkimages/foundation5.png";
import foundation6 from "../components/myworkimages/foundation6.png";
import foundation7 from "../components/myworkimages/foundation7.png";
import Datainsight1 from "../components/myworkimages/datainsight1.png";
import Datainsight2 from "../components/myworkimages/datainsight2.png";
import Datainsight3 from "../components/myworkimages/datainsight3.png";
import Datainsight4 from "../components/myworkimages/datainsight4.png";
import Datainsight5 from "../components/myworkimages/datainsight5.png";

export default function mywork() {
    return (
      <>
        <div className="h-full background">
          <div className="flex pt-10 ml-3 sm:ml-10 items-center">
            <div
              className=" text-xl sm:text-3xl font-semibold hover:cursor-pointer"
              style={{
                fontFamily:
                  "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
                color: "#72A9B5",
              }}
            >
              <span className="text-xl sm:text-2xl">03.</span> My Work
            </div>
            <div className=" border-b border-white mt-3 w-14 sm:w-36 ml-2   opacity-50"></div>
          </div>
          <p className="text-white text-xl ml-20 opacity-80 pt-6">
            Some of the Web projects I have completed in these days.
          </p>
          <h1 className="ml-10 text-white text-3xl font-semibold opacity-80  mt-10">
            {" "}
            Al Falah o Behbood Foundation
          </h1>
          <div className="ml-44 flex carousel-wrapper">
            <Carousel
              className="h-1/6 mt-5 w-2/4"
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              <div>
                <img src={foundation1} />
              </div>
              <div>
                <img src={foundation2} />
              </div>
              <div>
                <img src={foundation3} />
              </div>
              <div>
                <img src={foundation4} />
              </div>
              <div>
                <img src={foundation5} />
              </div>
              <div>
                <img src={foundation6} />
              </div>
              <div>
                <img src={foundation7} />
              </div>
            </Carousel>

            <div className=" ml-28 bg-slate-900 h-fit p-2 border rounded-lg mt-6">
              <p className=" text-white w-96 text-xl opacity-80">
                {" "}
                This project was a react and supabase powered website
                functioning to collect donations for students laptops artists.
                The donations are taken and there record is mantained in the
                desired sections.
              </p>
              <p className="text-white text-xl opacity-80">
                the tech stack of this project is
                <div className="flex space-x-5 mt-4">
                  <FaReact
                    size={50}
                    className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-500 "
                  />
                  <SiFirebase
                    size={50}
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-orange-500"
                  />

                  <SiTailwindcss
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                    size={50}
                  />
                </div>
              </p>
            </div>
          </div>
          {/* The section to  the second proeject section */}

          <h1 className="ml-10 text-white text-3xl font-semibold opacity-80 mt-10">
            Data Insight Project
          </h1>
          <div className="ml-44 flex carousel-wrapper">
            {/* Replace with your own carousel images */}
            <Carousel
              className="h-1/6 mt-5 w-2/4"
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              <div>
                <img src={Datainsight1} />
              </div>
              <div>
                <img src={Datainsight2} />
              </div>
              <div>
                <img src={Datainsight3} />
              </div>
              <div>
                <img src={Datainsight4} />
              </div>
              <div>
                <img src={Datainsight5} />
              </div>
            </Carousel>

            <div className="ml-28 mt-6 bg-slate-900 h-fit p-1 border border-b rounded-lg">
              <p className="text-white w-96 text-xl opacity-80 ">
                This project was completed during my internship at Data Insight
                Lab. I was responsible to create the web Application of there
                system. i have created responsives interfaces covering several
                functionalities which the application had to perform. The
                technologies i have used for this project are React, Node,
                Express, MongoDB,Tailwind css.
              </p>
              <p className="text-white text-xl opacity-80">
                The tech stack of this project is
                <div className="flex space-x-5 mt-4">
                  {/* Replace with your own tech stack icons */}
                  <FaReact
                    size={50}
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-500"
                  />
                  <DiMongodb
                    size={50}
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-orange-500"
                  />
                  <SiTailwindcss
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    size={50}
                  />
                  <FaNodeJs
                    size={50}
                    className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-green-500"
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
// ... existing imports ...
