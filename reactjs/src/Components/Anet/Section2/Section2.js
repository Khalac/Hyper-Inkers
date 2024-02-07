import React, { useState } from "react";

import "./Section2.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Anet1 from "../../assets/ImgMobile/ImgAnet/Anet1.webp";
import Anet2 from "../../assets/ImgMobile/ImgAnet/Anet2.webp";

import { IoIosArrowDropdown } from "react-icons/io";

function Section2_Anet() {
  const ArrImg = [Anet1, Anet2];
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
    <div className="Section2_Anet">
      <div className="Section2_Anet_Text" style={{ marginBottom: "3%" }}>
        Yet, as she immersed herself further into the world of tattoos within
        the shop, her passion for the craft blossomed. This transformation was
        especially remarkable considering her previous disinterest in art,
        drawing, or painting.
      </div>
      <div className="Section2_Anet_Text" style={{ marginBottom: "3%" }}>
        Anethe's journey from a career she hadn't imagined to her current role
        in the tattooing world is atestament to the unexpected paths life can
        lead us on.
      </div>
      <div className="Section2_Anet_Img" style={{ marginBottom: "5%" }}>
        <div className="Section2_Anet_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Section2_Anet_Img_Top" />
        </div>
        <div className="Section2_Anet_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Section2_Anet_Img_Bottom" />
          <IoIosArrowDropdown
            className="Section2_Anet_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Section2_Anet_Text">
        If one were to meet Anethe from three years ago and describe her current
        achievements, she would likely find it hard to believe the incredible
        journey she's undertaken.
      </div>
    </div>
  );
}

export default Section2_Anet;
