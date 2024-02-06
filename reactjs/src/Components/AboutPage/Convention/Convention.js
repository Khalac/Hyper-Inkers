import React from "react";
import "./Convention.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import logo1 from "../../assets/ImgMobile/AboutPage/logo1.webp";
import logo2 from "../../assets/ImgMobile/AboutPage/logo2.webp";
import logo3 from "../../assets/ImgMobile/AboutPage/logo3.webp";
import logo4 from "../../assets/ImgMobile/AboutPage/logo4.webp";
import logo5 from "../../assets/ImgMobile/AboutPage/logo5.webp";
import logo6 from "../../assets/ImgMobile/AboutPage/logo6.webp";
import logo7 from "../../assets/ImgMobile/AboutPage/logo7.webp";
import logo8 from "../../assets/ImgMobile/AboutPage/logo8.webp";
import logo9 from "../../assets/ImgMobile/AboutPage/logo9.webp";
import logo10 from "../../assets/ImgMobile/AboutPage/logo10.webp";

function Convention() {
  return (
    <div className="Convention">
      <div className="Convention_Name">
        <div>15+ WORLD CONVENTION</div>
        <div>WITH ENTHUSIASM</div>
      </div>
      <div className="Convention_Logo">
        <div className="Convention_Logo_Line1">
          <div className="Convention_Logo_Line1_Container1">
            <img
              src={logo1}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo1"
            />
          </div>
          <div className="Convention_Logo_Line1_Container2">
            <img
              src={logo2}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo2"
            />
          </div>
          <div className="Convention_Logo_Line1_Container2">
            <img
              src={logo3}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo2"
            />
          </div>
        </div>
        <div className="Convention_Logo_Line1">
          <div className="Convention_Logo_Line1_Container3">
            <img
              src={logo4}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo3"
            />
          </div>
          <div className="Convention_Logo_Line1_Container3">
            <img
              src={logo5}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo3"
            />
          </div>
          <div className="Convention_Logo_Line1_Container4">
            <img
              src={logo6}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo4"
            />
          </div>
        </div>
        <div className="Convention_Logo_Line1">
          <div className="Convention_Logo_Line1_Container1">
            <img
              src={logo7}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo5"
            />
          </div>
          <div className="Convention_Logo_Line1_Container4">
            <img
              src={logo8}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo4"
            />
          </div>
        </div>
        <div className="Convention_Logo_Line1">
          <div className="Convention_Logo_Line1_Container1">
            <img
              src={logo9}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo1"
            />
          </div>
          <div className="Convention_Logo_Line1_Container4">
            <img
              src={logo10}
              alt="Convention logo"
              className="Convention_Logo_Line1_Logo4"
            />
          </div>
        </div>
      </div>
      <div className="Convention_Text">
        Our artists actively participate in numerous competitions across various
        countries, consistently achieving victories that contribute to their
        undisputed level of skill and technique. They blend traditional
        knowledge with a commitment to recognizing and absorbing modern trends,
        resulting in the unique character and style that defines each artist.
      </div>
      <div className="Convention_Video">
        <video className="Convention_Video_Video" controls muted preload="none">
          <source src={require("../../assets/video/1.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="Convention_Video_Video" controls muted preload="none">
          <source src={require("../../assets/video/2.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="Convention_Video_Video" controls muted preload="none">
          <source
            src={require("../../assets/video/main.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Convention;
