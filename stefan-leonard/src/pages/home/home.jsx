import React,{useEffect, useState} from "react";
import "./home.css";
import Carusel from "../../components/carousel/carousel";
import FloatingActionButtons from "../../components/imagecard/imageCardtest";


const Home = () => {

  const [caruselImages, setCaruselImages] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/secondPage")
    .then((res) => {
      res.json()
      .then((data) => setCaruselImages(data))
    } )
  }, [])
  

  return (


    <>
      
        <Carusel 
        caruselImagesData={caruselImages} />
        <FloatingActionButtons />
      
    </>
  );
};

export default Home;
