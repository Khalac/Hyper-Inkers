import React from "react";
import "./Analystic.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Analystic() {
  return (
    <div className="Analystic">
      <img src={BG} alt="" className="Analystic_BG" />
      <div className="Analystic_Container">
        <div className="Analystic_Part">
          <div className="Analystic_Number">04</div>
          <div className="Analystic_Text">TATTOO ARTIST</div>
        </div>
        <div className="Analystic_Part">
          <div className="Analystic_Number">07</div>
          <div className="Analystic_Text">YEARS EXPERIENCE</div>
        </div>
        <div className="Analystic_Part">
          <div className="Analystic_Number">15+</div>
          <div className="Analystic_Text">WORLD CONVENTION</div>
        </div>
        <div className="Analystic_Part">
          <div className="Analystic_Number">30+</div>
          <div className="Analystic_Text">TROPHY AWARDS</div>
        </div>
      </div>
    </div>
  );
}

export default Analystic;