import React from "react";
import "./AYR.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import img1 from "../../assets/ImgMobile/ImgSalePage/AYR1.webp";
import img2 from "../../assets/ImgMobile/ImgSalePage/AYR2.webp";
import img3 from "../../assets/ImgMobile/ImgSalePage/AYR3.webp";

function AYR() {
  return (
    <div className="AYR">
      <img src={BG} alt="" className="AYR_BG" />
      <div className="AYR_Name">ARE YOU READY TO HAVE A UNIQUE TATTOO?</div>
      <div className="AYR_Text">
        With enthusiasm and skill, the Hyper Inkers Crew confidently brings you
        the most unique and professional tattoos. Not only do we prioritize the
        professional aspect of tattooing, but we also value the customer
        experience with us. At Hyper, understanding and realizing your desired
        ideas is our most important criterion. We are dedicated to making your
        vision a reality.
      </div>
      <div className="AYR_Img">
        <img src={img1} alt="" className="AYR_Img_Img" />
        <img src={img2} alt="" className="AYR_Img_Img" />
        <img src={img3} alt="" className="AYR_Img_Img" />
      </div>
    </div>
  );
}

export default AYR;
