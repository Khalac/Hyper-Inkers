import React from "react";
import "./Artist_AboutPage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Minh from "../../assets/ImgMobile/AboutPage/Minh.webp";
import Nicole from "../../assets/ImgMobile/AboutPage/Nicole.webp";
import Aaron from "../../assets/ImgMobile/AboutPage/Aaron.webp";
import Anet from "../../assets/ImgMobile/AboutPage/Anet.webp";
import Ben from "../../assets/ImgMobile/AboutPage/Ben.webp";
import Eriq from "../../assets/ImgMobile/AboutPage/Eriq.webp";

import { useNavigate } from "react-router-dom";

function Artist_AboutPage() {
  const nav = useNavigate();
  return (
    <div className="Artist_AboutPage">
      <div className="Artist_AboutPage_Name">5 HYPER ARTISTS</div>
      <div className="Artist_AboutPage_Text">
        Our artists exemplify professionalism from start to finish. They
        prioritize punctuality, transparent pricing, and a positive, respectful
        experience for every client. Explore our artists' portfolios to witness
        the breadth of their skills and styles. Each artist has a diverse body
        of work, showcasing versatility and a commitment to excellence
      </div>
      <div className="Artist_AboutPage_Artist">
        <img src={Minh} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Min")}
        >
          MINH
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          BLACK & GREY - LINEWORK - COLOR
        </div>
      </div>
      {/* <div className="Artist_AboutPage_Artist">
        <img src={Anet} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Anet")}
        >
          ANETHE
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          BLACK & GREY - LINEWORK - COLOR
        </div>
      </div> */}
      <div className="Artist_AboutPage_Artist">
        <img src={Aaron} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Aaron")}
        >
          AARON
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          BLACK & GREY - PORTRAIT - REALISM
        </div>
      </div>
      <div className="Artist_AboutPage_Artist">
        <img src={Nicole} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Nicole")}
        >
          NICOLE
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          PIERCING - LINEWORK - BLACKWORK
        </div>
      </div>
      <div className="Artist_AboutPage_Artist">
        <img src={Ben} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Ben")}
        >
          BENJAMIN
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          BLACK & GREY - BLACKWORK - REALISM
        </div>
      </div>
      <div className="Artist_AboutPage_Artist">
        <img src={Eriq} alt="" className="Artist_AboutPage_Artist_Img" />
        <div
          className="Artist_AboutPage_Artist_Name"
          onClick={() => nav("/Artist/Eriq")}
        >
          ERIQ
        </div>
        <div className="Artist_AboutPage_Artist_Cate">
          BLACK & GREY - BIO-ORGANIC - REALISM
        </div>
      </div>
    </div>
  );
}

export default Artist_AboutPage;
