import React, { useState } from "react";
import "./Trophy.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Min from "../../assets/ImgMobile/ImgSalePage/Minh.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Best from "../../assets/ImgMobile/Prize/Best.png";
import First from "../../assets/ImgMobile/Prize/First.png";
import Second from "../../assets/ImgMobile/Prize/Second.png";
import Third from "../../assets/ImgMobile/Prize/Third.png";
import Top3 from "../../assets/ImgMobile/Prize/Top3.png";

const Prize = [
  {
    imgPrize: First,
    namePrize: "BEST OF SMALL COLOR FEMALE",
    location: "Villian Arts",
    country: "HOUSTON 2021",
  },
  {
    imgPrize: Second,
    namePrize: "BEST OF SHOW",
    location: "Villian Arts",
    country: "HOUSTON 2021",
  },
  {
    imgPrize: First,
    namePrize: "BEST OF SHOW",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: Second,
    namePrize: "MINIMAL COLOR",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: Third,
    namePrize: "SMALL JOB BLACK AND GREY",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: First,
    namePrize: "BEST OF SHOW",
    location: "Body Art Expo",
    country: "LOS ANGELES 2023",
  },
  {
    imgPrize: First,
    namePrize: "PORTRAIT",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: Second,
    namePrize: "HORROR",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: Third,
    namePrize: "LARGE BLACK AND GREY",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: First,
    namePrize: "BEST OF SHOW",
    location: "Palm City Tattoo Expo",
    country: "MCALLEN 2023",
  },
  {
    imgPrize: First,
    namePrize: "CICATRIZADO",
    location: "Pachamama Convention",
    country: "PERU",
  },
  {
    imgPrize: Second,
    namePrize: "BEST OF GRANDES",
    location: "Pièces Epinal Show",
    country: "FRANCE",
  },
  {
    imgPrize: First,
    namePrize: "COLORIDO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "CICATRIZADO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Second,
    namePrize: "ORIENTAL",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "MELHOR DO EVENTO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Top3,
    namePrize: "COLOR",
    location: "Tattoo Collectors Expo",
    country: "DALLAS, USA",
  },
  {
    imgPrize: Best,
    namePrize: "BEST ASIAN",
    location: "Tattoo Collectors Expo",
    country: "DALLAS, USA",
  },
  {
    imgPrize: First,
    namePrize: "BEST ORIENTA",
    location: "Tattoo Week",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "MELHOR DO",
    location: "Evento Tattoo Week",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "BEST COMIC STYLE",
    location: "Mayagna Convention",
    country: "NICARAGUA",
  },
  {
    imgPrize: First,
    namePrize: "BEST ORIENTA",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: First,
    namePrize: "BEST OVER ALL",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: Best,
    namePrize: "BEST OF SHOW",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: First,
    namePrize: "ARTE FUSION",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Best,
    namePrize: "MELHOR DO EVENTO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Second,
    namePrize: "REALISMO COLORIDO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "FECHAMENTO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "FREE HAND",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
];

const animation = { duration: 11000, easing: (t) => t };

function Trophy() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(true);
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
    <div className="Trophy">
      <img src={BG} alt="" className="Trophy_BG" />
      <div className="Trophy_Name">TROPHY AWARDS</div>
      <div ref={sliderRef} className="keen-slider Trophy_Container">
        {Prize.map((prize, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide Trophy_Container_Active">
              <div className="Trophy_Container_Active_Wrap">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="Trophy_Container_Img_Img_Active"
                />

                <div className="Trophy_Container_Name_Active">
                  {prize.namePrize}
                </div>
                <div className="Trophy_Container_Location_Active">
                  {prize.location}
                </div>
                <div className="Trophy_Container_Country_Active">
                  {prize.country}
                </div>
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide Trophy_Container_Normal">
              <div className="Trophy_Container_Normal_Wrap">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="Trophy_Container_Img_Img"
                />
              </div>
            </div>
          )
        )}

        <div className="Trophy_Button_Container">
          <div className="Trophy_Go_Left">
            <IoIosArrowRoundBack
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
          </div>
          <div className="Trophy_Link">
            {" "}
            {currentSlide + 1}/
            {instanceRef.current?.track.details.slides.length}
          </div>

          <div className="Trophy_Go_Right">
            <IoIosArrowRoundForward
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trophy;
