import React from "react";
import "./NavBar.css";
import i_logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="NavBarWeather">
        <Container>
          <Navbar.Brand href="/#">
            <img src={i_logo} alt="Logo" className="logoApp" />
            WeatherVise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/#" activeclassname="activeLink">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/subscribe">
                Subscribe
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
