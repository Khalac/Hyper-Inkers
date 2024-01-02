import React from "react";

import "./SalePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function SalePage() {
  return (
    <div className="SalePage">
      <div className="SalePage_Header">
        <Header />
      </div>
      <div className="SalePage_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default SalePage;
