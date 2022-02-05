import React, { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./portofoliotest.css";

const PortofolioTest = () => {
  const [portofolioImages, setPortofolioImages] = useState([]);
  const [tab, setTab] = useState(0);

  const filterByCategory = (data) => {
    const categories = ["nature", "background" , "urbanism"];
    const arr = [];
    categories.forEach((cat) => {
      arr.push(data.filter((imgObj) => imgObj.category === cat));
    });
    return arr;
  };

  useEffect(() => {
    fetch("http://localhost:3000/portofolio").then((res) => {
      res.json().then((data) => {
        const filterData = filterByCategory(data);
        setPortofolioImages(filterData);
      });
    });
  }, []);

  const [model, setModel] = useState(false);
  const [showingImg, setShowingImg] = useState("");

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
        <div className="tabs-buttons-container">
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
            style={{ opacity: tab === 1 ? 1 : 0.6 }}
          >
            Urbanism
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

export default PortofolioTest;
