import React from "react";
import "./Header.scss";
import LogoHI from "../assets/Logo/LogoHI.png";
import BGHeader from "../assets/ImgMobile/Background/header.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

function Header() {
  return ( isMobile ? ( <div className="Header">
    <Link to="/" className="linkHeader">
      <img src={LogoHI} alt="logo" className="logoHeader" loading="lazy" />
    </Link>
  {/* <img src={BGHeader} alt="" className="BGHeader" loading="lazy" /> */}
  <div className="Pages">
    <HashLink
      className="Page"
      to="/MainPage/#Home"
      scroll={(el) =>
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    >
      Home
    </HashLink>
    <HashLink
      className="Page"
      to="/MainPage/#Artist"
      scroll={(el) =>
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    >
      Artist
    </HashLink>
    <HashLink
      className="Page"
      to="/MainPage/#Contact"
      scroll={(el) =>
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    >
      Contact
    </HashLink>
    <HashLink
      className="Page"
      to="/MainPage/#FAQ"
      scroll={(el) =>
        el.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    >
      FAQ
    </HashLink>
  </div>
</div>) :(
    <div className="Header">
     <Link to="/">
      <img src={LogoHI} alt="logo" className="logoHeader" loading="lazy" />
    </Link>
      {/* <img src={BGHeader} alt="" className="BGHeader" loading="lazy" /> */}
      <div className="Pages">
        <HashLink
          className="Page"
          to="/MainPage/#Home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="Page"
          to="/MainPage/#Artist"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Artist
        </HashLink>
        <HashLink
          className="Page"
          to="/MainPage/#Contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </HashLink>
        <HashLink
          className="Page"
          to="/MainPage/#FAQ"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          FAQ
        </HashLink>
      </div>
    </div>
  )
  );
}

export default Header;
