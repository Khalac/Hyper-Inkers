import React from "react";
import "./MainPage.scss";

import Header from "../../Components/Header/Header";
import Welcome from "../../Components/Welcome/Welcome";
import PrizeList from "../../Components/PrizeList/PrizeList";
import AboutUs from "../../Components/AboutUs/AboutUs";
import WDWH from "../../Components/WDWH/WDWH";
import WWYG from "../../Components/WWYG/WWYG";
import Service from "../../Components/Service/Service";
import Artist from "../../Components/Artist/Artist";

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
    </div>
  );
}

export default MainPage;
