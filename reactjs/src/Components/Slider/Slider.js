import "./Slider.scss";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function Slider() {
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
      spacing: 20,
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div
            className={
              currentSlide === 0
                ? `keen-slider__slide number-slide1 main`
                : `keen-slider__slide number-slide1`
            }
          >
            1
          </div>
          <div
            className={
              currentSlide === 1
                ? `keen-slider__slide number-slide1 main`
                : `keen-slider__slide number-slide1`
            }
          >
            2
          </div>
          <div
            className={
              currentSlide === 2
                ? `keen-slider__slide number-slide2 main`
                : `keen-slider__slide number-slide2`
            }
          >
            3
          </div>
          <div
            className={
              currentSlide === 3
                ? `keen-slider__slide number-slide3 main`
                : `keen-slider__slide number-slide3`
            }
          >
            4
          </div>
          <div
            className={
              currentSlide === 4
                ? `keen-slider__slide number-slide4 main`
                : `keen-slider__slide number-slide4`
            }
          >
            5
          </div>
          <div
            className={
              currentSlide === 5
                ? `keen-slider__slide number-slide5 main`
                : `keen-slider__slide number-slide5`
            }
          >
            6
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {currentSlide + 1}/{instanceRef.current.track.details.slides.length}
        </div>
      )}
    </>
  );
}

export default Slider;
