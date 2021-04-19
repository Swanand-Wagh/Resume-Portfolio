import React from "react";
import { Col, Row } from "react-bootstrap";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

import "./resume.css";

function Resume() {
  return (
    <>
      <div className="resume">
        <p className="title">
          Resu<span>me</span>
        </p>
        <Row>
          <Col md={7}>
            <Education />
          </Col>
          <Col md={5}>
            <Skills />
          </Col>
          <Col md={7}>
            <Experience />
          </Col>
          <Col md={5}></Col>
        </Row>
      </div>
    </>
  );
}

export default Resume;
