import React from "react";
import "./Break.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import { isMobile } from "react-device-detect";

function Break() {
  console.log(isMobile);
  return (
    <div className="Break">
      <img src={BG} alt="" className="Break_BG" />
      {isMobile ? (
        <div className="Break_Name">
          <div>Tattoo And Body Piercing</div>
          <div> In San Antonio Texas</div>
        </div>
      ) : (
        <div className="Break_Name">
          Tattoo And Body Piercing In San Antonio Texas
        </div>
      )}
    </div>
  );
}

export default Break;
