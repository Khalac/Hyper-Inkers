import React, { useState } from "react";
import "./Prize.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Best from "../../assets/ImgMobile/Prize/Best.png";
import First from "../../assets/ImgMobile/Prize/First.png";
import Second from "../../assets/ImgMobile/Prize/Second.png";
import Third from "../../assets/ImgMobile/Prize/Third.png";
import Top3 from "../../assets/ImgMobile/Prize/Top3.png";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const PrizeList = [
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

function Prize() {
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
    <div className="Prize">
      <img src={BG} alt="" className="Prize_BG" />
      <div ref={sliderRef} className="keen-slider Prize_Container">
        {PrizeList.map((prize, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide Prize_Container_Prize_Active">
              <div className="Prize_Container_Prize_Img_Active">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="Prize_Container_Prize_Img_Img_Active"
                />
              </div>
              <div className="Prize_Container_Prize_NamePrize_Active">
                {prize.namePrize}
              </div>
              <div className="Prize_Container_Prize_Location_Active">
                {prize.location}
              </div>
              <div className="Prize_Container_Prize_Country_Active">
                {prize.country}
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide Prize_Container_Prize">
              <div className="Prize_Container_Prize_Img">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="Prize_Container_Prize_Img_Img"
                />
              </div>
              <div className="Prize_Container_Prize_NamePrize">
                {prize.namePrize}
              </div>
              <div className="Prize_Container_Prize_Location">
                {prize.location}
              </div>
              <div className="Prize_Container_Prize_Country">
                {prize.country}
              </div>
            </div>
          )
        )}
        {loaded && instanceRef.current && (
          <div className="Prize_Index">
            {currentSlide + 1}/{instanceRef.current.track.details.slides.length}
          </div>
        )}
        <div className="Prize_Go_Left">
          <MdArrowBackIos
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />
        </div>
        <div className="Prize_Go_Right">
          <MdArrowForwardIos
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </div>
      </div>
      <div className="Prize_Text">
        We view every client as an extension of our family, and your trust in us
        is a responsibility we cherish. Our promise is to deliver nothing short
        of excellence, ensuring that your tattoo experience is not just
        satisfactory but extraordinary.
      </div>
      <div className="Prize_Text">
        At Hyper Inkers, we continuously push the boundaries of tattoo artistry.
        We embrace innovation, collaborate with diverse alents, and stay at the
        forefront of industry trends. This relentless pursuit of artistic
        evolution enables us to offer you the best of the best.
      </div>
    </div>
  );
}

export default Prize;
