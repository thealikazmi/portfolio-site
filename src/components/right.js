import React from "react";
import "../App.css";

export default function Rightside() {
  return (
    <div className="grid w-16 fixed right-0 items-center  h-screen background">
      <div className="background grid h-96">
        <div className="grid text-white px-5 space-y-2">
          {"Syedalikazmi@0012gmail.com".split("").map((char, index) => (
            <div className="max-h-0.5 text-xs opacity-80 rotate-90" key={index}>
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
