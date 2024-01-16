import React from "react";
import "./Service_AboutPage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import bg from "../../assets/ImgMobile/AboutPage/serbg.webp";
import tat from "../../assets/ImgMobile/AboutPage/tat.webp";
import pier from "../../assets/ImgMobile/AboutPage/pier.webp";
import des from "../../assets/ImgMobile/AboutPage/des.webp";

function Service_AboutPage() {
  return (
    <div className="Service_AboutPage">
      <img src={BG} alt="" className="Service_AboutPage_BG" />
      <div className="Service_AboutPage_Name">OUR SERVICE</div>
      <div className="Service_AboutPage_Cate">
        <div className="Service_AboutPage_Cate_1">
          <img src={tat} alt="logo" className="Service_AboutPage_Cate_1_logo" />
          <div className="Service_AboutPage_Cate_1_Name">TATTOO</div>
        </div>
        <div className="Service_AboutPage_Cate_1">
          <img
            src={pier}
            alt="logo"
            className="Service_AboutPage_Cate_1_logo"
          />
          <div className="Service_AboutPage_Cate_1_Name">PIERCING</div>
        </div>
        <div className="Service_AboutPage_Cate_2">
          <img src={des} alt="logo" className="Service_AboutPage_Cate_2_logo" />
          <div className="Service_AboutPage_Cate_2_Name">TATTOO</div>
        </div>
      </div>
      <div className="Service_AboutPage_Text">
        Our artists are not just skilled technicians; they are storytellers,
        visionaries, and creators. Whether you seek intricate black and grey
        realism, vibrant colors, or abstract designs, we have the expertise to
        bring your ideas to life.
      </div>
      <img src={bg} alt="banner" className="Service_AboutPage_Banner" />
      <div className="Service_AboutPage_Text">
        Hyper Inkers isn't just a brand; it's a canvas of possibilities, a realm
        where dreams are etched onto skin with precision and passion. Join our
        family of ink enthusiasts, and let's embark on an artistic journey
        together. Your journey with Hyper Inkers is more than an appointment;
        it's an opportunity to define your uniqueness and wear it proudly.
      </div>
      <div className="Service_AboutPage_Text">
        Welcome to the world of Hyper Inkers, where every tattoo tells a story,
        every artist is a storyteller, and the ink flows with boundless
        creativity. This is our canvas, and your story is our masterpiece in the
        making.
      </div>
    </div>
  );
}

export default Service_AboutPage;
