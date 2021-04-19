import React from "react";
import Home from "../Components/Main Container/Home";
import About from "../Components/Main Container/about/About";
import Resume from "../Components/Main Container/resume/Resume";
import "../App.css";

function MainContainer() {
  return (
    <>
      <div className="main-container pl-2">
        {/* <Home />
        <About /> */}
        <Resume />
      </div>
    </>
  );
}

export default MainContainer;
