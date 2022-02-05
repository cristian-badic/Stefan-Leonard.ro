import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";



const Footer = () => {
  return (
    <div className="footer-area text-center text-light ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="logo d-flex justify-content-center">
              <a href="/">
                <img src={Logo} alt="" />
              </a>
            </div> */}
          </div>
          <div className="col-12">
            <div className="footer-menu  ">
              <ul className="d-flex justify-content-center">
                {/* <button href="https://semantic-ui.com/elements/button.html#icon-buttons" class="ui circular facebook icon button">
                  <i class="facebook icon"></i>
                </button>
                <button class="ui circular twitter icon button">
                  <i class="twitter icon"></i>
                </button>
                <button class="ui circular linkedin icon button">
                  <i class="linkedin icon"></i>
                </button>
                <button class="ui circular google plus icon button">
                  <i class="google plus icon"></i>
                </button> */}

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
                <span> 2021 Stefan@Leonard All rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
