import React from "react";
import "../App.css";

function Panel() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "81.25vh",
        }}
      >
        <div className="panel-1 mt-1">
          <ul>
            <li>
              <a href="#HOME">
                <i class="fas fa-home panel-icons"></i>
              </a>
            </li>
            <li>
              <a href="#ABOUT">
                <i class="fas fa-user panel-icons"></i>
              </a>
            </li>
            <li>
              <a href="#RESUME">
                <i class="fas fa-graduation-cap panel-icons"></i>
              </a>
            </li>
            <li>
              <a href="#PORTFOLIO">
                <is class="fas fa-briefcase panel-icons"></is>
              </a>
            </li>
            <li>
              <a href="#CONTACT">
                <i class="fas fa-envelope panel-icons"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="panel-2">
          <ul>
            <li>
              <a href="#NEXT">
                <i class="fas fa-chevron-right panel-icons"></i>
              </a>
            </li>
            <li>
              <a href="#PREVIOUS">
                <i class="fas fa-chevron-left panel-icons"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Panel;
