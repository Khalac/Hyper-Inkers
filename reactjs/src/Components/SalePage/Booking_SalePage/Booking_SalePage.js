import React from "react";
import "./Booking_SalePage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function Booking_SalePage() {
  return (
    <div className="Booking_SalePage">
      <div className="Booking_SalePage_Name">
        <div className="Booking_SalePage_Name1">If you're interested</div>
        <div className="Booking_SalePage_Name2">Don't hesitate to book now</div>
      </div>
      <div className="Booking_SalePage_Form">
        <input className="Booking_SalePage_Value" placeholder="Your name" />
      </div>
      <div className="Booking_SalePage_Form">
        <input className="Booking_SalePage_Value" placeholder="Email" />
      </div>
      <div className="Booking_SalePage_Form">
        <input className="Booking_SalePage_Value" placeholder="Phone number" />
      </div>
      <div className="Booking_SalePage_Form">
        <input
          className="Booking_SalePage_Value"
          placeholder="DOB (dd/mm/yy)"
        />
      </div>
      <div className="Booking_SalePage_Form">
        <input className="Booking_SalePage_Value" placeholder="Tattoo size" />
      </div>
      <div className="Booking_SalePage_Form">
        <input
          className="Booking_SalePage_Value"
          placeholder="Tatto placement"
        />
      </div>
      <div className="Booking_SalePage_Form">
        <input className="Booking_SalePage_Value" placeholder="Note" />
      </div>
      <div className="Booking_SalePage_Button">SUBMIT</div>
    </div>
  );
}

export default Booking_SalePage;
