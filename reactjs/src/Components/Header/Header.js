import React from "react";
import "./Header.scss";
import LogoHI from "../assets/Logo/LogoHI.png";
import BGHeader from "../assets/ImgMobile/Background/header.png";

import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="Header">
      <img src={LogoHI} alt="logo" className="logoHeader" loading="lazy" />
      <img src={BGHeader} alt="" className="BGHeader" loading="lazy" />
      <div className="Pages">
        <HashLink
          className="Page"
          to="/#Home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="Page"
          to="/#Artist"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Artist
        </HashLink>
        <HashLink
          className="Page"
          to="/#Contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </HashLink>
        <HashLink
          className="Page"
          to="/#FAQ"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          FAQ
        </HashLink>
      </div>
    </div>
  );
}

export default Header;
