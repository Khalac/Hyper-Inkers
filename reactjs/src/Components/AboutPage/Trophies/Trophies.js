import React from "react";
import "./Trophies.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import bg from "../../assets/ImgMobile/AboutPage/trophiesbg.webp";
import img1 from "../../assets/ImgMobile/AboutPage/trp1.webp";
import img2 from "../../assets/ImgMobile/AboutPage/trp2.webp";
import img3 from "../../assets/ImgMobile/AboutPage/trp3.webp";

function Trophies() {
  return (
    <div className="Trophies">
      <div className="Trophies_Name">
        <div>30+ TROPHIES</div>
        <div>WITH PRICELESS VALUE</div>
      </div>
      <img src={bg} alt="Banner" className="Trophies_banner" />
      <div className="Trophies_Img">
        <img src={img1} alt="Img" className="Trophies_Img_Img" />
        <img src={img2} alt="Img" className="Trophies_Img_Img" />
        <img src={img3} alt="Img" className="Trophies_Img_Img" />
      </div>
      <div className="Trophies_Text">
        Accumulating a series of awards and accolades elevates our profile,
        providing a solid assurance foundation for each of our customers. So,
        please relish your experience with us. The more ink, the greater the
        excitement.
      </div>
    </div>
  );
}

export default Trophies;
