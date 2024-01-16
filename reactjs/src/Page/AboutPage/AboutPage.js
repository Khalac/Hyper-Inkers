import React from "react";
import "./AboutPage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AboutPage_Welcome from "../../Components/AboutPage/Welcome/AboutPage_Welcome";
import About_AboutPage from "../../Components/AboutPage/About_AboutPage/About_AboutPage";
import Artist_AboutPage from "../../Components/AboutPage/Artist_AboutPage/Artist_AboutPage";

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
      <div className="AboutPage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
