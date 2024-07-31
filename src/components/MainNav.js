import React from "react";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import "@fortawesome/fontawesome-free/css/all.min.css";

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-3">
        <Navbar.Brand href="/">JHC</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/search">
                Search
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="https://github.com" target="_blank">
              <i className="fab fa-github"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
