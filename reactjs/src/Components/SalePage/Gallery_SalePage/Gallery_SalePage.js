import React, { useState, useEffect } from "react";
import "./Gallery_SalePage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Gallery_SalePage() {
  const [nameStyle, setNameStyle] = useState("Realism");
  const [style, setStyle] = useState();

  const [activeRealism, setActiveRealism] = useState(true);
  const [activeColor, setActiveColor] = useState(false);
  const [activeFineLine, setActiveFineLine] = useState(false);
  const [activeBlackGrey, setActiveBlackGrey] = useState(false);
  const [activePortrait, setActivePortrait] = useState(false);

  useEffect(() => {
    if (nameStyle === "Realism") setStyle(listImgRealism);
    if (nameStyle === "Color") setStyle(listImgColor);
    if (nameStyle === "FineLine") setStyle(listImgFineLine);
    if (nameStyle === "BlackGrey") setStyle(listImgBlackGrey);
    if (nameStyle === "Portrait") setStyle(listImgPortrait);
  }, [nameStyle]);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

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
  const setRealism = () => {
    setNameStyle("Realism");
    setActiveRealism(true);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(false);
  };
  const setPortrait = () => {
    setNameStyle("Portrait");
    setActiveRealism(false);
    setActivePortrait(true);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(false);
  };
  const setFineLine = () => {
    setNameStyle("FineLine");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(true);
    setActiveColor(false);
    setActiveBlackGrey(false);
  };
  const setColor = () => {
    setNameStyle("Color");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(true);
    setActiveBlackGrey(false);
  };
  const setBlackGrey = () => {
    setNameStyle("BlackGrey");
    setActiveRealism(false);
    setActivePortrait(false);
    setActiveFineLine(false);
    setActiveColor(false);
    setActiveBlackGrey(true);
  };

  return (
    <div className="Gallery_SalePage_Normal">
      <img src={BG} alt="" className="Gallery_SalePage_Normal_BG" />
      <div className="Gallery_SalePage_Normal_Name">HYPER GALLERY</div>
      <div className="Gallery_SalePage_Normal_Gallery">
        <div className="Gallery_SalePage_Normal_Gallery_Styles">
          <div
            className={
              activeRealism
                ? `Gallery_SalePage_Normal_Gallery_Styles_Style active`
                : `Gallery_SalePage_Normal_Gallery_Styles_Style`
            }
            onClick={setRealism}
          >
            REALISM
          </div>
          <div
            className={
              activePortrait
                ? `Gallery_SalePage_Normal_Gallery_Styles_Style active`
                : `Gallery_SalePage_Normal_Gallery_Styles_Style`
            }
            onClick={setPortrait}
          >
            PORTRAIT
          </div>
          <div
            className={
              activeFineLine
                ? `Gallery_SalePage_Normal_Gallery_Styles_Style active`
                : `Gallery_SalePage_Normal_Gallery_Styles_Style`
            }
            onClick={setFineLine}
          >
            LINEWORK
          </div>
          <div
            className={
              activeColor
                ? `Gallery_SalePage_Normal_Gallery_Styles_Style active`
                : `Gallery_SalePage_Normal_Gallery_Styles_Style`
            }
            onClick={setColor}
          >
            COLOR
          </div>
          <div
            className={
              activeBlackGrey
                ? `Gallery_SalePage_Normal_Gallery_Styles_Style active`
                : `Gallery_SalePage_Normal_Gallery_Styles_Style`
            }
            onClick={setBlackGrey}
          >
            BLACK&GREY
          </div>
        </div>
        <div className="Gallery_SalePage_Normal_Gallery_Img">{style}</div>
      </div>
    </div>
  );
}

export default Gallery_SalePage;
