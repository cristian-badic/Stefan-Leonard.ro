import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" id="navbar" bg="myGray" expand="lg">
        <Link to={"/"}>
          <Navbar.Brand className="d-flex">
            <img
              id="logo"
              className="logo"
              alt=""
              src="/assets/images/logo5.svg"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          className="bg-light ml-auto"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link id="text-link" className="nav-link text-light">
              <Link className="text-light" to={"/"}>
                Home
              </Link>
            </Nav.Link>
            <NavDropdown style={{padding:0}} title="Gallery" id="text-link" className="nav-link">
              <NavDropdown.Item>
                <Link className="text-dark" to={"/portofolioWorking"}>
                  Work
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="text-dark" to={"/portofolioHobby"}>
                  Hobby
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link id="text-link" className="mx-auto text-light">
              <Link className="text-light" to={"/portofolioWorking"}>
                Work
              </Link>
            </Nav.Link>
            <Nav.Link id="text-link" className="mx-auto text-light">
              <Link className="text-light" to={"/portofolioHobby"}>
                Hobby
              </Link>
            </Nav.Link> */}
            <Nav.Link id="text-link" className="nav-link text-light">
              <Link className="text-light" to={"/about"}>
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
