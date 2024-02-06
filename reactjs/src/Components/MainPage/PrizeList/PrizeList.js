import React, { useState } from "react";

import "./PrizeList.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Best from "../../assets/ImgMobile/Prize/Best.png";
import First from "../../assets/ImgMobile/Prize/First.png";
import Second from "../../assets/ImgMobile/Prize/Second.png";
import Third from "../../assets/ImgMobile/Prize/Third.png";
import Top3 from "../../assets/ImgMobile/Prize/Top3.png";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { isMobile } from "react-device-detect";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Prize = [
  {
    imgPrize: First,
    namePrize: "BEST SMALL COLOR FE",
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
    namePrize: "SMALL JOB B & G",
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
    namePrize: "LARGE B & G",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: First,
    namePrize: "BEST OF SHOW",
    location: "Palm City Expo",
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
    location: "Expo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "CICATRIZADO",
    location: "Expo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Second,
    namePrize: "ORIENTAL",
    location: "Expo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "MELHOR DO EVENTO",
    location: "Expo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Top3,
    namePrize: "COLOR",
    location: "Collectors Expo",
    country: "DALLAS, USA",
  },
  {
    imgPrize: Best,
    namePrize: "BEST ASIAN",
    location: "Collectors Expo",
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
    namePrize: "MELHOR DO EVENTO",
    location: "Tattoo Week",
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
    location: "Inksane Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: First,
    namePrize: "BEST OVER ALL",
    location: "Inksane Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: Best,
    namePrize: "BEST OF SHOW",
    location: "Inksane Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: First,
    namePrize: "ARTE FUSION",
    location: "Cangaco Tattoo",
    country: "BRAZIL",
  },
  {
    imgPrize: Best,
    namePrize: "MELHOR DO EVENTO",
    location: "Cangaco Tattoo",
    country: "BRAZIL",
  },
  {
    imgPrize: Second,
    namePrize: "REALISMO COLORIDO",
    location: "Cangaco Tattoo",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "FECHAMENTO",
    location: "Cangaco Tattoo",
    country: "BRAZIL",
  },
  {
    imgPrize: First,
    namePrize: "FREE HAND",
    location: "Cangaco Tattoo",
    country: "BRAZIL",
  },
  {
    imgPrize: Second,
    namePrize: "MINIMALIST TATTOO",
    location: "Ink Show",
    country: "Singapore",
  },
  {
    imgPrize: First,
    namePrize: "BEST ASIAN",
    location: "Flower City",
    country: "Rochester, NY",
  },
  {
    imgPrize: Second,
    namePrize: "ORIENTAL",
    location: "Tierra De Ensueno",
    country: "Columbia",
  },
  {
    imgPrize: First,
    namePrize: "Realismo Color",
    location: "Tattoo Arte",
    country: "Mexico",
  },
  {
    imgPrize: Best,
    namePrize: "Mejor De La Expo",
    location: "Tattoo Arte",
    country: "Mexico",
  },
];
const animation = { duration: 11000, easing: (t) => t };

function PrizeList() {
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
      perView: isMobile ? 3 :4,
      spacing: 15,
    },
  });
  return (
    <div className="PrizeList">
      {/* <img src={BG} alt="" className="PrizeList_BG" /> */}
      <div ref={sliderRef} className="keen-slider PrizeList_Container">
        {Prize.map((prize, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide PrizeList_Container_Prize_Active">
              <div className="PrizeList_Container_Prize_Img_Active">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="PrizeList_Container_Prize_Img_Img_Active"
                />
              </div>
              <div className="PrizeList_Container_Prize_NamePrize_Active">
                {prize.namePrize}
              </div>
              <div className="PrizeList_Container_Prize_Location_Active">
                {prize.location}
              </div>
              <div className="PrizeList_Container_Prize_Country_Active">
                {prize.country}
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide PrizeList_Container_Prize">
              <div className="PrizeList_Container_Prize_Img">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="PrizeList_Container_Prize_Img_Img"
                />
              </div>
              <div className="PrizeList_Container_Prize_NamePrize">
                {prize.namePrize}
              </div>
              <div className="PrizeList_Container_Prize_Location">
                {prize.location}
              </div>
              <div className="PrizeList_Container_Prize_Country">
                {prize.country}
              </div>
            </div>
          )
        )}
         {/* {loaded && instanceRef.current && (
          <div className="Prize_Button">
            <div className="Prize_Go_Left">
              <MdArrowBackIos
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
            <div className="Prize_Index">
              {currentSlide + 1}/
              {instanceRef.current.track.details.slides.length}
            </div>
            <div className="Prize_Go_Right">
              <MdArrowForwardIos
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default PrizeList;
