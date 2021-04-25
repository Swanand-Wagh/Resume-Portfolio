import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../App.css";

function Panel() {
  return (
    <>
      <div
        className="main-panel"
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
              {["left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip className="tt" id={`tooltip-${placement}`}>
                      Home
                    </Tooltip>
                  }
                >
                  <a href="#HOME">
                    <i class="fas fa-home panel-icons"></i>
                  </a>
                </OverlayTrigger>
              ))}
            </li>
            <li>
              {["left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>About Me</Tooltip>
                  }
                >
                  <a href="#ABOUT">
                    <i class="fas fa-user panel-icons"></i>
                  </a>
                </OverlayTrigger>
              ))}
            </li>
            <li>
              {["left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>Resume</Tooltip>
                  }
                >
                  <a href="#RESUME">
                    <i class="fas fa-graduation-cap panel-icons"></i>
                  </a>
                </OverlayTrigger>
              ))}
            </li>
            <li>
              {["left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>Portfolio</Tooltip>
                  }
                >
                  <a href="#PORTFOLIO">
                    <i class="fas fa-briefcase panel-icons"></i>
                  </a>
                </OverlayTrigger>
              ))}
            </li>
            <li>
              {["left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>Contact</Tooltip>
                  }
                >
                  <a href="#CONTACT">
                    <i class="fas fa-envelope panel-icons"></i>
                  </a>
                </OverlayTrigger>
              ))}
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
