import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";

function WhatIDo() {
  return (
    <>
      <p className="pt-4 pb-3 what-i-do">
        What I Bring <span>to the Table</span>.
      </p>
      <Row>
        <Col md={6}>
          <i class="fas fa-chess-king abt-icons"></i>
          <p className="what-i-do-title">Leadership</p>
          <p className="what-i-do-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            tempore officiis autem rerum eum omnis quasi illo, vero libero,
            veritatis eaque distinctio eius enim cupiditate expedita molestiae
            in magni fugit.
          </p>
        </Col>
        <Col md={6} className=" ryt-col">
          <i class="fas fa-gamepad abt-icons"></i>
          <p className="what-i-do-title">Game Development</p>
          <p className="what-i-do-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perspiciatis quibusdam eius, voluptate modi esse quam voluptatibus
            tempora ab, beatae laborum, officia atque rem voluptatem
            exercitationem nemo numquam quaerat iste.
          </p>
        </Col>
        <Col md={6} className="what-col">
          <i class="fas fa-laptop-code abt-icons"></i>
          <p className="what-i-do-title">Web Development</p>
          <p className="what-i-do-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            tempore officiis autem rerum eum omnis quasi illo, vero libero,
            veritatis eaque distinctio eius enim cupiditate expedita molestiae
            in magni fugit.
          </p>
        </Col>
        <Col md={6} className="ryt-col what-col">
          <i class="fas fa-hands-helping abt-icons"></i>
          <p className="what-i-do-title">Volunteering</p>
          <p className="what-i-do-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perspiciatis quibusdam eius, voluptate modi esse quam voluptatibus
            tempora ab, beatae laborum, officia atque rem voluptatem
            exercitationem nemo numquam quaerat iste.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default WhatIDo;
