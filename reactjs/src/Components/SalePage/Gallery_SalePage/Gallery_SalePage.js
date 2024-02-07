import React, { useState } from "react";
import "./Gallery_SalePage.scss";
import BG from "../../assets/ImgMobile/Background/MainBG.png";

import realismImg from "../../assets/ImgMobile/ImgSalePage/realism.webp";
import asianImg from "../../assets/ImgMobile/ImgSalePage/asian.webp";
import portraitImg from "../../assets/ImgMobile/ImgSalePage/portrait.webp";
import colorImg from "../../assets/ImgMobile/ImgSalePage/color.webp";
import bngImg from "../../assets/ImgMobile/ImgSalePage/bng.webp";
import smallImg from "../../assets/ImgMobile/ImgSalePage/small.webp";
import numberImg from "../../assets/ImgMobile/ImgSalePage/number.webp";
import cartoonImg from "../../assets/ImgMobile/ImgSalePage/cartoon.webp";
import { isMobile } from "react-device-detect";
import { handlePhoneClick } from "../../../utils/helper";

function Gallery_SalePage() {
  const [popUp, setPopUp] = useState(false);
  const [type, setType] = useState("");
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const popUpImg = (s) => {
    setType(s);
    setPopUp(!popUp);
    if (popUp === true) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const imagesRealism = importAll(
    require.context(
      "../../assets/ImgMobile/ImgGallery/realism",
      false,
      /\.webp$/
    )
  );
  let imgRealism = [];
  for (let i = 1; i <= 25; ++i) {
    imgRealism.push(imagesRealism[`${i}.webp`]);
  }
  var realism = 0;
  const listImgRealism = imgRealism.map((img) => {
    realism++;
    return (
      <div className={`Realism_div_` + realism}>
        <img src={img} alt="" className={`Realism_` + realism}></img>{" "}
      </div>
    );
  });

  const imagesPortrait = importAll(
    require.context(
      "../../assets/ImgMobile/ImgGallery/portrait",
      false,
      /\.webp$/
    )
  );
  let imgPortrait = [];

  for (let i = 1; i <= 20; ++i) {
    imgPortrait.push(imagesPortrait[`${i}.webp`]);
  }
  var portrait = 0;
  const listImgPortrait = imgPortrait.map((img) => {
    portrait++;
    return (
      <div className={`Portrait_div_` + portrait}>
        <img src={img} alt="" className={`Portrait_` + portrait}></img>{" "}
      </div>
    );
  });

  const imagesColor = importAll(
    require.context("../../assets/ImgMobile/ImgGallery/color", false, /\.webp$/)
  );
  let imgColor = [];
  for (let i = 1; i <= 35; ++i) {
    imgColor.push(imagesColor[`${i}.webp`]);
  }
  var color = 0;
  const listImgColor = imgColor.map((img) => {
    color++;
    return (
      <div className={`Color_div_` + color}>
        <img src={img} alt="" className={`Color_` + color}></img>{" "}
      </div>
    );
  });

  const imagesBlackGrey = importAll(
    require.context(
      "../../assets/ImgMobile/ImgGallery/blackgrey",
      false,
      /\.webp$/
    )
  );
  let imgBlackGrey = [];
  for (let i = 1; i <= 20; ++i) {
    imgBlackGrey.push(imagesBlackGrey[`${i}.webp`]);
  }
  var blackgrey = 0;
  const listImgBlackGrey = imgBlackGrey.map((img) => {
    blackgrey++;
    return (
      <div className={`Blackgrey_div_` + blackgrey}>
        <img src={img} alt="" className={`Blackgrey_` + blackgrey}></img>{" "}
      </div>
    );
  });
  return (
    <div className="Gallery_SalePage">
      {popUp && (
        <div className="popUp">
          <div onClick={() => popUpImg()} className="overlay"></div>
          <div className="popUP_Content">
            {" "}
            {type === "color"
              ? listImgColor
              : type === "portrait"
              ? listImgPortrait
              : type === "blackgrey"
              ? listImgBlackGrey
              : listImgRealism}
          </div>
        </div>
      )}
      <h2 className="Gallery_SalePage_Name">
        STRONG PORFOLIO ABOUT TATTOO, ART AND DESIGN
      </h2>
      <div className="Gallery_SalePage_Name_One">
        Each artist specializes in a distinct style of tattooing, covering
        everything from Hyper Realism to Oriental (Asian style)
      </div>
      {isMobile ? (
        <React.Fragment>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={asianImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Asian Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={portraitImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("portrait")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">Portrait</div>
            </div>
          </div>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={colorImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("color")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">Color</div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={bngImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("blackgrey")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Black and Grey
              </div>
            </div>
          </div>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={smallImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Small Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={realismImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("realism")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Realism Tattoo
              </div>
            </div>
          </div>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={cartoonImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Cartoon Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={numberImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Number - Lettering
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={asianImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Asian Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={portraitImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("portrait")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">Portrait</div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={colorImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("color")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">Color</div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={bngImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("blackgrey")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Black and Grey
              </div>
            </div>
          </div>
          <div className="Gallery_SalePage_Gallery">
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={smallImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Small Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={realismImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
                onClick={() => popUpImg("realism")}
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Realism Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={cartoonImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Cartoon Tattoo
              </div>
            </div>
            <div className="Gallery_SalePage_Gallery_Cat">
              <img
                src={numberImg}
                alt="img"
                className="Gallery_SalePage_Gallery_Cat_Img"
              />
              <div className="Gallery_SalePage_Gallery_Cat_Text">
                Number - Lettering
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      <div
        onClick={handlePhoneClick}
        className="Gallery_SalePage_Booking"
        style={{ marginBottom: "5vh" }}
      >
        BOOKING NOW
      </div>
    </div>
  );
}

export default Gallery_SalePage;
