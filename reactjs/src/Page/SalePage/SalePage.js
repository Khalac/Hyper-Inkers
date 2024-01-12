import React from "react";

import "./SalePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome from "../../Components/SalePage/Welcome/Welcome";
import AYR from "../../Components/SalePage/AYR/AYR";
import Analystic from "../../Components/SalePage/Analystic/Analystic";
import Sale_Artist from "../../Components/SalePage/Artist/Artist";
import TrophyAwards from "../../Components/SalePage/TrophyAwards/TrophyAwards";
import Gallery_SalePage from "../../Components/SalePage/Gallery_SalePage/Gallery_SalePage";
import Pricing_SalePage from "../../Components/SalePage/Pricing_SalePage/Pricing_SalePage";
import Booking_SalePage from "../../Components/SalePage/Booking_SalePage/Booking_SalePage";
import Contact_SalePage from "../../Components/SalePage/Contact_SalePage/Contact_SalePage";

function SalePage() {
  return (
    <div className="SalePage">
      <div className="SalePage_Header">
        <Header />
      </div>
      <div className="SalePage_Welcome">
        <Welcome />
      </div>
      <div className="SalePage_AYR">
        <AYR />
      </div>
      <div className="SalePage_Analystic">
        <Analystic />
      </div>
      <div className="SalePage_Artist">
        <Sale_Artist />
      </div>
      <div className="SalePage_TrophyAwards">
        <TrophyAwards />
      </div>
      <div className="SalePage_Gallery">
        <Gallery_SalePage />
      </div>
      <div className="SalePage_Pricing">
        <Pricing_SalePage />
      </div>
      <div className="SalePage_Booking">
        <Booking_SalePage />
      </div>
      <div className="SalePage_Contact">
        <Contact_SalePage />
      </div>
      <div className="SalePage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default SalePage;
