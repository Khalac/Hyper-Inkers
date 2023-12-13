import React from "react";
import "./BackGroundChange.scss";

import BG1 from "../assets/ImgMobile/Background/BG1.webp";
import BG2 from "../assets/ImgMobile/Background/BG2.webp";
import BG3 from "../assets/ImgMobile/Background/WelcomeBG.jpg";

import { useState, useRef, useEffect } from "react";

function BackGroundChange() {
  const imgBG = [BG1, BG2, BG3];
  const [currentSlide, setCurrentSlide] = useState(0);

  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < imgBG.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="BackGroundChange">
      {imgBG.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
}

export default BackGroundChange;
