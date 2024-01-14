import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSide from "../src/components/leftside";
import Home from "../src/components/home";
import About from "../src/components/Aboutus";
import Navbar from "./components/navbar";
import Rightside from "./components/right";
import Contact from "./components/Contactus";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex">
          <LeftSide />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="hidden md:flex">
          <Rightside />
        </div>
      </div>
    </Router>
  );
}

export default App;
