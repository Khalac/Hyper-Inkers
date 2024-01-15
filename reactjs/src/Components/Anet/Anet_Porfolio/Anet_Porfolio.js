import React, { useState } from "react";
import "./Anet_Porfolio.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import img1 from "../../assets/ImgMobile/ImgAnet/1.webp";
import img2 from "../../assets/ImgMobile/ImgAnet/2.webp";
import img3 from "../../assets/ImgMobile/ImgAnet/3.webp";
import img4 from "../../assets/ImgMobile/ImgAnet/4.webp";
import img5 from "../../assets/ImgMobile/ImgAnet/5.webp";
import img6 from "../../assets/ImgMobile/ImgAnet/6.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const imgArr = [
  {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  },
  {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  },
  {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  },
  {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  },
  {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
  },
];

function Anet_Porfolio() {
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
      perView: 1,
    },
  });
  return (
    <div className="Anet_Porfolio">
      <img src={BG} alt="" className="Anet_Porfolio_BG" />
      <div className="Anet_Porfolio_Name">Anet'S PORFOLIO</div>
      <div ref={sliderRef} className="keen-slider Anet_Porfolio_Img_Container">
        {imgArr.map((imgPor, key) => (
          <div className="keen-slider__slide Anet_Porfolio_Img_Container_Gallery">
            <img
              src={imgPor.img1}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_1"
            />
            <img
              src={imgPor.img2}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_2"
            />
            <img
              src={imgPor.img3}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_3"
            />
            <img
              src={imgPor.img4}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_4"
            />
            <img
              src={imgPor.img5}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_5"
            />
            <img
              src={imgPor.img6}
              alt=""
              className="Anet_Porfolio_Img_Container_Gallery_6"
            />
          </div>
        ))}
        {loaded && instanceRef.current && (
          <div className="Anet_Porfolio_Button_Container">
            <div className="Anet_Porfolio_Go_Left">
              <IoIosArrowRoundBack
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
            <div className="Anet_Porfolio_dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "Anet_Porfolio_dot" +
                      (currentSlide === idx ? " active" : "")
                    }
                  ></button>
                );
              })}
            </div>

            <div className="Anet_Porfolio_Go_Right">
              <IoIosArrowRoundForward
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className="Anet_Porfolio_Book_Now">BOOKING NOW</div>
    </div>
  );
}

export default Anet_Porfolio;
