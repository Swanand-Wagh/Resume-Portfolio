import React from "react";
import { Button, Image } from "react-bootstrap";
import "./profile.css";

function Profile() {
  return (
    <div className="profile">
      <Image
        className="dp"
        src={process.env.PUBLIC_URL + "/assets/dp.png"}
        roundedCircle
      />
      <div>
        <h2>Swanand Wagh</h2>
        <h4>Alias</h4>
      </div>
      <div>
        <Image
          className="profile-links"
          src={process.env.PUBLIC_URL + "/assets/linkedin.svg"}
        />
        <Image
          className="profile-links"
          src={process.env.PUBLIC_URL + "/assets/github.svg"}
        />
        <Image
          className="profile-links"
          src={process.env.PUBLIC_URL + "/assets/instagram.svg"}
        />
      </div>
      <Button variant="dark" size="lg">
        Download CV
      </Button>
      <p className="text-muted">
        Designed by Alias
        <br />© 2021 All rights reserved
      </p>
    </div>
  );
}

export default Profile;
