import React, { useState } from "react";
import "./Gallery.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Gallery() {
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

  const imagesFineLine = importAll(
    require.context(
      "../../assets/ImgMobile/ImgGallery/fineline",
      false,
      /\.webp$/
    )
  );
  let imgFineLine = [];
  for (let i = 1; i <= 15; ++i) {
    imgFineLine.push(imagesFineLine[`${i}.webp`]);
  }
  var fineline = 0;
  const listImgFineLine = imgFineLine.map((img) => {
    fineline++;
    return (
      <div className={`FineLine_div_` + fineline}>
        <img src={img} alt="" className={`FineLine_` + fineline}></img>{" "}
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
    <div className="Gallery">
      {popUp && (
        <div className="popUp">
          <div onClick={() => popUpImg()} className="overlay"></div>
          <div className="popUP_Content">
            {" "}
            {type === "color"
              ? listImgColor
              : type === "fineline"
              ? listImgFineLine
              : type === "portrait"
              ? listImgPortrait
              : type === "blackgrey"
              ? listImgBlackGrey
              : listImgRealism}
          </div>
        </div>
      )}
      <img src={BG} alt="" className="Gallery_BG" />
      <div className="Gallery_Name">HYPER GALLERY</div>
      <div className="Gallery_Gallery">
        <div className="Gallery_Gallery_Line1">
          <div
            className="Gallery_Gallery_Line1_Color"
            onClick={() => popUpImg("color")}
          >
            <div className="Gallery_Gallery_Line1_Color_Text">COLOR</div>
          </div>
          <div
            className="Gallery_Gallery_Line1_Linework"
            onClick={() => popUpImg("fineline")}
          >
            <div className="Gallery_Gallery_Line1_Linework_Text">LINEWORK</div>
          </div>
        </div>
        <div className="Gallery_Gallery_Line2">
          <div
            className="Gallery_Gallery_Line2_Portrait"
            onClick={() => popUpImg("portrait")}
          >
            <div className="Gallery_Gallery_Line2_Portrait_Text">PORTRAIT</div>
          </div>
          <div
            className="Gallery_Gallery_Line2_BNG"
            onClick={() => popUpImg("blackgrey")}
          >
            <div className="Gallery_Gallery_Line2_BNG_Text">BLACK N GREY</div>
          </div>
        </div>
        <div className="Gallery_Gallery_Line3">
          <div
            className="Gallery_Gallery_Line3_Realism"
            onClick={() => popUpImg("realism")}
          >
            <div className="Gallery_Gallery_Line3_Realism_Text">REALISM</div>
          </div>
          <div className="Gallery_Gallery_Line3_Container">
            <div className="Gallery_Gallery_Line3_Top_Container">
              <div
                className="Gallery_Gallery_Line3_Top_Pier"
                onClick={() => popUpImg()}
              >
                <div className="Gallery_Gallery_Line3_Top_Pier_Text">
                  PIERCING
                </div>
              </div>
              <div
                className="Gallery_Gallery_Line3_Top_Mini"
                onClick={() => popUpImg()}
              >
                <div className="Gallery_Gallery_Line3_Top_Mini_Text">MINI</div>
              </div>
            </div>
            <div
              className="Gallery_Gallery_Line3_Bottom_Container"
              onClick={() => popUpImg()}
            >
              <div className="Gallery_Gallery_Line3_Bottom_Text">REALISM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
