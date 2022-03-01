import React,{useEffect, useState} from "react";
import "./home.css";
import Carusel from "../../components/carousel/carousel";
import FloatingActionButtons from "../../components/imagecard/imageCardtest";
import Videoplayer from "../../components/video/video";


const Home = () => {

  const [caruselImages, setCaruselImages] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/carousel")
    .then((res) => {
      res.json()
      .then((data) => setCaruselImages(data))
    } )
  }, [])
  

  return (


    <>
      
        <Carusel 
        caruselImagesData={caruselImages} />
         <Videoplayer />
        <FloatingActionButtons />
       
      
    </>
  );
};

export default Home;
