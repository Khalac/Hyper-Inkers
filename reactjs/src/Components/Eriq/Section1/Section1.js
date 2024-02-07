import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Eriq from "../../assets/ImgMobile/Artist/Eriq.webp";

function Section1_Eriq() {
  return (
    <div className="Section1_Eriq">
      <div className="Section1_Eriq_Artist">
        <img src={Eriq} alt="" className="Section1_Eriq_Artist_Img" />
        <div className="Section1_Eriq_Artist_Name">Eriq</div>
        <div className="Section1_Eriq_Artist_Style">Black & Grey</div>
        <div className="Section1_Eriq_Artist_Style">Bio-organic</div>
        <div className="Section1_Eriq_Artist_Style">Realism</div>
      </div>
      <div className="Section1_Eriq_Text1">
        <div className="Section1_Eriq_Text1_Text1">
          Introducing Eriq, a 32-year-old tattoo artist with six years of
          experience. His artistic journey began in middle school, and he has
          chosen to shape his career around his creative talents, veering away
          from a previous path of recklessness.
        </div>
      </div>
      <div className="Section1_Eriq_Img"></div>
      <div className="Section1_Eriq_Text2">
        Proficient in a variety of tattoo styles, Eriq specializes mainly in
        black and grey work, with a current favorite focus on Bio-Organic
        projects.
      </div>
    </div>
  );
}

export default Section1_Eriq;
