import React from "react";
import { Row, Col, CardDeck, ListGroup, Card } from "react-bootstrap";
import "./joinus.css";

const JoinUs = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">Join Us</span>

            <div
              className="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span className="label-input100">Tell us your name *</span>
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div
              className="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span className="label-input100">Enter your email *</span>
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="wrap-input100">
              <span className="label-input100">Your Website</span>
              <input
                className="input100"
                type="text"
                name="web"
                placeholder="http://"
              />
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span className="label-input100">Message</span>
              <textarea
                className="input100"
                name="message"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="container-contact100-form-btn">
              <div className="wrap-contact100-form-btn">
                <div className="contact100-form-bgbtn"></div>
                <button className="contact100-form-btn">Submit</button>
              </div>
            </div>
          </form>
        </div>

        <span className="contact100-more">Call us on +001 345 6178</span>
      </div>
    </div>
  );
};

export default JoinUs;
