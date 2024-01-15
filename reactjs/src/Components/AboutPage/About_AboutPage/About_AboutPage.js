import React from "react";
import "./About_AboutPage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Img1 from "../../assets/ImgMobile/AboutPage/1.webp";
import Img2 from "../../assets/ImgMobile/AboutPage/2.webp";
import Img3 from "../../assets/ImgMobile/AboutPage/3.webp";
import Img4 from "../../assets/ImgMobile/AboutPage/4.webp";

function About_AboutPage() {
  return (
    <div className="About_AboutPage">
      <img src={BG} alt="" className="About_AboutPage_BG" />
      <div className="About_AboutPage_Name">ALL ABOUT US</div>
      <div className="About_AboutPage_Section1">
        <div className="About_AboutPage_Section1_Text_Img">
          <div className="About_AboutPage_Section1_Text">
            Hyper Inkers Tattoo Studio established in 2023 Hyper team with all
            technique, enthusiasm and creativity, ready to meet any unique ideas
            coming from you - Our Inkers
          </div>
          <img src={Img2} alt="" className="About_AboutPage_Section1_Img2" />
        </div>

        <img src={Img1} alt="" className="About_AboutPage_Section1_Img1" />
      </div>
      <div className="About_AboutPage_Section2"></div>
    </div>
  );
}

export default About_AboutPage;
