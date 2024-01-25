import React, { useRef } from "react";

import "./SalePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome from "../../Components/SalePage/Welcome/Welcome";

import Booking_SalePage from "../../Components/SalePage/Booking_SalePage/Booking_SalePage";
import Break from "../../Components/SalePage/Break1/Break";
import OpenTime from "../../Components/SalePage/OpenTime/OpenTime";
import WCU from "../../Components/SalePage/WCU/WCU";
import Trophy from "../../Components/SalePage/Trophy/Trophy";
import Service_Salepage from "../../Components/SalePage/Service_Salepage/Service_Salepage";
import Artist_Salepage from "../../Components/SalePage/Artist_Salepage/Artist_Salepage";
import Gallery_SalePage from "../../Components/SalePage/Gallery_SalePage/Gallery_SalePage";
import Contact_SalePage from "../../Components/SalePage/Contact_SalePage/Contact_SalePage";

import call from "../../Components/assets/ImgMobile/ImgSalePage/call.webp";

import { HashLink } from "react-router-hash-link";

function SalePage() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="SalePage">
      <div className="SalePage_Consultant">
        <div className="SalePage_Consultant_Text">Free Consultation</div>
        <img src={call} alt="logo" className="SalePage_Consultant_Logo" />
        <div className="SalePage_Consultant_Text">(210) 997-9737</div>
      </div>
      <div className="SalePage_Header">
        <Header />
      </div>
      <div className="SalePage_Welcome">
        <Welcome />
      </div>
      <div className="SalePage_Break">
        <Break />
      </div>

      <div className="SalePage_OpenTime">
        <OpenTime />
      </div>

      <div className="SalePage_WCU">
        <WCU />
      </div>

      <div className="SalePage_Trohpy">
        <Trophy />
      </div>

      <div className="SalePage_Service">
        <Service_Salepage />
      </div>

      <div className="SalePage_Artist" id="Galleryhh">
        <Artist_Salepage />
      </div>
      <div className="SalePage_Gallery" ref={ref}>
        <Gallery_SalePage />
      </div>

      <div className="SalePage_Contact">
        <Contact_SalePage />
      </div>

      <div className="SalePage_Booking">
        <Booking_SalePage />
      </div>

      <div className="SalePage_Footer">
        <Footer />
      </div>
      <div className="SalePage_Check" onClick={() => handleClick()}>
        Check Our Porfolio
      </div>
    </div>
  );
}

export default SalePage;
