import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Eriq1 from "../../assets/ImgMobile/ImgEriq/Eriq1.webp";
import Eriq2 from "../../assets/ImgMobile/ImgEriq/Eriq2.webp";

import { IoIosArrowDropdown } from "react-icons/io";
import { isMobile } from "react-device-detect";

function Section2_Eriq() {
  const ArrImg = [Eriq1, Eriq2];
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
  return isMobile ? (
    <div className="Section2_Eriq">
      <div className="Section2_Eriq_Img" style={{ marginBottom: "30%" }}>
        <div className="Section2_Eriq_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Eriq_Img_Top" />
        </div>
        <div className="Section2_Eriq_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Eriq_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Eriq_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Eriq_Text">
        Hailing from El Paso, he has called San Antonio home for the past three
        years.
      </div>
    </div>
  ) : (
    <div className="Section2_Eriq">
      <div className="Section2_Eriq_Img" style={{ marginBottom: "5%" }}>
        <div className="Section2_Eriq_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Eriq_Img_Top" />
        </div>
        <div className="Section2_Eriq_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Eriq_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Eriq_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Eriq_Text">
        Hailing from El Paso, he has called San Antonio home for the past three
        years.
      </div>
    </div>
  );
}

export default Section2_Eriq;
