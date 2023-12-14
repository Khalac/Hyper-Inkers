import React from "react";
import "./WDWH.scss";

import BG from "../assets/ImgMobile/Background/MainBG.png";

function WDWH() {
  return (
    <div className="WDWH">
      <img src={BG} alt="" className="WDWH_BG" />
      <div className="WDWH_Name">WHAT DO WE HAVE?</div>
    </div>
  );
}

export default WDWH;
