import React from "react";
import "./Minh.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Minh from "../../Components/Minh/Welcome_Minh/Welcome_Minh";
import Section1 from "../../Components/Minh/Section1/Section1";
import Minh_Porfolio from "../../Components/Minh/Minh_Porfolio/Minh_Porfolio";
import Section2 from "../../Components/Minh/Section2/Section2";

function Minh() {
  return (
    <div className="Minh">
      <div className="Minh_Bg"></div>
      <div className="Minh_Header">
        <Header />
      </div>
      <div className="Minh_Welcome">
        <Welcome_Minh />
      </div>
      <div className="Minh_Section1">
        <Section1 />
      </div>
      <div className="Minh_Porfolio">
        <Minh_Porfolio />
      </div>
      <div className="Minh_Section2">
        <Section2 />
      </div>
      <div className="Minh_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Minh;
