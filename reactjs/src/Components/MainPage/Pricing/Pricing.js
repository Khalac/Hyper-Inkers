import React from "react";
import "./Pricing.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Pricing() {
  return (
    <div className="Pricing">
      <img src={BG} alt="" className="Pricing_BG" />
      <div className="Pricing_Name">OUR PRICING</div>
      <div className="Pricing_Container">
        <div className="Pricing_Detail">
          <div className="Pricing_Detail_Name">MINIMUM</div>
          <div className="Pricing_Detail_Text">
            <div className="Pricing_Text_Des">
              Shop hourly minimum rate at start at
            </div>
            <div className="Pricing_Text_Price">$80</div>
          </div>
        </div>
        <div className="Pricing_Detail">
          <div className="Pricing_Detail_Name">MIDDLE</div>
          <div className="Pricing_Detail_Text">
            <div className="Pricing_Text_Des">
              Shop hourly middle rate at start at
            </div>
            <div className="Pricing_Text_Price">$150</div>
          </div>
        </div>
        <div className="Pricing_Detail">
          <div className="Pricing_Detail_Name">HIGH</div>
          <div className="Pricing_Detail_Text">
            <div className="Pricing_Text_Des">
              Shop hourly high rate at start at
            </div>
            <div className="Pricing_Text_Price">$200</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
