import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import firstphoto from "../assets/images/firstphoto.jpg";
import secondphoto from "../assets/images/2.jpg";
import thirdphoto from "../assets/images/3.jpg";

const Carusel = () => {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={firstphoto}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={secondphoto} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={thirdphoto} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carusel;
