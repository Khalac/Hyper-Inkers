import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Ben from "../../assets/ImgMobile/Artist/Ben.webp";

function Section1_Ben() {
  return (
    <div className="Section1_Ben">
      <img src={BG} alt="" className="Section1_Ben_BG" />
      <div className="Section1_Ben_Artist">
        <img src={Ben} alt="" className="Section1_Ben_Artist_Img" />
        <div className="Section1_Ben_Artist_Name">Ben</div>
        <div className="Section1_Ben_Artist_Style">Black & Grey</div>
        <div className="Section1_Ben_Artist_Style">Linework</div>
        <div className="Section1_Ben_Artist_Style">Realism</div>
      </div>
      <div className="Section1_Ben_Text1">
        <div className="Section1_Ben_Text1_Text1">
          Meet Benjamin, a talented artist who at the age of 24 is already
          making waves in the world of tattooing. With a passion for art that
          has burned brightly from a young age, he has decided to shape a career
          that is aligned with his creative spirit.
        </div>
      </div>
      <div className="Section1_Ben_Img"></div>
      <div className="Section1_Ben_Text2">
        Armed with an Amazon tattoo kit and a burning desire to perfect his
        craft, Ben embarked on a journey that would lead to a remarkable
        apprenticeship with Minh at Firme Copias.
      </div>
    </div>
  );
}

export default Section1_Ben;
