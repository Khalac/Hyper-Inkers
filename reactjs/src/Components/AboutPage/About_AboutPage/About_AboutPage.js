import React from "react";
import "./About_AboutPage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Img1 from "../../assets/ImgMobile/AboutPage/1.webp";
import Img2 from "../../assets/ImgMobile/AboutPage/2.webp";
import Img3 from "../../assets/ImgMobile/AboutPage/3.webp";
import Img4 from "../../assets/ImgMobile/AboutPage/4.webp";

function About_AboutPage() {
  return (
    <div className="About_AboutPage">
      <img src={BG} alt="" className="About_AboutPage_BG" />
      <div className="About_AboutPage_Name">ALL ABOUT US</div>
      <div className="About_AboutPage_Section1">
        <div className="About_AboutPage_Section1_Text_Img">
          <div className="About_AboutPage_Section1_Text">
            Hyper Inkers Tattoo Studio established in 2023 Hyper team with all
            technique, enthusiasm and creativity, ready to meet any unique ideas
            coming from you - Our Inkers
          </div>
          <img src={Img2} alt="" className="About_AboutPage_Section1_Img2" />
        </div>
        <div className="About_AboutPage_Section1_Number_Img">
          <img src={Img1} alt="" className="About_AboutPage_Section1_Img1" />
          <div className="About_AboutPage_Section1_Number_Container">
            <div className="About_AboutPage_Section1_Number">
              <div className="About_AboutPage_Section1_Number_Number">5</div>
              <div className="About_AboutPage_Section1_Number_Text">ARTIST</div>
            </div>
            <div className="About_AboutPage_Section1_Number">
              <div className="About_AboutPage_Section1_Number_Number">7</div>
              <div className="About_AboutPage_Section1_Number_Text">
                YRS EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About_AboutPage_Section2">
        <div className="About_AboutPage_Section2_Name">
          <div>WE'RE HYPED</div>
          <div>TO GET YOU</div>
          <div>INKED</div>
          <div>!!!</div>
        </div>
        <div className="About_AboutPage_Section2_Img">
          <div className="About_AboutPage_Section2_Img1">
            <img
              src={Img3}
              alt=""
              className="About_AboutPage_Section2_Img1_Img"
            />
            <div className="About_AboutPage_Section2_Img1_Container">
              <div className="About_AboutPage_Section2_Number">
                <div className="About_AboutPage_Section2_Number_Number">
                  15+
                </div>
                <div className="About_AboutPage_Section2_Number_Text">
                  WORLD CONVENTION
                </div>
              </div>
              <div className="About_AboutPage_Section2_Number">
                <div className="About_AboutPage_Section2_Number_Number">
                  30+
                </div>
                <div className="About_AboutPage_Section2_Number_Text">
                  TROPHIES
                </div>
              </div>
            </div>
          </div>
          <div className="About_AboutPage_Section2_Img2">
            <img
              src={Img4}
              alt=""
              className="About_AboutPage_Section2_Img2_Img"
            />
          </div>
        </div>
        <div className="About_AboutPage_Section2_Text">
          What sets Hyper Inkers apart is our unwavering commitment to
          craftsmanship and customer satisfaction. As a brand founded by
          artists, we understand the profound impact that ink can have on one's
          life. Our vision is to not merely create tattoos, but to craft
          enduring works of art that tell stories, evoke emotions, and celebrate
          individuality.
        </div>
      </div>
    </div>
  );
}

export default About_AboutPage;
