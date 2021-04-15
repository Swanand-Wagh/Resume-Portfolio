import React from "react";
import Myself from "./Myself";
import WhatIDo from "./WhatIDo";
import Testimonial from "./Testimonial";
import FunFacts from "./FunFacts";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <Myself />
        <WhatIDo />
        <Testimonial />
        <FunFacts />
      </div>
    </>
  );
}

export default About;
