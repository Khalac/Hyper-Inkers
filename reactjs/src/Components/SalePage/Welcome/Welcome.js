import React from "react";

import "./Welcome.scss";

import mail from "../../assets/ImgMobile/ImgSalePage/Mail.webp";
import insta from "../../assets/ImgMobile/ImgSalePage/Insta.webp";
import fb from "../../assets/ImgMobile/ImgSalePage/Facebook.webp";
import phone from "../../assets/ImgMobile/ImgSalePage/Callnow.webp";

function Welcome() {
  return (
    <div className="Welcome_Sale">
      <div className="Welcome_Sale_Text">
        <div className="Welcome_Sale_Text_Text">Welcome to</div>
        <div className="Welcome_Sale_Name">HYPER INKERS</div>
        <div className="Welcome_Sale_Des">
          THE BEST TATTOO STUDIO IN YOUR TOWN
        </div>
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
      <div className="Welcome_Sale_Icon">
        <img src={phone} alt="" className="Welcome_Sale_Icon_Right_Icon" />
        <div className="Welcome_Sale_Icon_Book">BOOKING</div>
      </div>
    </div>
  );
}

export default Welcome;
