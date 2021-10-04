import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar variant="dark" className="header">
        <Container>
          <Row lg={12}>
            <Col lg={6}>
              {/* title */}
              <LinkContainer to="/">
                <Navbar.Brand className="navbar-brand">
                  <FontAwesomeIcon icon={faCheckSquare} />
                  Pick of Science
                </Navbar.Brand>
              </LinkContainer>
            </Col>
            {/* all link in footer  */}
            <Col lg={6} className="nav-link">
              <Nav className="nav">
                <Row lg={12}>
                  <Col lg={3}>
                    <NavLink to="/">Home</NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/services">Services</NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/contactus">Contact</NavLink>
                  </Col>
                  <Col lg={3}>
                    <NavLink to="/about">About </NavLink>
                  </Col>
                </Row>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
