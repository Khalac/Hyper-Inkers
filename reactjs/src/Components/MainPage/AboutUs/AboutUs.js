import React from "react";
import "./AboutUs.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";
import videoThumb from "../../assets/ImgMobile/Video/thumb.jpg";
import video from "../../assets/ImgMobile/Video/video.mp4";

function AboutUs() {
  return (
    <div className="AboutUs">
      <img src={BG} className="AboutUs_BG" />
      <div className="AboutUs_Name">ALL ABOUT US</div>
      <div className="AboutUs_Text">
        Hyper Inkers Tattoo Studio established in 2023. Hyper team with all tec
        nique, enthusiasm and creativity, ready to meet any unique ideas coming
        from you - Our Inkers
      </div>
      <div className="AboutUs_Button_Container">
        <div className="AboutUs_Button_Container_Button">VIEW DETAILS</div>
      </div>
      <div className="AboutUs_Video_Container">
        <video
          className="AboutUs_Video"
          controls
          muted
          preload="none"
          poster={videoThumb}
        >
          <source
            src={video}
            type="video/mp4"
            className="About_Us_Video_Prop"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AboutUs;
