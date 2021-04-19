import React from "react";
import { Col, Row } from "react-bootstrap";
import "./resume.css";

function Experience() {
  return (
    <>
      <div className="experience">
        <p className="pt-4 pb-2 what-i-do">Experience</p>
        <Row>
          <Col md={3} className="pr-0">
            <div className="left-of-line">
              <p>May 2019</p>
              <p className="edu-title">SayItSocial</p>
            </div>
          </Col>
          <Col md={1} style={{ paddingLeft: "1.25rem" }} className="pr-0 mx-0">
            <div className="divider"></div>
          </Col>
          <Col md={8} className="px-0">
            <p className="what-i-do-title mb-2">React Developer</p>
            <p className="edu-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              aut asperiores tempore vero laudantium, consequatur magni laborum
              ullam. Enim, accusantium.
            </p>
          </Col>
          <Col md={3} className="pr-0">
            <div className="left-of-line">
              <p>May 2020</p>
              <p className="edu-title">self-taught</p>
            </div>
          </Col>
          <Col md={1} style={{ paddingLeft: "1.25rem" }} className="pr-0 mx-0">
            <div style={{ height: "8.4rem" }} className="divider"></div>
          </Col>
          <Col md={8} className="px-0">
            <p className="what-i-do-title mb-2">Game Developer</p>
            <p className="edu-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              aut asperiores tempore vero laudantium, consequatur magni laborum
              ullam. Enim, accusantium.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Experience;
