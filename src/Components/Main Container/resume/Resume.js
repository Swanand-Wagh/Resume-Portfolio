import React from "react";
import { Col, Row } from "react-bootstrap";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Others from "./Others";
import "./resume.css";
import Certificate from "./Certificate";

function Resume() {
  return (
    <>
      <div id="RESUME" className="resume">
        <p className="title">
          Resu<span>me</span>
        </p>
        <Row>
          <Col md={7}>
            <Education />
            <Experience />
          </Col>
          <Col md={5}>
            <Skills />
            <Others />
          </Col>
          {/* <Col md={7}></Col>
          <Col md={5}></Col> */}
        </Row>
        <Certificate />
      </div>
    </>
  );
}

export default Resume;
