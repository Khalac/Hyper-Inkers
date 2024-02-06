import React from "react";

import "./Welcome.scss";

import mail from "../../assets/ImgMobile/ImgSalePage/Mail.webp";
import insta from "../../assets/ImgMobile/ImgSalePage/Insta.webp";
import fb from "../../assets/ImgMobile/ImgSalePage/Facebook.webp";
import phone from "../../assets/ImgMobile/ImgSalePage/Callnow.webp";

import { isMobile } from "react-device-detect";
import { handlePhoneClick } from "../../../utils/helper";

function Welcome() {
  return (
    <div className="Welcome_Sale">
      <div className="Welcome_Sale_Text">
        {/* <div className="Welcome_Sale_Text_Text">Welcome to</div> */}
        <h1 className="Welcome_Sale_Name_One">
          HYPER INKERS - PROFESSIONAL TATTOO STUDIO SAN ANTONIO TEXAS
        </h1>
        <h2 className="Welcome_Sale_Name">
          EXPERT TATTOO ARTISTS, HIGH-END QUALITY TATTOO
        </h2>
        {/* <div className="Welcome_Sale_Des">
          INTERNATIONAL AWARD TATTOO STUDIO
        </div> */}
        <div className="Welcome_Sale_Text_Icon">
          <img src={mail} alt="" className="Welcome_Sale_Text_Icon_Icon" />
          <img
            src={insta}
            alt=""
            className="Welcome_Sale_Text_Icon_Icon"
            onClick={() =>
              window.open(
                "https://www.instagram.com/hyperinkers/",
                "_blank",
                "rel=noopener noreferrer"
              )
            }
          />
          <img
            src={fb}
            alt=""
            className="Welcome_Sale_Text_Icon_Icon"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61551762555399",
                "_blank",
                "rel=noopener noreferrer"
              )
            }
          />
        </div>
      </div>
      {isMobile ? (
        <div className="Welcome_Sale_Icon">
          <div onClick={handlePhoneClick} className="Welcome_Sale_Icon_Book">
            CALL NOW
          </div>
          <div onClick={handlePhoneClick} className="Welcome_Sale_Icon_Book">
            BOOKING
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Welcome;
