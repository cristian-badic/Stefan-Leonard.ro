import React from "react";
import ReactPlayer from "react-player";
import videoBackground from "../../videosBackground/POVESTEA HAMACULUI.mp4";

import "./video.css";

const videoplayer = () => {
  return (
    <>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,150 1655.167,310.5 2332.5,300 2920,198.5 2920,300 "></polygon>
        </svg>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          url={videoBackground}
          width="100%"
          height="50%"
          loop={true}
          controls={false}
          playing={true}
          muted={true}
          light={false}
        />
      </div>
    </>
  );
};

export default videoplayer;
