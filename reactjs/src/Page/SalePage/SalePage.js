import React from "react";

import "./SalePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Welcome from "../../Components/SalePage/Welcome/Welcome";
import AYR from "../../Components/SalePage/AYR/AYR";

function SalePage() {
  return (
    <div className="SalePage">
      <div className="SalePage_Header">
        <Header />
      </div>
      <div className="SalePage_Welcome">
        <Welcome />
      </div>
      <div className="SalePage_AYR">
        <AYR />
      </div>
      <div className="SalePage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default SalePage;
