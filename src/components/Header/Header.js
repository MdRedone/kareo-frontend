import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
function Header() {
  return (
    <div className="header w-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <FontAwesomeIcon icon={faCheckSquare} />
              Pick of Science
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contactus">Contact</NavLink>
              <NavLink to="/about">About </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
