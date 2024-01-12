import React from "react";
import "./Pricing_SalePage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Pricing_SalePage() {
  return (
    <div className="Pricing_SalePage">
      <img src={BG} alt="" className="Pricing_SalePage_BG" />
      <div className="Pricing_SalePage_Name">OUR PRICING</div>
      <div className="Pricing_SalePage_Container">
        <div className="Pricing_SalePage_Minimum">
          <div className="Pricing_SalePage_Minimum_Name">MINIMUM</div>
          <div className="Pricing_SalePage_Minimum_Text">
            Shop hourly minimum rate at start at
          </div>
          <div className="Pricing_SalePage_Minimum_Price">$80</div>
        </div>
        <div className="Pricing_SalePage_Middle">
          <div className="Pricing_SalePage_Middle_Name">MIDDLE</div>
          <div className="Pricing_SalePage_Middle_Text">
            Shop hourly minimum rate at start at
          </div>
          <div className="Pricing_SalePage_Middle_Price">$80</div>
        </div>
        <div className="Pricing_SalePage_High">
          <div className="Pricing_SalePage_High_Name">HIGH</div>
          <div className="Pricing_SalePage_High_Text">
            Shop hourly minimum rate at start at
          </div>
          <div className="Pricing_SalePage_High_Price">$80</div>
        </div>
      </div>
    </div>
  );
}

export default Pricing_SalePage;
