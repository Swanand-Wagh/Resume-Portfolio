import React from "react";
import { Col, Row } from "react-bootstrap";
import "./resume.css";

function Education() {
  return (
    <>
      <div className="education">
        <p className="pt-4 pb-2 what-i-do">Education</p>
        <Row>
          <Col xs={3} className="pr-0 left-of-line-col">
            <div className="left-of-line">
              <p className="date">July 2019</p>
              <p className="edu-title">Btech IT</p>
            </div>
          </Col>
          <Col xs={1} className="pr-0 mx-0 divider-col">
            <div className="divider"></div>
          </Col>
          <Col xs={8} className="px-0">
            <p className="what-i-do-title mb-2">Symbiosis University</p>
            <p className="exp-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              aut asperiores tempore vero laudantium, consequatur magni laborum
              ullam. Enim, accusantium.
            </p>
          </Col>
          <Col xs={3} className="pr-0 left-of-line-col">
            <div className="left-of-line">
              <p className="date">Aug 2017</p>
              <p className="edu-title">HSC</p>
            </div>
          </Col>
          <Col xs={1} className="pr-0 mx-0 divider-col">
            <div className="divider bottom-divider"></div>
          </Col>
          <Col xs={8} className="px-0">
            <p className="what-i-do-title mb-2">Dr. Kalmadi Jr College</p>
            <p className="exp-text">
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

export default Education;
