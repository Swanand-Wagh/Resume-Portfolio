import React from "react";
import { Image } from "react-bootstrap";
import "./profile.css";
import My_Profile from "../../Profile.pdf";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="img-border">
          <Image
            className="dp"
            src={process.env.PUBLIC_URL + "/assets/dp.png"}
            roundedCircle
          />
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "36px",
              letterSpacing: "1.15px",
              fontWeight: "700",
              marginBottom: "0",
            }}
          >
            Alias
          </p>
          {/* <p
            style={{ margin: "0px 0px 5px 0px", fontSize: "18px" }}
            className="text-center"
          >
            Web Designer
          </p> */}
          <div style={{ margin: "9px 0px" }} className="text-center ml-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/swanandwagh1208/"
            >
              <i class="fab fa-linkedin-in profile-links"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Swanand-Wagh"
            >
              <i class="fab fa-github profile-links"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/swanandaaaa/"
            >
              <i class="fab fa-instagram profile-links"></i>
            </a>
          </div>
        </div>
        <a
          className="download-btn"
          href={My_Profile}
          download="Swanand_resume.pdf"
        >
          Download CV
        </a>
        <p className="made-by text-center">
          Designed by Alias
          <br />
          <i class="far fa-copyright"></i> 2021 All rights reserved
        </p>
      </div>
    </>
  );
}

export default Profile;
