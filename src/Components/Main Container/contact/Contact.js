import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <>
      <div id="CONTACT" className="contact">
        <p className="title mb-5">
          Get In <span>Touch</span>
        </p>

        <Row>
          <Col md={4}>
            <div className="fact text-center mb-4">
              <i class="fas fa-map-marker-alt abt-icons "></i>
              <p
                className="pt-1 contact-title"
              >
                Pune, Maharashtra
              </p>
            </div>
            <div className="fact text-center mb-4">
              <i class="fas fa-phone-alt abt-icons "></i>
              <p
                className="pt-1 contact-title"
              >
                +91 70307XXXXX
              </p>
            </div>
            <div className="fact text-center ">
              <i class="fas fa-inbox abt-icons "></i>
              <p
                className="pt-1 contact-title"
              >
                swanandwagh7@gmail.com
              </p>
            </div>
          </Col>
          <Col md={1} />
          <Col md={7} className="contact-form">
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
                <input
                  className="mr-3"
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  required
                />
                <input type="text" placeholder="Subject" name="Subject" />
              </div>
              <input type="email" placeholder="Your Email" name="Email" />

              <br />
              <textarea
                name="Message"
                id="Message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <br />
              <button type="submit" className="download-btn mt-3 send">
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
