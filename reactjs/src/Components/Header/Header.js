import React from "react";
import "./Header.scss";
import LogoHI from "../assets/Logo/LogoHI.png";
import BGHeader from "../assets/ImgMobile/Background/header.png";

function Header() {
  return (
    <div className="Header">
      <img src={LogoHI} alt="logo" className="logoHeader" loading="lazy" />
      <img src={BGHeader} alt="" className="BGHeader" loading="lazy" />
      <div className="Pages">
        <div className="Page">About</div>
        <div className="Page">Artist</div>
        <div className="Page">Contact</div>
        <div className="Page">FAQ</div>
      </div>
    </div>
  );
}

export default Header;
