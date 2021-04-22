import React from "react";
import "./resume.css";

function Skills() {
  return (
    <>
      <div className="skills pl-5">
        <p className="pt-4 pb-2 what-i-do">Skills</p>
        <div className="progress-title">
          <span>Html</span>
          <span>90%</span>
        </div>
        <div className="progress">
          <div style={{ width: "90%", backgroundColor: "orange" }}></div>
        </div>
        <div className="progress-title">
          <span>Css</span>
          <span>82%</span>
        </div>
        <div className="progress">
          <div style={{ width: "82%", backgroundColor: "orange" }}></div>
        </div>
        <div className="progress-title">
          <span>Js</span>
          <span>60%</span>
        </div>
        <div className="progress">
          <div style={{ width: "60%", backgroundColor: "orange" }}></div>
        </div>
        <div className="progress-title">
          <span>React-Js</span>
          <span>70%</span>
        </div>
        <div className="progress">
          <div style={{ width: "70%", backgroundColor: "orange" }}></div>
        </div>
        <div className="progress-title">
          <span>C++</span>
          <span>80%</span>
        </div>
        <div className="progress">
          <div style={{ width: "80%", backgroundColor: "orange" }}></div>
        </div>
        <div className="progress-title">
          <span>C# Unity</span>
          <span>20%</span>
        </div>
        <div className="progress">
          <div style={{ width: "20%", backgroundColor: "orange" }}></div>
        </div>
      </div>
    </>
  );
}

export default Skills;
