import React, { Component } from "react";

import "./Header.css";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className=" alert alert-primary   py-0 d-flex align-items-center justify-content-center"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              <h1>PedProject</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-3 d-flex align-items-center gap-3 justify-content-center my-lg-0"
              style={{ minHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-decoration-none " to="/">
                Home
              </Link>
              <Link className="text-decoration-none " to="/posts">
                Posts
              </Link>

              <Link className="text-decoration-none " to="/products">
                Products
              </Link>
            </Nav>
            <Form>
              <Link className="btn mx-auto  btn-primary">Login</Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
