import React from "react";
import "./MainPage.scss";
import IsMobile from "../../Components/IsMobile/IsMobile";
import Header from "../../Components/Header/Header";

function MainPage() {
  return IsMobile ? (
    <div className="MainPage">
      <div className="MainPage_Header">
        <Header />
      </div>
    </div>
  ) : (
    <div className="MainPage"></div>
  );
}

export default MainPage;
