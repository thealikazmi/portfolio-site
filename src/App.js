import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSide from "../src/components/leftside";
import Home from "../src/components/home";
import About from "../src/components/About";
import Navbar from "./components/navbar";
import Rightside from "./components/right";
import Contact from "./components/Contact";
import Mywork from "./components/mywork";
import Certifications from "../src/components/certifications";
import Blogs from "./components/Blogs"
import Experience from "./components/experience";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex">
        </div>
        <div className="w-screen">
          <Home  />
          <About  id="about"           />
          <Experience id="experience" />
          <Mywork id="mywork" />
          <Certifications id="certifications" />
          <Blogs id="blogs" />
          <Contact id="contact" />
        </div>
        <div className=" hidden md:flex w-screen">
          <Rightside />
        </div>
      </div>
    </Router>
  );
}

export default App;
