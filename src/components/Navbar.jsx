import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom/dist";
import { ReactComponent as Logo } from "../logo.svg";
import "./Navbar.css";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar data-bs-theme="dark" expand="lg" className="bg-3A3A41">
          <Container>
            <Navbar.Brand href={"/"}>
              <Logo
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Roids Fitness logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to={"/"} className="white-text-no-hyperlink">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/class-timetable"} className="white-text-no-hyperlink">Classes</Link>
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link>
                  <Link to={"/register"} className="white-text-no-hyperlink">Register</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/login"} className="white-text-no-hyperlink">Login</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}
