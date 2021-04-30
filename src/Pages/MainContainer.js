import React from "react";
import Home from "../Components/Main Container/home/Home";
import About from "../Components/Main Container/about/About";
import Resume from "../Components/Main Container/resume/Resume";
import Portfolio from "../Components/Main Container/Portfolio";
import Contact from "../Components/Main Container/contact/Contact";
import Hamburger from "./Hamburger";
import "../App.css";

function MainContainer() {
  return (
    <>
      <div className="main-container pl-2">
        <Hamburger />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default MainContainer;
