import Aboutus from "./Aboutus";
import Home from "./home";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LeftSide from "../components/leftside";
import Navbar from "./navbar";
import Rightside from "./right";
import Contact from "./Contactus";
import Mywork from "./mywork";
import Certifications from "../components/certifications";
import Blogs from "./Blogs";
import Experience from "./experience";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
export default function connections() {
 return (
   <>
      <Router>
      <Navbar />
      <div className="flex">
        <div className="hidden md:flex">
          <LeftSide />
        </div>
        <div className="flex-grow">
          <Home id="home" />
          <Aboutus id="about" />
          <Experience id="experience" />
          <Mywork id="mywork" />
          <Certifications id="certifications" />
          < Route path="/blogs" element={<Blogs/>} />
          <Contact id="contact" />
        </div>
        <div className="hidden md:flex">
          <Rightside />
        </div>
      </div>
      </Router>
      </>
 );}