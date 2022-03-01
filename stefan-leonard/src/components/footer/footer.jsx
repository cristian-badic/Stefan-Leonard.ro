import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-area text-center text-light">
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
          <div className="col-12">
            <div className="footer-menu  ">
              <ul className="d-flex justify-content-center">
                <li>
                  <a target="_blank" href="https://www.facebook.com/">
                    <FaFacebook size={"40px"} color="#21252" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/">
                    <FaInstagram size={"40px"} color="#21252" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/">
                    <FaYoutube size={"40px"} color="#21252" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="footer-sub ">
              <p>
                <i className="fa fa-copyright"></i>Copyright{" "}
                <span>
                  {" "}
                  &copy;{new Date().getFullYear()} Stefan@Leonard All rights
                  reserved
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
