import React from "react";
import "./Booking.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";
import { useState } from "react";

function Booking() {
  const [name, setName] = useState();
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
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Your name"
          onChange={(values) => setName(values.target.value)}
        />
      </div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Phone number"
          onChange={(values) => setName(values.target.value)}
        />
      </div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Email address"
          onChange={(values) => setName(values.target.value)}
        />
      </div>
      <div className="Booking_Form">
        <input
          className="Booking_Form_Value"
          placeholder="Description"
          onChange={(values) => setName(values.target.value)}
        />
      </div>
      <div className="Booking_Button">BOOKING NOW</div>
    </div>
  );
}

export default Booking;
