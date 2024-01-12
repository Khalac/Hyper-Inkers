import React, { useState } from "react";
import "./TrophyAwards.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import Min from "../../assets/ImgMobile/ImgSalePage/Minh.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Prize = [
  {
    imgPrize: Min,
    namePrize: "BEST OF SMALL COLOR FEMALE",
    location: "Villian Arts",
    country: "HOUSTON 2021",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF SHOW",
    location: "Villian Arts",
    country: "HOUSTON 2021",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF SHOW",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: Min,
    namePrize: "MINIMAL COLOR",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: Min,
    namePrize: "SMALL JOB BLACK AND GREY",
    location: "Land of Ink",
    country: "BANGKOK 2022",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF SHOW",
    location: "Body Art Expo",
    country: "LOS ANGELES 2023",
  },
  {
    imgPrize: Min,
    namePrize: "PORTRAIT",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: Min,
    namePrize: "HORROR",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: Min,
    namePrize: "LARGE BLACK AND GREY",
    location: "Star of Texas",
    country: "AUSTIN 2023",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF SHOW",
    location: "Palm City Tattoo Expo",
    country: "MCALLEN 2023",
  },
  {
    imgPrize: Min,
    namePrize: "CICATRIZADO",
    location: "Pachamama Convention",
    country: "PERU",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF GRANDES",
    location: "Pièces Epinal Show",
    country: "FRANCE",
  },
  {
    imgPrize: Min,
    namePrize: "COLORIDO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "CICATRIZADO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "ORIENTAL",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "MELHOR DO EVENTO",
    location: "Expo Tattoo Brasília",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "COLOR",
    location: "Tattoo Collectors Expo",
    country: "DALLAS, USA",
  },
  {
    imgPrize: Min,
    namePrize: "BEST ASIAN",
    location: "Tattoo Collectors Expo",
    country: "DALLAS, USA",
  },
  {
    imgPrize: Min,
    namePrize: "BEST ORIENTA",
    location: "Tattoo Week",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "MELHOR DO",
    location: "Evento Tattoo Week",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "BEST COMIC STYLE",
    location: "Mayagna Convention",
    country: "NICARAGUA",
  },
  {
    imgPrize: Min,
    namePrize: "BEST ORIENTA",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OVER ALL",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: Min,
    namePrize: "BEST OF SHOW",
    location: "Inksane Tattoo Fest V",
    country: "PUERTO RICO",
  },
  {
    imgPrize: Min,
    namePrize: "ARTE FUSION",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "MELHOR DO EVENTO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "REALISMO COLORIDO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "FECHAMENTO",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
  {
    imgPrize: Min,
    namePrize: "FREE HAND",
    location: "Cangaco Tattoo Ink",
    country: "BRAZIL",
  },
];

function TrophyAwards() {
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
    <div className="TrophyAwards">
      <img src={BG} alt="" className="TrophyAwards_BG" />
      <div className="TrophyAwards_Name">TROPHY AWARDS</div>
      <div className="TrophyAwards_Text">
        Hyper Inkers is more than a brand; it's a canvas of possibilities where
        dreams are meticulously etched onto skin with precision and passion.
        Join our community of ink enthusiasts for an TrophyAwardsic journey that
        goes beyond a mere appointment. It's your opportunity to define and
        proudly wear your uniqueness.
      </div>
      <div ref={sliderRef} className="keen-slider TrophyAwards_Container">
        {Prize.map((prize, key) =>
          currentSlide === key ? (
            <div className="keen-slider__slide TrophyAwards_Container_Active">
              <div className="TrophyAwards_Container_Active_Wrap">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="TrophyAwards_Container_Img_Img_Active"
                />

                <div className="TrophyAwards_Container_Name_Active">
                  {prize.namePrize}
                </div>
                <div className="TrophyAwards_Container_Location_Active">
                  {prize.location}
                </div>
                <div className="TrophyAwards_Container_Country_Active">
                  {prize.country}
                </div>
              </div>
            </div>
          ) : (
            <div className="keen-slider__slide TrophyAwards_Container_Normal">
              <div className="TrophyAwards_Container_Normal_Wrap">
                <img
                  src={prize.imgPrize}
                  alt=""
                  className="TrophyAwards_Container_Img_Img"
                />
              </div>
            </div>
          )
        )}
        {loaded && instanceRef.current && (
          <div className="TrophyAwards_Button_Container">
            <div className="TrophyAwards_Go_Left">
              <IoIosArrowRoundBack
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
            <div className="TrophyAwards_Link">
              {" "}
              {currentSlide + 1}/
              {instanceRef.current.track.details.slides.length}
            </div>

            <div className="TrophyAwards_Go_Right">
              <IoIosArrowRoundForward
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className="TrophyAwarts_PhoneCall_Container">
        <div className="TrophyAwarts_PhoneCall">(210) 997-9737</div>
      </div>
    </div>
  );
}

export default TrophyAwards;
