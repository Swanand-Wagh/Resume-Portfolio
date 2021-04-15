import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";

function Myself() {
  return (
    <>
      <p className="title">
        About <span>Me</span>
      </p>
      <Row>
        <Col md={6} className="pr-0">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            reprehenderit unde cupiditate quas distinctio modi officia ex, nisi
            cum fugiat perspiciatis illo, consectetur accusamus quos eum? Enim
            culpa unde tenetur facere possimus perferendis suscipit, quisquam
            dolorum doloremque, vel nostrum quas eos eum! Rem inventore magnam
            nemo quis. Lorem ipsum dolor sit amet.
          </p>
        </Col>
        <Col md={1} className="px-0" />
        <Col md={5}>
          <div className="abt-details pl-0">
            <ul>
              <li>
                <span>Age</span> 19
              </li>
              <li>
                <span>Birthday</span> 12th August 2001
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
                <span>Phone</span> +91 1234567890
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Myself;
