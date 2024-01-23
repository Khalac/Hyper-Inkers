import React from "react";
import "./Service_Salepage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";
import Design from "../../assets/ImgMobile/ImgSalePage/Design.webp";
import Support from "../../assets/ImgMobile/ImgSalePage/Support.webp";
import Offer from "../../assets/ImgMobile/ImgSalePage/Offer.webp";
import Medical from "../../assets/ImgMobile/ImgSalePage/Medical.webp";

function Service_Salepage() {
  return (
    <div className="Service_Salepage">
      <img src={BG} alt="" className="Service_Salepage_BG" />
      <div className="Service_Salepage_Name">BEST SERVICE</div>
      <div className="Service_Salepage_Text">
        To bring our clients the most memorable and valuable experiences is our
        primary goal. We consistently prioritize excellence, ensuring that you
        receive the utmost support when you visit our shop.
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Design} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">Creative Design</div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              100% designs will be submitted for approval before an appointment
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              0$ fee tattoo design
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img
          src={Support}
          alt="logo"
          className="Service_Salepage_Detail_Logo"
        />
        <div className="Service_Salepage_Detail_Name">Maximum Support</div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              0$ fee booking appointment
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Free touch up after getting tattoo
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Offer} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">Special Offers</div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We offer discounts of up to 30% for group tattoos
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We have a military discount available
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Design} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">
          <div>Medical Care</div>
          <div> And Modern Equipment</div>
        </div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Every artist has medical license
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We only use the best equipment
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Ensuring needles are used only once
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Phone">(210) 997-9737</div>
    </div>
  );
}

export default Service_Salepage;
