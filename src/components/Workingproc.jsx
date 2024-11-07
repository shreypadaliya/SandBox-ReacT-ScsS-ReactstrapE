import React from "react";
import "../scss/Workingproc.scss";
import workimg1 from "../assets/SVGsmall.png";
import workimg2 from "../assets/Layer 2.png";
import working3 from "../assets/SVG (33).png";
import working4 from "../assets/SVG (11).png";
import working5 from "../assets/SVG (22).png";
import working6 from "../assets/image fill.png";
import working7 from "../assets/image fill (1).png";

const workingproc = () => {
  return (
    <div className="workingprocmain" id="blog">
      <div className="workingprocsemimain">
        <div className="container workingprocwrap">
          <div className="workingprocsemiwrap">
            <div className="wprocmainimg">
              <div className="responsive-video">
                <video
                  src="./videos/your-video-file.mp4"
                  className="wprocmainimgsemi1"
                  controls
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <img
                src={workimg1}
                alt="SVG Small"
                className="wprocmainimgsemi1"
              />
            </div>

            <div className="workingproctextwrap">
              <div className="workingproctext">
                <div className="workingheading">OUR WORKING PROCESS</div>
                <div className="workingpara">
                  Find out everything you need to know about creating a business
                  process model{" "}
                  <img
                    src={workimg2}
                    alt="Layer Image"
                    className="workingparaimg"
                  />
                </div>
              </div>

              <div className="workinginfomain">
                <div className="workinginfo">
                  <img
                    src={working3}
                    alt="Collect Ideas"
                    className="workinginfoimg"
                  />
                  <div className="workinginfohead">1. Collect Ideas</div>
                  <div className="workinginfopara">
                    Etiam porta malesuada magna mollis euismod consectetur leo
                    elit.
                  </div>
                </div>
                <img
                  src={working6}
                  alt="Arrow 1"
                  className="workinginfoarrowimg1"
                />
                <div className="workinginfo">
                  <img
                    src={working4}
                    alt="Data Analysis"
                    className="workinginfoimg"
                  />
                  <div className="workinginfohead">2. Data Analysis</div>
                  <div className="workinginfopara">
                    Etiam porta malesuada magna mollis euismod consectetur leo
                    elit.
                  </div>
                </div>
                <img
                  src={working7}
                  alt="Arrow 2"
                  className="workinginfoarrowimg2"
                />
                <div className="workinginfo">
                  <img
                    src={working5}
                    alt="Finalize Product"
                    className="workinginfoimg"
                  />
                  <div className="workinginfohead">3. Finalize Product</div>
                  <div className="workinginfopara">
                    Etiam porta malesuada magna mollis euismod consectetur leo
                    elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workingproc;
