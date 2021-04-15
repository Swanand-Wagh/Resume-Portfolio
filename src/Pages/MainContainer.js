import React from "react";
import Home from "../Components/Main Container/Home";
import "../App.css";
import About from "../Components/Main Container/about/About";

function MainContainer() {
  return (
    <>
      <div className="main-container pl-2">
        <Home />
        <About />
      </div>
    </>
  );
}

export default MainContainer;
