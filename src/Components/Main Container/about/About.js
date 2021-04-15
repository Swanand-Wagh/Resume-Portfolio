import React from "react";
import Myself from "./Myself";
import WhatIDo from "./WhatIDo";
import "./about.css";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <Myself />
        <WhatIDo />
      </div>
    </>
  );
}

export default AboutMe;
