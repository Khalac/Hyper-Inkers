import React from "react";
import "./AboutUs.scss";

import BG from "../../assets/ImgMobile/Background/MainBG1.png";
import videoThumb from "../../assets/ImgMobile/Video/thumb.jpg";
import video from "../../assets/ImgMobile/Video/video.mp4";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const nav = useNavigate();
  return isMobile ? (
    <div className="AboutUs">
      <div className="AboutUs_Name">ALL ABOUT US</div>
      <div className="AboutUs_Text">
        Hyper Inkers Tattoo Studio established in 2023. Hyper team with all tec
        nique, enthusiasm and creativity, ready to meet any unique ideas coming
        from you - Our Inkers.
      </div>
      <div className="AboutUs_Button_Container">
        <div
          className="AboutUs_Button_Container_Button"
          onClick={() => nav("/AboutPage")}
        >
          VIEW DETAILS
        </div>
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
  ) : (
    <div className="AboutUs">
      <div className="AboutUs_Name">ALL ABOUT US</div>
      {/* <div className="AboutUs_Text">
        Hyper Inkers Tattoo Studio established in 2023. Hyper team with all tec
        nique, enthusiasm and creativity, ready to meet any unique ideas coming
        from you - Our Inkers
      </div> */}
      {/* <div className="AboutUs_Button_Container">
        <div
          className="AboutUs_Button_Container_Button"
          onClick={() => nav("/AboutPage")}
        >
          VIEW DETAILS
        </div>
      </div> */}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: 50,
            paddingRight: "11%",
          }}
        >
          <div className="AboutUs_Text">
            Hyper Inkers Tattoo Studio established in 2023. Hyper team with all
            technique, enthusiasm and creativity, ready to meet any unique ideas
            coming from you - Our Inkers.
          </div>
          <div className="AboutUs_Text">
            At our studio, we prioritize the utmost standards of safety and
            hygiene, employing top-notch equipment sterilization and sanitation
            practices.
          </div>

          <div className="AboutUs_Button_Container">
            <div
              className="AboutUs_Button_Container_Button"
              onClick={() => nav("/AboutPage")}
            >
              VIEW DETAILS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
