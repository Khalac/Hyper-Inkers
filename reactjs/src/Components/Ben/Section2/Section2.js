import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Ben1 from "../../assets/ImgMobile/ImgBen/Ben1.webp";
import Ben2 from "../../assets/ImgMobile/ImgBen/Ben2.webp";

import { IoIosArrowDropdown } from "react-icons/io";

function Section2_Ben() {
  const ArrImg = [Ben1, Ben2];
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
    <div className="Section2_Ben">
      <div className="Section2_Ben_Img">
        <div className="Section2_Ben_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Ben_Img_Top" />
        </div>
        <div className="Section2_Ben_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Ben_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Ben_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Ben_Text">
        In just a little over a year, this budding artist has honed his skills
        and developed a love for the intricate world of realism.
      </div>
    </div>
  );
}

export default Section2_Ben;
