import React from "react";
import "./Footer.scss";

import BG from "../assets/ImgMobile/Background/MainBG.png";

import logo from "../assets/Logo/LogoHI.png";

import mail from "../assets/Logo/FooterMail.webp";
import insta from "../assets/Logo/FooterInsta.webp";
import FB from "../assets/Logo/FooterFB.webp";
import phone from "../assets/Logo/FooterPhone.webp";

import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="Footer">
      {/* <img src={BG} alt="" className="Footer_BG" /> */}
      <img src={logo} alt="" className="Footer_Logo" />
      <div className="Footer_Link">
        <HashLink
          className="Footer_Link_Link"
          to="/MainPage/#Home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="Footer_Link_Link"
          to="/MainPage/#Artist"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Artist
        </HashLink>
        <HashLink
          className="Footer_Link_Link"
          to="/MainPage/#Contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </HashLink>
        <HashLink
          className="Footer_Link_Link"
          to="/MainPage/#FAQ"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          FAQ
        </HashLink>
      </div>
      <div className="Footer_Icon">
        <img alt="" src={mail} className="Footer_Icon_Icon" />
        <img
          alt=""
          src={insta}
          className="Footer_Icon_Icon"
          onClick={() =>
            window.open(
              "https://www.instagram.com/hyperinkers/",
              "_blank",
              "rel=noopener noreferrer"
            )
          }
        />
        <img
          alt=""
          src={FB}
          className="Footer_Icon_Icon"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=61551762555399",
              "_blank",
              "rel=noopener noreferrer"
            )
          }
        />
        <img alt="" src={phone} className="Footer_Icon_Icon" />
      </div>
      <div className="Footer_Text">Since 2023</div>
    </div>
  );
}

export default Footer;
