import React from "react";
import "./Contact_SalePage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

import mail from "../../assets/Logo/mail.webp";
import location from "../../assets/Logo/location.webp";
import phone from "../../assets/Logo/phone.webp";
import time from "../../assets/Logo/time.webp";

import Paypal from "../../assets/ImgMobile/ImgSalePage/Paypal.webp";
import Master from "../../assets/ImgMobile/ImgSalePage/Master.webp";
import Cash from "../../assets/ImgMobile/ImgSalePage/Cash.webp";
import Visa from "../../assets/ImgMobile/ImgSalePage/Visa.webp";

function Contact_SalePage() {
  return (
    <div className="Contact_SalePage">
      <img src={BG} alt="" className="Contact_SalePage_BG" />
      <div className="Contact_SalePage_Name">CONTACT WITH US</div>
      <div className="Contact_SalePage_Infor">
        <div className="Contact_SalePage_Infor_Left">
          <div className="Contact_SalePage_Infor_Left_Email">
            <img
              src={mail}
              alt=""
              className="Contact_SalePage_Infor_Left_Email_Logo"
            />
            <div className="Contact_SalePage_Infor_Left_Email_Text">
              hyperinkers@gmail.com
            </div>
          </div>
          <div className="Contact_SalePage_Infor_Left_Location">
            <img
              src={location}
              alt=""
              className="Contact_SalePage_Infor_Left_Location_Logo"
            />
            <div className="Contact_SalePage_Infor_Left_Location_Text">
              8045 Callaghan Rd, San Antonio, TX 78230
            </div>
          </div>
        </div>
        <div className="Contact_SalePage_Infor_Right">
          <div className="Contact_SalePage_Infor_Right_Phone">
            <img
              src={phone}
              alt=""
              className="Contact_SalePage_Infor_Right_Phone_Logo"
            />
            <div className="Contact_SalePage_Infor_Right_Phone_Text">
              (210) 997-9737
            </div>
          </div>
          <div className="Contact_SalePage_Infor_Right_Time">
            <img
              src={time}
              alt=""
              className="Contact_SalePage_Infor_Right_Time_Logo"
            />
            <div className="Contact_SalePage_Infor_Right_Time_Text">
              Mon - Sun . 9am- 2am
            </div>
          </div>
        </div>
      </div>
      <div className="Contact_SalePage_GoogleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.1129626908964!2d-98.55396912388136!3d29.51306637519554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10.1!3m3!1m2!1s0x865c5e1fe7a633f3%3A0x1fea7b1bc20e4986!2s8045%20Callaghan%20Rd%2C%20San%20Antonio%2C%20TX%2078230%2C%20USA!5e0!3m2!1sen!2s!4v1703746573174!5m2!1sen!2s"
          className="GoogleMap"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="Contact_SalePage_Phone">(210) 997-9737</div>
      <div className="Contact_SalePage_Direction">GET DIRECTIONS</div>
      <div className="Contact_SalePage_Payment_Text">
        We Accept All Major Credit Card
      </div>
      <div className="Contact_SalePage_Payment_Img">
        <img src={Paypal} alt="" className="Contact_SalePage_Payment_Img_Img" />
        <img src={Master} alt="" className="Contact_SalePage_Payment_Img_Img" />
        <img src={Cash} alt="" className="Contact_SalePage_Payment_Img_Img" />
        <img src={Visa} alt="" className="Contact_SalePage_Payment_Img_Img" />
      </div>
    </div>
  );
}

export default Contact_SalePage;
