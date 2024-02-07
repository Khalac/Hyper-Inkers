import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Minh from "../../assets/ImgMobile/Artist/Min.webp";

function Section1_Minh() {
  return (
    <div className="Section1_Minh">
      <div className="Section1_Minh_Artist">
        <img src={Minh} alt="" className="Section1_Minh_Artist_Img" />
        <div className="Section1_Minh_Artist_Name">MINH</div>
        <div className="Section1_Minh_Artist_Style">Black & Grey</div>
        <div className="Section1_Minh_Artist_Style">Color</div>
        <div className="Section1_Minh_Artist_Style">Realism</div>
      </div>
      <div className="Section1_Minh_Text1">
        <div
          className="Section1_Minh_Text1_Text1"
          style={{ marginBottom: "5%" }}
        >
          Meet a talented individual named Minh, who hails from Vietnam and was
          born in 1999. At just 24 years old, he has already spent 7 years
          honing his craft as a tattoo artist.
        </div>
        <div className="Section1_Minh_Text1_Text2">
          Minh's artistic journey began at a very young age, when his
          fascination with drawing small objects sparked his creative spirit.
          However, it was a pivotal moment when he discovered the world of
          tattooing that truly ignited his passion for art.
        </div>
      </div>
      <div className="Section1_Minh_Img"></div>
      <div className="Section1_Minh_Text2">
        Tattoos, in his eyes, represented a unique and enduring form of artistic
        expression – a creation that becomes a permanent part of someone's skin,
        making precision and care paramount. This realization elevated his
        artistry to a higher level.
      </div>
    </div>
  );
}

export default Section1_Minh;
