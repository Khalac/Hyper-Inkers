import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Aaron1 from "../../assets/ImgMobile/ImgAaron/Aaron1.webp";
import Aaron2 from "../../assets/ImgMobile/ImgAaron/Aaron2.webp";

import { IoIosArrowDropdown } from "react-icons/io";

function Section2_Aaron() {
  const ArrImg = [Aaron1, Aaron2];
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
    <div className="Section2_Aaron">
      <div className="Section2_Aaron_Text" style={{ marginBottom: "3%" }}>
        While he finds himself primarily immersed in the world of black and grey
        realism, a style he's grown to adore, Aaron also harbors a deep longing
        to delve into more traditional Japanese tattooing.
      </div>
      <div className="Section2_Aaron_Img" style={{ marginBottom: "5%" }}>
        <div className="Section2_Aaron_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Aaron_Img_Top" />
        </div>
        <div className="Section2_Aaron_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Aaron_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Aaron_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Aaron_Text">
        While he finds himself primarily immersed in the world of black and grey
        realism, a style he's grown to adore, Aaron also harbors a deep longing
        to delve into more traditional Japanese tattooing.
      </div>
    </div>
  );
}

export default Section2_Aaron;
