import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Minh1 from "../../assets/ImgMobile/ImgMinh/Minh1.webp";
import Minh2 from "../../assets/ImgMobile/ImgMinh/Minh2.webp";

import { IoIosArrowDropdown } from "react-icons/io";

function Section2_Minh() {
  const ArrImg = [Minh1, Minh2];
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
    <div className="Section2_Minh">
      <img src={BG} alt="" className="Section2_Minh_BG" />
      <div className="Section2_Minh_Text">
        This young artist's enthusiasm knows no bounds when it comes to tattoo
        styles. He finds inspiration in a multitude of genres, with a simple
        criterion: if it looks good, it captivates him.
      </div>
      <div className="Section2_Minh_Text">
        This constant desire to explore and learn keeps Minh open to new atistic
        horizons. His portfolio proudly showcases his expertise in Black and
        Grey realism, Color Realism, and a deep appreciation for Oriental style
        tattoos. Beyond these specialties, Minh is always ready to embrace and
        excel in any style requested by his clients.
      </div>
      <div className="Section2_Minh_Img">
        <div className="Section2_Minh_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Minh_Img_Top" />
        </div>
        <div className="Section2_Minh_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Minh_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Minh_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Minh_Text">
        His dedication to his craft and his boundless creativity make him a
        remarkable tattoo artist, ready to turn your artistic visions into
        permanent masterpieces.
      </div>
    </div>
  );
}

export default Section2_Minh;
