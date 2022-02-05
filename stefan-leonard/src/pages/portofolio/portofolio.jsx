import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./portofolio.css";

const Portofolio = () => {
  const [portofolioImages, setPortofolioImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/portofolio").then((res) => {
      res.json().then((data) => setPortofolioImages(data));
    });
  }, []);

  const [model, setModel] = useState(false);
  const [showingImg, setShowingImg] = useState("");

  const getImg = (img) => {
    setShowingImg(img);
    setModel(true);
  };

  return (
    <>
      <div className="container">
        <div className="masonry-container">
          <p>Nature</p>
          <p>BackGround</p>
        </div>

        <div className={model ? "model open" : "model"}>
          <img src={showingImg} />
          <CloseIcon onClick={() => setModel(false)} />
        </div>

        <div className="gallery">
          {portofolioImages.map((item) => (
            <div
              className="pics"
              key={item.id}
              onClick={() => getImg(item.img)}
            >
              <img src={item.img} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portofolio;
