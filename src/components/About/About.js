import React from "react";
import "./About.css";
import { Col, Row, Container, ProgressBar, Image } from "react-bootstrap";
import aboutLogo from "../../assets/images/priscilla-du-preez-4Gi3H-4evlk-unsplash.jpg";
import aboutlogo1 from "../../assets/images/soundtrap-ddwbTn5HDdQ-unsplash.jpg";
function About() {
  return (
    <div className="about-us">
      <Container>
        <Row className="about-row mb-5">
          <div>
            <h1>About Us</h1>
            <p className="paragraph">
              Pick of science is a graduate computer science students focus
              organisation. We are trying to<br></br> focus for quality
              Education. <br></br>
              Our aim is to build a digital generation those people have full
              type of quality to serve our nation.
            </p>
          </div>
        </Row>

        <Row className="about-second-row">
          <Col sm={12} md={6}>
            <img className="about-img" src={aboutLogo} alt="" />
          </Col>

          <Col sm={12} md={6}>
            <img className="about-img" src={aboutlogo1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
