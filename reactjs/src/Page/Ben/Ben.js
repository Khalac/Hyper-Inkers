import React from "react";
import "./Ben.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Ben from "../../Components/Ben/Welcome_Ben/Welcome_Ben";
import Section1 from "../../Components/Ben/Section1/Section1";
import Ben_Porfolio from "../../Components/Ben/Ben_Porfolio/Ben_Porfolio";
import Section2 from "../../Components/Ben/Section2/Section2";

function Ben() {
  return (
    <div className="Ben">
      <div className="Ben_Bg"></div>
      <div className="Ben_Header">
        <Header />
      </div>
      <div className="Ben_Welcome">
        <Welcome_Ben />
      </div>
      <div className="Ben_Section1">
        <Section1 />
      </div>
      <div className="Ben_Porfolio">
        <Ben_Porfolio />
      </div>
      <div className="Ben_Section2">
        <Section2 />
      </div>
      <div className="Ben_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Ben;
