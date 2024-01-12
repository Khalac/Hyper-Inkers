import React, { useState } from "react";

import "./Artist.scss";
import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Min from "../../assets/ImgMobile/ImgSalePage/Minh.webp";
import Nicole from "../../assets/ImgMobile/ImgSalePage/Nicole.webp";
import Ben from "../../assets/ImgMobile/ImgSalePage/Ben.webp";
import Anet from "../../assets/ImgMobile/ImgSalePage/Anet.webp";
import Aaron from "../../assets/ImgMobile/ImgSalePage/Aaron.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ArtistArr = [
  {
    img: Min,
    name: "MINH",
  },
  {
    img: Ben,
    name: "BEN",
  },
  {
    img: Anet,
    name: "ANET",
  },
  {
    img: Nicole,
    name: "NICOLE",
  },
  {
    img: Aaron,
    name: "AARON",
  },
];

function Sale_Artist() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: performance,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      origin: "center",
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className="Sale_Artist">
      <img src={BG} alt="" className="Sale_Artist_BG" />
      <div className="Sale_Artist_Name">OUR HYPER ARTISTS</div>
      <div className="Sale_Artist_Text">
        Though still young, our artists boast years of accumulated experience.
        We blend the rich heritage of traditional tattoo art with new knowledge
        and developments, offering a unique tattoo style and technique. Always
        ready, our artists inquire and embrace challenges. We promise to bring a
        fresh perspective to your tattoo experience. Ink It Right, Ink It Hyper!
      </div>
      <div ref={sliderRef} className="keen-slider SalePage_Artist_Container">
        {ArtistArr.map((artist, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide SalePage_Artist_Container_Active">
              <div
                className="SalePage_Artist_Container_Active_Wrap"
                style={{ backgroundImage: `url(${artist.img})` }}
              >
                <div className="SalePage_Artist_Container_Name_Active">
                  {artist.name}
                </div>
              </div>
            </div>
          ) : currentSlide === key - 1 ? (
            <div className="keen-slider__slide SalePage_Artist_Container_Normal">
              <div
                className="SalePage_Artist_Container_Normal_Wrap"
                style={{
                  backgroundImage: `linear-gradient(
                  to right,
                  
                  rgba(0,0,0, 0),
                  rgba(0,0,0, 0),
                  rgba(0,0,0, 100)
                ),url(${artist.img})`,
                }}
              >
                <div className="SalePage_Artist_Container_Name">
                  {artist.name}
                </div>
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide SalePage_Artist_Container_Normal">
              <div
                className="SalePage_Artist_Container_Normal_Wrap"
                style={{
                  backgroundImage: `linear-gradient(
                to left,
                rgba(0,0,0, 0),
                rgba(0,0,0, 0),
                rgba(0,0,0, 100)
              ),url(${artist.img})`,
                }}
              >
                <div className="SalePage_Artist_Container_Name">
                  {artist.name}
                </div>
              </div>
            </div>
          )
        )}
        <div className="SalePage_Artist_Go_Left">
          <MdArrowBackIos
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />
        </div>
        <div className="SalePage_Artist_Go_Right">
          <MdArrowForwardIos
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </div>
      </div>
    </div>
  );
}

export default Sale_Artist;
