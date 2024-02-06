import React from "react";
import "./Welcome.scss";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import BackGroundChange from "../BackGroundChange/BackGroundChange";

function Welcome() {
  const nav = useNavigate();
  function goToAbout() {
    nav("/AboutPage");
  }
  return isMobile ? (
    <div className="Welcome" id="Home">
      <div className="Welcome_BG_Change">
        <BackGroundChange />
      </div>
      <div className="Welcome_PageName">
        <div className="Welcome_PageName_1">Welcome to</div>
        <div className="Welcome_PageName_2">HYPER INKERS</div>
      </div>
      <div
        className="Welcome_Text"
        style={{
          marginTop: 50,
          marginBottom: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        Are you looking for the best tattoo studio in San Antonio?
        <h3 style={{ fontFamily: "CompagnonMedium", fontSize: "2.5vw" }}>
          Look no further than Hyper Inkers. Our award-winning artist has
          competed in over 10 different countries around the world
        </h3>
      </div>
      <div className="Welcome_Button">
        <div className="Welcome_Button_Text" onClick={() => goToAbout()}>
          LEARN MORE
        </div>
      </div>
    </div>
  ) : (
    <div className="Welcome" id="Home">
      <div className="Welcome_BG_Change">
        <BackGroundChange />
      </div>
      <div
        style={{
          marginBottom: "auto",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 200,
        }}
      >
        <div className="Welcome_PageName_1">Welcome to</div>
        <h1 className="Welcome_PageName_2">HYPER INKERS TATTOO STUDIO</h1>
        <div
          className="Welcome_Text"
          style={{
            marginTop: 50,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column",
          }}
        >
          Are you looking for the best tattoo studio in San Antonio?
          <h3 style={{ fontFamily: "CompagnonMedium", fontSize: 25 }}>
            Look no further than Hyper Inkers. Our award-winning artist has
            competed in over 10 different countries around the world
          </h3>
        </div>
        <div className="Welcome_Button">
          <div className="Welcome_Button_Text" onClick={() => goToAbout()}>
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
