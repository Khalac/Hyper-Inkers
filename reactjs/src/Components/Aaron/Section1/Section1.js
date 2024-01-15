import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Aaron from "../../assets/ImgMobile/Artist/Aaron.webp";

function Section1_Aaron() {
  return (
    <div className="Section1_Aaron">
      <img src={BG} alt="" className="Section1_Aaron_BG" />
      <div className="Section1_Aaron_Artist">
        <img src={Aaron} alt="" className="Section1_Aaron_Artist_Img" />
        <div className="Section1_Aaron_Artist_Name">AARON</div>
        <div className="Section1_Aaron_Artist_Style">Black & Grey</div>
        <div className="Section1_Aaron_Artist_Style">Portrait</div>
        <div className="Section1_Aaron_Artist_Style">Realism</div>
      </div>
      <div className="Section1_Aaron_Text1">
        <div className="Section1_Aaron_Text1_Text1">
          Meet Aaron, a 23-year-old tattoo artist whose journey into the world
          of ink began at the young age of 16. While it took a few years to
          truly refine his craft, the initial spark that ignited his passion
          came from watching mesmerizing tattoo time-lapses on YouTube.
        </div>
      </div>
      <div className="Section1_Aaron_Img"></div>
      <div className="Section1_Aaron_Text2">
        Aaron's journey into tattooing was a largely self-guided one, as he
        absorbed knowledge and technique through online videos. In the realm of
        tattoo styles, Aaron's heart beats for the intricacies of black and grey
        surrealism, black and grey realism, and the timeless allure of
        traditional Japanese artistry.
      </div>
    </div>
  );
}

export default Section1_Aaron;
