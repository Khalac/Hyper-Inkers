import React from "react";
import "./WDWH.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import WDWH1 from "../../assets/Logo/WDWH1.webp";
import WDWH2 from "../../assets/Logo/WDWH2.webp";
import WDWH3 from "../../assets/Logo/WDWH3.webp";
import WDWH4 from "../../assets/Logo/WDWH4.webp";

function WDWH() {
  return (
    <div className="WDWH">
      <img src={BG} alt="" className="WDWH_BG" />
      <div className="WDWH_Name">WHAT DO WE HAVE?</div>
      <div className="WDWH_Text_Container">
        <div className="WDWH_Text">
          Hyper Inkers stands out for its unwavering commitment to craftsmanship
          and customer satisfaction. Founded by artists, the brand's vision is
          to craft enduring works of art through tattoos that tell stories,
          evoke emotions, and celebrate individuality.
        </div>
      </div>
      <div className="WDWH_Tag_Container">
        <div className="WDWH_Tag">
          <img src={WDWH1} alt="" className="WDWH_Tag_Logo" />
          <div className="WDWH_Tag_Text">
            <div className="WDWH_Tag_Text_Name">5 ARTIST</div>
            <div className="WDWH_Tag_Text_Des">
              Our artists embody professionalism, emphasizing punctuality,
              transparent pricing, and a positive, respectful client experience.
            </div>
          </div>
          <div className="WDWH_Tag_Learn_More">LEARN MORE</div>
        </div>
      </div>
      <div className="WDWH_Tag_Container">
        <div className="WDWH_Tag">
          <img src={WDWH2} alt="" className="WDWH_Tag_Logo" />
          <div className="WDWH_Tag_Text">
            <div className="WDWH_Tag_Text_Name">15+ WORLD CONVENTION</div>
            <div className="WDWH_Tag_Text_Des">
              Through consistent participation in global competitions, we
              fearlessly embrace challenges and carry the enduringenthusiasm of
              the tattoo profession.
            </div>
          </div>
          <div className="WDWH_Tag_Learn_More">LEARN MORE</div>
        </div>
      </div>
      <div className="WDWH_Tag_Container">
        <div className="WDWH_Tag">
          <img src={WDWH3} alt="" className="WDWH_Tag_Logo" />
          <div className="WDWH_Tag_Text">
            <div className="WDWH_Tag_Text_Name">7 YRS EXPERIENCE</div>
            <div className="WDWH_Tag_Text_Des">
              Despite their youth, our artists excel with valuable experience
              and technical proficiency, ensuring precision and excellence in
              every tattoo.
            </div>
          </div>
          <div className="WDWH_Tag_Learn_More">LEARN MORE</div>
        </div>
      </div>
      <div className="WDWH_Tag_Container">
        <div className="WDWH_Tag">
          <img src={WDWH4} alt="" className="WDWH_Tag_Logo" />
          <div className="WDWH_Tag_Text">
            <div className="WDWH_Tag_Text_Name">30+ TROPHIES</div>
            <div className="WDWH_Tag_Text_Des">
              Accumulating awards boosts our profile, offering a solid assurance
              for customers. Enjoy your experience with us – more ink, more
              excitement.
            </div>
          </div>
          <div className="WDWH_Tag_Learn_More">LEARN MORE</div>
        </div>
      </div>
    </div>
  );
}

export default WDWH;
