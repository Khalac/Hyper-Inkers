import React from "react";
import "./WCU.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function WCU() {
  return (
    <div className="WCU">
      <img src={BG} alt="" className="WCU_BG" />
      <div className="WCU_Name">WHY CHOOSE US?</div>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">10</div>
          <div className="WCU_Detail_1_Text">
            <div>Years</div>
            <div>Experience</div>
          </div>
        </div>
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">15+</div>
          <div className="WCU_Detail_1_Text">World Convention</div>
        </div>
      </div>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">30+</div>
          <div className="WCU_Detail_1_Text">Trophies</div>
        </div>
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">10K</div>
          <div className="WCU_Detail_1_Text">Tattoos</div>
        </div>
      </div>
    </div>
  );
}

export default WCU;
