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

  return (
    <div className="WCU">
      <img src={BG} alt="" className="WCU_BG" />
      <div className="WCU_Name">WHY CHOOSE US?</div>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">10</div>
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
          <div className="WCU_Detail_1_Number">15+</div>
          <div className="WCU_Detail_1_Text">World Convention</div>
        </div>
      </div>
      <div className="WCU_Detail">
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">30+</div>
          <div className="WCU_Detail_1_Text">Trophies</div>
        </div>
        <div className="WCU_Detail_1">
          <div className="WCU_Detail_1_Number">10000</div>
          <div className="WCU_Detail_1_Text">Tattoos</div>
        </div>
      </div>
    </div>
  );
}

export default WCU;
