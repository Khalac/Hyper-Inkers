import React from "react";
import "./Gallery.scss";

import BG from "../assets/ImgMobile/Background/MainBG.png";

function Gallery() {
  return (
    <div className="Gallery">
      <img src={BG} alt="" className="Gallery_BG" />
      <div className="Gallery_Name">HYPER GALLERY</div>
      <div className="Gallery_Gallery">
        <div className="Gallery_Gallery_Line1">
          <div className="Gallery_Gallery_Line1_Color">
            <div className="Gallery_Gallery_Line1_Color_Text">COLOR</div>
          </div>
          <div className="Gallery_Gallery_Line1_Linework">
            <div className="Gallery_Gallery_Line1_Linework_Text">LINEWORK</div>
          </div>
        </div>
        <div className="Gallery_Gallery_Line2">
          <div className="Gallery_Gallery_Line2_Portrait">
            <div className="Gallery_Gallery_Line2_Portrait_Text">PORTRAIT</div>
          </div>
          <div className="Gallery_Gallery_Line2_BNG">
            <div className="Gallery_Gallery_Line2_BNG_Text">BLACK N GREY</div>
          </div>
        </div>
        <div className="Gallery_Gallery_Line3">
          <div className="Gallery_Gallery_Line3_Realism">
            <div className="Gallery_Gallery_Line3_Realism_Text">REALISM</div>
          </div>
          <div className="Gallery_Gallery_Line3_Container">
            <div className="Gallery_Gallery_Line3_Top_Container">
              <div className="Gallery_Gallery_Line3_Top_Pier">
                <div className="Gallery_Gallery_Line3_Top_Pier_Text">
                  PIERCING
                </div>
              </div>
              <div className="Gallery_Gallery_Line3_Top_Mini">
                <div className="Gallery_Gallery_Line3_Top_Mini_Text">MINI</div>
              </div>
            </div>
            <div className="Gallery_Gallery_Line3_Bottom_Container">
              <div className="Gallery_Gallery_Line3_Bottom_Text">REALISM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
