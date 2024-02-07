import React from "react";
import "./Anet.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome_Anet from "../../Components/Anet/Welcome_Anet/Welcome_Anet";
import Section1 from "../../Components/Anet/Section1/Section1";
import Anet_Porfolio from "../../Components/Anet/Anet_Porfolio/Anet_Porfolio";
import Section2 from "../../Components/Anet/Section2/Section2";

function Anet() {
  return (
    <div className="Anet">
      <div className="Anet_Bg"></div>
      <div className="Anet_Header">
        <Header />
      </div>
      <div className="Anet_Welcome">
        <Welcome_Anet />
      </div>
      <div className="Anet_Section1">
        <Section1 />
      </div>
      <div className="Anet_Porfolio">
        <Anet_Porfolio />
      </div>
      <div className="Anet_Section2">
        <Section2 />
      </div>
      <div className="Anet_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Anet;
