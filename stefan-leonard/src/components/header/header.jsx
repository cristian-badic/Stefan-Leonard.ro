import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo5.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar id="navbar" bg="myGray" expand="lg">
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mx-auto" id="basic-navbar-nav">
          <Nav className="mr-auto  ">
            <Nav.Link id="text-link" className="nav-link mx-auto text-light">
              <Link className="text-light" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link id="text-link" className="mx-auto text-light">
              <Link className="text-light" to={"/portofolio"}>
                portofolio
              </Link>
            </Nav.Link>
            <Nav.Link id="text-link" className="mx-auto text-light">
              <Link className="text-light" to={"/about"}>
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="d-flex">
          <img id="logo" className="logo" alt="" src={Logo} />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
