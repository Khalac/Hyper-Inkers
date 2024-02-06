import React from "react";
import "./WWYG.scss";
import BG from "../../assets/ImgMobile/Background/MainBG1.png";

import Aw from "../../assets/ImgMobile/ImgMainPage/Awards.webp";
import Tech from "../../assets/ImgMobile/ImgMainPage/Tech.webp";
import Com from "../../assets/ImgMobile/ImgMainPage/Com.webp";
import { isMobile } from "react-device-detect";

function WWYG() {
  const arrayOfShowing = [
    {
      id: 1,
      image: Aw,
      title: "MANY AWARDS",
      description:
        "We aspire for the awards attained in those competitions to serve as acknowledged evidence of our commitment to quality.",
    },
    {
      id: 2,
      image: Tech,
      title: "BEST TECHNIQUES",
      description:
        "As artists who are both youthful and seasoned, continually enhancing our understanding of techniques and embracing continuous learning.",
    },
    {
      id: 3,
      image: Com,
      title: "TRULY COMPREHEND",
      description:
        "Above all, we consistently appreciate your ideas and desires, from comprehension to bringing your tattoo vision to life.",
    },
  ];
  return (
    <div className="WWYG">
      <h2 className="WWYG_Name">NOTHING LESS THAN THE BEST</h2>
      <div className="WWYG_Text">
        With utmost passion and enthusiasm, we are confident in delivering not
        only high-quality tattoos but also providing you with the most memorable
        experience.
      </div>
      {isMobile ? (
        <React.Fragment>
          <div className="WWYG_Detail">
            <img src={Aw} alt="" className="WWYG_Detail_Img"></img>
            <div className="WWYG_Detail_Name">MANY AWARDS</div>
            <div className="WWYG_Detail_Des">
              We aspire for the awards attained in those competitions to serve
              as acknowledged evidence of our commitment to quality.
            </div>
          </div>
          <div className="WWYG_Detail">
            <img src={Tech} alt="" className="WWYG_Detail_Img"></img>
            <div className="WWYG_Detail_Name">BEST TECHNIQUES</div>
            <div className="WWYG_Detail_Des">
              As artists who are both youthful and seasoned, continually
              enhancing our understanding of techniques and embracing continuous
              learning.
            </div>
          </div>
          <div className="WWYG_Detail">
            <img src={Com} alt="" className="WWYG_Detail_Img"></img>
            <div className="WWYG_Detail_Name">TRULY COMPREHEND</div>
            <div className="WWYG_Detail_Des">
              Above all, we consistently appreciate your ideas and desires, from
              comprehension to bringing your tattoo vision to life.
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "50%",
            width: "70%",
            marginTop: "5%",
            justifyContent: "space-around",
          }}
        >
          {arrayOfShowing.map((item) => (
            <div className="WWYG_Detail">
              <img src={item.image} alt="" className="WWYG_Detail_Img"></img>
              <div className="WWYG_Detail_Name">{item.title}</div>
              <div className="WWYG_Detail_Des">{item.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WWYG;
