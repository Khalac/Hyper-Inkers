import React from "react";
import "./WWYG.scss";
import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Aw from "../../assets/ImgMobile/ImgMainPage/Awards.webp";
import Tech from "../../assets/ImgMobile/ImgMainPage/Tech.webp";
import Com from "../../assets/ImgMobile/ImgMainPage/Com.webp";

function WWYG() {
  return (
    <div className="WWYG">
      <img src={BG} alt="" className="WWYG_BG" />
      <div className="WWYG_Name">WHAT WILL YOU GET</div>
      <div className="WWYG_Text">
        With utmost passion and enthusiasm, we are confident in delivering not
        only high-quality tattoos but also providing you with the most memorable
        experience.
      </div>
      <div className="WWYG_Detail">
        <img src={Aw} alt="" className="WWYG_Detail_Img"></img>
        <div className="WWYG_Detail_Name">MANY AWARDS</div>
        <div className="WWYG_Detail_Des">
          We aspire for the awards attained in those competitions to serve as
          acknowledged evidence of our commitment to quality.
        </div>
      </div>
      <div className="WWYG_Detail">
        <img src={Tech} alt="" className="WWYG_Detail_Img"></img>
        <div className="WWYG_Detail_Name">BEST TECHNIQUES</div>
        <div className="WWYG_Detail_Des">
          As artists who are both youthful and seasoned, continually enhancing
          our understanding of techniques and embracing continuous learning.
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
    </div>
  );
}

export default WWYG;
