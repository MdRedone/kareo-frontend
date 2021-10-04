import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";
import aboutLogo from "../../assets/images/choose-us-image-01.png";
function About() {
  return (
    <div className="about-header">
      {/* about page content */}
      <div>
        <div class="section-heading">
          <h2>Why choose pick of science?</h2>
        </div>
      </div>
      <Row lg={12} className="about-row">
        <Col lg={4} className="about-photo">
          <img className="aboutLogo" src={aboutLogo} alt="" />
        </Col>
        <Col lg={8} className="about-description">
          <h4>Best Educational Institution</h4>
          <p>
            Pick of science is a graduate computer science students focus
            organisation. We are trying to<br></br> focus for quality Education.
            <br></br>
            Our aim is to build a digital generation those people have full type
            of quality to serve our nation.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
