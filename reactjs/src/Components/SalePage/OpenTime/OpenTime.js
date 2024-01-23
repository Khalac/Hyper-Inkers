import React from "react";
import "./OpenTime.scss";
import BG from "../../assets/ImgMobile/Background/MainBG.png";

function OpenTime() {
  return (
    <div className="OpenTime">
      <img src={BG} alt="" className="OpenTime_BG" />
      <div className="OpenTime_Time">
        <div className="OpenTime_Time_Time">Mon - Sun | 9am - 2am</div>
        <div className="OpenTime_Time_Text">WALK-IN WELCOME</div>
      </div>
      <div className="OpenTime_Text">
        <div>
          {"\t"}Hyper Inkers was founded in 2023. We are young artists who
          discovered our love for tattooing at an early age, bringing with us
          many years of experience.
        </div>
        <div>
          {" "}
          We serve as an intersection, blending old tattoo stories and
          techniques with modern perspectives and development. That's why we
          have our unique identity.
        </div>
      </div>
    </div>
  );
}

export default OpenTime;
