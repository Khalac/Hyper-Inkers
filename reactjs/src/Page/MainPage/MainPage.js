import React from "react";
import "./MainPage.scss";

import IsMobile from "../../Components/IsMobile/IsMobile";
import Header from "../../Components/Header/Header";
import Welcome from "../../Components/Welcome/Welcome";
import PrizeList from "../../Components/PrizeList/PrizeList";
import Slider from "../../Components/Slider/Slider";
import AboutUs from "../../Components/AboutUs/AboutUs";
import WDWH from "../../Components/WDWH/WDWH";

function MainPage() {
  console.log(IsMobile);
  return IsMobile.isMobile ? (
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
    </div>
  ) : (
    <div className="MainPage"></div>
  );
}

export default MainPage;
