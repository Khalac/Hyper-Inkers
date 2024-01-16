import React from "react";
import "./YOEX.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import img from "../../assets/ImgMobile/AboutPage/Artists.webp";

function YOEX() {
  return (
    <div className="YOEX">
      <img src={BG} alt="" className="YOEX_BG" />
      <div className="YOEX_Name">
        <div>MORE THAN</div>
        <div>7 YEARS OF EXPERIENCE</div>
      </div>
      <img src={img} alt="" className="YOEX_Img" />
      <div className="YOEX_Text">
        With a fresh perspective and a passion for innovation, our young artist
        brings a unique flair to the world of tattooing. Despite their youth,
        our artist has accumulated valuable experience and is technically
        proficient in the art of t attooing. They have mastered the use of
        modern equipment, ensuring precision and excellence in every tattoo.
      </div>
    </div>
  );
}

export default YOEX;
