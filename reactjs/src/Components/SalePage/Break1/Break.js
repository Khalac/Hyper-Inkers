import React from "react";
import "./Break.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import { isMobile } from "react-device-detect";

function Break() {
  console.log(isMobile);
  return (
    <div className="Break">
      {/* <img src={BG} alt="" className="Break_BG" /> */}
      {isMobile ? (
        <h2 className="Break_Name">
          <div>
            DISCOVERING THE BEST <br /> TATTOO STUDIOS AND ARTISTS
          </div>
          <div> In San Antonio Texas</div>
        </h2>
      ) : (
        <h2 className="Break_Name">
          DISCOVERING THE BEST TATTOO STUDIOS AND ARTISTS<br></br> IN SAN
          ANTONIO TEXAS
        </h2>
      )}
    </div>
  );
}

export default Break;
