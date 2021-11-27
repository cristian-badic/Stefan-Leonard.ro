import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import firstphoto from "../assets/images/6.jpg";
import secondphoto from "../assets/images/7.jpg";
import thirdphoto from "../assets/images/8.jpg";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import TextTransition, { presets } from "react-text-transition";

const Carusel = () => {
  return (
    <>
      <div id="overlay" class="overlay">
        <h1 className="font-weight-bold">Swipe for more</h1>
        <ArrowDropDownCircleOutlinedIcon
          sx={{
            fontSize: "3.5rem",
          }}
        />
      </div>
      <Carousel indicators="" fade="true" interval={3000} controls="">
        <Carousel.Item>
          <img className="d-block w-100" src={firstphoto} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondphoto} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirdphoto} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carusel;
