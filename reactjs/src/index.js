import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Page/MainPage/MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exac path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
