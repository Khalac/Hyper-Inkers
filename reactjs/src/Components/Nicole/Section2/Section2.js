import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Nicole1 from "../../assets/ImgMobile/ImgNicole/Nicole1.webp";
import Nicole2 from "../../assets/ImgMobile/ImgNicole/Nicole2.webp";

import { IoIosArrowDropdown } from "react-icons/io";

function Section2_Nicole() {
  const ArrImg = [Nicole1, Nicole2];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1);
  const changeImg = () => {
    setI(i + 1);
    setJ(j + 1);
    if (j == 1) {
      setJ(0);
    } else if (i == 1) {
      setI(0);
      setJ(1);
    }
  };
  return (
    <div className="Section2_Nicole">
      <img src={BG} alt="" className="Section2_Nicole_BG" />
      <div className="Section2_Nicole_Text">
        Her journey into this artistry initially began with an interest in
        tattooing, but when she got her hands on a piercing needle, it felt like
        destiny. Nicole thrives on the joy of embellishing people's bodies and
        witnessing their happiness.
      </div>
      <div className="Section2_Nicole_Text">
        One of her remarkable strengths is her ability to pierce swiftly,
        minimizing discomfort for her clients. Known for her gentle touch, her
        sessions are delicate and efficient, ensuring a pleasant experience for
        all.
      </div>
      <div className="Section2_Nicole_Img">
        <div className="Section2_Nicole_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Nicole_Img_Top" />
        </div>
        <div className="Section2_Nicole_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Nicole_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Nicole_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Nicole_Text">
        While she dabbles in tattoos, Nicole has truly found her calling as a
        professional piercer. Each passing day deepens her love for her craft,
        and she's immensely grateful for the journey that brought her to this
        fulfilling profession.
      </div>
    </div>
  );
}

export default Section2_Nicole;
