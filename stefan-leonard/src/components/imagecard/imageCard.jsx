import React from "react";
import "./imageCard.css";

const ImageHeader = () => {
  return (
    <>
      <div name="portofolio">
        <div className="tp-protfolio-area section-padding">
          <div className="container">
            <div className="col-12">
              <div className="section-title text-center">
                <span>Portfolio</span>
                <h2>Latest Project</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tp-protfolio-item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>Minimalism</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>Abstract Art</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>3D Project</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>Modern BG</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>Visual Design</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid">
                      <div className="">
                        <div className="tp-protfolio-single">
                          <div className="tp-protfolio-img">
                            <img src="/assets/images/firstphoto.jpg" width="400px" alt="" />
                          </div>
                          <div className="tp-protfolio-text">
                            <h2>Product Design</h2>
                            <span>Illustration . Art Direction</span>
                            <a href="/home">View Work</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="white_svg svg_white">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
              <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
