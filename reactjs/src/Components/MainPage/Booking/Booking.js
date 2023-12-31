import React from "react";
import "./Booking.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Booking() {
  return (
    <div className="Booking">
      <img src={BG} alt="" className="Booking_BG" />
      <div className="Booking_Name">
        <div className="Booking_Name1">READY TO GET</div>
        <div className="Booking_Name2">SUPER HYPER TATTOO</div>
      </div>
      <div className="Booking_Text">
        Please tell us about your ideas, style, size, color, placement and your
        budget
      </div>
      <div className="Booking_Form"></div>
    </div>
  );
}

export default Booking;
