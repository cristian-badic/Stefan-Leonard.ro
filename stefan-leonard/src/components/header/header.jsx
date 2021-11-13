import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
      <>
    
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link id="text-link" className="mx-auto text-light" href="#">
                <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link id="text-link" className="mx-auto text-light" href="#">
              <Link to={"/portofolio"}>portofolio</Link>
            </Nav.Link>
            <Nav.Link id="text-link" className="mx-auto text-light" href="#">
              <Link to={"/contact"}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    </>
  );
};

export default Header;
