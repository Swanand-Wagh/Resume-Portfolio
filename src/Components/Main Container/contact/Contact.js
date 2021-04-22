import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <>
      <div id="CONTACT" className="contact">
        <p className="title mb-4">
          Get In <span>Touch</span>
        </p>

        <Row>
          <Col md={4}>
            <div className="fact text-center mb-4">
              <i class="fas fa-map-marker-alt abt-icons "></i>
              <p
                style={{ fontSize: "15px", fontWeight: "600" }}
                className="pt-1 what-i-do-title"
              >
                Pune, Maharashtra
              </p>
            </div>
            <div className="fact text-center mb-4">
              <i class="fas fa-phone-alt abt-icons "></i>
              <p
                style={{ fontSize: "15px", fontWeight: "600" }}
                className="pt-1 what-i-do-title"
              >
                +91 70307XXXXX
              </p>
            </div>
            <div className="fact text-center ">
              <i class="fas fa-inbox abt-icons "></i>
              <p
                style={{ fontSize: "15px", fontWeight: "600" }}
                className="pt-1 what-i-do-title"
              >
                swanandwagh7@gmail.com
              </p>
            </div>
          </Col>
          <Col md={1} />
          <Col md={7}>
            <p className="pb-2 what-i-do">
              How Can I <span>Help You?</span>
            </p>
            <form
              method="post"
              name="contact"
              onSubmit="submit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="inputs">
                <label className="mr-3 mb-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Name"
                    required
                  />
                </label>
                <label>
                  <input type="text" placeholder="Subject" name="Subject" />
                </label>
                <label>
                  <input type="email" placeholder="Your Email" name="Email" />
                </label>
              </div>

              <br />
              <label>
                <textarea
                  name="Message"
                  id="Message"
                  cols="49"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </label>
              <br />
              <button type="submit" className="download-btn mt-2">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
