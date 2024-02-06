import React, { useState } from "react";
import "./Artist.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Min from "../../assets/ImgMobile/Artist/Min.webp";
import Nicole from "../../assets/ImgMobile/Artist/Nicole.webp";
import Ben from "../../assets/ImgMobile/Artist/Ben.webp";
import Anet from "../../assets/ImgMobile/Artist/Anet.webp";
import Aaron from "../../assets/ImgMobile/Artist/Aaron.webp";

import { useNavigate } from "react-router-dom";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ArtistArr = [
  {
    img: Min,
    name: "MINH",
    category: "COLOR, REALISM, BLACK & GREY",
    link: "/Artist/Min",
  },
  {
    img: Ben,
    name: "BEN",
    category: "PORTRAIT, REALISM, BLACK & GREY",
    link: "/Artist/ben",
  },
  {
    img: Anet,
    name: "ANET",
    category: "COLOR, LINEWORK, BLACK & GREY",
    link: "/Artist/Anet",
  },
  {
    img: Nicole,
    name: "NICOLE",
    category: "PIERCING, LINEWORK, BLACKWORK",
    link: "/Artist/Nicole",
  },
  {
    img: Aaron,
    name: "AARON",
    category: "PORTRAIT, REALISM, BLACK & GREY",
    link: "/Artist/Aaron",
  },
];
function Artist() {
  const nav = useNavigate();
  const goToPage = (i) => {
    nav(ArtistArr[i].link);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const animation = { duration: 11000, easing: (t) => t };
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: performance,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
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
    drag: false,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className="Artist" id="Artist">
      <div className="Artist_Name">MEET OUR ARTIST</div>
      <div className="Artist_Text">
        Our artists exemplify professionalism from start to finish. They
        prioritize punctuality, transparent pricing, and a positive, respectful
        experience for every client.
      </div>
      <div ref={sliderRef} className="keen-slider Artist_Container">
        {ArtistArr.map((artist, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide Artist_Container_Active">
              <div className="Artist_Container_Active_Wrap">
                <img
                  src={artist.img}
                  alt=""
                  className="Artist_Container_Img_Img_Active"
                />

                <div className="Artist_Container_Name_Active">
                  {artist.name}
                </div>
                <div className="Artist_Container_Category_Active">
                  {artist.category}
                </div>
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide Artist_Container_Normal">
              <div className="Artist_Container_Normal_Wrap">
                <img
                  src={artist.img}
                  alt=""
                  className="Artist_Container_Img_Img"
                />

                <div className="Artist_Container_Name">{artist.name}</div>

                <div className="Artist_Container_Category">
                  {artist.category}
                </div>
              </div>
            </div>
          )
        )}
        {true && (
          <div className="Artist_Button_Container">
            <div className="Artist_Go_Left">
              <IoIosArrowRoundBack
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
            <div
              className="Artist_Link"
              onClick={() => nav(`${ArtistArr[currentSlide].link}`)}
            >
              VIEW PORFOLIO
            </div>

            <div className="Artist_Go_Right">
              <IoIosArrowRoundForward
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Artist;
