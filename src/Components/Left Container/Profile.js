import React from "react";
import { Button, Image } from "react-bootstrap";
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="profile">
        <Image
          className="dp"
          src={process.env.PUBLIC_URL + "/assets/dp.png"}
          roundedCircle
        />
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "36px",
              letterSpacing: "1.25px",
              fontWeight: "700",
              marginBottom: "0",
            }}
          >
            Alias
          </p>
          <p
            style={{ margin: "0px 0px 5px 0px", fontSize: "18px" }}
            className="text-center"
          >
            Web Designer
          </p>
          <div style={{ margin: "15px 0px" }} className="text-center ml-4">
            <a href="https://www.linkedin.com/in/swanandwagh1208/">
              <Image
                className="profile-links"
                src={process.env.PUBLIC_URL + "/assets/linkedin.svg"}
              />
            </a>
            <a href="https://github.com/Swanand-Wagh">
              <Image
                className="profile-links"
                src={process.env.PUBLIC_URL + "/assets/github.svg"}
              />
            </a>
            <a href="https://www.instagram.com/swanandaaaa/">
              <Image
                className="profile-links"
                src={process.env.PUBLIC_URL + "/assets/instagram.svg"}
              />
            </a>
          </div>
        </div>
        <Button className="download-btn" variant="outline-light">
          Download CV
        </Button>
        <p className="made-by text-center">
          Designed by Alias
          <br />© 2021 All rights reserved
        </p>
      </div>
    </>
  );
}

export default Profile;
