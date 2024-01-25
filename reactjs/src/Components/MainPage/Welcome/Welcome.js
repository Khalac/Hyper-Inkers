import React from "react";
import "./Welcome.scss";

import { useNavigate } from "react-router-dom";
import BackGroundChange from "../BackGroundChange/BackGroundChange";

function Welcome() {
  const nav = useNavigate();
  function goToAbout() {
    nav("/AboutPage");
  }
  return (
    <div className="Welcome" id="Home">
      <div className="Welcome_BG_Change">
        <BackGroundChange />
      </div>
      <div className="Welcome_PageName">
        <div className="Welcome_PageName_1">Welcome to</div>
        <div className="Welcome_PageName_2">HYPER INKERS</div>
      </div>
      <div className="Welcome_Text">
        Encounter our team of skilled and seasoned artists, ready to transform
        your ideas into reality using state-of-the-art techniques and equipment
        at their best
      </div>
      <div className="Welcome_Button">
        <div className="Welcome_Button_Text" onClick={() => goToAbout()}>
          LEARN MORE
        </div>
      </div>
    </div>
  );
}

export default Welcome;
