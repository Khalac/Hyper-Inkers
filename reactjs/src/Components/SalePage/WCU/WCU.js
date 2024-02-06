import React, { useEffect, useState } from "react";
import "./WCU.scss";

import { useRef } from "react";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import { isMobile } from "react-device-detect";

function WCU() {
  // const [enter, setEnter] = useState(false);
  // const [i, setI] = useState(0);
  // const [j, setJ] = useState(0);
  // const [k, setK] = useState(0);
  // const [l, setL] = useState(0);
  // const contain = useRef();
  // let timer;
  // const cb = (s) => {
  //   const [entry] = s;
  //   if (entry.isIntersecting) {
  //     clearInterval(timer);
  //     timer = setInterval(() => {
  //       if (i === 10) {
  //         clearInterval(timer);
  //         return;
  //       } else {
  //         setI((prev) => prev + 1);
  //       }
  //     }, 1000);
  //   }
  // };
  // console.log(i);
  // const op = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  // };
  // useEffect(() => {
  //   const ob = new IntersectionObserver(cb, op);
  //   if (contain.current) ob.observe(contain.current);
  //   return () => {
  //     if (contain.current) ob.unobserve(contain.current);
  //   };
  // }, [i, setI]);
  const wcuRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when at least 50% of the target is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Run your code when the target is visible
          console.log("User scrolled to the WCU section!");
          runWordConvention();
          runYearConvention();
          runTrophiesConvention();
          runTattoos();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (wcuRef.current) {
      observer.observe(wcuRef.current);
    }

    return () => {
      if (wcuRef.current) {
        observer.unobserve(wcuRef.current);
      }
    };
  }, [wcuRef]);
  const [yearExp, setYearExp] = useState(0);
  const [wordConventionNumber, setWordConventionNumber] = useState(0);
  const [trohies, setTrophies] = useState(0);
  const [tattoos, setTattoos] = useState(0);
  const runWordConvention = () => {
    if (wordConventionNumber === 0) {
      const targetValue = 15;
      const interval = 50; // Update every 50 milliseconds

      const steps = 1;

      const intervalId = setInterval(() => {
        setWordConventionNumber((prevNumber) => {
          const nextNumber = prevNumber + steps;
          return nextNumber < targetValue
            ? Math.floor(nextNumber)
            : targetValue;
        });
      }, interval);
      return () => {
        clearInterval(intervalId);
      };
    }
  };
  const runYearConvention = () => {
    if (wordConventionNumber === 0) {
      const targetValue = 8;
      const interval = 50; // Update every 50 milliseconds

      const steps = 1;

      const intervalId = setInterval(() => {
        setYearExp((prevNumber) => {
          const nextNumber = prevNumber + steps;
          return nextNumber < targetValue ? nextNumber : targetValue;
        });
      }, interval);
      return () => {
        clearInterval(intervalId);
      };
    }
  };
  const runTrophiesConvention = () => {
    if (wordConventionNumber === 0) {
      const targetValue = 30;
      const interval = 50; // Update every 50 milliseconds

      const steps = 1;

      const intervalId = setInterval(() => {
        setTrophies((prevNumber) => {
          const nextNumber = prevNumber + steps;
          return nextNumber < targetValue ? nextNumber : targetValue;
        });
      }, interval);
      return () => {
        clearInterval(intervalId);
      };
    }
  };
  const runTattoos = () => {
    if (wordConventionNumber === 0) {
      const targetValue = 10000;
      const duration = 10000; // 10 seconds
      const interval = 50; // Update every 50 milliseconds

      const steps = targetValue / (duration / interval);

      const intervalId = setInterval(() => {
        setTattoos((prevNumber) => {
          const nextNumber = prevNumber + steps;
          return nextNumber < targetValue
            ? Math.floor(nextNumber)
            : targetValue;
        });
      }, interval);
      return () => {
        clearInterval(intervalId);
      };
    }
  };

  return (
    <div ref={wcuRef} className="WCU">
      <h2 className="WCU_Name">OUR SKILLED TEAM WITH YEARS EXPERIENCE</h2>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">{yearExp}</div>
          {isMobile ? (
            <div className="WCU_Detail_1_Text">
              <div>Years</div>
              <div>Experience</div>
            </div>
          ) : (
            <div className="WCU_Detail_1_Text">Years Experience</div>
          )}
        </div>
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">{wordConventionNumber}</div>
          <div className="WCU_Detail_1_Text">World Convention</div>
        </div>
      </div>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">{trohies}+</div>
          <div className="WCU_Detail_1_Text">Trophies</div>
        </div>
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">{tattoos}+</div>
          <div className="WCU_Detail_1_Text">Tattoos</div>
        </div>
      </div>
    </div>
  );
}

export default WCU;
