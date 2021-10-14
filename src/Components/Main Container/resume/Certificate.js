import React from "react";
import "./resume.css";

function Certificate() {
  return (
    <>
      <div>
        <p className="pt-4 pb-2 what-i-do">Certificates</p>
        <div className="certificate">
          <a
            className="certificate-card"
            target="_blank"
            rel="noreferrer"
            href="https://www.coursera.org/account/accomplishments/certificate/EEQGDEF35SR5"
          >
            <p className="what-i-do-title">
              Software Processes and Agile Practices
            </p>
            <p className="issue-date">Issued Sep 2020</p>
            <p className="cred-id">Credential ID EEQGDEF35SR5</p>
          </a>
          <a
            className="certificate-card"
            target="_blank"
            rel="noreferrer"
            href="https://www.coursera.org/account/accomplishments/certificate/4UXGU2LAB2Q9"
          >
            <p className="what-i-do-title">Introduction to Git and GitHub</p>
            <p className="issue-date">Issued Mar 2021</p>
            <p className="cred-id">Credential ID 4UXGU2LAB2Q9</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Certificate;
