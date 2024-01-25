import React from "react";
import "./MainPage.scss";

import Header from "../../Components/Header/Header";
import Welcome from "../../Components/MainPage/Welcome/Welcome";
import PrizeList from "../../Components/MainPage/PrizeList/PrizeList";
import AboutUs from "../../Components/MainPage/AboutUs/AboutUs";
import WDWH from "../../Components/MainPage/WDWH/WDWH";
import WWYG from "../../Components/MainPage/WWYG/WWYG";
import Service from "../../Components/MainPage/Service/Service";
import Artist from "../../Components/MainPage/Artist/Artist";
import Gallery from "../../Components/MainPage/Gallery/Gallery";
import Pricing from "../../Components/MainPage/Pricing/Pricing";
import FAQ from "../../Components/MainPage/FAQ/FAQ";
import Contact from "../../Components/MainPage/Contact/Contact";
import Booking from "../../Components/MainPage/Booking/Booking";
import Footer from "../../Components/Footer/Footer";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage_Header">
        <Header />
      </div>
      <div className="MainPage_Welcome">
        <Welcome />
      </div>
      <div className="MainPage_Prize">
        <PrizeList />
      </div>

      <div className="MainPage_AboutUs">
        <AboutUs />
      </div>
      <div className="MainPage_WDWH">
        <WDWH />
      </div>

      <div className="MainPage_WWYG">
        <WWYG />
      </div>

      <div className="MainPage_Service">
        <Service />
      </div>
      <div className="MainPage_Artist">
        <Artist />
      </div>
      <div className="MainPage_Gallery">
        <Gallery />
      </div>

      <div className="MainPage_Pricing">
        <Pricing />
      </div>

      <div className="MainPage_FAQ">
        <FAQ />
      </div>
      <div className="MainPage_Contact">
        <Contact />
      </div>
      <div className="MainPage_Booking">
        <Booking />
      </div>
      <div className="MainPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
