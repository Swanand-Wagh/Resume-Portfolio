import React from "react";
import Home from "../Components/Main Container/Home";
import "../App.css";
import AboutMe from "../Components/Main Container/AboutMe";

function MainContainer() {
  return (
    <>
      <div className="main-container">
        <Home />
        {/* <AboutMe /> */}
      </div>
    </>
  );
}

export default MainContainer;
