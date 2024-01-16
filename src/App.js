import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftSide from "../src/components/leftside";
import Home from "../src/components/home";
import About from "../src/components/Aboutus";
import Navbar from "./components/navbar";
import Rightside from "./components/right";
import Contact from "./components/Contactus";
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
          <LeftSide />
        </div>
        <div className="flex-grow">
          <Home />
          <About id="about" />
          <Experience id="experience" />
          <Mywork id="mywork" />
          <Certifications id="certifications" />
          <Blogs id="blogs" />
          <Contact id="contact" />
        </div>
        <div className="hidden md:flex">
          <Rightside />
        </div>
      </div>
    </Router>
  );
}

export default App;
