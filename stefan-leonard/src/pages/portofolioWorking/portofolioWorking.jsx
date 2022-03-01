import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./portofolioWorking.css";

const PortofolioWorking = () => {
  const [portofolioImages, setPortofolioImages] = useState([]);
  const [tab, setTab] = useState(0);
  const [showingImg, setShowingImg] = useState("");
  const [model, setModel] = useState(false);
  

  const filterByCategory = (data) => {
    const categories = ["nature", "background", "urbanism", "public-events"];
    const arr = [];
    categories.forEach((cat) => {
      arr.push(data.filter((imgObj) => imgObj.category === cat));
    });
    return arr;
  };

  useEffect(() => {
    fetch("http://localhost:3000/portofolioWorking").then((res) => {
      res.json().then((data) => {
        const filterData = filterByCategory(data);
        setPortofolioImages(filterData);
      });
    });
  }, []);

 

  const getImg = (img) => {
    setShowingImg(img);
    setModel(true);
  };

  const handleTabsOnClick = (selectedTab) => {
    setTab(selectedTab);
  };

  console.log(portofolioImages);

  return (
    <>
      <div className="container">
        <div className="tabs-buttons-container-working">
          <button
            onClick={() => handleTabsOnClick(0)}
            style={{ opacity: tab === 0 ? 1 : 0.6 }}
          >
            Nature
          </button>
          <button
            onClick={() => handleTabsOnClick(1)}
            style={{ opacity: tab === 1 ? 1 : 0.6 }}
          >
            BackGround
          </button>
          <button
            onClick={() => handleTabsOnClick(2)}
            style={{ opacity: tab === 2 ? 1 : 0.6 }}
          >
            Urbanism
          </button>
          <button
            onClick={() => handleTabsOnClick(3)}
            style={{ opacity: tab === 3 ? 1 : 0.6 }}
          >
            Public Events
          </button>
        </div>

        <div className={model ? "model open" : "model"}>
          <img src={showingImg} />
          <CloseIcon onClick={() => setModel(false)} />
        </div>

        <div className="galleryWorking">
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

export default PortofolioWorking;
