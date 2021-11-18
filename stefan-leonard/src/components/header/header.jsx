import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link} from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mx-auto" id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link id="text-link" className="mx-auto text-light">
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
              <Link className="text-light" to={"/contact"}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
