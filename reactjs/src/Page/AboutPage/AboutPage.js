import React from "react";
import "./AboutPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AboutPage_Welcome from "../../Components/AboutPage/Welcome/AboutPage_Welcome";
import About_AboutPage from "../../Components/AboutPage/About_AboutPage/About_AboutPage";
import Artist_AboutPage from "../../Components/AboutPage/Artist_AboutPage/Artist_AboutPage";
import YOEX from "../../Components/AboutPage/YOEX/YOEX";
import Convention from "../../Components/AboutPage/Convention/Convention";
import Trophies from "../../Components/AboutPage/Trophies/Trophies";
import Prize from "../../Components/AboutPage/Prize/Prize";
import Service_AboutPage from "../../Components/AboutPage/Service_AboutPage/Service_AboutPage";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="AboutPage_Header">
        <Header />
      </div>
      <div className="Welcome_AboutPage">
        <AboutPage_Welcome />
      </div>
      <div className="AboutPage_About">
        <About_AboutPage />
      </div>
      <div className="AboutPage_Artist">
        <Artist_AboutPage />
      </div>
      <div className="AboutPage_YOEX">
        <YOEX />
      </div>
      <div className="AboutPage_Convention">
        <Convention />
      </div>
      <div className="AboutPage_Trophies">
        <Trophies />
      </div>
      <div className="AboutPage_Prize">
        <Prize />
      </div>
      <div className="AboutPage_Service">
        <Service_AboutPage />
      </div>
      <div className="AboutPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
