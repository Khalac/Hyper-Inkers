import React, { useState } from "react";
import "./Artist_Salepage.scss";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import BG from "../../assets/ImgMobile/Background/MainBG.png";
import Min from "../../assets/ImgMobile/ImgSalePage/Minh.webp";
import Ben from "../../assets/ImgMobile/ImgSalePage/Ben.webp";
import Anet from "../../assets/ImgMobile/ImgSalePage/Anet.webp";
import Nicole from "../../assets/ImgMobile/ImgSalePage/Nicole.webp";
import Aaron from "../../assets/ImgMobile/ImgSalePage/Aaron.webp";

const ArtistArr = [
  {
    img: Min,
    name: "MINH",
    category: "Color - Realism - Black & Grey",
  },
  {
    img: Ben,
    name: "BEN",
    category: "Portrait - Realism - Black & Grey",
  },
  {
    img: Anet,
    name: "ANET",
    category: "Color - LineWork - Black & Grey",
  },
  {
    img: Nicole,
    name: "NICOLE",
    category: "Piercing - Linework - Blackwork",
  },
  {
    img: Aaron,
    name: "AARON",
    category: "Portrait - Realism - Black & Grey",
  },
];

const animation = { duration: 11000, easing: (t) => t };

function Artist_Salepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    renderMode: performance,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    created() {
      setLoaded(true);
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    loop: true,
    renderMode: "performance",
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 15,
    },
  });
  return (
    <div className="Artist_Salepage">
      <img src={BG} alt="" className="Artist_Salepage_BG" />
      <div className="Artist_Salepage_Name">our artists</div>
      <div ref={sliderRef} className="keen-slider Artist_Salepage_Artist">
        {ArtistArr.map((artist, key) => (
          <div className="keen-slider__slide Artist_Salepage_Artist_Container">
            <img
              src={artist.img}
              alt=""
              className="Artist_Salepage_Artist_Img"
            />

            <div className="Artist_Salepage_Artist_Name">{artist.name}</div>
            <div className="Artist_Salepage_Artist_Name_Cat">
              {artist.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist_Salepage;
