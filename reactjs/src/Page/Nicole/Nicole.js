import React from "react";
import "./Nicole.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Nicole from "../../Components/Nicole/Welcome_Nicole/Welcome_Nicole";
import Section1 from "../../Components/Nicole/Section1/Section1";
import Nicole_Porfolio from "../../Components/Nicole/Nicole_Porfolio/Nicole_Porfolio";
import Section2 from "../../Components/Nicole/Section2/Section2";

function Nicole() {
  return (
    <div className="Nicole">
      <div className="Nicole_Bg"></div>
      <div className="Nicole_Header">
        <Header />
      </div>
      <div className="Nicole_Welcome">
        <Welcome_Nicole />
      </div>
      <div className="Nicole_Section1">
        <Section1 />
      </div>
      <div className="Nicole_Porfolio">
        <Nicole_Porfolio />
      </div>
      <div className="Nicole_Section2">
        <Section2 />
      </div>
      <div className="Nicole_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Nicole;
