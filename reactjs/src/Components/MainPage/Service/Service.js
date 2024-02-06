import React, { useState } from "react";
import "./Service.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import s1 from "../../assets/ImgMobile/ImgMainPage/Service1.webp";
import s2 from "../../assets/ImgMobile/ImgMainPage/CaiGhe.JPG";
import s3 from "../../assets/ImgMobile/ImgMainPage/Service3.webp";
import s4 from "../../assets/ImgMobile/ImgMainPage/Service4.webp";

import Tat from "../../assets/Logo/Tat.webp";
import Pier from "../../assets/Logo/Pier.webp";
import Design from "../../assets/Logo/Design.webp";
import { isMobile } from "react-device-detect";
import { IoIosArrowDropdown } from "react-icons/io";

const displayArray = [
  {
    id: 1,
    image: Tat,
    title: "TATTOO",
    desc: "Our tattoo shop boasts a team of skilled and experienced artists, each specializing in unique styles.",
  },
  {
    id: 2,
    image: Pier,
    title: "PIERCING",
    desc: " Explore a world of body adornment at our piercing boutique, where each piece is a statement of individuality.",
  },
  {
    id: 3,
    image: Design,
    title: "DESIGN",
    desc: "Our artists work closely with customers to create custom designs that match their preferences and tell their unique stories.",
  },
];
function Service() {
  const ArrImg = [s1, s2, s2, s2];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1);
  const changeImg = () => {
    setI(i + 1);
    setJ(j + 1);
    if (j == 3) {
      setJ(0);
    } else if (i == 3) {
      setI(0);
      setJ(1);
    }
  };
  return (
    <div className="Service">
      {/* <img src={BG} alt="" className="Service_BG" /> */}
      <div className="Service_Name">OUR SERVICE</div>
      <div className="Service_Img">
        <div className="Service_Img_Top_Container">
          <img src={ArrImg[i]} alt="" className="Service_Img_Top" />
        </div>
        <div className="Service_Img_Bottom_Container">
          <img src={ArrImg[j]} alt="" className="Service_Img_Bottom" />
          <IoIosArrowDropdown
            className="Service_Img_Button"
            onClick={() => changeImg()}
          />
        </div>
      </div>
      <div className="Service_Service">
        {displayArray.map((item) => (
          <div key={item.id} className="Service_Detail">
            <div className="Service_Detail_Img_Container">
              <img src={item.image} alt="" className="Service_Detail_Img" />
            </div>

            <div className="Service_Detail_Text">
              <div className="Service_Detail_Text_Name">{item.title}</div>
              <div className="Service_Detail_Text_Des">{item.desc}</div>
            </div>
          </div>
        ))}

        {/* <div className="Service_Detail">
          <div className="Service_Detail_Img_Container">
            <img src={Pier} alt="" className="Service_Detail_Img" />
          </div>

          <div className="Service_Detail_Text">
            <div className="Service_Detail_Text_Name">PIERCING</div>
            <div className="Service_Detail_Text_Des">
              Explore a world of body adornment at our piercing boutique, where
              each piece is a statement of individuality.
            </div>
          </div>
        </div> */}

        {/* <div className="Service_Detail">
          <div className="Service_Detail_Img_Container">
            <img src={Design} alt="" className="Service_Detail_Img" />
          </div>

          <div className="Service_Detail_Text">
            <div className="Service_Detail_Text_Name">DESIGN</div>
            <div className="Service_Detail_Text_Des">
              Our artists work closely with customers to create custom designs
              that match their preferences and tell their unique stories.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Service;
