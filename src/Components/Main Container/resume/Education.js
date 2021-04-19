import React from "react";
import { Col, Row } from "react-bootstrap";
import "./resume.css";

function Education() {
  return (
    <>
      <div className="education">
        <p className="pt-4 pb-2 what-i-do">Education</p>
        <Row>
          <Col md={3} className="pr-0">
            <div className="left-of-line">
              <p>2019 - 2023</p>
              <p className="exp-title">Btech IT</p>
            </div>
          </Col>
          <Col md={1} style={{ paddingLeft: "1.25rem" }} className="pr-0 mx-0">
            <div className="divider"></div>
          </Col>
          <Col md={8} className="px-0">
            <p className="what-i-do-title mb-2">
              Symbiosis Institute of Technology
            </p>
            <p className="exp-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              aut asperiores tempore vero laudantium, consequatur magni laborum
              ullam. Enim, accusantium.
            </p>
          </Col>
          <Col md={3} className="pr-0">
            <div className="left-of-line">
              <p>2017 - 2019</p>
              <p className="exp-title">
                12<sup>th</sup> Standard
              </p>
            </div>
          </Col>
          <Col md={1} style={{ paddingLeft: "1.25rem" }} className="pr-0 mx-0">
            <div style={{ height: "8.4rem" }} className="divider"></div>
          </Col>
          <Col md={8} className="px-0">
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
