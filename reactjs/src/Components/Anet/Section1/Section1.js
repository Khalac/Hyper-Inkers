import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Anet from "../../assets/ImgMobile/Artist/Anet.webp";

function Section1_Anet() {
  return (
    <div className="Section1_Anet">
      <img src={BG} alt="" className="Section1_Anet_BG" />
      <div className="Section1_Anet_Artist">
        <img src={Anet} alt="" className="Section1_Anet_Artist_Img" />
        <div className="Section1_Anet_Artist_Name">ANETHE</div>
        <div className="Section1_Anet_Artist_Style">Black & Grey</div>
        <div className="Section1_Anet_Artist_Style">Color</div>
        <div className="Section1_Anet_Artist_Style">Linework</div>
      </div>
      <div className="Section1_Anet_Text1">
        <div className="Section1_Anet_Text1_Text1">
          Meet Anethe a 25 year old who embarked on a journey that would take
          her far from her initial career path. In September 2021, she found
          herself in a tattoo shop, an unexpected turn of events driven by her
          determination to balance work andeducation. Her journey began when she
          left her previous job, one that refused to accommodate her morning
          studies.
        </div>
      </div>
      <div className="Section1_Anet_Img"></div>
      <div className="Section1_Anet_Text2">
        Anethe initially planned to tattoo temporarily while searching for a
        position in her field of study, International Business. However, her
        friend's suggestion ignited a spark of curiosity within her. Despite her
        initial reservations, Anethe started experimenting with small tattoos.
        Surprisingly, her early encounters with tattooing didn't immediately win
        her over, as she humorously recalls.
      </div>
    </div>
  );
}

export default Section1_Anet;
