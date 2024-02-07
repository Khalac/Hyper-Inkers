import React from "react";
import "./Eriq.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Eriq from "../../Components/Eriq/Welcome_Eriq/Welcome_Eriq";
import Section1 from "../../Components/Eriq/Section1/Section1";
import Eriq_Porfolio from "../../Components/Eriq/Eriq_Porfolio/Eriq_Porfolio";
import Section2 from "../../Components/Eriq/Section2/Section2";

function Eriq() {
  return (
    <div className="Eriq">
      <div className="Eriq_Bg"></div>
      <div className="Eriq_Header">
        <Header />
      </div>
      <div className="Eriq_Welcome">
        <Welcome_Eriq />
      </div>
      <div className="Eriq_Section1">
        <Section1 />
      </div>
      <div className="Eriq_Porfolio">
        <Eriq_Porfolio />
      </div>
      <div className="Eriq_Section2">
        <Section2 />
      </div>
      <div className="Eriq_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Eriq;
