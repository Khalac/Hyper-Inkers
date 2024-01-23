import React from "react";
import "./Break.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Break() {
  return (
    <div className="Break">
      <img src={BG} alt="" className="Break_BG" />
      <div className="Break_Name">
        <div>Tattoo And Body Piercing</div>
        <div> In San Antonio Texas</div>
      </div>
    </div>
  );
}

export default Break;
