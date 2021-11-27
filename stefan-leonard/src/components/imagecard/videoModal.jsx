import React, { useState } from "react";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const ModalYotube = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={props.videoId}
        onClose={() => setOpen(false)}
      />

      <button className="btn-dark text-primary" onClick={() => setOpen(true)}>
        View more of this project..
      </button>
    </>
  );
};

export default ModalYotube;
