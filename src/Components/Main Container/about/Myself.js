import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";

function Myself() {
  return (
    <>
      <div className="myself">
        <p className="title mb-5">
          Highly innovative and enthusiastic, <span>Web Developer</span> and
          <span>Game Developer</span>.
        </p>
        <Row>
          <Col md={6} className="pr-0">
            <p className="intro">
              My name is{" "}
              <span style={{ fontStyle: "oblique", fontWeight: "900" }}>
                Swanand
              </span>
              , and I enjoy meeting new people and finding ways to help them &
              have an uplifting experience. I seek new challenges and try to
              think out-of-the-box while looking for creative solutions to a
              given problem. I am a quick learner and believe in learning from
              my mistakes for I strongly feel that this virtue will take me
              ahead in life and career...
            </p>
          </Col>
          <Col md={1} className="px-0" />
          <Col md={5} className="myself-col">
            <div className="abt-details pl-0">
              <ul>
                <li>
                  <span>Age</span> 19
                </li>
                <li>
                  <span>City</span> Pune, Maharashtra
                </li>
                <li>
                  <span>University</span> Symbiosis Pune
                </li>
                <li>
                  <span>E-mail</span> swanandwagh7@gmail.com
                </li>
                <li>
                  <span>Phone</span> +91 70307XXXXX
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Myself;
