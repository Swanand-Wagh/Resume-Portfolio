import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";

function FunFacts() {
  return (
    <>
      <div className="fun-facts">
        <p className="pt-4 pb-2 what-i-do">
          Fun <span>FACTS</span>
        </p>
        <Row>
          <Col>
            <div className="fact text-center">
              <i class="fas fa-paper-plane abt-icons"></i>
              <p className="what-i-do-title">Origami Artist</p>
            </div>
          </Col>
          <Col>
            <div className="fact text-center">
              <i class="fas fa-pizza-slice abt-icons"></i>
              <p className="what-i-do-title">Foodie</p>
            </div>
          </Col>
          <Col>
            <div className="fact text-center">
              <i class="fas fa-skating abt-icons"></i>
              <p className="what-i-do-title">Sports Enthusiast</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FunFacts;
