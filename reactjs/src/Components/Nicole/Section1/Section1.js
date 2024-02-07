import React from "react";

import "./Section1.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Nicole from "../../assets/ImgMobile/Artist/Nicole.webp";

function Section1_Nicole() {
  return (
    <div className="Section1_Nicole">
      <div className="Section1_Nicole_Artist">
        <img src={Nicole} alt="" className="Section1_Nicole_Artist_Img" />
        <div className="Section1_Nicole_Artist_Name">NICOLE</div>
        <div className="Section1_Nicole_Artist_Style">Piercing</div>
        <div className="Section1_Nicole_Artist_Style">Linework</div>
        <div className="Section1_Nicole_Artist_Style">Blackwork</div>
      </div>
      <div className="Section1_Nicole_Text1">
        <div className="Section1_Nicole_Text1_Text1">
          Meet Nicole, a 26-year-old professional piercer with a passion for
          body artistry. With 1.5 years of experience under her belt, she has
          attended conventions in both Asia and the United States. Nicole has
          honed her craft to an impressive level, catering to the needs of 20-30
          clients daily and completing an astounding 40-60 piercings per day.
        </div>
      </div>
      <div className="Section1_Nicole_Img"></div>
      <div className="Section1_Nicole_Text2">
        Crunching the numbers, she's realized she's adorned over 10,000 clients
        with her expert piercings. Nicole's expertise covers a wide spectrum of
        body piercings, but her heart lies with unique ones like snake eyes and
        navel piercings. Her journey into this artistry initially began with an
        interest in tattooing, but when she got her hands on a piercing needle,
        it felt like destiny.
      </div>
    </div>
  );
}

export default Section1_Nicole;
