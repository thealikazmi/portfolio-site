import React from "react";

export default function certifications() {
  return (
    <>
      <div className="background  h-screen">
        <div className="flex pt-10 ml-3 sm:ml-10 items-center">
          <div
            className=" text-xl sm:text-3xl font-semibold hover:cursor-pointer"
            style={{
              fontFamily:
                "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
              color: "#72A9B5",
            }}
          >
            <span className="text-xl sm:text-2xl">05.</span> Blogs
          </div>
          <div className=" border-b border-white mt-3 w-14 sm:w-36 ml-2   opacity-50"></div>
        </div>
        <h3
          className="text-white opacity-80 text-2xl text-center mt-10"
          style={{
            fontFamily:
              "Calibre (woff2),Inter,San Francisco,SF Pro Text,-apple-system,system-ui,sans-serif",
            color: "#72A9B5",
          }}
        >
          Page will be updated soon!
        </h3>
      </div>
    </>
  );
}
