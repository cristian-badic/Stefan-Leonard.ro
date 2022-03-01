import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./portofolioHobby.css";

const PortofolioHobby = () => {
  const [portofolioImages, setPortofolioImages] = useState([]); // Stocam pozele venite de la localHost
  const [tab, setTab] = useState(0);  // setam tab-ul pe care ne aflam cu pozitia 0 by default
  const [showingImg, setShowingImg] = useState(""); // Preluam imaginea 
  const [model, setModel] = useState(false); // setam modal-ul pentru afisarea pozei - este setat by default false
  

  
  useEffect(() => {
    fetch("http://localhost:3000/portofolioHobby").then((res) => {
      res.json().then((data) => {
        const filterData = filterByCategory(data);
        setPortofolioImages(filterData);
      });
    });
  }, []);

  const filterByCategory = (data) => {
    const categories = ["nature", "background", "urbanism", "public-events"];
    const arr = [];
    categories.forEach((cat) => {
      arr.push(data.filter((imgObj) => imgObj.category === cat));
    });
    return arr;
  };


  const getImg = (img) => {
    setShowingImg(img);
    setModel(true);
  };

  const handleTabsOnClick = (selectedTab) => {
    setTab(selectedTab);
  };

  

  return (
    <>
      <div className="container">
        <div className="tabs-buttons-container">
          <button
            onClick={() => handleTabsOnClick(0)}
            style={{ opacity: tab === 0 ? 1 : 0.6 }}
          >
            Nature1
          </button>
          <button
            onClick={() => handleTabsOnClick(1)}
            style={{ opacity: tab === 1 ? 1 : 0.6 }}
          >
            BackGround1
          </button>
          <button
            onClick={() => handleTabsOnClick(2)}
            style={{ opacity: tab === 2 ? 1 : 0.6 }}
          >
            Urbanism1
          </button>
          <button
            onClick={() => handleTabsOnClick(3)}
            style={{ opacity: tab === 3 ? 1 : 0.6 }}
          >
            Public Events1
          </button>
        </div>

        <div className={model ? "model open" : "model"}>
          <img src={showingImg} />
          <CloseIcon onClick={() => setModel(false)} />
        </div>

        <div className="gallery">
          {portofolioImages.length > 0 &&
            portofolioImages[tab].map((item) => (
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

export default PortofolioHobby;
