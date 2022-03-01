import React,{useEffect, useState} from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
// import { firstPage } from "../../data/data";

const Carusel = (props) => {
  
  
  

  return (
    <>
      <div id="overlay" class="overlay">
        <h1 className="font-weight-bold">Scroll for more</h1>
        <ArrowDropDownCircleOutlinedIcon
          sx={{
            fontSize: "3.5rem",
          }}
        />
      </div>

      <Carousel  indicators={false} fade={true} interval={3000} controls={false}>
        {props.caruselImagesData.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100" src={slide.img} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Carusel;
