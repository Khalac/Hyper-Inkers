import React from "react";
import "./Aaron.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Aaron from "../../Components/Aaron/Welcome_Aaron/Welcome_Aaron";
import Section1 from "../../Components/Aaron/Section1/Section1";
import Aaron_Porfolio from "../../Components/Aaron/Aaron_Porfolio/Aaron_Porfolio";
import Section2 from "../../Components/Aaron/Section2/Section2";

function Aaron() {
  return (
    <div className="Aaron">
      <div className="Aaron_Bg"></div>
      <div className="Aaron_Header">
        <Header />
      </div>
      <div className="Aaron_Welcome">
        <Welcome_Aaron />
      </div>
      <div className="Aaron_Section1">
        <Section1 />
      </div>
      <div className="Aaron_Porfolio">
        <Aaron_Porfolio />
      </div>
      <div className="Aaron_Section2">
        <Section2 />
      </div>
      <div className="Aaron_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Aaron;
